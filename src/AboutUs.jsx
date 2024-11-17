import React, { useEffect, useContext } from 'react';
import { Image, Stack, Text } from '@chakra-ui/react';
import appContext from './AppProvider';
import img from './img/photo_lever_4.jpg';


export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { currentLang } = useContext(appContext);

  return (
    <Stack pt="110px" h="100%" bg="#01101C">
      <Stack
        px={{ base: '15px', md: '50px' }}
        pb={{ base: '35px', md: '50px' }}
        pt={{ base: '65px', md: '70px' }}
        alignItems="center"
      >
        <Stack
          w={{ base: '100%', md: '70%' }}
          bg="blue.400"
          gap="4"
          py={{ base: '25px', lg: '50px' }}
          px={{ base: '15px', lg: '10%' }}
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          textColor="black"
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
            <Image src={img} w="350px" h="250px" />
          </Stack>
        </Stack>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            direction="row"
            w="100%"
            py={{ base: '25px', lg: '50px' }}
            px={{ base: '15px', lg: '10%' }}
          >
            <Text maxW="650px" textColor="white">
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
              Philippe Beaudoin {currentLang === 'fr' ? 'et' : 'and'} Louis
              Rivest
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}