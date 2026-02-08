import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import SubmissionForm from './SubmissionForm';
import { useTranslation } from '../i18n';

const MODAL_PX = { base: 5, md: 6 };

export default function SubmissionModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialFocusRef = useRef(null);

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
        mx={{ base: 2, md: 4 }}
        borderRadius='xl'
        maxH={{ base: '95vh', md: '90vh' }}
        display='flex'
        flexDirection='column'
        overflow='hidden'
      >
        <Box
          flex={1}
          minH={0}
          display='flex'
          flexDirection='column'
          px={MODAL_PX}
          overflow='hidden'
        >
          {!isSubmitted && (
            <Flex
              align='center'
              justify='space-between'
              gap={3}
              pt={4}
              pb={2}
              flexShrink={0}
            >
              <Heading
                as='h2'
                size='md'
                textStyle='stat'
                fontWeight='bold'
                color='gray.800'
                flex={1}
                noOfLines={1}
              >
                {t.modalTitle}
              </Heading>
              <ModalCloseButton position='relative' top={0} right={0} />
            </Flex>
          )}
          <ModalBody
            p={0}
            flex={1}
            minH={0}
            overflowY='auto'
            overflowX='visible'
            display='flex'
            flexDirection='column'
            pb={isSubmitted ? 0 : 3}
          >
            <SubmissionForm
              isModal
              onSubmissionStateChange={handleSubmissionStateChange}
              initialFocusRef={initialFocusRef}
            />
          </ModalBody>
        </Box>
      </ModalContent>
    </Modal>
  );
}
