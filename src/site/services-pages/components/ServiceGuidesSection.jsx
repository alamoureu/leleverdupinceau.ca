import React, { useContext, useMemo } from 'react';
import appContext from '../../../AppProvider';
import ResourcesSection from '../../home-page/ResourcesSection';
import commentChoisirPeintre from '../../images/home/method-1.webp';
import prixProjetPeinture from '../../images/blog/prix-projet-montreal.webp';
import erreurEviterProjet from '../../images/blog/erreurs-eviter-peindre.webp';

const getBlogImage = (href) => {
  if (href.includes('comment-choisir')) return commentChoisirPeintre;
  if (href.includes('prix')) return prixProjetPeinture;
  if (href.includes('erreur')) return erreurEviterProjet;
  return null;
};

/** Thin wrapper: service guides reuse ResourcesSection with custom articles. */
export default function ServiceGuidesSection({ title, guides = [] }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const articles = useMemo(
    () =>
      guides.map((guide) => ({
        title:
          typeof guide.title === 'object'
            ? guide.title[isFr ? 'fr' : 'en']
            : guide.title,
        href: guide.href,
        image: guide.image || getBlogImage(guide.href),
      })),
    [guides, isFr]
  );

  if (!articles.length) return null;

  return (
    <ResourcesSection
      title={
        title ||
        (isFr ? 'Guides utiles pour les entreprises' : 'Useful guides for businesses')
      }
      articles={articles}
      hideButton
      hideSubtitle
      titleAlign="left"
    />
  );
}
