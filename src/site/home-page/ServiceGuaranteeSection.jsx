import React from 'react';
import GuaranteeSection from './GuaranteeSection';
import { useTranslation } from '../i18n';

export const SATISFACTION_GUARANTEE_TITLE = 'Satisfaction 100% garantie';

/** Thin wrapper: service pages use the centered guarantee layout. */
export default function ServiceGuaranteeSection({
  title = SATISFACTION_GUARANTEE_TITLE,
  body,
  onCtaClick,
  ctaText,
  note,
  hideCta = false,
}) {
  const { t } = useTranslation();
  const explain = t.guaranteeBody;
  const isSatisfactionTitle = title === SATISFACTION_GUARANTEE_TITLE;
  const bodyAlreadyExplains =
    typeof body === 'string' &&
    /n['\u2019]arr[eê]tons pas de travailler|don['\u2019]t stop working|ne quittons pas/i.test(
      body,
    );

  let resolvedBody = body;
  if (!resolvedBody) {
    resolvedBody = explain;
  } else if (isSatisfactionTitle && !bodyAlreadyExplains) {
    resolvedBody = `${body} ${explain}`;
  }

  return (
    <GuaranteeSection
      variant="centered"
      title={title}
      body={resolvedBody}
      onSubmissionOpen={onCtaClick}
      ctaText={ctaText}
      note={note}
      hideCta={hideCta}
    />
  );
}
