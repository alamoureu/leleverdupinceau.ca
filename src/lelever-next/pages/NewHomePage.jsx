import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import HeroSection from '../home-page/HeroSection';
import ControlSection from '../home-page/ControlSection';
import ServicesSection from '../home-page/ServicesSection';
import TeamSection from '../home-page/TeamSection';
import ReviewsSection from '../home-page/ReviewsSection';
import RecentProjectsSection from '../home-page/RecentProjectsSection';
import SectorsSection from '../home-page/SectorsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import ContactFormSection from '../home-page/ContactFormSection';
import FinalCTASection from '../home-page/FinalCTASection';
import appContext from '../../AppProvider';

import SubmissionModal from '../home-page/SubmissionModal';

export default function NewHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const pageContext = isFr ? 'Accueil' : 'Home';

  return (
    <Fragment>
      <Helmet>
        <title>
          Services de peinture résidentielle & commerciale à Montréal | Le Lever
          du Pinceau
        </title>
        <meta
          name='description'
          content='Services de peinture résidentielle et commerciale à Montréal. Un service professionnel, rapide et impeccable pour tous vos projets intérieurs et extérieurs. Demandez votre soumission gratuite.'
        />
        <meta
          name='keywords'
          content='Peinture résidentielle Montréal, Peinture commerciale Montréal, Services de peinture, Devis peinture Montréal'
        />
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <HeroSection onSubmissionOpen={onOpen} pageContext={pageContext} />

        <ControlSection onSubmissionOpen={onOpen} />

        <ServicesSection />

        <RecentProjectsSection pageContext={pageContext} />

        <TeamSection pageContext={pageContext} />

        <ReviewsSection />

        <SectorsSection pageContext={pageContext} disableLinks={true} />

        <ResourcesSection />

        <ContactFormSection />

        <FinalCTASection onSubmissionOpen={onOpen} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
