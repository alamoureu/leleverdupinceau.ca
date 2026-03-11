import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Icon,
  IconButton,
  HStack,
  Image,
} from '@chakra-ui/react';
import {
  ArrowForwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaStar } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import { useTranslation } from '../i18n';
import appContext from '../../AppProvider';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReviewsSection({
  hideTitle = false,
  hideButton = false,
  title,
  subtitle,
  reviewsOverride,
}) {
  const { t } = useTranslation();
  const { currentLang } = useContext(appContext);

  // All reviews from drawer and website
  const defaultReviews = [
    {
      name: 'Zoé Boudreau',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Je suis très ravie du service reçu\u00A0! Équipe compétente, rapide et courtoise. Je recommande chaleureusement\u00A0!'
          : 'I am very delighted with the service received! Competent, fast and courteous team. I warmly recommend!',
    },
    {
      name: 'Michiel Schrey',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Efficaces, sympathiques, très bonnes communications, prix intéressants… Hautement recommandé\u00A0!'
          : 'Efficient, friendly, very good communications, great prices… Highly recommended!',
    },
    {
      name: 'Marie Lambert',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Nous sommes très heureux de notre expérience avec Le Lever Du Pinceau. Leur travail minutieux et leur grande courtoisie en font une référence pour quiconque recherche une main-d'œuvre fiable et efficace."
          : 'We are very happy with our experience with Le Lever Du Pinceau. Their meticulous work and great courtesy make them a reference for anyone looking for reliable and efficient labor.',
    },
    {
      name: 'Chantal Baril',
      time: currentLang === 'fr' ? 'Il y a 2 mois' : '2 months ago',
      content:
        currentLang === 'fr'
          ? "Je suis très ravie des travaux qui ont été effectués à notre résidence. J'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes\u00A0; le souci du détail est apparent\u00A0!"
          : 'I am very delighted with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!',
    },
    {
      name: 'Frédéric Choinière',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "J'ai fait appel à l'équipe pour des toits difficiles d'accès. Ils ont fait un travail minutieux, sécuritaire et à l'écoute\u00A0!"
          : 'I retained them for metal roofs difficult to access. They did the work with great care, safety, and listened to our concerns!',
    },
    {
      name: 'Maureen Beech',
      time: currentLang === 'fr' ? 'Il y a 6 jours' : '6 days ago',
      content:
        currentLang === 'fr'
          ? "Très ravie des résultats\u00A0! Équipe professionnelle et agréable. Projets livrés dans les délais et lieux laissés impeccables."
          : 'Very delighted with the results! Professional and pleasant team. Projects completed on time and the site was left clean and orderly.',
    },
    {
      name: 'A Mayer',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Merci à l'équipe de Lever du Pinceau\u00A0! Je les ai engagés pour peindre ma chambre et ils ont dépassé mes attentes. Travailleurs polis, attention aux détails et service client exceptionnel\u00A0! Je recommande vivement\u00A0!"
          : 'Thanks to the Lever du Pinceau team! I hired them to paint my bedroom and they exceeded my expectations. Polite workers, attention to detail and outstanding customer service! I highly recommend!',
    },
    {
      name: 'V Gagnon',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Travail impeccable\u00A0! Louis est professionnel, sympathique et créatif\u00A0! Travail soigné et rapide. Je recommande vivement et j'utiliserai leurs services pour des travaux futurs\u00A0!"
          : 'Impeccable work! Louis is professional, friendly and creative! Neat and fast work. I highly recommend and will use their services for future work!',
    },
    {
      name: 'Coralie Beauchamp',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Excellente expérience avec le levé du pinceau\u00A0! Professionnels, respectueux des lieux, honnêtes et travail parfait. Je recommande vivement cette équipe\u00A0!'
          : 'Great experience with brush lifting! Professional, respectful of the place, honest and perfect work. I highly recommend this team!',
    },
  ];

  const allReviews = reviewsOverride || defaultReviews;

  const [currentIndex, setCurrentIndex] = useState(0); // Start at first review
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
    }),
  };

  const carouselTransition = {
    x: { type: 'spring', stiffness: 200, damping: 25 },
    opacity: { duration: 0.3 },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === allReviews.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? allReviews.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          {!hideTitle && (
            <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
              <Heading as='h2' size='section' fontWeight='bold' color='gray.800' lineHeight='1.3'>
                {title ?? t.reviewsTitle}
              </Heading>
              <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
                {subtitle ?? t.reviewsSubtitle}
              </Text>
            </Stack>
          )}

          <Stack
            spacing={6}
            w='100%'
            maxW={{ base: '100%', md: '540px', lg: '580px' }}
            align='center'
          >
            <Box
              position='relative'
              w='100%'
              minH={{ base: '350px', md: '280px' }}
              pb={4}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={carouselTransition}
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: 'calc(100% - 92px)',
                    left: '46px',
                    height: '100%',
                  }}
                >
                  <Box
                    position='relative'
                    bg='white'
                    p={{ base: 4, md: 6 }}
                    borderRadius='xl'
                    border='1px solid'
                    borderColor='gray.200'
                    w='100%'
                    h='100%'
                    display='flex'
                    flexDirection='column'
                    minH={{ base: '350px', md: '280px' }}
                  >
                    <Stack spacing={2} flexShrink={0}>
                      <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                        <Box>
                          <Text fontWeight='bold' textStyle='bodyLarge' color='gray.800'>
                            {allReviews[currentIndex].name}
                          </Text>
                          <Text textStyle='caption' color='gray.500' mt={0.5}>
                            {allReviews[currentIndex].time}
                          </Text>
                        </Box>
                        {/* Google Logo */}
                        <Image
                          src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
                          alt='Google'
                          h={{ base: '32px', md: '40px' }}
                          w={{ base: '32px', md: '40px' }}
                          flexShrink={0}
                          loading="lazy"
                          decoding="async"
                        />
                      </Box>
                      <Box display='flex' alignItems='center' gap={0.5}>
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            as={FaStar}
                            color='#EAA82E'
                            boxSize={4}
                          />
                        ))}
                      </Box>
                    </Stack>
                    <Box
                      flex={1}
                      overflowY='auto'
                      mt={3}
                      pr={{ base: 4, md: 5 }}
                      pb={1}
                      sx={{
                        scrollbarGutter: 'stable',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(160, 174, 192, 0.45) transparent'
                      }}
                      css={{
                        '&::-webkit-scrollbar': {
                          width: '4px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: 'rgba(160, 174, 192, 0.45)',
                          borderRadius: '999px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: 'rgba(160, 174, 192, 0.65)',
                        },
                      }}
                    >
                      <Text fontSize={{ base: 'sm', md: 'sm' }} color='gray.700' lineHeight='1.6' textAlign='left'>
                        {allReviews[currentIndex].content}
                      </Text>
                    </Box>
                    <Box
                      mt={3}
                      display='flex'
                      justifyContent='space-between'
                      alignItems='flex-end'
                    >
                      <Box display='flex' justifyContent='flex-start'>
                        <Icon as={FiThumbsUp} color='gray.500' fontSize='lg' />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>

              {/* Left Arrow - Positioned on the left side */}
              <IconButton
                aria-label='Previous review'
                icon={<ChevronLeftIcon />}
                onClick={() => paginate(-1)}
                borderRadius='full'
                bg='white'
                border='1px solid'
                borderColor='gray.200'
                _hover={{ bg: 'gray.50', borderColor: 'brand.500' }}
                color='brand.500'
                size='md'
                position='absolute'
                left={{ base: '-5px', md: '-10px' }}
                top='50%'
                transform='translateY(-50%)'
                zIndex={10}
                boxShadow='0 2px 8px rgba(0,0,0,0.1)'
              />

              {/* Right Arrow - Positioned on the right side */}
              <IconButton
                aria-label='Next review'
                icon={<ChevronRightIcon />}
                onClick={() => paginate(1)}
                borderRadius='full'
                bg='white'
                border='1px solid'
                borderColor='gray.200'
                _hover={{ bg: 'gray.50', borderColor: 'brand.500' }}
                color='brand.500'
                size='md'
                position='absolute'
                right={{ base: '-5px', md: '-10px' }}
                top='50%'
                transform='translateY(-50%)'
                zIndex={10}
                boxShadow='0 2px 8px rgba(0,0,0,0.1)'
              />
            </Box>

            {/* Dots indicator - below the carousel */}
            <HStack
              justify='center'
              spacing={1}
              w='100%'
              position='relative'
              zIndex={2}
            >
              {allReviews.map((_, index) => (
                <Box
                  key={index}
                  w={currentIndex === index ? '10px' : '8px'}
                  h={currentIndex === index ? '10px' : '8px'}
                  borderRadius='full'
                  bg={currentIndex === index ? 'brand.500' : 'gray.300'}
                  cursor='pointer'
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  transition='all 0.2s'
                />
              ))}
            </HStack>
          </Stack>

          {!hideButton && (
            <Link
              as={RouterLink}
              to='/avis'
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                borderColor='brand.500'
                color='brand.500'
                bg='white'
                borderRadius='full'
                textStyle='nav'
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: 'brand.500', color: 'white' }}
              >
                {t.viewAllReviews}
              </Button>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
