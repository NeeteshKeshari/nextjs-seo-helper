import React from 'react';
import Head from 'next/head';
export { SeoHead } from './SeoHead';
export { getMetadata } from './getMetadata';
export { generateSitemap } from './sitemap';

export function generateHead({ title, description, canonical, openGraph, structuredData }) {
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
