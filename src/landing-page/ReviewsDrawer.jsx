import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Box,
  Text,
  Icon,
  Stack,
  Button,
  Heading,
  Image,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function ReviewsDrawer({ isOpen, onClose, lang }) {
  const reviews = [
    {
      name: 'Maureen Beech',
      time: '6 days ago',
      content: {
        fr: "Le Lever Du Pinceau a réalisé plusieurs projets de peinture pour moi. J'ai été très satisfaite des résultats et je les recommande vivement. Ils ont été professionnels et agréables. Ils ont démarré et terminé le projet dans les délais demandés. À la fin du projet, le site était toujours propre et ordonné. Je n'hésiterais pas à faire appel à eux pour d'autres projets.",
        en: 'Le Lever Du Pinceau has done multiple painting projects for me. I was very satisfied with the results and would highly recommend them. They were professional and pleasant to work with. They started and completed the project within the timeframe requested. On completion of the project the site was always left orderly and clean. I would not hesitate to engage them again for other projects.',
      },
    },
    {
      name: 'Zoé Boudreau',
      time: 'a month ago',
      content: {
        fr: 'Je suis très satisfaite du service reçu! Équipe compétente, rapide et courtoise. Je recommande chaleureusement!',
        en: 'I am very satisfied with the service received! Competent, fast and courteous team. I warmly recommend!',
      },
    },
    {
      name: 'Michiel Schrey',
      time: 'a month ago',
      content: {
        fr: 'Efficaces, sympathiques, très bonnes communications, prix intéressants… Hautement recommandé!',
        en: 'Efficient, friendly, very good communications, great prices… Highly recommended!',
      },
    },
    {
      name: 'Marie Lambert',
      time: 'a month ago',
      content: {
        fr: "Nous sommes très heureux de notre expérience avec Le Lever Du Pinceau. Leur travail minutieux et leur grande courtoisie en font une référence pour quiconque recherche une main-d'œuvre fiable et efficace.",
        en: 'We are very happy with our experience with Le Lever Du Pinceau. Their meticulous work and great courtesy make them a reference for anyone looking for reliable and efficient labor.',
      },
    },
    {
      name: 'Frédéric Choinière',
      time: 'a month ago',
      content: {
        fr: "J'ai fait appel à Le Lever Du Pinceau pour repeindre des sections de toit en métal, dont plusieurs étaient difficiles d'accès. Non seulement Louis et Philippe ont effectué le travail avec soin et sécurité, mais ils ont également écouté nos préoccupations.",
        en: 'I retained the services of Le Lever Du Pinceau to have sections of metal roof repainted, many of which were difficult to access. Not only did Louis and Philippe do the work with great care and safety, but they listened to our concerns at all times.',
      },
    },
    {
      name: 'A Mayer',
      time: 'a month ago',
      content: {
        fr: "Merci à l'équipe de Lever du Pinceau! Je les ai engagés pour peindre ma chambre et ils ont dépassé mes attentes. Travailleurs polis, attention aux détails et service client exceptionnel! Je recommande vivement!",
        en: 'Thanks to the Lever du Pinceau team! I hired them to paint my bedroom and they exceeded my expectations. Polite workers, attention to detail and outstanding customer service! I highly recommend!',
      },
    },
    {
      name: 'V Gagnon',
      time: 'a month ago',
      content: {
        fr: "Travail impeccable ! Louis est professionnel, sympathique et créatif ! Travail soigné et rapide. Je recommande vivement et j'utiliserai leurs services pour des travaux futurs !",
        en: 'Impeccable work! Louis is professional, friendly and creative! Neat and fast work. I highly recommend and will use their services for future work!',
      },
    },
    {
      name: 'Coralie Beauchamp',
      time: 'a month ago',
      content: {
        fr: 'Excellente expérience avec le levé du pinceau! Professionnels, respectueux des lieux, honnêtes et travail parfait. Je recommande vivement cette équipe!',
        en: 'Great experience with brush lifting! Professional, respectful of the place, honest and perfect work. I highly recommend this team!',
      },
    },
  ];

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      size={{ base: 'xs', md: 'md' }}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {lang === 'fr' ? 'Commentaires des clients' : 'Customer Reviews'}
        </DrawerHeader>

        <DrawerBody>
          {reviews.map((review, index) => (
            <Box bg="#F5F6F8" p={4} borderRadius="md" mb={4} key={index}>
              <Stack direction="row" align="center" mb={2}>
                <Box>
                  <Text fontWeight="bold">{review.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {review.time}
                  </Text>
                </Box>
              </Stack>
              <Box display="flex" alignItems="center" mt={1} mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="yellow.500" />
                ))}
              </Box>
              <Text fontSize="md" color="gray.700">
                {lang === 'fr' ? review.content.fr : review.content.en}
              </Text>
            </Box>
          ))}

          <Box
            bg="white"
            shadow="md"
            p={6}
            borderRadius="md"
            textAlign="center"
            maxW="100%"
            mx="auto"
          >
            <Box display="flex" flexDir="row" justifyContent="center">
              <Heading as="h3" size="md" color="gray.700" mb={2}>
                {lang === 'fr' ? 'Avis' : 'Reviews'}
              </Heading>
              <Image
                loading="lazy"
                src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/images.png"
                fontWeight="bold"
                mt="5px"
                ml="5px"
                h="20px"
                _hover={{ cursor: 'pointer', textDecor: 'underline' }}
                onClick={() =>
                  window.open('https://g.co/kgs/b5mg4aP', '_blank')
                }
              />
            </Box>

            <Stack direction="row" align="center" justify="center" mb={3}>
              <Text fontSize="2xl" fontWeight="bold" color="gray.800">
                4.8
              </Text>
              <Stack direction="row" spacing={0.5}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="yellow.500" />
                ))}
              </Stack>
              <Text fontSize="sm" color="gray.500">
                (25+)
              </Text>
            </Stack>

            <Button
              colorScheme="blue"
              w="fit-content"
              onClick={() =>
                window.open(
                  'https://www.google.com/search?q=leverdupinceau&lqi=ChBsZXZlciBkdSBwaW5jZWF1SM7m8LSzsoCACFosEAAQARACGAAYARgCIhBsZXZlciBkdSBwaW5jZWF1KggIAhAAEAEQAjICZnJ6FE5vdHJlLURhbWUtZGUtR3LDomNlkgEHcGFpbnRlcqoBRgoML2cvMTI1X2RjM183EAEyHhABIhoVSpcOWu3wJv30l7ZcaNqSJXIwBamhfUwTRjIUEAIiEGxldmVyIGR1IHBpbmNlYXU#lkt=LocalPoiReviews&lrd=0x68f987b7d3c06763:0xde27a613b1baf982,3,,,,&rlimm=16007946004028127618',
                  '_blank'
                )
              }
            >
              {lang === 'fr' ? 'Laissez-nous un avis' : 'Leave us a review'}
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
