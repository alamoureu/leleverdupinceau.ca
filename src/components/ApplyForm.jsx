import React, { useState } from 'react';
import {
  useToast,
  Stack,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { sendEmail } from '../sendEmail';

export default function ApplyForm({ lang }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  function updateProp(e, setValue) {
    setValue(e.target.value);
  }

  async function handleClick() {
    if (!name || !address || !phoneNumber || !email) {
      toast({
        title: lang === 'fr' ? 'Erreur' : 'Error',
        description:
          lang === 'fr'
            ? 'Veuillez remplir tous les champs obligatoires.'
            : 'Please fill in all required fields.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }
    const formData = {
      name,
      address,
      phoneNumber,
      email,
      message,
      date: Timestamp.now(),
    };

    const emailBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="text-align: center; color: #2c3e50;">📩 Nouvelle Candidature Reçue</h2>

            <p><strong>📌 Nom:</strong> ${formData.name}</p>
            <p><strong>📍 Code Postal:</strong> ${formData.address}</p>
            <p><strong>✉️ Email:</strong> <a href="mailto:${formData.email}">${
      formData.email
    }</a></p>
            <p><strong>📞 Téléphone:</strong> <a href="tel:${
              formData.phoneNumber
            }">${formData.phoneNumber}</a></p>

            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #3498db; margin-top: 10px;">
                <p><strong>📝 Message:</strong></p>
                <blockquote style="margin: 0; padding-left: 10px; border-left: 3px solid #ccc; color: #555;">"${
                  formData.message || 'Aucun message fourni'
                }"</blockquote>
            </div>

            <p style="margin-top: 20px; text-align: right; color: #888;">🕒 <strong>Date de soumission:</strong> ${new Date(
              formData.date.toDate()
            ).toLocaleString()}</p>

             <hr style="margin: 20px 0;">
        <p style="text-align: center; font-size: 12px; color: #777;">
           Cet email a été envoyé automatiquement via SendMail - Ultimate Email Sender
        </p>
        </div>
    `;
    await addDoc(collection(db, 'Apply'), formData);
    await sendEmail('Nouvelle candidature', emailBody);
    toast({
      title: lang === 'fr' ? 'Candidature envoyée' : 'Candidacy sent',
      description:
        lang === 'fr'
          ? 'Nous allons vous contacter sous peu.'
          : 'We will contact you shortly.',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    });

    setName('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  }

  return (
    <Stack
      gap="4"
      maxW="500px"
      alignItems="center"
      w={{ base: '325px', md: '500px' }}
    >
      <FormControl isRequired textColor="black">
        <InputGroup textColor="black">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiUser} color="gray.700" />
          </InputLeftElement>
          <Input
            type="text"
            borderRadius="sm"
            borderColor="gray.200"
            value={name}
            placeholder="Nom, Prénom"
            onChange={(e) => updateProp(e, setName)}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired textColor="black">
        <InputGroup textColor="black">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiHome} color="gray.700" />
          </InputLeftElement>
          <Input
            type="text"
            borderRadius="sm"
            borderColor="gray.200"
            value={address}
            placeholder={lang === 'fr' ? 'Code postal' : 'Postal code'}
            onChange={(e) => updateProp(e, setAddress)}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired textColor="black">
        <InputGroup textColor="black">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiPhone} color="gray.700" />
          </InputLeftElement>
          <Input
            type="tel"
            borderRadius="sm"
            borderColor="gray.200"
            placeholder={lang === 'fr' ? 'Numéro de téléphone' : 'Phone number'}
            value={phoneNumber}
            onChange={(e) => updateProp(e, setPhoneNumber)}
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired textColor="black">
        <InputGroup textColor="black">
          <InputLeftElement pointerEvents="none">
            <Icon as={FiMail} color="gray.700" />
          </InputLeftElement>
          <Input
            type="email"
            borderRadius="sm"
            borderColor="gray.200"
            value={email}
            placeholder={lang === 'fr' ? 'Courriel' : 'Email'}
            onChange={(e) => updateProp(e, setEmail)}
          />
        </InputGroup>
      </FormControl>

      <FormControl textColor="black">
        <Textarea
          w="100%"
          borderColor="gray.200"
          borderWidth="1px"
          borderRadius="sm"
          type="textarea"
          size="sm"
          placeholder={lang === 'fr' ? 'Message' : 'Message'}
          value={message}
          onChange={(e) => updateProp(e, setMessage)}
        />
      </FormControl>

      <Button
        bg="#0056D2"
        color="white"
        w="100%"
        size="sm"
        py="1"
        borderRadius="md"
        onClick={handleClick}
      >
        {lang === 'fr' ? 'Envoyer' : 'Send'}
      </Button>
    </Stack>
  );
}
