/**
 * Carte Google Maps (embed sans clé) centrée sur Gatineau, QC.
 * Centre : 45.4765, -75.7013 (centre-ville / Hull).
 */
export function getGatineauMapEmbedUrl(lang = 'fr') {
  const hl = lang === 'en' ? 'en' : 'fr';
  return `https://www.google.com/maps?q=45.4765,-75.7013&z=11&hl=${hl}&output=embed`;
}
