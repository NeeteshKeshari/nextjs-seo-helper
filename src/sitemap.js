import fs from 'fs';
import path from 'path';

/**
 * Generates sitemap.xml and writes it to the specified output folder.
 *
 * @param {Array<string>} pages - Array of page paths, e.g., ['/', '/about']
 * @param {string} siteUrl - Base URL of the site, e.g., 'https://example.com'
 * @param {string} outputDir - Folder to write sitemap.xml, default 'public'
 */
export function generateSitemap(pages = [], siteUrl = '', outputDir = 'public') {
  if (!siteUrl) throw new Error('siteUrl is required for sitemap generation');

  const urls = pages.map(page => `
    <url>
      <loc>${siteUrl}${page}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  const outputPath = path.join(process.cwd(), outputDir, 'sitemap.xml');

  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated at ${outputPath}`);
}
