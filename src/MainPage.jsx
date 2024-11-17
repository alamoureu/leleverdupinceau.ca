import React, { useContext, useEffect } from 'react';
import { Button, Stack, Text, Heading, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { testimonials } from './data';
import { Testimonial } from './Testimonial';
import ImageSlider from './ImageSlider';
import appContext from './AppProvider';
import FreeQuotationForm from './FreeQuotationForm';

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  function handleNavigation(dest) {
    navigate('/' + dest);
  }

  const { currentLang } = useContext(appContext);

  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      display="flex"
      spacing="0px"
      gap="0"
      bg="gray.50"
    >
      <Stack direction="row" w="100%" h="100vh">
        <ImageSlider />
        <Stack
          zIndex="overlay"
          spacing={{ base: '2', md: '6' }}
          gap="0"
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Stack
              mt="100px"
              bg="white"
              maxW="1000px"
              px={{ base: '15px', md: '50px' }}
              py={{ base: '35px', md: '50px' }}
            >
              <Stack
                w="100%"
                h="100%"
                alignItems="center"
                gap="4"
                justifyContent="center"
              >
                <Heading
                  as="h1"
                  color="blue.500"
                  w="100%"
                  fontWeight="extrabold"
                  fontSize={{ base: '28px', md: '45px' }}
                  textAlign="center"
                >
                  {currentLang === 'fr'
                    ? 'SERVICES DE PEINTURE'
                    : 'PAINTING SERVICES'}{' '}
                  <Heading
                    color="blue.900"
                    fontWeight="bold"
                    fontSize={{ base: '25px', md: '40px' }}
                  >
                    {currentLang === 'fr'
                      ? 'EFFICACE ET MINUTIEUX'
                      : 'EFFICIENT AND METICULUS '}
                  </Heading>{' '}
                </Heading>
              </Stack>

              <Stack
                direction={{ base: 'column-reverse', md: 'row' }}
                gap="4"
                alignItems="center"
                justifyContent="center"
                py="5px"
              >
                <Button
                  size={{ base: 'sm', md: 'lg' }}
                  fontWeight="bold"
                  color="white"
                  bg="blue.500"
                  shadow="md"
                  _hover={{ bg: 'blue.600' }}
                  borderRadius="sm"
                >
                  <a href="#soumission">
                    {currentLang === 'fr'
                      ? 'Soumission Gratuite'
                      : 'Free Quotation'}
                  </a>
                </Button>
                <Button
                  size={{ base: 'sm', md: 'lg' }}
                  fontWeight="bold"
                  color="white"
                  bg="gray.900"
                  _hover={{ bg: 'gray.600' }}
                  borderRadius="sm"
                  onClick={() => navigate('/a-propos-de-nous')}
                >
                  {currentLang === 'fr' ? 'À propos de nous' : 'About us'}
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </Stack>
      </Stack>
      <Text id="soumission"></Text>
      <FreeQuotationForm />
      <Stack
        w="100%"
        h={{ base: '100%', md: '100vh' }}
        py="60px"
        alignItems="center"
        justifyContent="center"
        px={{ base: '10%', md: '20%' }}
        bg="#01101c"
      >
        <Stack w="100%" alignItems="center">
          <Text
            fontSize={{ base: '30px', md: '40px' }}
            fontWeight="bold"
            borderRadius="md"
            pb="2"
            color="white"
          >
            {currentLang === 'fr' ? 'Nos Services' : 'Our Services'}
          </Text>

          <Stack
            py={{ base: '6', md: '8', lg: '12' }}
            columns={{ base: 1, sm: 2, lg: 3 }}
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: '8', lg: '12' }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Stack
                h="100%"
                onClick={() => handleNavigation('services/peinture-exterieure')}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Stack cursor="pointer" mb="10px">
                    <Image
                      src={
                        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_3.jpg'
                      }
                      h={{ base: '200px', lg: '300px' }}
                      w={{ base: '250px', lg: '350px' }}
                      borderRadius="sm"
                    />
                  </Stack>
                </motion.div>
                <Stack gap="0">
                  <Text fontSize="x-large" fontWeight="semibold" color="white">
                    {currentLang === 'fr'
                      ? 'Peinture Extérieure'
                      : 'Exterior Painting'}
                  </Text>
                  <Text
                    fontWeight="normal"
                    fontSize="md"
                    maxW="250px"
                    color="white"
                  >
                    {currentLang === 'fr'
                      ? 'Cliquez pour en savoir plus'
                      : 'Click for more information'}
                  </Text>
                </Stack>
              </Stack>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Stack
                h="100%"
                onClick={() => handleNavigation('services/peinture-interieure')}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 1 }}
                >
                  <Stack cursor="pointer" mb="10px">
                    <Image
                      src={
                        'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_2.jpg'
                      }
                      h={{ base: '200px', lg: '300px' }}
                      w={{ base: '250px', lg: '350px' }}
                      borderRadius="sm"
                    />
                  </Stack>
                </motion.div>
                <Stack gap="0">
                  <Text fontSize="x-large" fontWeight="semibold" color="white">
                    {currentLang === 'fr'
                      ? 'Peinture Intérieure'
                      : 'Interior Painting'}
                  </Text>
                  <Text
                    fontWeight="normal"
                    fontSize="md"
                    maxW="250px"
                    color="white"
                  >
                    {currentLang === 'fr'
                      ? 'Cliquez pour en savoir plus'
                      : 'Click for more information'}
                  </Text>
                </Stack>
              </Stack>
            </motion.div>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        px={{ base: '5%', md: '20%' }}
        py="75px"
        justifyContent="center"
        bg="white"
      >
        <Stack spacing="6" textAlign="center" align="center" textColor="black">
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading fontSize={{ base: '25px', md: '35px' }}>
              {currentLang === 'fr'
                ? 'Les avis des clients'
                : 'Clients Testimonies'}
            </Heading>
          </Stack>
          <Stack
            as="section"
            py={{
              base: '16',
              md: '24',
            }}
          >
            <Stack
              direction={{
                base: 'column',
                lg: 'row',
              }}
              spacing="16"
            >
              {testimonials.map((testimonial, id) => (
                <Testimonial key={id} {...testimonial} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}
