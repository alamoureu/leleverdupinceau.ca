import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import HeroSection from '../home-page/HeroSection';
import ServicesSection from '../home-page/ServicesSection';
import WhyUsSection from '../home-page/WhyUsSection';
import TeamSection from '../home-page/TeamSection';
import ReviewsSection from '../home-page/ReviewsSection';
import RecentProjectsSection from '../home-page/RecentProjectsSection';
import SectorsSection from '../home-page/SectorsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import ContactFormSection from '../home-page/ContactFormSection';
import TrustBanner from '../home-page/TrustBanner';

import SubmissionModal from '../home-page/SubmissionModal';

export default function NewHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <HeroSection onSubmissionOpen={onOpen} />

        <TrustBanner />

        <ServicesSection />

        <WhyUsSection onSubmissionOpen={onOpen} />

        <TeamSection />

        <ReviewsSection />

        <RecentProjectsSection />

        <SectorsSection />

        <ResourcesSection />

        <ContactFormSection />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
