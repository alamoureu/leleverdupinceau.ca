import React from 'react';
import { Box, Heading, Text, Link, Stack, SimpleGrid } from '@chakra-ui/react';

// Helper function to prevent orphaned punctuation
function preventOrphanedPunctuation(text) {
  if (typeof text !== 'string') return text;
  // Replace space before punctuation with non-breaking space
  return text.replace(/\s+([?!.,:;])/g, '\u00A0$1');
}

export default function BlogPostContent({ content, isFr, blogSlug }) {
  // Helper to get previous item type for context-aware styling
  const getPreviousItemType = (index) => {
    if (index === 0) return null;
    return content[index - 1]?.type;
  };

  // Get consistent style index based on blog slug (not rotating)
  const getBlogStyleIndex = () => {
    if (!blogSlug) return 0;
    // Use hash of slug to get consistent style per blog
    let hash = 0;
    for (let i = 0; i < blogSlug.length; i++) {
      hash = (hash << 5) - hash + blogSlug.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) % 4;
  };

  const blogStyleIndex = getBlogStyleIndex();

  const renderContent = (item, index) => {
    const previousType = getPreviousItemType(index);
    switch (item.type) {
      case 'heading':
        const HeadingTag = `h${item.level}`;
        const headingText = item.text?.[isFr ? 'fr' : 'en'] || item.text;
        const isAfterSection = previousType === 'section';

        // Different styles based on context
        if (isAfterSection) {
          // Heading after section header - more prominent
          return (
            <Box
              key={index}
              position='relative'
              mt={{ base: 6, md: 8 }}
              mb={{ base: 4, md: 6 }}
            >
              <Box
                position='absolute'
                left={0}
                top={0}
                bottom={0}
                w='4px'
                bg='#014CC4'
                borderRadius='full'
              />
              <Heading
                as={HeadingTag}
                fontSize={
                  item.level === 2
                    ? { base: 'xl', md: '2xl', lg: '3xl' }
                    : { base: 'lg', md: 'xl', lg: '2xl' }
                }
                fontWeight='bold'
                color='gray.800'
                pl={6}
                lineHeight='1.3'
              >
                {headingText}
              </Heading>
            </Box>
          );
        }

        // Regular heading - clean style
        return (
          <Heading
            key={index}
            as={HeadingTag}
            fontSize={
              item.level === 2
                ? { base: 'xl', md: '2xl', lg: '3xl' }
                : item.level === 3
                ? { base: 'lg', md: 'xl', lg: '2xl' }
                : { base: 'md', md: 'lg' }
            }
            fontWeight='bold'
            color='gray.800'
            mt={{ base: 8, md: 10 }}
            mb={{ base: 4, md: 5 }}
            lineHeight='1.3'
            position='relative'
            _before={{
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: 0,
              width: '60px',
              height: '3px',
              bg: '#014CC4',
              borderRadius: 'full',
            }}
          >
            {headingText}
          </Heading>
        );

      case 'subheading':
        return (
          <Heading
            key={index}
            as='h3'
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight='bold'
            color='gray.800'
            mt={{ base: 6, md: 8 }}
            mb={{ base: 3, md: 4 }}
            lineHeight='1.4'
          >
            {item.text?.[isFr ? 'fr' : 'en'] || item.text}
          </Heading>
        );

      case 'paragraph':
        const paragraphText = item.text?.[isFr ? 'fr' : 'en'] || item.text;
        const isAfterHeading =
          previousType === 'heading' || previousType === 'subheading';
        const isIntroParagraph = index < 3 && paragraphText.length > 150;

        // Check if next item is a link that should be inline
        const nextItemPara = content[index + 1];
        const shouldCombineParaWithLink = nextItemPara?.type === 'link';
        const linkTextPara = shouldCombineParaWithLink
          ? nextItemPara.text?.[isFr ? 'fr' : 'en'] || nextItemPara.text
          : null;
        const linkHrefPara = shouldCombineParaWithLink
          ? nextItemPara.href
          : null;

        // Intro paragraph - larger and more prominent
        if (isIntroParagraph && isAfterHeading) {
          return (
            <Text
              key={index}
              fontSize={{ base: 'lg', md: 'xl' }}
              color='gray.800'
              lineHeight='1.8'
              mb={shouldCombineParaWithLink ? 0 : { base: 6, md: 8 }}
              fontWeight='400'
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: preventOrphanedPunctuation(paragraphText),
                }}
              />
              {shouldCombineParaWithLink && (
                <>
                  {' '}
                  <Link
                    href={linkHrefPara}
                    color='#014CC4'
                    fontWeight='600'
                    textDecoration='underline'
                    _hover={{ textDecoration: 'none' }}
                  >
                    {linkTextPara}
                  </Link>
                </>
              )}
            </Text>
          );
        }

        // Regular paragraph after heading - slight emphasis
        if (isAfterHeading) {
          return (
            <Text
              key={index}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.700'
              lineHeight='1.7'
              mb={shouldCombineParaWithLink ? 0 : { base: 4, md: 5 }}
              pl={4}
              borderLeft='2px solid'
              borderColor='gray.200'
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: preventOrphanedPunctuation(paragraphText),
                }}
              />
              {shouldCombineParaWithLink && (
                <>
                  {' '}
                  <Link
                    href={linkHrefPara}
                    color='#014CC4'
                    fontWeight='600'
                    textDecoration='underline'
                    _hover={{ textDecoration: 'none' }}
                  >
                    {linkTextPara}
                  </Link>
                </>
              )}
            </Text>
          );
        }

        // Regular paragraph
        return (
          <Text
            key={index}
            fontSize={{ base: 'md', md: 'lg' }}
            color='gray.700'
            lineHeight='1.7'
            mb={shouldCombineParaWithLink ? 0 : { base: 4, md: 5 }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: preventOrphanedPunctuation(paragraphText),
              }}
            />
            {shouldCombineParaWithLink && (
              <>
                {' '}
                <Link
                  href={linkHrefPara}
                  color='#014CC4'
                  fontWeight='600'
                  textDecoration='underline'
                  _hover={{ textDecoration: 'none' }}
                >
                  {linkTextPara}
                </Link>
              </>
            )}
          </Text>
        );

      case 'list':
        if (item.ordered) {
          const orderedItems = item.items?.[isFr ? 'fr' : 'en'] || [];
          // Styled ordered list with numbers
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={3}>
                {orderedItems.map((listItem, idx) => (
                  <Box
                    key={idx}
                    display='flex'
                    alignItems='flex-start'
                    gap={4}
                    p={{ base: 4, md: 5 }}
                    bg='white'
                    borderRadius='lg'
                    border='1px solid'
                    borderColor='gray.200'
                    _hover={{
                      borderColor: '#014CC4',
                      boxShadow: 'sm',
                    }}
                    transition='all 0.2s'
                  >
                    <Box
                      flexShrink={0}
                      w='32px'
                      h='32px'
                      minW='32px'
                      minH='32px'
                      borderRadius='md'
                      bg='#014CC4'
                      color='white'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      fontWeight='bold'
                      fontSize='sm'
                    >
                      {idx + 1}
                    </Box>
                    <Text
                      flex={1}
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.7'
                      pt={0.5}
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        // Check if this is a pricing examples list
        const items = item.items?.[isFr ? 'fr' : 'en'] || [];
        const isPricingExamples = items.some(
          (item) =>
            (item.includes('Exemple') || item.includes('Example')) &&
            (item.includes('→') || item.includes('$'))
        );

        // Check if this is a numbered tips list (Les 5 façons)
        const isNumberedTips = items.some(
          (item) =>
            item.includes('Enlever les cadres') ||
            item.includes('Remove frames') ||
            item.includes('Déplacer les meubles') ||
            item.includes('Move furniture')
        );

        // Check if this is a simple feature list (Elle doit expliquer)
        const isFeatureList = items.some(
          (item) =>
            item.includes('préparation incluse') ||
            item.includes('preparation included') ||
            item.includes('nombre de couches') ||
            item.includes('number of coats')
        );

        // Check if this is a warning list (with ❌)
        const isWarningList = items.some((item) => item.includes('❌'));

        // Check if this is a pricing list (with ✔ or $)
        const isPricingList = items.some(
          (item) =>
            (item.includes('✔') || item.includes('$')) &&
            !item.includes('Exemple') &&
            !item.includes('Example')
        );

        // Check if this is a price range list (Chambre, Salon, etc.)
        const isPriceRangeList = items.some(
          (item) =>
            (item.includes('Chambre') ||
              item.includes('Salon') ||
              item.includes('Cuisine') ||
              item.includes('Bedroom') ||
              item.includes('Living room') ||
              item.includes('Kitchen')) &&
            item.includes('$')
        );

        // Check if this is a question list
        const isQuestionList = items.some(
          (item) =>
            item.includes('?') ||
            item.includes('est-ce') ||
            item.includes('Combien') ||
            item.includes('How')
        );

        if (isPricingExamples) {
          // Special styling for pricing examples
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={3}>
                {items.map((listItem, idx) => {
                  // Parse the example text
                  const parts = listItem.split('→');
                  const description = parts[0]?.trim() || '';
                  const price = parts[1]?.trim() || '';

                  // Extract example number
                  const exampleMatch = description.match(
                    /Exemple\s+(\d+)|Example\s+(\d+)/i
                  );
                  const exampleNum = exampleMatch
                    ? exampleMatch[1] || exampleMatch[2]
                    : '';

                  return (
                    <Box
                      key={idx}
                      p={{ base: 5, md: 6 }}
                      bg='white'
                      borderRadius='xl'
                      border='2px solid'
                      borderColor='gray.200'
                      boxShadow='sm'
                      _hover={{
                        borderColor: '#014CC4',
                        boxShadow: 'md',
                        transform: 'translateY(-2px)',
                      }}
                      transition='all 0.2s'
                    >
                      <Stack spacing={2}>
                        {exampleNum && (
                          <Text
                            fontSize='xs'
                            fontWeight='bold'
                            color='#014CC4'
                            textTransform='uppercase'
                            letterSpacing='wide'
                            mb={1}
                          >
                            {isFr ? 'Exemple' : 'Example'} {exampleNum}
                          </Text>
                        )}
                        <Text
                          fontSize={{ base: 'md', md: 'lg' }}
                          color='gray.800'
                          lineHeight='1.7'
                          fontWeight='500'
                          mb={price ? 2 : 0}
                          dangerouslySetInnerHTML={{
                            __html: preventOrphanedPunctuation(
                              description.replace(
                                /Exemple\s+\d+\s*—\s*|Example\s+\d+\s*—\s*/i,
                                ''
                              )
                            ),
                          }}
                        />
                        {price && (
                          <Box
                            pt={3}
                            borderTop='1px solid'
                            borderColor='gray.200'
                          >
                            <Text
                              fontSize={{ base: 'lg', md: 'xl' }}
                              color='#014CC4'
                              fontWeight='bold'
                              dangerouslySetInnerHTML={{
                                __html: preventOrphanedPunctuation(price),
                              }}
                            />
                          </Box>
                        )}
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          );
        }

        // Numbered tips list styling
        if (isNumberedTips) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={3}>
                {items.map((listItem, idx) => (
                  <Box
                    key={idx}
                    p={{ base: 5, md: 6 }}
                    bg='white'
                    borderRadius='xl'
                    border='2px solid'
                    borderColor='gray.200'
                    boxShadow='sm'
                    _hover={{
                      borderColor: '#014CC4',
                      boxShadow: 'md',
                      transform: 'translateY(-2px)',
                    }}
                    transition='all 0.2s'
                    display='flex'
                    alignItems='flex-start'
                    gap={4}
                  >
                    <Box
                      flexShrink={0}
                      w='40px'
                      h='40px'
                      minW='40px'
                      minH='40px'
                      borderRadius='full'
                      bg='#014CC4'
                      color='white'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      fontWeight='bold'
                      fontSize='lg'
                    >
                      {idx + 1}
                    </Box>
                    <Text
                      flex={1}
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.7'
                      fontWeight='500'
                      pt={1}
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        // Feature list styling (Elle doit expliquer)
        if (isFeatureList) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {items.map((listItem, idx) => (
                  <Box
                    key={idx}
                    p={{ base: 4, md: 5 }}
                    bg='white'
                    borderRadius='lg'
                    border='1px solid'
                    borderColor='gray.200'
                    boxShadow='sm'
                    _hover={{
                      borderColor: '#014CC4',
                      bg: 'blue.50',
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.2s'
                    textAlign='center'
                  >
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.6'
                      fontWeight='500'
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          );
        }

        // Warning list styling (with ❌)
        if (isWarningList) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={3}>
                {items.map((listItem, idx) => (
                  <Box
                    key={idx}
                    pl={4}
                    py={2}
                    borderLeft='3px solid'
                    borderColor='red.400'
                    bg='red.50'
                    borderRadius='md'
                  >
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.7'
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        // Pricing list styling (with ✔)
        if (isPricingList) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={2}>
                {items.map((listItem, idx) => (
                  <Box
                    key={idx}
                    py={2}
                    borderBottom={idx < items.length - 1 ? '1px solid' : 'none'}
                    borderColor='gray.200'
                  >
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.7'
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        // Price range list styling (Chambre, Salon, etc.)
        if (isPriceRangeList) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={2}>
                {items.map((listItem, idx) => {
                  const parts = listItem.split(':');
                  const title = parts[0]?.trim() || '';
                  const price = parts[1]?.trim() || '';
                  return (
                    <Box
                      key={idx}
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      py={2}
                      px={3}
                      bg='white'
                      borderRadius='md'
                      border='1px solid'
                      borderColor='gray.200'
                      _hover={{
                        borderColor: '#014CC4',
                        bg: 'blue.50',
                      }}
                      transition='all 0.2s'
                    >
                      <Text
                        fontSize={{ base: 'md', md: 'lg' }}
                        color='gray.800'
                        fontWeight='500'
                        dangerouslySetInnerHTML={{
                          __html: preventOrphanedPunctuation(title),
                        }}
                      />
                      {price && (
                        <Text
                          fontSize={{ base: 'md', md: 'lg' }}
                          color='#014CC4'
                          fontWeight='bold'
                          ml={4}
                          whiteSpace='nowrap'
                          dangerouslySetInnerHTML={{
                            __html: preventOrphanedPunctuation(price),
                          }}
                        />
                      )}
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          );
        }

        // Question list styling
        if (isQuestionList) {
          return (
            <Box key={index} mb={{ base: 6, md: 8 }}>
              <Stack spacing={3}>
                {items.map((listItem, idx) => (
                  <Box
                    key={idx}
                    display='flex'
                    alignItems='flex-start'
                    gap={3}
                    py={2}
                  >
                    <Box
                      flexShrink={0}
                      w='24px'
                      h='24px'
                      minW='24px'
                      minH='24px'
                      borderRadius='full'
                      bg='#014CC4'
                      color='white'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      fontSize='sm'
                      fontWeight='bold'
                      mt={0.5}
                    >
                      ?
                    </Box>
                    <Text
                      flex={1}
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.800'
                      lineHeight='1.7'
                      dangerouslySetInnerHTML={{
                        __html: preventOrphanedPunctuation(listItem),
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          );
        }

        // Simple bullet list - clean and minimal
        return (
          <Box key={index} mb={{ base: 6, md: 8 }}>
            <Stack spacing={2}>
              {items.map((listItem, idx) => (
                <Box
                  key={idx}
                  display='flex'
                  alignItems='flex-start'
                  gap={3}
                  py={1}
                >
                  <Box
                    flexShrink={0}
                    w='6px'
                    h='6px'
                    minW='6px'
                    minH='6px'
                    borderRadius='full'
                    bg='#014CC4'
                    mt={2}
                  />
                  <Text
                    flex={1}
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.800'
                    lineHeight='1.7'
                    dangerouslySetInnerHTML={{
                      __html: preventOrphanedPunctuation(listItem),
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        );

      case 'callout':
        const calloutText = item.text?.[isFr ? 'fr' : 'en'] || item.text;
        // Check if next item is a link that should be inline
        const nextItem = content[index + 1];
        const shouldCombineWithLink = nextItem?.type === 'link';
        const linkText = shouldCombineWithLink
          ? nextItem.text?.[isFr ? 'fr' : 'en'] || nextItem.text
          : null;
        const linkHref = shouldCombineWithLink ? nextItem.href : null;

        // Consistent callout style per blog
        const calloutStyle = blogStyleIndex % 3;

        if (calloutStyle === 0) {
          // Style 1: Blue accent with icon-like indicator
          return (
            <Box key={index}>
              <Box
                bg='blue.50'
                borderLeft='4px solid'
                borderColor='#014CC4'
                p={{ base: 4, md: 5 }}
                borderRadius='md'
                mb={shouldCombineWithLink ? 0 : { base: 4, md: 6 }}
                mt={{ base: 6, md: 8 }}
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.800'
                  lineHeight='1.8'
                  whiteSpace='pre-line'
                  pr={4}
                >
                  {preventOrphanedPunctuation(calloutText)}
                  {shouldCombineWithLink && (
                    <>
                      {' '}
                      <Link
                        href={linkHref}
                        color='#014CC4'
                        fontWeight='600'
                        textDecoration='underline'
                        _hover={{ textDecoration: 'none' }}
                      >
                        {linkText}
                      </Link>
                    </>
                  )}
                </Text>
              </Box>
            </Box>
          );
        } else if (calloutStyle === 1) {
          // Style 2: Rounded with subtle shadow
          return (
            <Box key={index}>
              <Box
                bg='white'
                border='2px solid'
                borderColor='#014CC4'
                p={{ base: 4, md: 5 }}
                borderRadius='xl'
                mb={shouldCombineWithLink ? 0 : { base: 4, md: 6 }}
                mt={{ base: 6, md: 8 }}
                boxShadow='sm'
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.800'
                  lineHeight='1.8'
                  whiteSpace='pre-line'
                  fontWeight='500'
                >
                  {preventOrphanedPunctuation(calloutText)}
                  {shouldCombineWithLink && (
                    <>
                      {' '}
                      <Link
                        href={linkHref}
                        color='#014CC4'
                        fontWeight='600'
                        textDecoration='underline'
                        _hover={{ textDecoration: 'none' }}
                      >
                        {linkText}
                      </Link>
                    </>
                  )}
                </Text>
              </Box>
            </Box>
          );
        } else {
          // Style 3: Gradient background
          return (
            <Box key={index}>
              <Box
                bg='linear-gradient(135deg, #014CC4 0%, #0139A0 100%)'
                p={{ base: 4, md: 5 }}
                borderRadius='xl'
                mb={shouldCombineWithLink ? 0 : { base: 4, md: 6 }}
                mt={{ base: 6, md: 8 }}
                boxShadow='md'
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='white'
                  lineHeight='1.8'
                  whiteSpace='pre-line'
                  fontWeight='500'
                >
                  {preventOrphanedPunctuation(calloutText)}
                  {shouldCombineWithLink && (
                    <>
                      {' '}
                      <Link
                        href={linkHref}
                        color='white'
                        fontWeight='600'
                        textDecoration='underline'
                        _hover={{ textDecoration: 'none', opacity: 0.9 }}
                      >
                        {linkText}
                      </Link>
                    </>
                  )}
                </Text>
              </Box>
            </Box>
          );
        }

      case 'quote':
        const quoteText = item.text?.[isFr ? 'fr' : 'en'] || item.text;
        // Consistent quote style per blog
        const quoteStyle = blogStyleIndex % 2;

        if (quoteStyle === 0) {
          // Style 1: Classic quote with quotation marks
          return (
            <Box
              key={index}
              position='relative'
              bg='gray.50'
              p={{ base: 5, md: 6 }}
              borderRadius='lg'
              my={{ base: 6, md: 8 }}
              border='1px solid'
              borderColor='gray.200'
            >
              <Text
                fontSize='4xl'
                color='#014CC4'
                position='absolute'
                top={2}
                left={4}
                fontFamily='serif'
                lineHeight={1}
              >
                "
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.700'
                lineHeight='1.8'
                fontStyle='italic'
                pl={8}
                dangerouslySetInnerHTML={{
                  __html: preventOrphanedPunctuation(quoteText),
                }}
              />
            </Box>
          );
        } else {
          // Style 2: Minimal with accent line
          return (
            <Box
              key={index}
              borderLeft='4px solid'
              borderColor='#014CC4'
              pl={{ base: 4, md: 5 }}
              my={{ base: 6, md: 8 }}
              bg='blue.50'
              py={4}
              borderRadius='md'
            >
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.800'
                lineHeight='1.8'
                fontStyle='italic'
                fontWeight='500'
                dangerouslySetInnerHTML={{
                  __html: `"${preventOrphanedPunctuation(quoteText)}"`,
                }}
              />
            </Box>
          );
        }

      case 'link':
        // Check if previous item was a callout or paragraph - if so, skip rendering (already included inline)
        const prevItem = index > 0 ? content[index - 1] : null;
        if (prevItem?.type === 'callout' || prevItem?.type === 'paragraph') {
          return null; // Already rendered inline with callout or paragraph
        }

        return (
          <Box key={index} mb={{ base: 4, md: 5 }} mt={{ base: 2, md: 3 }}>
            <Link
              href={item.href}
              color='#014CC4'
              fontWeight='600'
              fontSize={{ base: 'md', md: 'lg' }}
              textDecoration='underline'
              _hover={{ textDecoration: 'none' }}
            >
              {item.text?.[isFr ? 'fr' : 'en'] || item.text}
            </Link>
          </Box>
        );

      case 'section':
        const sectionTitle = item.title?.[isFr ? 'fr' : 'en'] || item.title;
        // Consistent section style per blog (same style for all sections in a blog)
        const sectionNumber = blogStyleIndex;

        if (sectionNumber === 0) {
          // Style 1: With background bar
          return (
            <Box key={index} mt={{ base: 10, md: 12 }} mb={{ base: 6, md: 8 }}>
              <Box
                bg='#014CC4'
                color='white'
                px={{ base: 4, md: 6 }}
                py={3}
                borderRadius='lg'
                display='inline-block'
              >
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight='bold'
                  textTransform='uppercase'
                  letterSpacing='wide'
                >
                  {sectionTitle}
                </Text>
              </Box>
            </Box>
          );
        } else if (sectionNumber === 1) {
          // Style 2: With underline
          return (
            <Box
              key={index}
              mt={{ base: 10, md: 12 }}
              mb={{ base: 6, md: 8 }}
              pb={2}
              borderBottom='3px solid'
              borderColor='#014CC4'
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight='bold'
                color='#014CC4'
                textTransform='uppercase'
                letterSpacing='wide'
              >
                {sectionTitle}
              </Text>
            </Box>
          );
        } else if (sectionNumber === 2) {
          // Style 3: With left border accent
          return (
            <Box
              key={index}
              mt={{ base: 10, md: 12 }}
              mb={{ base: 6, md: 8 }}
              pl={4}
              borderLeft='4px solid'
              borderColor='#014CC4'
            >
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight='bold'
                color='#014CC4'
                textTransform='uppercase'
                letterSpacing='wide'
              >
                {sectionTitle}
              </Text>
            </Box>
          );
        } else {
          // Style 4: Minimal with dot
          return (
            <Box
              key={index}
              mt={{ base: 10, md: 12 }}
              mb={{ base: 6, md: 8 }}
              display='flex'
              alignItems='center'
              gap={3}
            >
              <Box
                w='12px'
                h='12px'
                minW='12px'
                minH='12px'
                borderRadius='full'
                bg='#014CC4'
              />
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight='bold'
                color='#014CC4'
                textTransform='uppercase'
                letterSpacing='wide'
              >
                {sectionTitle}
              </Text>
            </Box>
          );
        }

      case 'beforeAfter':
        // BeforeAfter component removed - skip rendering
        return null;

      default:
        return null;
    }
  };

  return <Box>{content.map((item, index) => renderContent(item, index))}</Box>;
}
