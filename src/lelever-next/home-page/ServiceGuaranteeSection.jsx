import React from 'react';
import GuaranteeSection from './GuaranteeSection';

/** Thin wrapper: service pages use the centered guarantee layout. */
export default function ServiceGuaranteeSection({
  title = 'Satisfaction 100% garantie',
  body,
  onCtaClick,
  ctaText,
  note,
  hideCta = false,
}) {
  return (
    <GuaranteeSection
      variant="centered"
      title={title}
      body={body}
      onSubmissionOpen={onCtaClick}
      ctaText={ctaText}
      note={note}
      hideCta={hideCta}
    />
  );
}
