"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateSitemap = generateSitemap;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Generates sitemap.xml and writes it to the specified output folder.
 *
 * @param {Array<string>} pages - Array of page paths, e.g., ['/', '/about']
 * @param {string} siteUrl - Base URL of the site, e.g., 'https://example.com'
 * @param {string} outputDir - Folder to write sitemap.xml, default 'public'
 */
function generateSitemap() {
  var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var siteUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var outputDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'public';
  if (!siteUrl) throw new Error('siteUrl is required for sitemap generation');
  var urls = pages.map(function (page) {
    return "\n    <url>\n      <loc>".concat(siteUrl).concat(page, "</loc>\n      <changefreq>daily</changefreq>\n      <priority>0.8</priority>\n    </url>\n  ");
  }).join('');
  var sitemap = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  ".concat(urls, "\n</urlset>");
  var outputPath = _path["default"].join(process.cwd(), outputDir, 'sitemap.xml');
  _fs["default"].writeFileSync(outputPath, sitemap);
  console.log("\u2705 Sitemap generated at ".concat(outputPath));
}