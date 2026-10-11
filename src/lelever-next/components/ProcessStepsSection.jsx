import React from 'react';
import MethodSection from '../home-page/MethodSection';

/**
 * Prop-driven process steps. Thin wrapper around MethodSection
 * so home and service pages share one layout.
 */
export default function ProcessStepsSection({
  title,
  subtitle,
  steps,
  images,
  buttonText,
  onButtonClick,
  hideCta,
  sectionPy,
}) {
  return (
    <MethodSection
      title={title}
      subtitle={subtitle}
      steps={steps}
      images={images}
      onSubmissionOpen={onButtonClick}
      hideCta={hideCta ?? !(buttonText && onButtonClick)}
      sectionPy={sectionPy}
      ctaText={buttonText}
    />
  );
}
