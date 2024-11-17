import React, { useContext, useState, useEffect } from 'react';
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
  Image,
  useToast,
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import MidleBarInfo from './MidleBarInfo';
import appContext from './AppProvider';
import axios from 'axios';

import photo from './img/photo_lever_1.jpg';

export default function Nousjoindre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toast = useToast();
  const { currentLang } = useContext(appContext);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
        name: 'Nouvelle communication client',
        title: 'Communication client',
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
      title: currentLang === 'fr' ? 'Contact envoyé' : 'Contact sent',
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
    <Stack w="100%" h="100%" bg="#01101C" gap="0" pt="150px">
      <Stack
        w="100%"
        h={{ base: '100%', lg: '100vh' }}
        gap="4"
        px={{ base: '8', md: '10%' }}
        pb="16"
      >
        <Stack gap="1">
          <Text
            fontSize={{ base: '23px', lg: 'xx-large' }}
            color="white"
            fontWeight="bold"
          >
            {currentLang === 'fr'
              ? 'Joindre Le Lever Du Pinceau'
              : 'Join Le Lever Du Pinceau'}
          </Text>
          <Text fontSize="md" color="white" fontWeight="normal">
            {currentLang === 'fr'
              ? 'Des travaux réalisés professionnellement par des professionnels'
              : 'Work carried out professionally by professionals'}
          </Text>
        </Stack>
        <Stack
          w="100%"
          bg="blue.400"
          gap="4"
          py={{ base: '25px', lg: '50px' }}
          px={{ base: '15px', lg: '20%' }}
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          textColor="black"
        >
          <Stack direction="row">
            <Icon as={AiOutlinePhone} fontSize="30px" />
            <Stack gap="0">
              <Text fontWeight="bold">
                {currentLang === 'fr' ? 'TÉLÉPHONE' : 'PHONE NUMBER'}
              </Text>
              <a href="tel:4388680772">
                <Text>(438) 868-0772</Text>
              </a>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Icon as={AiOutlineMail} fontSize="30px" />
            <Stack gap="0">
              <Text fontWeight="bold">
                {currentLang === 'fr' ? 'COURRIEL' : 'EMAIL'}
              </Text>
              <Text
                textDecor="underline"
                onClick={() =>
                  (window.location = 'mailto:leleverdupinceau@gmail.com')
                }
              >
                leleverdupinceau@gmail.com
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          py="20px"
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          px={{ base: '0', lg: '0%' }}
          textColor="white"
        >
          <Text maxW={{ base: '400px', lg: '600px' }} pb="10px">
            {currentLang === 'fr'
              ? "Peu importe l'envergure de votre projet de peinture résidentielle ou commerciale, nous nous déplaçons partout sur la Rive-Sud, Rive-Nord, Montréal, Estrie et Gatineau. Afin de vous donner l'heure juste, nous offrons la soumission gratuite et sans engagement de votre part. Durant cette rencontre, nous allons évaluer l'étendue de votre projet pour vous donner un échéancier qui sera respecté. Vous n'aurez ainsi aucune mauvaise surprise."
              : 'No matter the size of your residential or commercial painting project, we travel anywhere on the South Shore, North Shore, Montreal, Estrie and Gatineau. In order to give you the facts, we offer a free quote with no obligation on your part. During this meeting, we will assess the scope of your project to give you a schedule that will be respected. You will therefore have no unpleasant surprises.'}{' '}
            <br />
            {currentLang === 'fr'
              ? "Offrez-vous un projet clé en main de qualité supérieure au meilleur prix sur le marché. C'est la promesse que Le Lever Du Pinceau vous fait!"
              : 'Treat yourself to a top quality turnkey project at the best price on the market. This is the promise that Lever Du Pinceau makes to you!'}
          </Text>
          <Image
            src={photo}
            h={{ base: '250px', lg: '400px' }}
            w={{ base: '100%', lg: '550px' }}
          />
        </Stack>
      </Stack>
      <Stack
        px={{ base: '8', md: '10%' }}
        bg="white"
        w="100%"
        alignItems="center"
        justifyContent="center"
        py={{ base: '0px', md: '75px' }}
        gap="8"
      >
        <Stack w="100%" alignItems="center" pt="50px">
          <Text
            fontSize={{ base: '25px', md: '40px' }}
            fontWeight="bold"
            borderRadius="md"
            color="#5BA2EC"
          >
            {currentLang === 'fr'
              ? 'COMMUNIQUEZ AVEC NOUS DÈS MAINTENANT'
              : 'CONTACT US NOW'}
          </Text>
        </Stack>
        <Stack
          py="4"
          alignItems="center"
          gap="4"
          maxW="500px"
          pb="50px"
          w={{ base: '325px', md: '500px' }}
        >
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
            <FormLabel>
              {currentLang === 'fr'
                ? 'Adresse, Code Postal'
                : 'Adress, Postal Code'}
            </FormLabel>
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
            <FormLabel>Message</FormLabel>
            <Textarea
              w="100%"
              borderColor="gray.200"
              borderWidth="1px"
              borderRadius="sm"
              type="textarea"
              size="sm"
              placeholder="Écrivez votre message ici."
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
            onClick={() => email && message && name && handleClick()}
          >
            Envoyer
          </Button>
        </Stack>
      </Stack>
      <MidleBarInfo />
    </Stack>
  );
}
