import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Stack,
  Text,
  Box,
  Image,
} from '@chakra-ui/react';
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';
import { thumbnailForRoute } from '../constants/routeThumbnails';
import whiteLogo from '../images/shared/whitelogo.webp';
import formInteriorImage from '../images/landing/form-interior.webp';

const SUBMISSION_FORM_ID = 'submission-form-modal';

const SERVICE_BANNER = {
  interior: {
    image: formInteriorImage,
    altKey: 'serviceInterior',
  },
  exterior: {
    image: thumbnailForRoute('/services/peinture-exterieure'),
    altKey: 'serviceExterior',
  },
};

function serviceBanner(paintingType) {
  return SERVICE_BANNER[paintingType] ?? null;
}

export default function SubmissionModal({ isOpen, onClose, paintingType }) {
  const { t } = useTranslation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const banner = serviceBanner(paintingType);
  const hasImageHeader = Boolean(banner) && !isSuccess;

  useEffect(() => {
    if (!isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
      scrollBehavior="outside"
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent
        maxH={{ base: '100dvh', md: '98vh' }}
        my={{ base: 2, md: 3 }}
        display="flex"
        flexDirection="column"
        overflow="hidden"
        p={0}
      >
        {hasImageHeader && (
          <Box
            position="relative"
            flexShrink={0}
            h={{ base: '200px', sm: '240px', md: '280px' }}
            overflow="hidden"
          >
            <Image
              src={banner.image}
              alt={t[banner.altKey]}
              w="100%"
              h="100%"
              objectFit="cover"
              objectPosition="center"
            />
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.72) 100%)"
            />
            <Image
              src={whiteLogo}
              alt="Le Lever du Pinceau"
              position="absolute"
              top={{ base: 3.5, sm: 4 }}
              left={{ base: 4, sm: 5 }}
              h={{ base: '48px', sm: '56px' }}
              w={{ base: '78px', sm: '90px' }}
              objectFit="contain"
              objectPosition="left center"
              htmlWidth={1409}
              htmlHeight={873}
              zIndex={1}
              style={{
                maxWidth: 90,
                maxHeight: 56,
                objectFit: 'contain',
              }}
            />
            <Stack
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              spacing={1}
              px={{ base: 4, sm: 5 }}
              pb={{ base: 3.5, sm: 4 }}
              pr={{ base: 12, sm: 14 }}
            >
              <Text
                id="submission-modal-title"
                fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                fontWeight="bold"
                color="white"
                lineHeight="tight"
                textTransform="uppercase"
              >
                {t.modalTitle}
              </Text>
              <Text
                fontWeight="medium"
                fontSize={{ base: 'sm', sm: 'md' }}
                color="whiteAlpha.900"
                lineHeight="1.4"
              >
                {t[banner.altKey]} · {t.ctaSubtitle ?? 'en moins de 24h'}
              </Text>
            </Stack>
          </Box>
        )}

        {!isSuccess && !hasImageHeader && (
          <ModalHeader
            id="submission-modal-title"
            pt={{ base: 4, sm: 5 }}
            pb={{ base: 2, sm: 3 }}
            px={{ base: 4, sm: 6 }}
            pr={{ base: 12, sm: 14 }}
            fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="gray.900"
            lineHeight="tight"
            flexShrink={0}
            textTransform="uppercase"
          >
            <Stack spacing={1}>
              <Text>{t.modalTitle}</Text>
              <Text
                textTransform="none"
                fontWeight="medium"
                fontSize={{ base: 'sm', sm: 'md' }}
                color="gray.600"
              >
                {t.ctaSubtitle ?? 'en moins de 24h'}
              </Text>
            </Stack>
          </ModalHeader>
        )}

        <ModalCloseButton
          color={hasImageHeader ? 'white' : undefined}
          _hover={hasImageHeader ? { bg: 'whiteAlpha.300' } : undefined}
          zIndex={2}
        />

        <ModalBody overflow="visible" flex="1" px={0} pt={hasImageHeader ? 2 : 0} pb={0}>
          <SubmissionForm
            isModal
            formId={SUBMISSION_FORM_ID}
            paintingType={paintingType}
            onSubmissionStateChange={setIsSuccess}
            onSubmittingChange={setIsSubmitting}
          />
        </ModalBody>
        {!isSuccess && (
          <ModalFooter display="flex" flexDirection="column" gap={3} pt={5} pb={4}>
            <Button
              form={SUBMISSION_FORM_ID}
              type="submit"
              variant="cta"
              w="100%"
              maxW="100%"
              h="40px"
              minH="40px"
              fontSize="md"
              borderRadius="full"
              isLoading={isSubmitting}
              loadingText={t.formSubmitting}
              spinnerPlacement="start"
              disabled={isSubmitting}
            >
              {t.formSubmit}
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
