import fs from 'fs';
import path from 'path';

export function generateSitemap(pages, siteUrl) {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(
    (page) => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join('')}
</urlset>`;

  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');

  console.log(`✅ Sitemap generated at ${sitemapPath}`);
}
