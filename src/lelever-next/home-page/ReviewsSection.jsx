import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Icon,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';

export default function ReviewsSection() {
  const { t } = useTranslation();

  const reviews = [
    {
      name: 'Chantal Baril',
      time: t.reviewTime2Months,
      content: t.review1Content,
    },
    {
      name: 'Maureen Beech',
      time: t.reviewTime6Days,
      content: t.review2Content,
    },
    {
      name: 'Zoé Boudreau',
      time: t.reviewTime1Month,
      content: t.review3Content,
    },
  ];
  const columns = useBreakpointValue({ base: 1, md: 3 });
  const [expandedCards, setExpandedCards] = useState({});
  const [needsReadMore, setNeedsReadMore] = useState({});
  const textRefs = useRef({});

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const checkOverflow = () => {
      const newNeedsReadMore = {};
      Object.keys(textRefs.current).forEach((index) => {
        const element = textRefs.current[index];
        if (element) {
          newNeedsReadMore[index] =
            element.scrollHeight > element.clientHeight + 5;
        }
      });
      setNeedsReadMore(newNeedsReadMore);
    };

    setTimeout(checkOverflow, 100);
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <Box py={{ base: 12, md: 16 }} bg='gray.50'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.reviewsTitle}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
              {t.reviewsSubtitle}
            </Text>
          </Stack>

          <SimpleGrid columns={columns} spacing={6} w='100%' maxW='1200px'>
            {reviews.map((review, index) => {
              const isExpanded = expandedCards[index];
              const needsReadMoreBtn = needsReadMore[index] && !isExpanded;

              return (
                <Box
                  key={index}
                  bg='white'
                  borderRadius='xl'
                  p={8}
                  border='1px solid'
                  borderColor='gray.200'
                  h={{ base: 'auto', md: '320px' }}
                  display='flex'
                  flexDirection='column'
                >
                  <Stack spacing={3} flex={1} overflow='hidden'>
                    <Box>
                      <Text
                        fontWeight='600'
                        fontSize='lg'
                        color='gray.800'
                        mb={0.5}
                      >
                        {review.name}
                      </Text>
                      <Text fontSize='xs' color='gray.500' fontWeight='medium'>
                        {review.time}
                      </Text>
                    </Box>
                    <Box display='flex' alignItems='center' gap={0.5}>
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          as={FontAwesomeIcon}
                          icon={faStar}
                          color='#014CC4'
                          boxSize={3.5}
                        />
                      ))}
                    </Box>
                    <Box
                      flex={1}
                      overflow='hidden'
                      position='relative'
                      minH={{ base: 'auto', md: '120px' }}
                      maxH={isExpanded ? 'none' : { base: 'none', md: '120px' }}
                    >
                      <Text
                        ref={(el) => (textRefs.current[index] = el)}
                        fontSize='sm'
                        color='gray.600'
                        lineHeight='1.7'
                        overflow={isExpanded ? 'visible' : 'hidden'}
                      >
                        {review.content}
                      </Text>
                      {needsReadMoreBtn && (
                        <Box
                          position='absolute'
                          bottom='0'
                          left='0'
                          right='0'
                          h='30px'
                          bgGradient='linear(to-b, transparent, white)'
                          pointerEvents='none'
                        />
                      )}
                    </Box>
                    {needsReadMoreBtn && (
                      <Button
                        variant='link'
                        color='#014CC4'
                        fontSize='sm'
                        fontWeight='semibold'
                        onClick={() => toggleCard(index)}
                        alignSelf='flex-start'
                        p={0}
                        h='auto'
                        mt='-2'
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {t.readMore}
                      </Button>
                    )}
                    {isExpanded && needsReadMore[index] && (
                      <Button
                        variant='link'
                        color='#014CC4'
                        fontSize='sm'
                        fontWeight='semibold'
                        onClick={() => toggleCard(index)}
                        alignSelf='flex-start'
                        p={0}
                        h='auto'
                        _hover={{ textDecoration: 'underline' }}
                      >
                        {t.readLess}
                      </Button>
                    )}
                  </Stack>
                </Box>
              );
            })}
          </SimpleGrid>

          <Link href='/avis' _hover={{ textDecoration: 'none' }}>
            <Button
              rightIcon={<ArrowForwardIcon />}
              variant='outline'
              colorScheme='blue'
              borderColor='#014CC4'
              color='#014CC4'
              borderRadius='full'
              fontSize={{ base: 'sm', md: 'md' }}
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              _hover={{ bg: '#014CC4', color: 'white' }}
            >
              {t.viewAllReviews}
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
