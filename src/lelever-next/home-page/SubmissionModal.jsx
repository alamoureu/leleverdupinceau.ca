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
  Link,
} from '@chakra-ui/react';
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';
import appContext from '../../AppProvider';

const SUBMISSION_FORM_ID = 'submission-form-modal';
const BRAND_BLUE = '#1E4BBA';
const BRAND_BLUE_HOVER = '#183D9A';

export default function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { currentLang } = React.useContext(appContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <ModalContent maxH="90vh" display="flex" flexDirection="column">
        {!isSuccess && (
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
        <ModalCloseButton />
        <ModalBody overflowY="auto" overflowX="visible" flex="1" minH={0} px={0} pt={0} pb={0}>
          <SubmissionForm
            isModal
            formId={SUBMISSION_FORM_ID}
            onSubmissionStateChange={setIsSuccess}
            onSubmittingChange={setIsSubmitting}
            fields={{
              name: true,
              phone: true,
              email: true,
              address: false,
              paintingType: false,
              projectDetails: 'optional',
            }}
            phoneFirst
            projectDetailsLabel={currentLang === 'fr' ? 'Description du projet' : 'Project description'}
          />
        </ModalBody>
        {!isSuccess && (
          <ModalFooter display="flex" flexDirection="column" gap={3}>
            <Button
              form={SUBMISSION_FORM_ID}
              type="submit"
              bg={BRAND_BLUE}
              color="white"
              size="lg"
              w="100%"
              borderRadius="full"
              isLoading={isSubmitting}
              loadingText={t.formSubmitting}
              spinnerPlacement="start"
              disabled={isSubmitting}
              _hover={{ bg: BRAND_BLUE_HOVER }}
            >
              {t.formSubmit}
            </Button>
            <Box fontSize={{ base: 'xs', md: 'sm' }} color="gray.500" textAlign="center" lineHeight="1.5" px={1}>
              {currentLang === 'fr' ? 'En soumettant ce formulaire, vous acceptez les' : 'By submitting this form, you agree to the'}{' '}
              <Link href="/politiques/termes-conditions" color="#1E4BBA" textDecoration="underline" _hover={{ color: '#183D9A' }}>
                {t.formTermsAndConditions}
              </Link>{' '}
              {t.formAnd}{' '}
              <Link href="/politiques/confidentialite" color="#1E4BBA" textDecoration="underline" _hover={{ color: '#183D9A' }}>
                {t.formPrivacyPolicy}
              </Link>
            </Box>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
