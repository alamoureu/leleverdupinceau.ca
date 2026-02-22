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

const MODAL_PX = { base: 6, md: 8 };
const MODAL_HEADER_PT = { base: 6, md: 7 };
const MODAL_HEADER_PB = { base: 4, md: 5 };
const MODAL_BODY_PB = { base: 6, md: 7 };

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
      size={{ base: 'full', sm: 'xl' }}
      initialFocusRef={initialFocusRef}
      returnFocusOnClose
      scrollBehavior='inside'
    >
      <ModalOverlay />
      <ModalContent
        mx={{ base: 0, sm: 4 }}
        my={{ base: 0, sm: 'auto' }}
        maxH={{ base: '100vh', sm: '90vh' }}
        borderRadius={{ base: 0, sm: 'xl' }}
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
              pt={MODAL_HEADER_PT}
              pb={MODAL_HEADER_PB}
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
            pt={0}
            flex={1}
            minH={0}
            overflowY='auto'
            overflowX='hidden'
            display='flex'
            flexDirection='column'
            pb={isSubmitted ? 0 : MODAL_BODY_PB}
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
