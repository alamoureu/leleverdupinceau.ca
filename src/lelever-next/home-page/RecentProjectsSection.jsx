import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import peintureResidentielle from '../images/peinture_residentielle.jpg';
import projetResidentielle from '../images/projet_residentielle.jpg';
import projetResidentielle2 from '../images/projet_residentielle_2.jpg';
import projetCommercial from '../images/projet_commercial.jpg';
import projetCommercial2 from '../images/projet_commercial_2.jpg';
import projetExterieur from '../images/projet_exterieur.jpg';

export default function RecentProjectsSection({ pageContext = '' }) {
  const { t, currentLang } = useTranslation();

  const getAltText = (title, context) => {
    const baseAlt = title;
    if (context) {
      return `${baseAlt} - ${context}`;
    }
    return baseAlt;
  };

  const projects = [
    {
      id: 1,
      images: [peintureResidentielle],
      title: t.projectResidential,
      description: t.projectResidentialDesc1,
    },
    {
      id: 2,
      images: [projetCommercial],
      title: t.projectCommercial,
      description: t.projectCommercialDesc1,
    },
    {
      id: 3,
      images: [projetResidentielle],
      title: t.projectInterior,
      description: t.projectInteriorDesc,
    },
    {
      id: 4,
      images: [projetExterieur],
      title: t.projectExterior,
      description: t.projectExteriorDesc,
    },
    {
      id: 5,
      images: [projetResidentielle2],
      title: t.projectResidential,
      description: t.projectResidentialDesc2,
    },
    {
      id: 6,
      images: [projetCommercial2],
      title: t.projectCommercial,
      description: t.projectCommercialDesc2,
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const [currentImageIndex, setCurrentImageIndex] = useState({});

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

  return (
    <Box py={{ base: 12, md: 16 }} bg='white'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={6}>
          <Stack spacing={2} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.recentProjectsTitle}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
              {t.recentProjectsSubtitle}
            </Text>
          </Stack>

          <SimpleGrid columns={columns} spacing={{ base: 4, md: 5, lg: 6 }}>
            {projects.map((project) => {
              const currentIndex = getCurrentImageIndex(project.id);
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
                    h='200px'
                    bg='gray.200'
                    border='1px solid'
                    borderColor='gray.300'
                    borderStyle={
                      project.images && project.images.length > 0
                        ? 'solid'
                        : 'dashed'
                    }
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    {(!project.images || project.images.length === 0) && (
                      <Text color='gray.400' fontSize='sm' fontWeight='medium'>
                        {currentLang === 'fr'
                          ? 'Image à ajouter'
                          : 'Image to add'}
                      </Text>
                    )}
                    {project.images && project.images.length > 0 && (
                      <Box w="100%" h="100%" position="relative">
                        <AnimatePresence initial={false}>
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
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <Image
                              src={project.images[currentIndex]}
                              alt={getAltText(project.title, pageContext)}
                              w='100%'
                              h='100%'
                              objectFit='cover'
                            />
                          </motion.div>
                        </AnimatePresence>
                        {project.images.length > 1 && (
                          <>
                            <IconButton
                              aria-label={t.previousImage}
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
                                goToPreviousImage(
                                  project.id,
                                  project.images.length
                                )
                              }
                            />
                            <IconButton
                              aria-label={t.nextImage}
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
                                goToNextImage(project.id, project.images.length)
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
                              {project.images.map((_, index) => (
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
                      </Box>
                    )}
                  </Box>

                  <Stack p={5} spacing={3} flex={1}>
                    <Text
                      fontWeight='bold'
                      color='gray.800'
                      fontSize='lg'
                      lineHeight='1.4'
                    >
                      {project.title}
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.600'
                      lineHeight='1.6'
                      noOfLines={3}
                    >
                      {project.description}
                    </Text>
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
