import React, { useContext } from 'react';
import { Box, Heading, Text, Stack, Container } from '@chakra-ui/react';
import appContext from '../AppProvider';
import SEOHead from '../lelever-next/seo/SEOHead';

export default function PrivacyPolicyPage() {
  const { currentLang } = useContext(appContext);

  const isFr = currentLang === 'fr';

  return (
    <>
      <SEOHead
        title={isFr ? 'Politique de confidentialité | Le Lever du Pinceau' : 'Privacy Policy | Le Lever du Pinceau'}
        description={isFr
          ? 'Comment Le Lever du Pinceau recueille, utilise et protège vos données. Politique de confidentialité.'
          : 'How Le Lever du Pinceau collects, uses and protects your data. Privacy policy.'}
        canonicalPath="/politiques/confidentialite"
      />
    <Container
      maxW="6xl"
      px={{ base: 4, md: 6 }}
      pt={{ base: 8, md: 12 }}
      pb={{ base: 12, md: 16 }}
    >
      <Stack spacing={{ base: 6, md: 8 }}>
        <Stack spacing={2}>
          <Heading size="page" color="gray.800">
            {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
          </Heading>
          <Text textStyle="caption" color="gray.500">
            {isFr
            ? 'Date d’entrée en vigueur : 1er janvier 2023'
            : 'Effective Date: January 1, 2023'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Bienvenue chez Le Lever du Pinceau. Nous nous engageons à protéger la vie privée et la sécurité des renseignements personnels de nos clients. La présente politique de confidentialité décrit comment nous recueillons, utilisons, protégeons et divulguons les informations obtenues via notre site web et nos services.'
              : "Welcome to Le Lever du Pinceau. We are committed to protecting the privacy and security of our clients' personal information. This privacy policy describes how we collect, use, protect, and disclose the information obtained through our website and services."}
          </Text>
        </Stack>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Collecte des informations' : 'Information Collection'}
          </Heading>
          <Text textStyle="body" fontWeight="bold" color="gray.800">
            {isFr ? 'Informations personnelles' : 'Personal Information'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous recueillons les informations personnelles que vous nous fournissez volontairement, notamment votre nom, adresse courriel, numéro de téléphone et autres coordonnées.'
              : 'We collect personal information you voluntarily provide, such as your name, email address, phone number, and other contact details.'}
          </Text>
          <Text mt={2} textStyle="body" fontWeight="bold" color="gray.800">
            {isFr
              ? 'Collecte automatisée de données'
              : 'Automated Data Collection'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous pouvons également recueillir des informations non personnelles par des moyens automatisés tels que les témoins (cookies) et les journaux de serveurs web.'
              : 'We may also collect non-personal information using automated means such as cookies and web server logs.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Utilisation des informations' : 'Use of Information'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Les informations personnelles que vous nous fournissez sont utilisées pour : vous offrir les services demandés, répondre à vos demandes, communiquer avec vous, et avec votre consentement, envoyer des messages promotionnels.'
              : 'The personal information you provide is used to: provide requested services, respond to inquiries, communicate with you, and, with your consent, send promotional messages.'}
          </Text>
          <Text mt={2} textStyle="body" color="gray.700">
            {isFr
              ? 'Nous utilisons également les données pour mieux comprendre l’utilisation de notre site web et améliorer nos services et l’expérience utilisateur.'
              : 'We also use the data to better understand the use of our website and to improve our services and user experience.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Partage des informations' : 'Sharing of Information'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous pouvons partager vos renseignements avec des fournisseurs tiers pour des services comme l’hébergement du site web, l’analyse de données, l’envoi de courriels. Nous pouvons aussi les divulguer si requis par la loi.'
              : 'We may share your information with third-party providers for services such as website hosting, data analysis, and email delivery. We may also disclose your information if required by law.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Sécurité des données' : 'Data Security'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous mettons en œuvre des mesures appropriées pour protéger vos informations personnelles. Toutefois, aucun site Internet n’est entièrement sécurisé.'
              : 'We implement appropriate measures to protect your personal information. However, no internet site is completely secure.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Vos droits' : 'Your Rights'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Vous avez le droit d’accéder à vos renseignements personnels, de les corriger ou de les supprimer. Vous pouvez aussi vous désinscrire de nos communications marketing à tout moment.'
              : 'You have the right to access, correct, or delete your personal information. You may also unsubscribe from our marketing communications at any time.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Protection des enfants' : 'Children’s Privacy'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Notre site web ne s’adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas intentionnellement de renseignements auprès d’eux.'
              : 'Our website is not directed at children under 13, and we do not knowingly collect information from them.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Modifications de la politique' : 'Changes to this Policy'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Le Lever du Pinceau se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.'
              : 'Le Lever du Pinceau reserves the right to modify this privacy policy at any time. Any changes will be posted on this page.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            {isFr ? 'Nous contacter' : 'Contact Us'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Pour toute question concernant notre politique de confidentialité, veuillez nous contacter : 📞 (438) 868-0772'
              : 'For any questions regarding our privacy policy, please contact us: 📞 (438) 868-0772'}
          </Text>
        </Box>
      </Stack>
    </Container>
    </>
  );
}
