import React from 'react';
import {
  Stack,
  Box,
  Image,
  Heading,
  Flex,
  Center,
  Text,
  Icon,
  Container,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BiCheck } from 'react-icons/bi';
import ApplyForm from '../landing-page/ApplyForm';
import NosServices from '../landing-page/NosServices';
import ReviewsDrawer from '../landing-page/ReviewsDrawer';
import FloatingReviewBadge from '../landing-page/FloatingReviewBadge';
import MainHero from '../components/MainHero';
import SubmissionModal from '../components/SubmissionModal';
import BeforeNAfter from '../landing-page/BeforeNAfter';
import AddValueHero from '../components/AddValueHero';
import WhyUsHero from '../components/WhyUsHero';
import ClientReviewsHero from '../components/ClientReviewsHero';

export default function LandingPage({ lang }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      display="flex"
      bg="white"
      overflowX="hidden"
    >
      {/**Section 1 */}
      <MainHero onSubmissionFormOpen={onOpen} lang={lang} />

      {/**Section 2 */}
      <AddValueHero lang={lang} />

      {/**Section 3 */}
      <WhyUsHero lang={lang} onSubmissionOpen={onOpen} />

      {/**Section 4 */}
      <Stack pb={{ base: '50px', md: '100px' }} mt="20px">
        <Image
          src={
            isMobile
              ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerSm.png'
              : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannner-desktop.png'
          }
        />
      </Stack>

      {/**Section 5 */}
      <Stack pb={{ base: '50px', md: '100px' }}>
        <Container maxW="container.md">
          <Stack spacing="5px">
            <Box textAlign="center" mb={10} px={{ base: 2, md: 0 }}>
              <Heading
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="blue.900"
                position="relative"
                display="inline-block"
                _after={{
                  content: '""',
                  position: 'absolute',
                  width: '60%',
                  height: '3px',
                  backgroundColor: 'blue.600',
                  bottom: '-8px',
                  left: '20%',
                }}
              >
                {lang === 'fr'
                  ? 'La meilleure solution \n pour vous'
                  : 'The Best Solution \n for You'}
              </Heading>
            </Box>

            <Text textAlign="center" fontSize="lg">
              {lang === 'fr'
                ? "Le Lever du Pinceau s'engage à vous proposer la meilleure solution pour l'embelissement de vos espaces personnels en tenant compte de vos goûts, vos besoins et de votre budget. \n En tout temps, vous pouvez :"
                : 'Le Lever du Pinceau is committed to providing the best solution for enhancing your personal spaces, taking into account your tastes, needs, and budget. \n At any time, you can :'}
            </Text>
          </Stack>
          <Stack spacing={5} pt={'50px'} pb="10px" px={4}>
            <Center>
              <Stack>
                <Box display="flex" alignItems="start">
                  <Icon as={BiCheck} color="#012459" boxSize={10} mt={1} />
                  <Box ml={3}>
                    <Text fontWeight="bold" color="#012459" fontSize="xl">
                      {lang === 'fr'
                        ? 'Obtenir une estimation de coûts'
                        : 'Get a Cost Estimate'}
                    </Text>
                    <Text fontSize="md">
                      {lang === 'fr'
                        ? 'de vos projets de peinture sans aucun obligation de votre part.'
                        : 'for your painting projects with no obligation.'}
                    </Text>
                  </Box>
                </Box>

                <Box display="flex" alignItems="start">
                  <Icon as={BiCheck} color="#013a91" boxSize={10} mt={1} />
                  <Box ml={3}>
                    <Text fontWeight="bold" color="#013a91" fontSize="xl">
                      {lang === 'fr'
                        ? 'Choisir parmi un large éventail de couleurs'
                        : 'Choose from a Wide Range of Colors'}
                    </Text>
                    <Text fontSize="md">
                      {lang === 'fr'
                        ? 'produits certifiés et finis selon vos préférences.'
                        : 'certified products and finishes tailored to your preferences.'}
                    </Text>
                  </Box>
                </Box>

                <Box display="flex" alignItems="start">
                  <Icon as={BiCheck} color="#0250c7" boxSize={10} mt={1} />
                  <Box ml={3}>
                    <Text fontWeight="bold" color="#0250c7" fontSize="xl">
                      {lang === 'fr'
                        ? "Bénéficier d'accompagnement"
                        : 'Benefit from Guidance'}
                    </Text>
                    <Text fontSize="md">
                      {lang === 'fr'
                        ? 'de design lors de vos décisions personnalisées.'
                        : 'in design for your personalized decisions.'}
                    </Text>
                  </Box>
                </Box>

                <Box display="flex" alignItems="start">
                  <Icon as={BiCheck} color="#055feb" boxSize={10} mt={1} />
                  <Box ml={3}>
                    <Text fontWeight="bold" color="#055feb" fontSize="xl">
                      {lang === 'fr'
                        ? 'Communiquez avec notre équipe'
                        : 'Communicate with Our Team'}
                    </Text>
                    <Text fontSize="md">
                      {lang === 'fr'
                        ? 'dévouée et attentionnée 7j/7.'
                        : 'dedicated and attentive 7 days a week.'}
                    </Text>
                  </Box>
                </Box>
              </Stack>
            </Center>
          </Stack>
        </Container>
      </Stack>

      {/**Section 6 */}
      <Box
        position="relative"
        w="100%"
        h={{ base: '200px', md: '300px' }}
        spacing="0px"
      >
        <Image
          src={
            'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/11.png'
          }
          alt="Background Image"
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition="center"
          top={0}
          left={0}
          zIndex={-1}
        />

        <Box
          position="absolute"
          top="50%"
          w={{ base: '100%', md: 'normal' }}
          left={{ base: '55%', md: '55%' }}
          transform="translate(-50%, -50%)"
          color="white"
        >
          <Heading
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            color="rgba(1, 42, 104, 1)"
          >
            {lang === 'fr'
              ? 'Les prix les plus \n compétitifs'
              : 'The Most Competitive \n Prices and'}
          </Heading>
          <Text
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            color="blue.500"
          >
            {lang === 'fr'
              ? 'Satisfaction garantie'
              : 'Guaranteed Satisfaction'}
          </Text>
        </Box>
      </Box>

      {/**Section 8 */}
      <Stack
        position="relative"
        w="100%"
        bgSize="auto"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        px={{ base: '0px', md: '100px' }}
        pt={{ base: '50px', md: '100px' }}
      >
        <Box p={4} borderRadius="md">
          <Heading
            color="rgba(1, 42, 104, 1)"
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
          >
            {lang === 'fr' ? "Appliquez aujourd'hui" : 'Apply Today'}
          </Heading>
        </Box>
        <ApplyForm lang={lang} />
      </Stack>

      {/**Section 7 */}
      <Stack pt={{ base: '25px', md: '100px' }}>
        <ClientReviewsHero onDrawerOpen={onDrawerOpen} />
      </Stack>

      {/**Section 9 */}
      <Stack
        pt={{ base: '50px', md: '20px' }}
        pb={{ base: '25px', md: '50px' }}
      >
        <NosServices lang={lang} />
      </Stack>

      <BeforeNAfter lang={lang} />

      <SubmissionModal isOpen={isOpen} onClose={onClose} lang={lang} />

      <ReviewsDrawer
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
        lang={lang}
      />
      <FloatingReviewBadge onOpen={onDrawerOpen} lang={lang} />
    </Flex>
  );
}
