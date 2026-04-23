import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import appContext from '../AppProvider';
import { Box, Text } from '@chakra-ui/react';
import { trackFormCompletion } from '../config/analytics';

const SOUMISSION_PATH = '/soumission';

function useConversionTracking(trackConversion) {
  const location = useLocation();
  useEffect(() => {
    if (!trackConversion) return;
    const handleMessage = (event) => {
      try {
        if (location.pathname !== SOUMISSION_PATH) return;
        const origin = (event.origin || '').toLowerCase();
        if (!origin.includes('marketermania.com') && !origin.includes('gohighlevel')) return;
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (!data) return;
        const type = String(data.type || data.event || '').toLowerCase();
        if (['form_submit', 'formsubmit', 'form_complete', 'submit'].includes(type)) {
          trackFormCompletion({ form_name: 'website_embedded_ghl_form' });
        }
      } catch (_) {}
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [trackConversion, location.pathname]);
}

export default function EmbeddedSubmissionForm({ isModal = false, trackConversion = false } = {}) {
  const { currentLang } = useContext(appContext);
  useConversionTracking(trackConversion);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.marketermania.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      try {
        if (script.parentNode) script.parentNode.removeChild(script);
      } catch (_) {}
    };
  }, []);

  const forms = {
    fr: { id: 'OjKxDBP4Q9vOx8pOvn7d', title: 'Website Form FR' },
    en: { id: 'odZg4CGs76Lj7I4hoSa3', title: 'Website Form EN' },
  };
  const form = forms[currentLang] || forms.en;

  return (
    <Box
      w="100%"
      minH="775px"
      maxH={isModal ? undefined : { base: 'calc(100vh - 80px)', sm: 'none' }}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      <Text
        as="h2"
        id="submission-form-title"
        fontSize={
          isModal
            ? { base: 'lg', sm: 'xl', md: '2xl' }
            : {
                base: 'lg',
                sm: 'xl',
                md: '2xl',
                lg: '3xl',
                xl: '4xl',
                '2xl': '4xl',
              }
        }
        fontWeight="bold"
        color="gray.900"
        textAlign={isModal ? 'left' : 'center'}
        px={{ base: 2, sm: 4 }}
        pt={{ base: 2, sm: isModal ? 2 : 0 }}
        pb={3}
        flexShrink={0}
        maxW="100%"
        whiteSpace="normal"
        overflowWrap="break-word"
      >
        {currentLang === 'fr' ? 'OBTENIR UNE SOUMISSION GRATUITE' : 'GET A FREE QUOTE'}
      </Text>
      <Box
        flex="1"
        minH="750px"
        h={isModal ? '750px' : undefined}
        w="100%"
        position="relative"
        overflow="hidden"
      >
        <iframe
          src={`https://link.marketermania.com/widget/form/${form.id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            minHeight: '750px',
            border: 'none',
          }}
          id={`inline-${form.id}`}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={form.title}
          data-height="668"
          data-layout-iframe-id={`inline-${form.id}`}
          data-form-id={form.id}
          title={form.title}
        />
      </Box>
    </Box>
  );
}
