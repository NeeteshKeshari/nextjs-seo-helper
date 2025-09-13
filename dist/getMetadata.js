"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetadata = getMetadata;
function getMetadata(_ref) {
  var _openGraph$images;
  var title = _ref.title,
    description = _ref.description,
    canonical = _ref.canonical,
    openGraph = _ref.openGraph;
  var metadata = {
    title: title || undefined,
    description: description || undefined,
    openGraph: openGraph ? {
      title: openGraph.title,
      description: openGraph.description,
      images: ((_openGraph$images = openGraph.images) === null || _openGraph$images === void 0 ? void 0 : _openGraph$images.map(function (img) {
        return {
          url: img.url
        };
      })) || []
    } : undefined,
    alternates: canonical ? {
      canonical: canonical
    } : undefined
  };
  return metadata;
}