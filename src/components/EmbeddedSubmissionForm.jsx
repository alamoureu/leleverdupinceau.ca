import React, { useContext, useEffect } from 'react';
import appContext from '../AppProvider';
import { Text } from '@chakra-ui/react';

export default function EmbeddedSubmissionForm({ isModal }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.marketermania.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const forms = {
    fr: {
      id: 'OjKxDBP4Q9vOx8pOvn7d',
      height: 668,
      title: 'Website Form FR',
    },
    en: {
      id: 'odZg4CGs76Lj7I4hoSa3',
      height: 632,
      title: 'Website Form EN',
    },
  };

  const { currentLang } = useContext(appContext);
  const form = forms[currentLang];

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Text
        fontSize="28px"
        fontWeight="bold"
        borderRadius="md"
        color="#1A365D"
        mx={isModal ? '10' : '5'}
        mt={isModal && '12'}
      >
        {currentLang === 'fr'
          ? 'OBTENIR UNE SOUMISSION GRATUITE'
          : 'GET A FREE QUOTE'}
      </Text>
      <iframe
        src={`https://link.marketermania.com/widget/form/${form.id}`}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '3px',
          boxShadow: 'none',
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
        data-height={form.height}
        data-layout-iframe-id={`inline-${form.id}`}
        data-form-id={form.id}
        title={form.title}
      />
    </div>
  );
}
