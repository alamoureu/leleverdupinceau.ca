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
import axios from 'axios';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

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

  async function sendEmail() {
    const stringBody = JSON.stringify({
      name: name,
      address: address,
      telephone: phoneNumber,
      courriel: email,
      message: message,
    });
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
        sendto: 'leleverdupinceau@gmail.com',
        name: 'Nouvelle candidature',
        replyTo: 'leleverdupinceau@gmail.com',
        ishtml: 'false',
        title: 'Nouvelle candidature de ' + name,
        body: stringBody,
      },
    };

    await axios.request(options);
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
    };

    await addDoc(collection(db, 'Apply'), formData);
    sendEmail();
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
