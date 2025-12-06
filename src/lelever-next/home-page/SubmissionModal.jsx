import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';

export default function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset submission state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  const handleSubmissionStateChange = (submitted) => {
    setIsSubmitted(submitted);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: 'sm', md: 'xl' }}
    >
      <ModalOverlay />
      <ModalContent mx={{ base: 0, md: 4 }} borderRadius='xl'>
        {!isSubmitted && (
          <>
            <ModalHeader
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight='bold'
              color='gray.800'
              pb={2}
            >
              {t.modalTitle}
            </ModalHeader>
            <ModalCloseButton />
          </>
        )}
        <ModalBody pb={isSubmitted ? 0 : 6} px={isSubmitted ? 0 : undefined}>
          <SubmissionForm
            onSubmit={handleSubmit}
            onClose={onClose}
            isModal={true}
            onSubmissionStateChange={handleSubmissionStateChange}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
