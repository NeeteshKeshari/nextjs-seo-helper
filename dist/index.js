"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SeoHead", {
  enumerable: true,
  get: function get() {
    return _SeoHead.SeoHead;
  }
});
exports.generateHead = generateHead;
Object.defineProperty(exports, "getMetadata", {
  enumerable: true,
  get: function get() {
    return _getMetadata.getMetadata;
  }
});
var _react = _interopRequireDefault(require("react"));
var _head = _interopRequireDefault(require("next/head"));
var _SeoHead = require("./SeoHead");
var _getMetadata = require("./getMetadata");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Only expose SeoHead and getMetadata by default

function generateHead(_ref) {
  var _openGraph$images;
  var title = _ref.title,
    description = _ref.description,
    canonical = _ref.canonical,
    openGraph = _ref.openGraph,
    structuredData = _ref.structuredData;
  return /*#__PURE__*/_react["default"].createElement(_head["default"], null, title && /*#__PURE__*/_react["default"].createElement("title", null, title), description && /*#__PURE__*/_react["default"].createElement("meta", {
    name: "description",
    content: description
  }), canonical && /*#__PURE__*/_react["default"].createElement("link", {
    rel: "canonical",
    href: canonical
  }), (openGraph === null || openGraph === void 0 ? void 0 : openGraph.title) && /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:title",
    content: openGraph.title
  }), (openGraph === null || openGraph === void 0 ? void 0 : openGraph.description) && /*#__PURE__*/_react["default"].createElement("meta", {
    property: "og:description",
    content: openGraph.description
  }), openGraph === null || openGraph === void 0 || (_openGraph$images = openGraph.images) === null || _openGraph$images === void 0 ? void 0 : _openGraph$images.map(function (img, index) {
    return /*#__PURE__*/_react["default"].createElement("meta", {
      key: index,
      property: "og:image",
      content: img.url
    });
  }), structuredData && /*#__PURE__*/_react["default"].createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(structuredData)
    }
  }));
}