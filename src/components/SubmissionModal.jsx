import React from 'react';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import EmbeddedSubmissionForm from './EmbeddedSubmissionForm';

export default function SubmissionModal({ isOpen, onClose, lang }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="0">
        <ModalBody p="0" maxH="800px">
          <EmbeddedSubmissionForm isModal={true} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
