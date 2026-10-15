import React from 'react';
import { Helmet } from 'react-helmet';
import { SITE_URL, DEFAULT_OG_IMAGE } from './config';

/**
 * Drop-in SEO head: title, description, canonical, OG, Twitter, optional schema + hreflang.
 * Use on every page for Montreal-focused SEO.
 */
export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  noindex = false,
  schema,
  schemaArray,
}) {
  const canonical = canonicalPath ? `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : SITE_URL;
  const ogUrl = canonicalPath ? `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : SITE_URL;
  const ogImg = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  const schemas = [];
  if (schema) schemas.push(schema);
  if (schemaArray && Array.isArray(schemaArray)) schemas.push(...schemaArray);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalPath != null && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_CA" />
      <meta property="og:site_name" content="Le Lever du Pinceau" />

      {/* Twitter Card */}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Hreflang: point to same URL (single URL for both languages; app toggles lang in UI) */}
      <link rel="alternate" hrefLang="fr" href={ogUrl} />
      <link rel="alternate" hrefLang="en" href={ogUrl} />
      <link rel="alternate" hrefLang="x-default" href={ogUrl} />

      {/* Structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

export { KEYWORDS, SITE_URL, DEFAULT_OG_IMAGE } from './config';
