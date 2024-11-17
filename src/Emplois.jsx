import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  InputGroup,
  InputLeftElement,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import appContext from './AppProvider';
import axios from 'axios';

export default function Emplois() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { currentLang } = useContext(appContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  var content = {
    name: name,
    address: address,
    telephone: phoneNumber,
    courriel: email,
    message: message,
  };

  function updateProp(e, setValue) {
    setValue(e.target.value);
  }

  async function sendEmail() {
    const options = {
      method: 'POST',
      url: 'https://rapidmail.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4bee346de9msh5ed1f6bb9bcc083p1cef0ejsn71c1549fb036',
        'X-RapidAPI-Host': 'rapidmail.p.rapidapi.com',
      },
      data: {
        ishtml: 'false',
        sendto: 'leleverdupinceau@gmail.com',
        name: 'Nouvelle candidature',
        title: 'Détails de la candidature',
        body: JSON.stringify(content),
      },
    };

    try {
      await axios.request(options);
    } catch (error) {}
  }

  function handleClick() {
    sendEmail();
    toast({
      title: currentLang === 'fr' ? 'Candidature envoyé' : 'Candidacy sent',
      description:
        currentLang === 'fr'
          ? 'Nous allons vous contactez sous peux.'
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
    <Stack w="100%" h="100%" gap="0" pt="125px" bg="#01101C">
      <Stack
        direction="column"
        h={{ base: 'fit-content', lg: '400px' }}
        py="30px"
        px={{ base: '20px', md: '10%' }}
        justifyContent="center"
      >
        <Stack bg="blue.400" p="25px" textColor="blue.900" py="40px">
          <Text
            fontSize={{ base: '25px', lg: 'xx-large' }}
            fontWeight="extrabold"
            textColor="blue.50"
          >
            {currentLang === 'fr'
              ? "Rejoignez l'équipe de Peinture"
              : 'Join the Painting team'}
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold">
            {currentLang === 'fr'
              ? 'Vous souhaitez rejoindre une équipe dynamique, jeune et formée de peintres professionnels ?'
              : 'You would like to join a dynamic, young team made up of professional painters ?'}
          </Text>
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="semibold"
            maxW="750px"
          >
            {currentLang === 'fr'
              ? "Envoyez votre candidature au Lever Du Pinceau ! Nous cherchons des employés motivés et travaillants qui souhaitent intervenir sur des projets résidentiels et commerciaux sur l'île de Montréal."
              : 'Send your application to Lever Du Pinceau! We are looking for motivated and hardworking employees who wish to intervene on residential and commercial projects on the island of Montreal.'}
          </Text>
        </Stack>
      </Stack>
      <Stack
        bg="white"
        px={{ base: '15px', lg: '20%' }}
        w="100%"
        alignItems="center"
        zIndex="overlay"
      >
        <Stack
          gap="4"
          maxW="500px"
          pb="100px"
          alignItems="center"
          pt="75px"
          w={{ base: '325px', md: '500px' }}
        >
          <Text
            fontSize={{ base: '23px', lg: 'x-large' }}
            color="black"
            fontWeight="semibold"
          >
            {currentLang === 'fr'
              ? 'Envoyez-nous votre candidature'
              : 'Send us your application'}
          </Text>

          <FormControl textColor="black">
            <FormLabel>
              {currentLang === 'fr' ? 'Nom Complet' : 'Full Name'}
            </FormLabel>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiUser} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={name}
                onChange={(e) => updateProp(e, setName)}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black" isRequired>
            <FormLabel>{currentLang === 'fr' ? 'Ville' : 'City'}</FormLabel>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiHome} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={address}
                onChange={(e) => updateProp(e, setAddress)}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black" isRequired>
            <FormLabel>
              {currentLang === 'fr' ? 'Numéro de téléphone' : 'Phone number'}
            </FormLabel>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiPhone} color="gray.700" />
              </InputLeftElement>
              <Input
                type="tel"
                borderRadius="sm"
                borderColor="gray.200"
                value={phoneNumber}
                onChange={(e) => updateProp(e, setPhoneNumber)}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black">
            <FormLabel>{currentLang === 'fr' ? 'Courriel' : 'Email'}</FormLabel>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} color="gray.700" />
              </InputLeftElement>
              <Input
                type="email"
                borderRadius="sm"
                borderColor="gray.200"
                value={email}
                onChange={(e) => updateProp(e, setEmail)}
              />
            </InputGroup>
            <FormHelperText textColor="black">
              {currentLang === 'fr'
                ? 'Nous ne partagerons jamais ses informations'
                : 'We will never share his information'}
            </FormHelperText>
          </FormControl>
          <FormControl textColor="black">
            <FormLabel>
              {currentLang === 'fr' ? 'Message' : 'Message'}
            </FormLabel>
            <Textarea
              w="100%"
              borderColor="gray.200"
              borderWidth="1px"
              borderRadius="sm"
              type="textarea"
              size="sm"
              placeholder={
                currentLang === 'fr'
                  ? 'Écrivez votre message ici.'
                  : 'Write your message here.'
              }
              value={message}
              onChange={(e) => updateProp(e, setMessage)}
            />
          </FormControl>
          <Button
            bg="#5BA2EC"
            color="white"
            w="100%"
            size="sm"
            py="1"
            borderRadius="sm"
            onClick={() => handleClick()}
          >
            {currentLang === 'fr' ? 'Envoyer' : 'Send'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
