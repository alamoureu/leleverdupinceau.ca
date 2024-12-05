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
import axios from 'axios';
import appContext from '../AppProvider';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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

  async function sendEmail() {
    const content = {
      name,
      address,
      telephone: phoneNumber,
      courriel: email,
      message,
      date: Timestamp.now(),
    };

    const options = {
      method: 'POST',
      url: 'https://mail-sender-api1.p.rapidapi.com/',
      headers: {
        'x-rapidapi-key': '4bee346de9msh5ed1f6bb9bcc083p1cef0ejsn71c1549fb036',
        'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        ishtml: 'false',
        sendto: 'leleverdupinceau@gmail.com',
        name: 'Nouvelle communication client',
        title: 'Communication client',
        body: JSON.stringify(content),
      },
    };

    try {
      await axios.request(options);
      toast({
        title: currentLang === 'fr' ? 'Contact envoyé' : 'Contact sent',
        description:
          currentLang === 'fr'
            ? 'Nous allons vous contactez sous peu.'
            : 'We will contact you shortly.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      resetForm();
    } catch (error) {
      toast({
        title: currentLang === 'fr' ? 'Erreur' : 'Error',
        description:
          currentLang === 'fr'
            ? 'Une erreur est survenue. Veuillez réessayer plus tard.'
            : 'An error occurred. Please try again later.',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
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
      await addDoc(collection(db, 'Contact'), formData);
      sendEmail();
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
