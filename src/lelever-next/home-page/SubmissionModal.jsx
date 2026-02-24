import React, { useState, useEffect, useRef } from 'react';
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
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';

const SUBMISSION_FORM_ID = 'submission-form-modal';

export default function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialFocusRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmissionStateChange = (submitted) => {
    setIsSubmitted(submitted);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="xl"
      initialFocusRef={initialFocusRef}
      returnFocusOnClose
      scrollBehavior="inside"
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent maxH="90vh" display="flex" flexDirection="column">
        {!isSubmitted && (
          <ModalHeader>{t.modalTitle}</ModalHeader>
        )}
        <ModalCloseButton />
        <ModalBody overflowY="auto" flex="1" minH={0} pb={4}>
          <SubmissionForm
            isModal
            formId={SUBMISSION_FORM_ID}
            onSubmissionStateChange={handleSubmissionStateChange}
            onSubmittingChange={setIsSubmitting}
            initialFocusRef={initialFocusRef}
          />
        </ModalBody>
        {!isSubmitted && (
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
