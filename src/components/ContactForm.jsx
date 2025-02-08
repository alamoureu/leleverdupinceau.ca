import React, { useState, useContext } from 'react';
import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';
import { FiUser, FiHome, FiPhone, FiMail } from 'react-icons/fi';
import appContext from '../AppProvider';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { sendEmail } from '../sendEmail';

export default function ContactForm() {
  const toast = useToast();
  const { currentLang } = useContext(appContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function updateProp(e, setValue) {
    setValue(e.target.value);
  }

  function resetForm() {
    setName('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setMessage('');
  }

  async function handleClick() {
    const formData = {
      name,
      email,
      phoneNumber,
      message,
    };
    if (name && address && phoneNumber && email && message) {
      const emailBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="text-align: center; color: #2c3e50;">📩 Nouveau Message de Contact</h2>

        <p><strong>📌 Nom:</strong> ${formData.name}</p>
        <p><strong>📍 Adresse:</strong> ${formData.address}</p>
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

        <p style="margin-top: 20px; text-align: right; color: #888;">🕒 <strong>Date de soumission:</strong> ${new Date().toLocaleString()}</p>

        <hr style="margin: 20px 0;">
        <p style="text-align: center; font-size: 12px; color: #777;">
            _Cet email a été envoyé automatiquement._
        </p>
    </div>
`;

      await addDoc(collection(db, 'Contact'), formData);
      await sendEmail('Nouveau message', emailBody);
      resetForm();
    } else {
      toast({
        title: currentLang === 'fr' ? 'Champs manquants' : 'Missing fields',
        description:
          currentLang === 'fr'
            ? 'Veuillez remplir tous les champs requis.'
            : 'Please fill in all required fields.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }

  return (
    <Stack
      py="4"
      alignItems="center"
      gap="4"
      maxW="500px"
      pb="50px"
      w={{ base: '325px', md: '500px' }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiUser color="gray.700" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={currentLang === 'fr' ? 'Nom Complet' : 'Full Name'}
          borderRadius="sm"
          borderColor="gray.200"
          value={name}
          onChange={(e) => updateProp(e, setName)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiHome color="gray.700" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder={
            currentLang === 'fr'
              ? 'Adresse, Code Postal'
              : 'Address, Postal Code'
          }
          borderRadius="sm"
          borderColor="gray.200"
          value={address}
          onChange={(e) => updateProp(e, setAddress)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiPhone color="gray.700" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder={
            currentLang === 'fr' ? 'Numéro de téléphone' : 'Phone Number'
          }
          borderRadius="sm"
          borderColor="gray.200"
          value={phoneNumber}
          onChange={(e) => updateProp(e, setPhoneNumber)}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiMail color="gray.700" />
        </InputLeftElement>
        <Input
          type="email"
          placeholder={currentLang === 'fr' ? 'Courriel' : 'Email'}
          borderRadius="sm"
          borderColor="gray.200"
          value={email}
          onChange={(e) => updateProp(e, setEmail)}
        />
      </InputGroup>
      <Textarea
        w="100%"
        borderColor="gray.200"
        borderWidth="1px"
        borderRadius="sm"
        placeholder={
          currentLang === 'fr'
            ? 'Écrivez votre message ici.'
            : 'Write your message here.'
        }
        value={message}
        onChange={(e) => updateProp(e, setMessage)}
      />
      <Button
        bg="#0056D2"
        color="white"
        w="100%"
        size="sm"
        py="1"
        borderRadius="md"
        onClick={handleClick}
      >
        {currentLang === 'fr' ? 'Envoyer' : 'Send'}
      </Button>
    </Stack>
  );
}
