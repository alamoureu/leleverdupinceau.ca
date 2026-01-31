import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import SubmissionForm from '../lelever-next/home-page/SubmissionForm';
import { useTranslation } from '../lelever-next/i18n';

function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const title = t.contactFormTitle;
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsSuccess(false);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'xl' }}
      scrollBehavior="inside"
      blockScrollOnMount
      closeOnOverlayClick
      motionPreset="scale"
      trapFocus
      returnFocusOnClose
      aria-labelledby={isSuccess ? undefined : 'submission-modal-title'}
    >
      <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
      <ModalContent
        margin={{ base: 4, sm: 4 }}
        minH="auto"
        maxH={{ base: 'calc(100vh - 2rem)', sm: '90vh' }}
        maxW={{ base: 'calc(100vw - 2rem)', sm: 'min(440px, 94vw)', md: 'min(520px, 92vw)', lg: 'min(560px, 90vw)' }}
        mx="auto"
        my={{ base: 4, sm: 4 }}
        borderRadius="xl"
        boxShadow="xl"
        display="flex"
        flexDirection="column"
      >
        {!isSuccess && (
          <ModalHeader
            id="submission-modal-title"
            pt={{ base: 5, sm: 6 }}
            pb={{ base: 3, sm: 4 }}
            px={{ base: 4, sm: 6 }}
            pr={{ base: 12, sm: 14 }}
            fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
            fontWeight="bold"
            color="gray.900"
            lineHeight="tight"
            flexShrink={0}
            textTransform="uppercase"
          >
            {title}
          </ModalHeader>
        )}
        <ModalCloseButton
          position="absolute"
          top={{ base: 4, sm: 5 }}
          right={{ base: 4, sm: 5 }}
          size="md"
          bg="white"
          color="gray.600"
          _hover={{ bg: 'white', color: 'gray.800' }}
          _focus={{ boxShadow: '0 0 0 2px var(--chakra-colors-blue-400)' }}
          aria-label={t.modalCloseLabel}
        />
        <ModalBody
          pt={{ base: 2, sm: 3 }}
          px={{ base: 4, sm: 6 }}
          pb={0}
          flex="1"
          minH={0}
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <SubmissionForm isModal onSubmissionStateChange={setIsSuccess} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SubmissionModal;
