import React from 'react';
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

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
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
        <ModalHeader
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight='bold'
          color='gray.800'
          pb={2}
        >
          {t.modalTitle}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <SubmissionForm
            onSubmit={handleSubmit}
            onClose={onClose}
            isModal={true}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
