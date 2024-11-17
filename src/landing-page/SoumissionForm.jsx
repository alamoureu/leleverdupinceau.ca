import React, { useContext, useState, useEffect } from 'react';
import {
  Button,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  InputGroup,
  InputLeftElement,
  Icon,
  Radio,
  RadioGroup,
  Flex,
  Tag,
  useToast,
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import appContext from '../AppProvider';
import axios from 'axios';

export default function SoumissionForm() {
  const { currentLang } = useContext(appContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [typePeinture, setTypePeinture] = useState('');
  const [besoinPeinture, setBesoinPeinture] = useState([]);
  const [message, setMessage] = useState('');
  const toast = useToast();

  const tags = [
    { label: 'Plinthes', value: 'Plinthes', category: 'Peinture Intérieur' },
    { label: 'Portes', value: 'Portes', category: 'Peinture Intérieur' },
    { label: 'Plafonds', value: 'Plafonds', category: 'Peinture Intérieur' },
    { label: 'Moulures', value: 'Moulures', category: 'Peinture Intérieur' },
    {
      label: 'Rampes d’escalier',
      value: 'Rampes d’escalier',
      category: 'Peinture Intérieur',
    },
    {
      label: 'Marches et contremarches',
      value: 'Marches et contremarches',
      category: 'Peinture Intérieur',
    },
    {
      label: 'Planchers et escaliers',
      value: 'Planchers et escaliers',
      category: 'Peinture Intérieur',
    },
    { label: 'Planchers', value: 'Planchers', category: 'Peinture Intérieur' },
    { label: 'Armoires', value: 'Armoires', category: 'Peinture Intérieur' },
    { label: 'Balcon', value: 'Balcon', category: 'Peinture Extérieur' },
    {
      label: 'Portes d’entrée et de garage',
      value: 'Portes d’entrée et de garage',
      category: 'Peinture Extérieur',
    },
    { label: 'Volets', value: 'Volets', category: 'Peinture Extérieur' },
    { label: 'Soffites', value: 'Soffites', category: 'Peinture Extérieur' },
    {
      label: 'Revêtements extérieure',
      value: 'Revêtements extérieure',
      category: 'Peinture Extérieur',
    },
    {
      label: 'Fondations',
      value: 'Fondations',
      category: 'Peinture Extérieur',
    },
    {
      label: 'Treillis d’intimité',
      value: 'Treillis d’intimité',
      category: 'Peinture Extérieur',
    },
    { label: 'Clôtures', value: 'Clôtures', category: 'Peinture Extérieur' },
    {
      label: 'Cadres de fenêtres',
      value: 'Cadres de fenêtres',
      category: 'Peinture Extérieur',
    },
  ];

  function addBesoin(besoin) {
    if (!besoinPeinture.includes(besoin)) {
      setBesoinPeinture([...besoinPeinture, besoin]);
    } else {
      const updatedBesoinPeinture = besoinPeinture.filter(
        (item) => item !== besoin
      );
      setBesoinPeinture(updatedBesoinPeinture);
    }
  }

  function handleChange(value, setValue) {
    setValue(value);
  }

  useEffect(() => {
    setBesoinPeinture([]);
  }, [typePeinture]);

  async function sendEmail() {
    const stringBody = JSON.stringify({
      name,
      address,
      email,
      tel,
      typePeinture,
      besoinPeinture,
      message,
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
        name: 'Nouvelle soumission',
        replyTo: 'leleverdupinceau@gmail.com',
        ishtml: 'false',
        title: 'Nouvelle soumission pour ' + name,
        body: stringBody,
      },
    };

    try {
      await axios.request(options);
    } catch (error) {
      console.error(error);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !address ||
      !email ||
      !tel ||
      !typePeinture ||
      besoinPeinture.length === 0
    ) {
      toast({
        title: currentLang === 'fr' ? 'Erreur' : 'Error',
        description:
          currentLang === 'fr'
            ? 'Veuillez remplir tous les champs obligatoires.'
            : 'Please fill in all required fields.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    sendEmail();
    toast({
      title: currentLang === 'fr' ? 'Soumission envoyée' : 'Submission sent',
      description:
        currentLang === 'fr'
          ? 'Nous allons vous contacter sous peu.'
          : 'We will contact you shortly.',
      status: 'success',
      duration: 4000,
      isClosable: true,
      position: 'top-right',
    });

    setName('');
    setAddress('');
    setEmail('');
    setTel('');
    setTypePeinture('');
    setBesoinPeinture([]);
    setMessage('');
  }

  return (
    <Stack h="100%" justifyContent="center" maxW="375px" px="0px">
      <form onSubmit={onSubmit}>
        <Stack alignItems="center" gap="4">
          <FormControl textColor="black" isRequired>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiUser} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={name}
                placeholder={currentLang === 'fr' ? 'Nom, Prénom' : 'Full Name'}
                onChange={(e) => handleChange(e.target.value, setName)}
              />
            </InputGroup>
          </FormControl>

          <FormControl textColor="black" isRequired>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiHome} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={address}
                placeholder={
                  currentLang === 'fr'
                    ? 'Adresse, Code Postal'
                    : 'Address, Postal Code'
                }
                onChange={(e) => handleChange(e.target.value, setAddress)}
              />
            </InputGroup>
          </FormControl>

          <FormControl textColor="black" isRequired>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiPhone} color="gray.700" />
              </InputLeftElement>
              <Input
                type="tel"
                borderRadius="sm"
                borderColor="gray.200"
                value={tel}
                placeholder={
                  currentLang === 'fr' ? 'Numéro de téléphone' : 'Phone number'
                }
                onChange={(e) => handleChange(e.target.value, setTel)}
              />
            </InputGroup>
          </FormControl>

          <FormControl textColor="black" isRequired>
            <InputGroup textColor="black">
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} color="gray.700" />
              </InputLeftElement>
              <Input
                type="email"
                borderRadius="sm"
                borderColor="gray.200"
                value={email}
                placeholder={currentLang === 'fr' ? 'Courriel' : 'Email'}
                onChange={(e) => handleChange(e.target.value, setEmail)}
              />
            </InputGroup>
          </FormControl>

          <FormControl textColor="black" isRequired>
            <RadioGroup value={typePeinture} onChange={setTypePeinture}>
              <Stack direction="row">
                <Radio value="Peinture Intérieur" borderColor="gray.200">
                  <Text fontWeight="semibold">
                    {currentLang === 'fr'
                      ? 'Peinture Intérieure'
                      : 'Interior Painting'}
                  </Text>
                </Radio>
                <Radio value="Peinture Extérieur" borderColor="gray.200">
                  <Text fontWeight="semibold">
                    {currentLang === 'fr'
                      ? 'Peinture Extérieure'
                      : 'Exterior Painting'}
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {typePeinture && (
            <Stack direction="column" w="100%" gap="1">
              <Text fontWeight="semibold" textColor="black">
                {currentLang === 'fr'
                  ? 'Quelle situation vous décris le mieux ?'
                  : 'Which situation best describes you?'}
              </Text>
              <Flex direction="row" gap="2" flexWrap="wrap">
                {tags
                  .filter((tag) => tag.category === typePeinture)
                  .map((tag) => (
                    <Tag
                      key={tag.value}
                      colorScheme="blue"
                      cursor="pointer"
                      borderWidth="2px"
                      borderColor={
                        besoinPeinture.includes(tag.value)
                          ? 'blue.700'
                          : 'transparent'
                      }
                      onClick={() => addBesoin(tag.value)}
                    >
                      <Text color="blue.900">{tag.label}</Text>
                    </Tag>
                  ))}
              </Flex>
            </Stack>
          )}

          <FormControl textColor="black">
            <FormLabel>
              {currentLang === 'fr'
                ? 'Description du projet'
                : 'Project Description'}
            </FormLabel>
            <Textarea
              value={message}
              w="100%"
              borderColor="gray.200"
              placeholder="Décrivez votre projet."
              onChange={(e) => handleChange(e.target.value, setMessage)}
            />
          </FormControl>

          <Button
            bg="#0056D2"
            color="white"
            w="100%"
            type="submit"
            borderRadius="md"
          >
            {currentLang === 'fr' ? 'Envoyer' : 'Send'}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
