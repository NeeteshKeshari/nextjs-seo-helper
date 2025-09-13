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
  return `${hostname}${url}`;
}

/**
 * Validate that a given object is a valid structured data schema.
 * Simple check for required properties.
 * @param {object} data
 * @returns {boolean}
 */
function isValidStructuredData(data) {
  return typeof data === 'object' && data['@context'] && data['@type'];
}

module.exports = {
  ensureAbsoluteUrl,
  isValidStructuredData,
};
