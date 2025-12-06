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

export default function ReviewsSection({ hideTitle = false }) {
  const { t } = useTranslation();
  const { currentLang } = useContext(appContext);

  // All reviews from drawer and website
  const allReviews = [
    {
      name: 'Zoé Boudreau',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Je suis très satisfaite du service reçu! Équipe compétente, rapide et courtoise. Je recommande chaleureusement!'
          : 'I am very satisfied with the service received! Competent, fast and courteous team. I warmly recommend!',
    },
    {
      name: 'Michiel Schrey',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Efficaces, sympathiques, très bonnes communications, prix intéressants… Hautement recommandé!'
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
          ? "Je suis très satisfaite des travaux qui ont été effectués à notre résidence. J'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes; le souci du détail est apparent!"
          : 'I am very satisfied with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!',
    },
    {
      name: 'Frédéric Choinière',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "J'ai fait appel à Le Lever Du Pinceau pour repeindre des sections de toit en métal, dont plusieurs étaient difficiles d'accès. Non seulement Louis et Philippe ont effectué le travail avec soin et sécurité, mais ils ont également écouté nos préoccupations."
          : 'I retained the services of Le Lever Du Pinceau to have sections of metal roof repainted, many of which were difficult to access. Not only did Louis and Philippe do the work with great care and safety, but they listened to our concerns at all times.',
    },
    {
      name: 'Maureen Beech',
      time: currentLang === 'fr' ? 'Il y a 6 jours' : '6 days ago',
      content:
        currentLang === 'fr'
          ? "Le Lever Du Pinceau a réalisé plusieurs projets de peinture pour moi. J'ai été très satisfaite des résultats et je les recommande vivement. Ils ont été professionnels et agréables. Ils ont démarré et terminé le projet dans les délais demandés. À la fin du projet, le site était toujours propre et ordonné. Je n'hésiterais pas à faire appel à eux pour d'autres projets."
          : 'Le Lever Du Pinceau has done multiple painting projects for me. I was very satisfied with the results and would highly recommend them. They were professional and pleasant to work with. They started and completed the project within the timeframe requested. On completion of the project the site was always left orderly and clean. I would not hesitate to engage them again for other projects.',
    },
    {
      name: 'A Mayer',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Merci à l'équipe de Lever du Pinceau! Je les ai engagés pour peindre ma chambre et ils ont dépassé mes attentes. Travailleurs polis, attention aux détails et service client exceptionnel! Je recommande vivement!"
          : 'Thanks to the Lever du Pinceau team! I hired them to paint my bedroom and they exceeded my expectations. Polite workers, attention to detail and outstanding customer service! I highly recommend!',
    },
    {
      name: 'V Gagnon',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Travail impeccable ! Louis est professionnel, sympathique et créatif ! Travail soigné et rapide. Je recommande vivement et j'utiliserai leurs services pour des travaux futurs !"
          : 'Impeccable work! Louis is professional, friendly and creative! Neat and fast work. I highly recommend and will use their services for future work!',
    },
    {
      name: 'Coralie Beauchamp',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Excellente expérience avec le levé du pinceau! Professionnels, respectueux des lieux, honnêtes et travail parfait. Je recommande vivement cette équipe!'
          : 'Great experience with brush lifting! Professional, respectful of the place, honest and perfect work. I highly recommend this team!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start at third position
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
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
    <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          {!hideTitle && (
            <Stack spacing={3} textAlign='center'>
              <Heading
                as='h2'
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {t.reviewsTitle}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
                {t.reviewsSubtitle}
              </Text>
            </Stack>
          )}

          <Stack
            spacing={6}
            w='100%'
            maxW={{ base: '100%', md: '750px', lg: '800px' }}
            align='center'
          >
            <Box
              position='relative'
              w='100%'
              h={{ base: '280px', md: '420px' }}
              pb={2}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
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
                    width: 'calc(100% - 100px)',
                    left: '50px',
                    height: '100%',
                    maxWidth: '100%',
                  }}
                >
                  <Box
                    position='relative'
                    bg='#F5F6F8'
                    p={{ base: 4, md: 6 }}
                    borderRadius='xl'
                    border='1px solid'
                    borderColor='gray.200'
                    w='100%'
                    h='100%'
                    display='flex'
                    flexDirection='column'
                  >
                    <Stack spacing={2} flexShrink={0}>
                      <Box display='flex' justifyContent='space-between' alignItems='flex-start'>
                        <Box>
                          <Text
                            fontWeight='bold'
                            fontSize={{ base: 'md', md: 'lg' }}
                            color='gray.800'
                          >
                            {allReviews[currentIndex].name}
                          </Text>
                          <Text fontSize='sm' color='gray.500' mt={0.5}>
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
                      pr={2}
                      css={{
                        '&::-webkit-scrollbar': {
                          width: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                          background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                          background: '#CBD5E0',
                          borderRadius: '3px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                          background: '#A0AEC0',
                        },
                      }}
                    >
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        color='gray.700'
                        lineHeight='1.6'
                      >
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
                _hover={{ bg: 'gray.50', borderColor: '#014CC4' }}
                color='#014CC4'
                size='md'
                position='absolute'
                left={{ base: '0px', md: '0px' }}
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
                _hover={{ bg: 'gray.50', borderColor: '#014CC4' }}
                color='#014CC4'
                size='md'
                position='absolute'
                right={{ base: '0px', md: '0px' }}
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
                  bg={currentIndex === index ? '#014CC4' : 'gray.300'}
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

          <Link as={RouterLink} to='/avis' _hover={{ textDecoration: 'none' }}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant='outline'
              borderColor='#014CC4'
              color='#014CC4'
              bg='white'
              borderRadius='full'
              fontSize={{ base: 'sm', md: 'md' }}
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              _hover={{ bg: '#014CC4', color: 'white' }}
            >
              {t.viewAllReviews}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
