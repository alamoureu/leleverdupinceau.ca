import {
  Box,
  Center,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BiCheck } from 'react-icons/bi';

export default function BestSolutionHero({ lang }) {
  return (
    <Stack pb={{ base: '50px', md: '50px' }}>
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
  );
}
