import React, { useEffect, useContext, Fragment } from 'react';
import { Image, Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { Helmet } from 'react-helmet';

export default function AboutUs() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>
          À Propos de Le Lever du Pinceau | Services de Peinture à Montréal
        </title>
        <meta
          name="description"
          content="Découvrez l'histoire et les valeurs de Le Lever du Pinceau. Entreprise spécialisée en peinture intérieure et extérieure à Montréal, offrant des services professionnels et méticuleux adaptés à vos besoins."
        />
        <meta
          name="keywords"
          content="À propos peinture Montréal, Entreprise de peinture Montréal, Peinture intérieure, Peinture extérieure, Peintres professionnels Montréal"
        />
      </Helmet>
      <Stack pt="100px" h="100%" bg="white">
        <Stack
          px={{ base: '15px', md: '50px' }}
          pb={{ base: '15px', md: '50px' }}
          pt={{ base: '25px', md: '70px' }}
          alignItems="center"
        >
          <Stack
            maxW={{ base: '100%', md: '800px' }}
            bg="#2D72D2"
            borderRadius="xl"
            gap="4"
            py={{ base: '25px', lg: '50px' }}
            px={{ base: '15px', lg: '20px' }}
            direction={{ base: 'column', lg: 'row' }}
            justifyContent="space-between"
            textColor="white"
          >
            <Stack direction="column">
              <Text fontWeight="bold">
                {currentLang === 'fr' ? 'À PROPOS DE NOUS' : 'ABOUT US'}
              </Text>
              <Text maxW="500px">
                {currentLang === 'fr'
                  ? "Notre entreprise propose une large gamme de services de peinture, tant en intérieur qu'en extérieur. Nous sommes fiers d'être méticuleux et dynamiques dans notre travail, garantissant que chaque projet est réalisé efficacement et selon les normes les plus élevées."
                  : 'Our company offers a wide range of painting services, both interior and exterior. We pride ourselves on being meticulous and dynamic in our work, ensuring that every project is completed efficiently and to the highest standards.'}
              </Text>
            </Stack>
            <Stack>
              <Image
                loading="lazy"
                src={
                  'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_4.jpg'
                }
                w="350px"
                h="250px"
                borderRadius="xl"
              />
            </Stack>
          </Stack>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              w="100%"
              py={{ base: '25px', lg: '25px' }}
              px={{ base: '15px', lg: '10%' }}
            >
              <Text maxW="650px" textColor="#53514E">
                {currentLang === 'fr'
                  ? "Que vous ayez besoin d'une nouvelle couche de peinture dans votre salon ou d'un renouveau extérieur complet, notre équipe de peintres talentueux est là pour vous livrer des résultats à la hauteur de nos standards."
                  : 'Whether you need a new coat of paint in your living room or a complete exterior renovation, our team of talented painters is here to deliver results that meet our standards.'}
                <br />
                <br />
                {currentLang === 'fr'
                  ? 'Commencés en tant que jeunes entrepreneurs, nous avons bâti notre entreprise de peinture. Spécialisés en peinture intérieure et extérieure, nous nous efforçons de fournir des services exceptionnels à nos clients. Ensemble, nous nous sommes lancés dans un voyage visant à transformer notre passion pour la peinture en une entreprise qui nous représente.'
                  : 'Started as young entrepreneurs, we have built our painting company. Specialized in interior painting and external, we strive to provide services exceptional to our customers. Together we launched on a journey to transform our passion for painting into a company that represents us.'}
                <br />
                <br />
              </Text>
              <Text fontWeight="semibold" textColor="#53514E">
                Philippe Beaudoin {currentLang === 'fr' ? 'et' : 'and'} Louis
                Rivest
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Fragment>
  );
}
