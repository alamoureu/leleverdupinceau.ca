import React, {
  Fragment,
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import HeroSection from '../home-page/HeroSection';
import { useTranslation } from '../i18n';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { KEYWORDS } from '../seo/config';
import { GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_LABEL } from '../constants/googleReviews';
import DeferredMount, { isPrerenderCrawl } from '../components/DeferredMount';

const MicrosoftClarity = React.lazy(() =>
  import('../components/MicrosoftClarity'),
);
const ControlSection = React.lazy(() =>
  import('../home-page/ControlSection'),
);
const GuaranteeSection = React.lazy(() =>
  import('../home-page/GuaranteeSection'),
);
const MethodSection = React.lazy(() =>
  import('../home-page/MethodSection'),
);
const ServicesSection = React.lazy(() =>
  import('../home-page/ServicesSection'),
);
const BeforeAfterCarouselSection = React.lazy(() =>
  import('../home-page/BeforeAfterCarouselSection'),
);
const TeamSection = React.lazy(() => import('../home-page/TeamSection'));
const ReviewsSection = React.lazy(() =>
  import('../home-page/ReviewsSection'),
);
const SectorsSection = React.lazy(() =>
  import('../home-page/SectorsSection'),
);
const FAQSection = React.lazy(() => import('../home-page/FAQSection'));
const ResourcesSection = React.lazy(() =>
  import('../home-page/ResourcesSection'),
);
const FinalCTASection = React.lazy(() =>
  import('../home-page/FinalCTASection'),
);
const ContactFormSection = React.lazy(() =>
  import('../home-page/ContactFormSection'),
);
const SubmissionModal = React.lazy(() =>
  import('../home-page/SubmissionModal'),
);

function useNearViewport(enabled = true, rootMargin = '200px 0px') {
  const ref = useRef(null);
  // Prerender must emit full HTML without scrolling; live visits stay lazy.
  const [near, setNear] = useState(() => !enabled || isPrerenderCrawl());

  useEffect(() => {
    if (!enabled || near) return undefined;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [enabled, near, rootMargin]);

  return [ref, near];
}

function LateBelowFold({ onSubmissionOpen, pageContext, faqTitle }) {
  return (
    <Suspense fallback={<Box minH="50vh" aria-hidden />}>
      <Box bg="gray.50">
        <ServicesSection sectionBg="transparent" />
        <BeforeAfterCarouselSection
          sectionBg="gray.50"
          sectionPaddingTop={{ base: 2, md: 4 }}
          sectionPaddingBottom={{ base: 8, md: 10, lg: 12 }}
        />
      </Box>

      <TeamSection pageContext={pageContext} />

      <ReviewsSection />

      <SectorsSection pageContext={pageContext} />

      <FAQSection title={faqTitle} />

      <ResourcesSection />

      <FinalCTASection onSubmissionOpen={onSubmissionOpen} />
    </Suspense>
  );
}

function EarlyBelowFold({ onSubmissionOpen, pageContext, faqTitle }) {
  const [formSentinelRef, formNear] = useNearViewport(true, '240px 0px');
  const [lateSentinelRef, lateNear] = useNearViewport(true, '200px 0px');

  return (
    <Suspense fallback={<Box minH="70vh" aria-hidden />}>
      <ControlSection />

      <GuaranteeSection onSubmissionOpen={onSubmissionOpen} />

      <MethodSection onSubmissionOpen={onSubmissionOpen} hideCta />

      <Box ref={formSentinelRef} minH="1px" aria-hidden />
      {formNear ? (
        <Suspense fallback={<Box minH={{ base: '320px', md: '280px' }} />}>
          <ContactFormSection />
        </Suspense>
      ) : (
        <Box minH={{ base: '320px', md: '280px' }} />
      )}

      <Box ref={lateSentinelRef} minH="1px" aria-hidden />
      {lateNear ? (
        <LateBelowFold
          onSubmissionOpen={onSubmissionOpen}
          pageContext={pageContext}
          faqTitle={faqTitle}
        />
      ) : (
        <Box minH="50vh" aria-hidden />
      )}
    </Suspense>
  );
}

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const isFr = currentLang === 'fr';
  const pageContext = isFr ? 'Accueil' : 'Home';

  const title = isFr
    ? 'Peintre professionnel à Montréal | Le Lever du Pinceau'
    : 'Professional Painter in Montreal | Le Lever du Pinceau';
  const description = isFr
    ? `Peintre à Montréal : intérieur, extérieur, résidentiel et commercial. ${GOOGLE_REVIEWS_LABEL.fr} 5 étoiles, licence RBQ, soumission gratuite en 24h.`
    : `Montreal painter: interior, exterior, residential and commercial. ${GOOGLE_REVIEW_COUNT}+ 5-star reviews, RBQ license, free quote in 24h.`;

  const faqTitle = isFr
    ? 'Questions fréquentes sur nos services de peinture'
    : 'Frequently asked questions about our painting services';

  return (
    <Fragment>
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/"
        keywords={KEYWORDS[currentLang] || KEYWORDS.fr}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={pageContext}
          description={t.heroDescription}
        />

        <DeferredMount fallback={<Box minH="70vh" aria-hidden />}>
          <EarlyBelowFold
            onSubmissionOpen={onOpen}
            pageContext={pageContext}
            faqTitle={faqTitle}
          />
        </DeferredMount>
      </Box>

      {isOpen && (
        <Suspense fallback={null}>
          <SubmissionModal isOpen={isOpen} onClose={onClose} />
        </Suspense>
      )}

      <DeferredMount fallback={null}>
        <Suspense fallback={null}>
          <MicrosoftClarity />
        </Suspense>
      </DeferredMount>
    </Fragment>
  );
}
