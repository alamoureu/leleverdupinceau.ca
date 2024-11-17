import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import SoumissionForm from '../landing-page/SoumissionForm';

export default function SubmissionModal({ isOpen, onClose, lang }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="0" pb="5">
        <ModalHeader>
          <Stack w="100%" alignItems="center">
            <Text
              fontSize="2xl"
              fontWeight="bold"
              borderRadius="md"
              color="#0056D2"
            >
              {lang === 'fr'
                ? 'OBTENIR UNE SOUMISSION GRATUITE'
                : 'GET A FREE QUOTE'}
            </Text>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody px="15px">
          <SoumissionForm lang={lang} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
