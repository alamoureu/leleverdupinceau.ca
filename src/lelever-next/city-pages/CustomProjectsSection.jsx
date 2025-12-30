import React, { useState, useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  useBreakpointValue,
  HStack,
  IconButton,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import appContext from '../../AppProvider';

export default function CustomProjectsSection({
  title,
  subtitle,
  projects = [],
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [imageErrors, setImageErrors] = useState({});

  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const handleImageChange = (projectId, newIndex) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: newIndex,
    }));
    // Set loading state for new image
    setImageLoading((prev) => ({
      ...prev,
      [`${projectId}-${newIndex}`]: true,
    }));
  };

  const getCurrentImageIndex = (projectId) => {
    const index = currentImageIndex[projectId] || 0;
    return index;
  };

  const goToNextImage = (projectId, totalImages) => {
    const current = getCurrentImageIndex(projectId);
    const next = (current + 1) % totalImages;
    handleImageChange(projectId, next);
  };

  const goToPreviousImage = (projectId, totalImages) => {
    const current = getCurrentImageIndex(projectId);
    const prev = (current - 1 + totalImages) % totalImages;
    handleImageChange(projectId, prev);
  };

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={6}>
          <Stack spacing={2} textAlign='left'>
            {title && (
              <Heading
                as='h2'
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
                {subtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid columns={columns} spacing={{ base: 4, md: 5, lg: 6 }}>
            {projects.map((project) => {
              const currentIndex = getCurrentImageIndex(project.id);
              // Filter out null, undefined, and empty string values
              const rawImages =
                project.images || [project.image].filter(Boolean);
              const images = rawImages.filter(
                (img) => img != null && img !== ''
              );
              const imageAlt = project.imageAlt || project.title || '';

              return (
                <Box
                  key={project.id}
                  bg='white'
                  borderRadius='2xl'
                  overflow='hidden'
                  border='1px solid'
                  borderColor='gray.200'
                  h='100%'
                  display='flex'
                  flexDirection='column'
                >
                  <Box
                    position='relative'
                    overflow='hidden'
                    bg='gray.200'
                    border='1px solid'
                    borderColor='gray.300'
                    borderStyle={images.length > 0 ? 'solid' : 'dashed'}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    minH='200px'
                    sx={{
                      aspectRatio: '16/9',
                      '@supports not (aspect-ratio: 16/9)': {
                        '&::before': {
                          content: '""',
                          display: 'block',
                          paddingTop: '56.25%', // 16:9 ratio
                        },
                      },
                    }}
                  >
                    {images.length === 0 && (
                      <Text color='gray.400' fontSize='sm' fontWeight='medium'>
                        {isFr ? 'Image manquante' : 'Missing image'}
                      </Text>
                    )}
                    {images.length > 0 && (
                      <>
                        {imageLoading[`${project.id}-${currentIndex}`] && (
                          <Skeleton
                            position='absolute'
                            top={0}
                            left={0}
                            w='100%'
                            h='100%'
                            zIndex={1}
                          />
                        )}
                        {imageErrors[`${project.id}-${currentIndex}`] ? (
                          <Box
                            w='100%'
                            h='100%'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            bg='gray.100'
                            position='absolute'
                            top={0}
                            left={0}
                          >
                            <Text
                              color='gray.400'
                              fontSize='sm'
                              fontWeight='medium'
                            >
                              {isFr
                                ? 'Image non disponible'
                                : 'Image unavailable'}
                            </Text>
                          </Box>
                        ) : (
                          <AnimatePresence initial={false} mode='wait'>
                            <motion.div
                              key={currentIndex}
                              variants={fadeVariants}
                              initial='enter'
                              animate='center'
                              exit='exit'
                              transition={{
                                opacity: { duration: 0.4, ease: 'easeInOut' },
                              }}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                              }}
                            >
                              <Image
                                src={images[currentIndex]}
                                alt={imageAlt}
                                w='100%'
                                h='100%'
                                loading='lazy'
                                onLoad={() => {
                                  setImageLoading((prev) => ({
                                    ...prev,
                                    [`${project.id}-${currentIndex}`]: false,
                                  }));
                                }}
                                onError={() => {
                                  setImageLoading((prev) => ({
                                    ...prev,
                                    [`${project.id}-${currentIndex}`]: false,
                                  }));
                                  setImageErrors((prev) => ({
                                    ...prev,
                                    [`${project.id}-${currentIndex}`]: true,
                                  }));
                                }}
                                sx={{
                                  objectFit: 'cover',
                                  objectPosition: 'center',
                                  display: 'block',
                                }}
                              />
                            </motion.div>
                          </AnimatePresence>
                        )}
                        {images.length > 1 && (
                          <>
                            <IconButton
                              aria-label={
                                isFr ? 'Image précédente' : 'Previous image'
                              }
                              icon={<ChevronLeftIcon />}
                              position='absolute'
                              left={2}
                              top='50%'
                              transform='translateY(-50%)'
                              bg='white'
                              border='1px solid'
                              borderColor='gray.200'
                              color='#014CC4'
                              borderRadius='full'
                              size='sm'
                              zIndex={2}
                              _hover={{ bg: 'gray.50', borderColor: '#014CC4' }}
                              onClick={() =>
                                goToPreviousImage(project.id, images.length)
                              }
                            />
                            <IconButton
                              aria-label={
                                isFr ? 'Image suivante' : 'Next image'
                              }
                              icon={<ChevronRightIcon />}
                              position='absolute'
                              right={2}
                              top='50%'
                              transform='translateY(-50%)'
                              bg='white'
                              border='1px solid'
                              borderColor='gray.200'
                              color='#014CC4'
                              borderRadius='full'
                              size='sm'
                              zIndex={2}
                              _hover={{ bg: 'gray.50', borderColor: '#014CC4' }}
                              onClick={() =>
                                goToNextImage(project.id, images.length)
                              }
                            />
                            <HStack
                              position='absolute'
                              bottom={3}
                              left='50%'
                              transform='translateX(-50%)'
                              spacing={2}
                              zIndex={2}
                            >
                              {images.map((_, index) => (
                                <Box
                                  key={index}
                                  w={currentIndex === index ? '8px' : '6px'}
                                  h={currentIndex === index ? '8px' : '6px'}
                                  borderRadius='full'
                                  bg={
                                    currentIndex === index
                                      ? 'white'
                                      : 'rgba(255, 255, 255, 0.5)'
                                  }
                                  cursor='pointer'
                                  transition='all 0.2s'
                                  onClick={() =>
                                    handleImageChange(project.id, index)
                                  }
                                  _hover={{ bg: 'white' }}
                                />
                              ))}
                            </HStack>
                          </>
                        )}
                      </>
                    )}
                  </Box>

                  <Stack p={5} spacing={3} flex={1}>
                    {project.title && (
                      <Text
                        fontWeight='bold'
                        color='gray.800'
                        fontSize='lg'
                        lineHeight='1.4'
                      >
                        {project.title}
                      </Text>
                    )}
                    {project.description && (
                      <Text
                        fontSize='sm'
                        color='gray.600'
                        lineHeight='1.6'
                        noOfLines={3}
                      >
                        {project.description}
                      </Text>
                    )}
                  </Stack>
                </Box>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
