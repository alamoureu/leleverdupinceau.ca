import React from 'react';
import {
  Stack,
  Box,
  Image,
  Heading,
  Button,
  Flex,
  Center,
  Text,
  Icon,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';

import { FaStar } from 'react-icons/fa6';
import { BiCheck } from 'react-icons/bi';
import ApplyForm from './ApplyForm';
import NosServices from './NosServices';

import SoumissionForm from './SoumissionForm';
import { FiThumbsUp } from 'react-icons/fi';
import ReviewsDrawer from './ReviewsDrawer';
import FloatingReviewBadge from './FloatingReviewBadge';

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
      <Stack
        w="100%"
        h={{ base: '350px', md: '700px' }}
        position="relative"
        spacing="0px"
        mb={{ base: '-20px', md: '-100px' }}
      >
        <Box
          w="100%"
          h="100%"
          position="absolute"
          overflow="hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 50% 90%, 0 80%)',
          }}
          zIndex="0"
        >
          <Image
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/mainImage.jpg"
            alt="Background Image"
            objectFit={{ base: 'cover', md: 'cover' }}
            objectPosition="center"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.5)"
          />
        </Box>
        <Box
          position="relative"
          zIndex="1"
          color="white"
          textAlign="left"
          ml={{ base: '15px', md: '100px' }}
          pt={{ base: '50px', md: '100px' }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Heading fontSize={{ base: '3xl', md: '7xl' }}>
            {lang === 'fr'
              ? "Peintre d'expérience\nmontréalais"
              : 'Experienced\nMontreal Painter'}
          </Heading>

          <Heading
            fontSize={{ base: 'xl', md: '3xl' }}
            fontWeight="normal"
            mb={{ base: '2', md: '4' }}
          >
            {lang === 'fr'
              ? 'Qualité garantie, au meilleur prix'
              : 'Guaranteed Quality, Best Price'}
          </Heading>

          <Button
            bg="#0056D2"
            textColor="white"
            _hover={{ bg: '#0056D2' }}
            shadow="xl"
            maxW={{ base: 'fit-content', md: '100%' }}
            size={{ base: 'sm', md: 'lg' }}
            onClick={onOpen}
          >
            {lang === 'fr'
              ? 'Obtenez votre soumission gratuite'
              : 'Get Your Free Quote'}
          </Button>
        </Box>
        <Box
          position="absolute"
          right={{ base: '20px', md: '50px' }}
          bottom={{ base: '40px', md: '50px' }}
          display="flex"
          justifyContent="center"
          w={{ base: '80px', md: '125px' }}
        >
          <Image src="https://harbor-file-system.s3.ca-central-1.amazonaws.com/SSSS.png" />
        </Box>
      </Stack>

      {/**Section 2 */}
      <Stack pt={{ base: '0px', md: '75px' }}>
        <Center>
          <Stack spacing="20px" position="relative">
            <Text
              textAlign="center"
              fontSize={{ base: 'md', md: '2xl' }}
              fontWeight="semibold"
            >
              {lang === 'fr'
                ? 'Augmentez la valeur de votre maison'
                : 'Increase Your Home Value'}
              <br />
              <span style={{ fontWeight: 'normal' }}>
                {lang === 'fr' ? 'sans effort de votre part' : 'Effortlessly'}
              </span>
            </Text>
          </Stack>
        </Center>
      </Stack>

      {/**Section 3 */}
      <Stack py={{ base: '0px', md: '25px' }} pt={{ base: '10px', md: '40px' }}>
        <Text
          textAlign="center"
          fontSize={{ base: 'xl', md: '4xl' }}
          fontWeight="semibold"
          mx="15px"
        >
          {lang === 'fr'
            ? 'Pourquoi choisir Le Lever du Pinceau ?'
            : 'Why Choose Le Lever du Pinceau?'}
        </Text>
        <Text
          textAlign="center"
          fontSize={{ base: 'sm', md: 'lg' }}
          fontWeight="normal"
          mx="15px"
        >
          {lang === 'fr'
            ? "Gagnez du temps, profitez d'un résultat parfait"
            : 'Save time, enjoy perfect results'}
        </Text>
        <Flex
          justify="center"
          align="center"
          gap={{ base: '8', md: '12' }}
          direction={{ base: 'column', md: 'row' }}
          pt={{ base: '10px', md: '50px' }}
        >
          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              400+
            </Text>
            <Text fontSize="md">
              {lang === 'fr'
                ? 'Plus de 400 clients satisfaits'
                : 'Over 400 satisfied clients'}
            </Text>
          </Box>

          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              4.8+
            </Text>
            <Flex justify="center" align="center" mb="1" mt="0">
              {[...Array(5)].map((_, i) => (
                <Icon as={FaStar} key={i} color="#EAA82E" boxSize="4" />
              ))}
            </Flex>
            <Box display="flex" flexDir="row">
              <Text fontSize="md">
                {lang === 'fr' ? 'Noté 4.8 étoiles sur' : 'Rated 4.8 stars on'}
              </Text>
              <Image
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/images.png"
                fontWeight="bold"
                mt="4px"
                ml="5px"
                h="20px"
                _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                onClick={() =>
                  window.open('https://g.co/kgs/b5mg4aP', '_blank')
                }
              />
            </Box>
          </Box>
          <Box textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              100%
            </Text>
            <Text fontSize="md">
              {lang === 'fr'
                ? '100% satisfaction garanti'
                : '100% satisfaction guaranteed'}
            </Text>
          </Box>
        </Flex>
        <Box display="flex" flexDir="column" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            w="250px"
            mt={{ base: '20px', md: '70px' }}
          >
            <Button
              bg="#0056D2"
              textColor="white"
              _hover={{ bg: '#0056D2' }}
              size={{ base: 'md', md: 'lg' }}
              w="100%"
              onClick={onOpen}
            >
              {lang === 'fr' ? 'Soumission gratuite' : 'Free Quote'}
            </Button>
            <Box
              position="absolute"
              right={{ base: '-70px', md: '-110px' }}
              top={{ base: '80%', md: '90%' }}
              transform="translateY(-50%)"
            >
              <Image
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow.png"
                alt="Arrow pointing to button"
                w={{ base: '80px', md: '125px' }}
              />
            </Box>
          </Box>
          <Box spacing="0px" mt={{ base: '20px', md: '50px' }}>
            <Text
              textAlign="center"
              fontSize={{ base: 'xl', md: '2xl' }}
              textColor="gray.500"
              fontWeight="semibold"
              mx="15px"
            >
              {lang === 'fr'
                ? 'Vous voulez savoir combien coûte votre projet rapidement ?'
                : 'Want to know how much your project will cost quickly?'}
            </Text>
            <Box
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                textAlign="center"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="semibold"
              >
                {lang === 'fr' ? 'moins de' : 'less than'}
              </Text>
              <Image
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/IMG_1089.JPG"
                h={{ base: '70px', md: '120px' }}
              />
            </Box>
          </Box>
        </Box>
      </Stack>

      {/**Section 4 */}
      <Stack pb={{ base: '50px', md: '100px' }} mt="20px">
        <Image
          src={
            isMobile
              ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerSm.png'
              : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerlg.png'
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
      <Stack
        position="relative"
        w="100%"
        bgSize="auto"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        px={{ base: '10px', md: '100px' }}
        pt={{ base: '50px', md: '100px' }}
      >
        <Box
          textAlign="center"
          my={8}
          px={{ base: 4, md: 0 }}
          position="relative"
        >
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="rgba(1, 42, 104, 1)"
            mb={2}
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              position: 'absolute',
              width: '60%',
              height: '3px',
              backgroundColor: 'blue.500',
              bottom: '-4px',
              left: '20%',
            }}
          >
            {lang === 'fr' ? 'Avis de nos clients' : 'Customer Reviews'}
          </Heading>
        </Box>

        <Box
          bg="#F5F6F8"
          p={4}
          borderRadius="md"
          textAlign="left"
          maxW="500px"
          w="100%"
          mb={4}
          position="relative"
        >
          <Text fontWeight="bold" fontSize="md" color="gray.800">
            {lang === 'fr' ? 'Chantal Baril' : 'Chantal Baril'}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {lang === 'fr' ? 'Il y a 2 mois' : '2 months ago'}
          </Text>
          <Box display="flex" alignItems="center" mt={1} mb={2}>
            {[...Array(5)].map((_, i) => (
              <Icon key={i} as={FaStar} color="#EAA82E" />
            ))}
          </Box>
          <Text fontSize="md" color="gray.700">
            {lang === 'fr'
              ? 'Je suis très satisfaite des travaux qui ont été effectués à notre résidence. J’ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes; le souci du détail est apparent!'
              : 'I am very satisfied with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!'}
          </Text>
          <Box mt={2} display="flex" justifyContent="flex-start">
            <Icon as={FiThumbsUp} color="gray.500" fontSize="lg" />
          </Box>
        </Box>

        <Box
          textAlign="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          bottom={{ base: '70px', md: '60px' }}
        >
          <Image
            src="https://harbor-file-system.s3.ca-central-1.amazonaws.com/SSSS.png"
            alt={lang === 'fr' ? 'Logo Google' : 'Google Logo'}
            w={{ base: '100px', md: '100px' }}
          />
        </Box>

        <Box
          textAlign="center"
          mb={{ base: '-60px', md: '0px' }}
          position="relative"
          top="-50px"
          onClick={onDrawerOpen}
        >
          <Box
            position="absolute"
            right={{ base: '-65px', md: '-95px' }}
            top={{ base: '-20px', md: '-35px' }}
            transform="translateY(-50%)"
          >
            <Image
              src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/nicearrow+(1)2.png"
              alt={
                lang === 'fr'
                  ? 'Flèche pointant vers Voir plus de commentaires'
                  : 'Arrow pointing to See more reviews'
              }
              w={{ base: '80px', md: '125px' }}
            />
          </Box>
          <Text
            fontSize="md"
            color="gray.600"
            fontWeight="bold"
            textDecoration="underline"
            cursor="pointer"
            _hover={{ color: 'gray.800' }}
          >
            {lang === 'fr' ? 'Voir plus de commentaires' : 'See more reviews'}
          </Text>
        </Box>
      </Stack>

      {/**Section 9 */}
      <Stack
        position="relative"
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        px={{ base: '0px', md: '100px' }}
        pb={{ base: '50px', md: '100px' }}
      >
        <Box textAlign="center" my={8} px={{ base: 4, md: 0 }}>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            color="rgba(1, 42, 104, 1)"
            mb={2}
            position="relative"
            display="inline-block"
            _after={{
              content: '""',
              position: 'absolute',
              width: '60%',
              height: '3px',
              backgroundColor: 'blue.500',
              bottom: '-4px',
              left: '20%',
            }}
          >
            {lang === 'fr' ? 'Nos Services' : 'Our Services'}
          </Heading>

          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mt={2}>
            {lang === 'fr'
              ? 'Découvrez nos offres complètes pour répondre à tous vos besoins en peinture.'
              : 'Discover our complete range of offers to meet all your painting needs.'}
          </Text>
        </Box>
        <NosServices lang={lang} />
      </Stack>

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

function SubmissionModal({ isOpen, onClose, lang }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="0" pb="5">
        <ModalHeader>
          <Stack w="100%" alignItems="center">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              borderRadius="md"
              color="#0056D2"
            >
              {lang === 'fr'
                ? 'OBTENIR UNE SOUMISSION GRATUITE'
                : 'GET A FREE QUOTE'}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <SoumissionForm lang={lang} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
