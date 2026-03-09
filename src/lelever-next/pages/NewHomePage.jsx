'use client';

import React, { Fragment, useContext } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import HeroSection from '../home-page/HeroSection';
import ControlSection from '../home-page/ControlSection';
import ServicesSection from '../home-page/ServicesSection';
import TeamSection from '../home-page/TeamSection';
import ReviewsSection from '../home-page/ReviewsSection';
import MethodSection from '../home-page/MethodSection';
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
      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection onSubmissionOpen={onOpen} pageContext={pageContext} />

        <ControlSection onSubmissionOpen={onOpen} />

        <MethodSection onSubmissionOpen={onOpen} />

        <ServicesSection />

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
