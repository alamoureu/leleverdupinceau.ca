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
} from '@chakra-ui/react';
import SubmissionForm from '../lelever-next/home-page/SubmissionForm';
import { useTranslation } from '../lelever-next/i18n';

const SUBMISSION_FORM_ID = 'submission-form-modal';

function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
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
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody overflowY="auto" flex="1" minH={0} pb={4}>
          <SubmissionForm
            isModal
            formId={SUBMISSION_FORM_ID}
            onSubmissionStateChange={setIsSuccess}
            onSubmittingChange={setIsSubmitting}
          />
        </ModalBody>
        {!isSuccess && (
          <ModalFooter>
            <Button
              form={SUBMISSION_FORM_ID}
              type="submit"
              colorScheme="brand"
              size="lg"
              w="100%"
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

export default SubmissionModal;
