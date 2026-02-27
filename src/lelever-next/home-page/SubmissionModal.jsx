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
  Heading,
} from '@chakra-ui/react';
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';

const SUBMISSION_FORM_ID = 'submission-form-modal';
const MODAL_PX = { base: 4, md: 6 };
const MODAL_HEADER_PT = { base: 4, md: 5 };
const MODAL_HEADER_PB = { base: 2, md: 3 };
const MODAL_BODY_PB = { base: 4, md: 5 };

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
      scrollBehavior='outside'
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
              <Heading
                as='h2'
                size='sm'
                textStyle='stat'
                fontWeight='bold'
                color='gray.800'
                flex={1}
                noOfLines={1}
              >
                {t.modalTitle}
              </Heading>
              <ModalCloseButton position='relative' top={0} right={0} />
            </Button>
          </ModalFooter>
          )}
      </ModalContent>
    </Modal>
  );
}
