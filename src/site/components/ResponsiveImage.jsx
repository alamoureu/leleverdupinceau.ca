import React from 'react';
import { Image } from '@chakra-ui/react';

/**
 * Normalize a Vite asset URL string or vite-imagetools `as=img` object
 * into props for <img> / Chakra Image.
 *
 * @param {string | { src: string, srcset?: string, w?: number, h?: number, width?: number, height?: number } | Array<{ src: string, width: number, height?: number }> | null | undefined} image
 * @returns {{ src?: string, srcSet?: string, width?: number, height?: number }}
 */
export function resolveResponsiveImage(image) {
  if (!image) return {};
  if (typeof image === 'string') return { src: image };
  if (Array.isArray(image)) {
    if (image.length === 0) return {};
    let largest = image[0];
    for (let i = 1; i < image.length; i += 1) {
      if ((image[i].width || 0) > (largest.width || 0)) largest = image[i];
    }
    return {
      src: largest.src,
      srcSet: image.map((m) => `${m.src} ${m.width}w`).join(', '),
      width: largest.width,
      height: largest.height,
    };
  }
  return {
    src: image.src,
    srcSet: image.srcset,
    width: image.w ?? image.width,
    height: image.h ?? image.height,
  };
}

/** Stable key for deduping before/after pairs (string URL or imagetools object). */
export function imageKey(image) {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (Array.isArray(image)) return image[0]?.src || '';
  return image.src || '';
}

/**
 * Chakra Image that accepts a plain URL or imagetools `{ src, srcset, w, h }`.
 * Pass `sizes` whenever `srcSet` is present so the browser picks the right width.
 */
export default function ResponsiveImage({
  image,
  src: srcProp,
  srcSet: srcSetProp,
  sizes,
  htmlWidth,
  htmlHeight,
  as: asProp,
  ...rest
}) {
  const resolved = resolveResponsiveImage(image ?? srcProp);
  const src = resolved.src ?? (typeof srcProp === 'string' ? srcProp : undefined);
  const srcSet = srcSetProp ?? resolved.srcSet;
  const width = htmlWidth ?? resolved.width;
  const height = htmlHeight ?? resolved.height;

  if (asProp === 'img') {
    return (
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        width={width}
        height={height}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      htmlWidth={width}
      htmlHeight={height}
      {...rest}
    />
  );
}
