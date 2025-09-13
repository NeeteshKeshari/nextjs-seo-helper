export function getMetadata({ title, description, canonical, openGraph }) {
  const metadata = {
    title: title || undefined,
    description: description || undefined,
    openGraph: openGraph
      ? {
          title: openGraph.title,
          description: openGraph.description,
          images: openGraph.images?.map(img => ({ url: img.url })) || [],
        }
      : undefined,
    alternates: canonical ? { canonical } : undefined,
  };
  return metadata;
}
