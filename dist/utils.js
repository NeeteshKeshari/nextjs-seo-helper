"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Ensure the URL is absolute by prefixing the hostname if missing.
 * @param {string} url
 * @param {string} hostname
 * @returns {string}
 */
function ensureAbsoluteUrl(url, hostname) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return "".concat(hostname).concat(url);
}

/**
 * Validate that a given object is a valid structured data schema.
 * Simple check for required properties.
 * @param {object} data
 * @returns {boolean}
 */
function isValidStructuredData(data) {
  return _typeof(data) === 'object' && data['@context'] && data['@type'];
}
module.exports = {
  ensureAbsoluteUrl: ensureAbsoluteUrl,
  isValidStructuredData: isValidStructuredData
};