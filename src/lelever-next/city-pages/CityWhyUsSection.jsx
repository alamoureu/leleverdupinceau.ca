import React, { useContext } from 'react';
import { Button, Link } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import { SECTION_PY } from '../constants/sectionSpacing';
import ServiceWhyUsSection from '../services-pages/components/ServiceWhyUsSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';

/** Toujours juste après TrustBanner : pt = air sous la carte (évite le double padding d'un Container parent). */
export default function CityWhyUsSection({
  cityName,
  whyUsContent,
  whyUsIntroText,
  customTitle,
  localInsight,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? cityName === 'Montréal'
      ? 'Une équipe de peintres basée dans le Grand Montréal'
      : cityName === 'Brossard'
        ? 'Une équipe de peintres professionnels sur la Rive-Sud'
        : cityName === 'Laval'
          ? 'Une équipe de peintres professionnels basée près de Laval'
          : cityName === 'Longueuil'
            ? 'Une équipe locale, rapide et expérimentée'
            : `Une équipe de peintres professionnels à ${cityName}`
    : cityName === 'Montreal'
      ? 'A team of painters based in Greater Montreal'
      : cityName === 'Brossard'
        ? 'A team of professional painters on the South Shore'
        : cityName === 'Laval'
          ? 'A team of professional painters based near Laval'
          : cityName === 'Longueuil'
            ? 'A local, fast and experienced team'
            : `A team of professional painters in ${cityName}`;

  const fallbackContent = isFr
    ? `Contenu à compléter avec les avantages spécifiques à ${cityName}.`
    : `Content to be completed with specific advantages for ${cityName}.`;

  return (
    <ServiceWhyUsSection
      title={customTitle || defaultTitle}
      subtitle={localInsight}
      content={whyUsContent || fallbackContent}
      introText={whyUsIntroText}
      centered
      pt={TRUST_BANNER_BELOW_PT}
      pb={SECTION_PY}
    >
      <Link
        href="/peintre-professionnel"
        _hover={{ textDecoration: 'none' }}
        w="auto"
        mt={4}
        display="inline-block"
      >
        <Button
          variant="ctaOutline"
          rightIcon={<ArrowForwardIcon />}
          borderRadius="full"
          fontSize={{ base: 'sm', md: 'md' }}
          px={{ base: 5, md: 7 }}
          py={{ base: 3, md: 4 }}
          whiteSpace="normal"
          textAlign="center"
          lineHeight="1.4"
          h="auto"
          minH="48px"
        >
          {isFr ? 'En savoir plus' : 'Learn more'}
        </Button>
      </Link>
    </ServiceWhyUsSection>
  );
}
