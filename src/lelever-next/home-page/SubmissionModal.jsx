import React, { useState, useEffect, useRef } from 'react';
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
  const initialFocusRef = useRef(null);

  // Reset submission state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
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
      size={{ base: 'sm', md: 'xl' }}
      initialFocusRef={initialFocusRef}
      returnFocusOnClose
    >
      <ModalOverlay />
      <ModalContent
        mx={{ base: 0, md: 4 }}
        borderRadius='xl'
        maxH={{ base: '90vh', md: '85vh' }}
        display='flex'
        flexDirection='column'
      >
        {!isSubmitted && (
          <>
            <ModalHeader
              textStyle="stat"
              fontWeight='bold'
              color='gray.800'
              pb={2}
              flexShrink={0}
            >
              {t.modalTitle}
            </ModalHeader>
            <ModalCloseButton />
          </>
        )}
        <ModalBody
          pb={isSubmitted ? 0 : 6}
          px={isSubmitted ? 0 : undefined}
          flex={1}
          minH={0}
          overflow='hidden'
          display='flex'
          flexDirection='column'
        >
          <SubmissionForm
            onSubmissionStateChange={handleSubmissionStateChange}
            initialFocusRef={initialFocusRef}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
