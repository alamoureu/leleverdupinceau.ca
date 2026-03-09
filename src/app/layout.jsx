import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import ChakraProviderWrapper from './components/ChakraProviderWrapper';
import { SITE_URL, DEFAULT_OG_IMAGE, LOCAL_BUSINESS_SCHEMA, DEFAULT_META } from '@/lelever-next/seo/config';
import '@/index.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_META.fr.title,
    template: '%s | Le Lever du Pinceau',
  },
  description: DEFAULT_META.fr.description,
  keywords: ['peinture Montréal', 'peintre professionnel Montréal', 'peinture résidentielle', 'peinture commerciale'],
  openGraph: {
    url: SITE_URL,
    siteName: 'Le Lever du Pinceau',
    locale: 'fr_CA',
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: { 'fr': SITE_URL, 'en': SITE_URL, 'x-default': SITE_URL },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={plusJakarta.className}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="CA-QC" />
        <meta name="geo.placename" content="Montréal" />
        <meta name="google-site-verification" content="N5FaA7rVVWKjku53ezIKZmaZD5XcucLfvyD-cAqdF8g" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-81FGM6EH3M"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-81FGM6EH3M');
          `}
        </Script>
      </head>
      <body>
        <ChakraProviderWrapper>{children}</ChakraProviderWrapper>
      </body>
    </html>
  );
}
