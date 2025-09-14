"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateSitemap = generateSitemap;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function generateSitemap(pages, siteUrl) {
  var sitemapContent = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  ".concat(pages.map(function (page) {
    return "\n  <url>\n    <loc>".concat(siteUrl).concat(page, "</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.7</priority>\n  </url>");
  }).join(''), "\n</urlset>");
  var sitemapPath = _path["default"].join(process.cwd(), 'public', 'sitemap.xml');
  _fs["default"].writeFileSync(sitemapPath, sitemapContent, 'utf-8');
  console.log("\u2705 Sitemap generated at ".concat(sitemapPath));
}