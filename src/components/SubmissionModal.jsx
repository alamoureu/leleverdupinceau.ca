import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import EmbeddedSubmissionForm from './EmbeddedSubmissionForm';

function SubmissionModal({ isOpen, onClose, trackConversion = false }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', sm: 'md', md: 'lg', lg: 'xl' }}
      scrollBehavior="inside"
      blockScrollOnMount
      closeOnOverlayClick
      motionPreset="slideInBottom"
      trapFocus={false}
      aria-labelledby="submission-form-title"
    >
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent
        margin={0}
        minH={{ base: '100vh', sm: '800px' }}
        maxH="100vh"
        maxW={{ base: '100vw', sm: 'min(420px, 94vw)', md: 'min(500px, 92vw)', lg: 'min(580px, 90vw)' }}
        mx={{ base: 0, sm: 4 }}
        my={{ base: 0, sm: 4 }}
        display="flex"
        flexDirection="column"
      >
        <ModalCloseButton
          size="lg"
          borderRadius="full"
          bg="white"
          color="gray.700"
          _hover={{ bg: 'gray.100' }}
          zIndex={10}
          top={3}
          right={3}
        />
        <ModalBody
          p={{ base: 3, sm: 4 }}
          pt={12}
          flex="1"
          minH={0}
          overflowY="auto"
          overscrollBehavior="contain"
        >
          <EmbeddedSubmissionForm isModal trackConversion={trackConversion} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SubmissionModal;
