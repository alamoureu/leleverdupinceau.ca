import React, { useContext } from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';

export default function TermsOfUse() {
  const { currentLang } = useContext(appContext);

  const isFr = currentLang === 'fr';

  return (
    <Container
      maxW="6xl"
      px={{ base: 4, md: 6 }}
      pt={{ base: 8, md: 12 }}
      pb={{ base: 12, md: 16 }}
    >
      <Stack spacing={{ base: 6, md: 8 }}>
        <Stack spacing={2}>
          <Heading size="page" color="gray.800">
            {isFr
            ? "Conditions générales d'utilisation"
            : 'Terms and Conditions of Use'}
          </Heading>
        <Text textStyle="caption" color="gray.500">
          {isFr
            ? 'Date d’entrée en vigueur : 1er janvier 2023'
            : 'Effective Date: January 1, 2023'}
        </Text>

        <Box>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Bienvenue chez Le Lever du Pinceau ! Merci de visiter notre site web. En accédant à notre site ou en utilisant nos services, vous acceptez d’être lié par les présentes conditions générales. Veuillez les lire attentivement.'
              : 'Welcome to Le Lever du Pinceau! Thank you for visiting our website. By accessing our site or using our services, you agree to be bound by these terms. Please read them carefully.'}
          </Text>
        </Box>
        </Stack>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            1.{' '}
            {isFr
              ? 'Consentement aux communications'
              : 'Consent to Communications'}
          </Heading>
          <Text textStyle="body" fontWeight="bold" color="gray.800">
            {isFr
              ? 'Inscription aux communications'
              : 'Subscription to Communications'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'En remplissant un formulaire ou en nous fournissant vos coordonnées, vous consentez à recevoir des communications telles que : messages texte (SMS), courriels, appels téléphoniques.'
              : 'By filling out a form or providing your contact details, you consent to receiving communications such as text messages (SMS), emails, and phone calls.'}
          </Text>
          <Text mt={2} textStyle="body" fontWeight="bold" color="gray.800">
            {isFr ? 'Objet des communications' : 'Purpose of Communications'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Ces communications peuvent porter sur des mises à jour de nos services, des offres promotionnelles, des infolettres et autres informations liées à nos activités.'
              : 'These communications may include updates about our services, promotional offers, newsletters, and other information related to our activities.'}
          </Text>
          <Text mt={2} textStyle="body" fontWeight="bold" color="gray.800">
            {isFr ? 'Options de désabonnement' : 'Unsubscribe Options'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Vous pouvez vous désinscrire à tout moment. Chaque message contient les instructions pour se désabonner.'
              : 'You may unsubscribe at any time. Each message contains instructions on how to opt out.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            2. {isFr ? 'Utilisation des informations' : 'Use of Information'}
          </Heading>
          <Text textStyle="body" fontWeight="bold" color="gray.800">
            {isFr ? "Collecte d'informations" : 'Information Collection'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous collectons les renseignements personnels comme votre nom, courriel et numéro de téléphone.'
              : 'We collect personal information such as your name, email, and phone number.'}
          </Text>
          <Text mt={2} textStyle="body" fontWeight="bold" color="gray.800">
            {isFr ? 'Utilisation des informations' : 'Use of Information'}
          </Text>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Ces données sont utilisées pour vous offrir les services demandés, améliorer nos services et à des fins de communication et de marketing.'
              : 'This data is used to provide the requested services, improve our services, and for communication and marketing purposes.'}
          </Text>
          <Text mt={2} textStyle="body" color="gray.700">
            {isFr
              ? "Pour plus d'informations, veuillez consulter notre Politique de confidentialité (lien à insérer)."
              : 'For more information, please refer to our Privacy Policy (link to be inserted).'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            3. {isFr ? 'Clause de non-responsabilité' : 'Disclaimer'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? "Le contenu du site est fourni à titre informatif uniquement. Le Lever du Pinceau ne garantit pas l'exactitude ou l'exhaustivité des informations et décline toute responsabilité en cas d’erreurs ou d’omissions."
              : 'The website content is provided for general informational purposes only. Le Lever du Pinceau does not guarantee the accuracy or completeness of the information and disclaims any liability for errors or omissions.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            4.{' '}
            {isFr ? 'Limitation de responsabilité' : 'Limitation of Liability'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? "Nous ne pouvons être tenus responsables de tout dommage résultant de l'utilisation ou non-utilisation du site, du contenu affiché ou des services obtenus via le site."
              : 'We shall not be held liable for any damages resulting from the use or inability to use the website, the content displayed, or the services obtained through the site.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            5. {isFr ? 'Modifications des conditions' : 'Changes to Terms'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Nous nous réservons le droit de modifier les présentes conditions à tout moment. Toute utilisation continue du site après publication des modifications vaut acceptation.'
              : 'We reserve the right to modify these terms at any time. Continued use of the site after changes are posted constitutes acceptance of those changes.'}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="subsection" color="gray.800" mb={3}>
            6. {isFr ? 'Nous contacter' : 'Contact Us'}
          </Heading>
          <Text textStyle="body" color="gray.700">
            {isFr
              ? 'Pour toute question concernant ces conditions générales, veuillez nous contacter : 📞 (438) 868-0772'
              : 'For any questions regarding these terms, please contact us: 📞 (438) 868-0772'}
          </Text>
        </Box>
      </Stack>
    </Container>
  );
}
