import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

/**
 * SeoHead component for injecting SEO meta tags into <head>.
 */
export function SeoHead({ title, description, canonical, openGraph, structuredData }) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {openGraph?.title && <meta property="og:title" content={openGraph.title} />}
      {openGraph?.description && <meta property="og:description" content={openGraph.description} />}
      {openGraph?.images?.map((img, index) => (
        <meta key={index} property="og:image" content={img.url} />
      ))}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}

SeoHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  openGraph: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }),
  structuredData: PropTypes.object,
};
