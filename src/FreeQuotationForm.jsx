import React, { useContext, useState } from 'react';
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
  Radio,
  RadioGroup,
  Flex,
  Tag,
  useToast,
} from '@chakra-ui/react';
import { FiHome, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import appContext from './AppProvider';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useEffect } from 'react';
import axios from 'axios';

export default function FreeQuotationForm() {
  const { currentLang } = useContext(appContext);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [typePeinture, setTypePeinture] = useState();
  const [besoinPeinture, setBesoinPeinture] = useState([]);
  const [message, setMessage] = useState();

  const toast = useToast();

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
      const res = await axios.request(options);
      console.log(res);
    } catch (error) {}
  }

  function onSubmit(e) {
    e.preventDefault();
    sendEmail();
    toast({
      title: currentLang === 'fr' ? 'Soumission envoyé' : 'Submission sent',
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
    setEmail('');
    setTel('');
    setTypePeinture('');
    setBesoinPeinture([]);
    setMessage('');
  }

  return (
    <Stack
      h={{ base: '100%', md: '100%' }}
      w="100%"
      alignItems="center"
      bg="gray.50"
      justifyContent="center"
      px={{ base: '20px', md: '0' }}
      gap="8"
      py={{ base: '12', md: '150px' }}
    >
      <Stack w="100%" alignItems="center">
        <Text
          fontSize={{ base: '25px', md: '40px' }}
          fontWeight="bold"
          borderRadius="md"
          color="#5BA2EC"
        >
          {currentLang === 'fr'
            ? 'OBTENIR UNE SOUMISSION GRATUITE'
            : 'GET A FREE QUOTE'}
        </Text>
      </Stack>

      <form onSubmit={onSubmit}>
        <Stack
          alignItems="center"
          gap="4"
          maxW="500px"
          w={{ base: '325px', md: '500px' }}
        >
          <FormControl textColor="black" isRequired>
            <FormLabel>
              {currentLang === 'fr' ? 'Nom Complet' : 'Full Name'}
            </FormLabel>
            <InputGroup
              textColor="black"
              onChange={(event) => handleChange(event.target.value, setName)}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={FiUser} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={name}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black" isRequired>
            <FormLabel>
              {currentLang === 'fr'
                ? 'Adresse, Code Postal'
                : 'Adress, Postal Code'}
            </FormLabel>
            <InputGroup
              textColor="black"
              onChange={(event) => handleChange(event.target.value, setAddress)}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={FiHome} color="gray.700" />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius="sm"
                borderColor="gray.200"
                value={address}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black" isRequired>
            <FormLabel>
              {currentLang === 'fr' ? 'Numéro de téléphone' : 'Phone number'}
            </FormLabel>
            <InputGroup
              textColor="black"
              onChange={(event) => handleChange(event.target.value, setTel)}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={FiPhone} color="gray.700" />
              </InputLeftElement>
              <Input
                type="tel"
                borderRadius="sm"
                borderColor="gray.200"
                value={tel}
              />
            </InputGroup>
          </FormControl>
          <FormControl textColor="black">
            <FormLabel>{currentLang === 'fr' ? 'Courriel' : 'Email'}</FormLabel>
            <InputGroup
              textColor="black"
              onChange={(event) => handleChange(event.target.value, setEmail)}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={FiMail} color="gray.700" />
              </InputLeftElement>
              <Input
                type="email"
                borderRadius="sm"
                borderColor="gray.200"
                value={email}
              />
            </InputGroup>
            <FormHelperText textColor="black">
              {currentLang === 'fr'
                ? 'Nous ne partagerons jamais ses informations'
                : 'We will never share his information'}
            </FormHelperText>
          </FormControl>
          <FormControl textColor="black" borderColor="gray.200" isRequired>
            <RadioGroup value={typePeinture} onChange={setTypePeinture}>
              <Stack direction="row">
                <Radio
                  value="Peinture Extérieur"
                  borderRadius="sm"
                  borderColor="gray.200"
                >
                  <Text fontWeight="semibold" fontSize="15px">
                    {currentLang === 'fr'
                      ? 'Peinture Intérieure'
                      : 'Interior Painting'}
                  </Text>
                </Radio>
                <Radio
                  value="Peinture Intérieur"
                  borderRadius="sm"
                  borderColor="gray.200"
                >
                  <Text fontWeight="semibold" fontSize="15px">
                    {currentLang === 'fr'
                      ? 'Peinture Extérieure'
                      : 'Exterior Painting'}
                  </Text>
                </Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          {typePeinture &&
            (typePeinture === 'Peinture Intérieur' ? (
              <Stack w="100%" direction="column" gap="1">
                <Text textColor="black" fontWeight="semibold">
                  {currentLang === 'fr'
                    ? 'Quelle situation vous décris le mieux ?'
                    : 'Which situation best describes you?'}
                </Text>
                <Text
                  textColor="black"
                  fontSize="sm"
                  color="GrayText"
                  maxW="600px"
                  py="1"
                >
                  {currentLang === 'fr'
                    ? 'Si aucune de ces situations vous décrit bien, vous pouvez nous décrire votre situation dans la description du projet.'
                    : 'If none of these situations describes you well, you can describe your situation to us in the project description.'}
                </Text>
                <Flex direction="row" gap="2" flexWrap="wrap">
                  <Tag
                    cursor="pointer"
                    colorScheme="blue"
                    size="md"
                    borderRadius="sm"
                    gap="2"
                    onClick={() =>
                      addBesoin(
                        currentLang === 'fr' ? 'Plinthes' : 'Skirting boards'
                      )
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Plinthes' : 'Skirting boards'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Plinthes' : 'Skirting boards'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    borderRadius="sm"
                    gap="2"
                    cursor="pointer"
                    onClick={() =>
                      addBesoin(currentLang === 'fr' ? 'Portes' : 'Doors')
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Portes' : 'Doors'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Portes' : 'Doors'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    borderRadius="sm"
                    cursor="pointer"
                    gap="2"
                    onClick={() =>
                      addBesoin(currentLang === 'fr' ? 'Plafonds' : 'Ceilings')
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Plafonds' : 'Ceilings'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Plafonds' : 'Ceilings'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    borderRadius="sm"
                    gap="2"
                    cursor="pointer"
                    onClick={() =>
                      addBesoin(currentLang === 'fr' ? 'Moulures' : 'Moldings')
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Moulures' : 'Moldings'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Moulures' : 'Moldings'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    borderRadius="sm"
                    gap="2"
                    cursor="pointer"
                    onClick={() =>
                      addBesoin(
                        currentLang === 'fr'
                          ? 'Rampes d’escalier'
                          : 'Stair rails'
                      )
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr'
                        ? 'Rampes d’escalier'
                        : 'Stair rails'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Rampes d’escalier' : 'Stair rails'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    cursor="pointer"
                    gap="2"
                    borderRadius="sm"
                    onClick={() =>
                      addBesoin(
                        currentLang === 'fr'
                          ? 'Marches et contremarches'
                          : 'Treads and risers'
                      )
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr'
                        ? 'Marches et contremarches'
                        : 'Treads and risers'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr'
                        ? 'Marches et contremarches'
                        : 'Treads and risers'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    cursor="pointer"
                    gap="2"
                    borderRadius="sm"
                    onClick={() =>
                      addBesoin(
                        currentLang === 'fr'
                          ? 'Planchers et escaliers'
                          : 'Floors and stairs'
                      )
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr'
                        ? 'Planchers et escaliers'
                        : 'Floors and stairs'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr'
                        ? 'Planchers et escaliers'
                        : 'Floors and stairs'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    cursor="pointer"
                    gap="2"
                    borderRadius="sm"
                    onClick={() =>
                      addBesoin(currentLang === 'fr' ? 'Planchers' : 'Floors')
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Planchers' : 'Floors'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Planchers' : 'Floors'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                  <Tag
                    colorScheme="blue"
                    size="md"
                    cursor="pointer"
                    gap="2"
                    borderRadius="sm"
                    onClick={() =>
                      addBesoin(currentLang === 'fr' ? 'Armoires' : 'Cabinets')
                    }
                  >
                    <Text color="blue.900">
                      {currentLang === 'fr' ? 'Armoires' : 'Cabinets'}
                    </Text>
                    {besoinPeinture.includes(
                      currentLang === 'fr' ? 'Armoires' : 'Cabinets'
                    ) && <Icon as={FaDeleteLeft} color="black" />}
                  </Tag>
                </Flex>
              </Stack>
            ) : (
              <Stack w="100%" direction="column" gap="1">
                <Text textColor="black" fontWeight="semibold">
                  {currentLang === 'fr'
                    ? 'Quelle situation vous décris le mieux ?'
                    : 'Which situation best describes you?'}
                </Text>
                <Text
                  textColor="black"
                  fontSize="sm"
                  color="GrayText"
                  maxW="600px"
                  py="1"
                >
                  {currentLang === 'fr'
                    ? 'Si aucune de ces situations vous décrit bien, vous pouvez nous décrire votre situation dans la description du projet.'
                    : 'If none of these situations describes you well, you can contact us describe your situation in the project description.'}
                </Text>
                <Flex direction="row" gap="2" flexWrap="wrap">
                  <Flex direction="row" gap="2" flexWrap="wrap">
                    <Tag
                      colorScheme="blue"
                      size="md"
                      cursor="pointer"
                      gap="2"
                      borderRadius="sm"
                      onClick={() =>
                        addBesoin(currentLang === 'fr' ? 'Balcon' : 'Balcony')
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr' ? 'Balcon' : 'Balcony'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr' ? 'Balcon' : 'Balcony'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      cursor="pointer"
                      gap="2"
                      borderRadius="sm"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr'
                            ? 'Portes d’entrée et de garage'
                            : 'Entrance and garage doors'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr'
                          ? 'Portes d’entrée et de garage'
                          : 'Entrance and garage doors'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr'
                          ? 'Portes d’entrée et de garage'
                          : 'Entrance and garage doors'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(currentLang === 'fr' ? 'Volets' : 'Shutters')
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr' ? 'Volets' : 'Shutters'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr' ? 'Volets' : 'Shutters'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(currentLang === 'fr' ? 'Soffites' : 'Soffits')
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr' ? 'Soffites' : 'Soffits'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr' ? 'Soffites' : 'Soffits'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr'
                            ? 'Revêtements extérieure'
                            : 'Exterior coverings'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr'
                          ? 'Revêtements extérieure'
                          : 'Exterior coverings'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr'
                          ? 'Revêtements extérieure'
                          : 'Exterior coverings'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr' ? 'Fondations' : 'Foundations'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr' ? 'Fondations' : 'Foundations'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr' ? 'Fondations' : 'Foundations'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr'
                            ? 'Planchers et escaliers'
                            : 'Floors and stairs'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr'
                          ? 'Planchers et escaliers'
                          : 'Floors and stairs'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr'
                          ? 'Planchers et escaliers'
                          : 'Floors and stairs'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr'
                            ? 'Treillis d’intimité'
                            : 'Privacy trellis'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr'
                          ? 'Treillis d’intimité'
                          : 'Privacy trellis'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr'
                          ? 'Treillis d’intimité'
                          : 'Privacy trellis'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(currentLang === 'fr' ? 'Clôtures' : 'Fences')
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr' ? 'Clôtures' : 'Fences'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr' ? 'Clôtures' : 'Fences'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                    <Tag
                      colorScheme="blue"
                      size="md"
                      borderRadius="sm"
                      cursor="pointer"
                      gap="2"
                      onClick={() =>
                        addBesoin(
                          currentLang === 'fr'
                            ? 'Cadres de fenêtres'
                            : 'Window frames'
                        )
                      }
                    >
                      <Text color="blue.900">
                        {currentLang === 'fr'
                          ? 'Cadres de fenêtres'
                          : 'Window frames'}
                      </Text>
                      {besoinPeinture.includes(
                        currentLang === 'fr'
                          ? 'Cadres de fenêtres'
                          : 'Window frames'
                      ) && <Icon as={FaDeleteLeft} color="black" />}
                    </Tag>
                  </Flex>
                </Flex>
              </Stack>
            ))}
          <FormControl
            textColor="black"
            onChange={(event) => handleChange(event.target.value, setMessage)}
          >
            <FormLabel>
              {currentLang === 'fr'
                ? 'Description du projet'
                : 'Description of the project'}
            </FormLabel>
            <Textarea
              value={message}
              w="100%"
              borderColor="gray.200"
              borderWidth="1px"
              borderRadius="sm"
              type="textarea"
              size="sm"
              placeholder="Décrivez nous votre situation."
            />
          </FormControl>
          <Button
            bg="#5BA2EC"
            color="white"
            w="100%"
            size="sm"
            py="1"
            borderRadius="sm"
            type="submit"
          >
            {currentLang === 'fr' ? 'Envoyer' : 'Send'}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}
