/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".contact-page {\n  display: grid;\n  grid-template-areas:\n    \"head head head\"\n    \"main main main\"\n    \"foot foot foot\";\n  grid-template-rows: 80px auto 60px;\n  height: 100vh;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --header-logo-font: \"Playfair Display\", serif, \"Times New Roman\", sans-serif,\n    \"Open Sans\", Arial, sans-serif;\n  --home-tagline: \"Poppins\", sans-serif, \"Times New Roman\", sans-serif,\n    \"Open Sans\", Arial, sans-serif;\n  --home-default: \"Roboto\", serif, \"Open Sans\", Arial;\n}\n\n/* Start of contact header */\n\n.contact-page header {\n  grid-area: head;\n  background-color: lightblue;\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 4px;\n  align-items: center;\n  grid-area: head;\n  z-index: 2;\n  box-shadow: 1px 4px 5px 0px #80808075;\n}\n\n.contact-page header>p {\n  margin-left: 10px;\n}\n\n.contact-page button {\n  border: none;\n  background-color: rgba(255, 255, 255, 0.466);\n  backdrop-filter: blur(2px);\n  color: black;\n}\n\n.contact-page nav>ul {\n  display: flex;\n  gap: 14px;\n  justify-content: space-evenly;\n}\n\n.contact-page ul>li {\n  list-style: none;\n  /* outline: 1px solid blue; */\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n  border-bottom-color: lightblue;\n  border-bottom-style: solid;\n  margin-bottom: 4px;\n}\n\n.contact-page li>button {\n  width: 65px;\n  height: 35px;\n  font-size: 0.8rem;\n}\n\n/* Start of main content (for contact page) */\n\n.contact-page main {\n  display: flex;\n  flex-direction: column;\n  grid-area: main;\n  justify-content: space-evenly;\n}\n\n/* selects main section header */\n.contact-page main>h1 {\n  align-self: center;\n}\n\n.contact-page main>div>div {\n  font-size: 1.2rem;\n  outline: 1px solid black;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-page .restaurantInfoContainers {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-area: main;\n  gap: 14px;\n  padding: 12px 26px;\n  align-items: center;\n  outline: 1px solid black;\n  height: 70%;\n  width: 80vw;\n  justify-content: center;\n  align-self: center;\n}\n\n.contact-page .phoneNumberContainer {\n  width: 178px;\n}\n\n.contact-page iframe {\n  height: 100%;\n  width: 100%;\n}\n\n.contact-page footer {\n  grid-area: foot;\n  background-color: lightblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\", \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n}", "",{"version":3,"sources":["webpack://./src/contact/contact.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb;;;oBAGkB;EAClB,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE;kCACgC;EAChC;kCACgC;EAChC,mDAAmD;AACrD;;AAEA,4BAA4B;;AAE5B;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,4CAA4C;EAC5C,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,8BAA8B;EAC9B,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA,6CAA6C;;AAE7C;EACE,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,6BAA6B;AAC/B;;AAEA,gCAAgC;AAChC;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,wBAAwB;EACxB,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB;oCACkC;AACpC","sourcesContent":[".contact-page {\n  display: grid;\n  grid-template-areas:\n    \"head head head\"\n    \"main main main\"\n    \"foot foot foot\";\n  grid-template-rows: 80px auto 60px;\n  height: 100vh;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(../assets/fonts/Roboto-Regular.ttf);\n}\n\n:root {\n  --header-logo-font: \"Playfair Display\", serif, \"Times New Roman\", sans-serif,\n    \"Open Sans\", Arial, sans-serif;\n  --home-tagline: \"Poppins\", sans-serif, \"Times New Roman\", sans-serif,\n    \"Open Sans\", Arial, sans-serif;\n  --home-default: \"Roboto\", serif, \"Open Sans\", Arial;\n}\n\n/* Start of contact header */\n\n.contact-page header {\n  grid-area: head;\n  background-color: lightblue;\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 4px;\n  align-items: center;\n  grid-area: head;\n  z-index: 2;\n  box-shadow: 1px 4px 5px 0px #80808075;\n}\n\n.contact-page header>p {\n  margin-left: 10px;\n}\n\n.contact-page button {\n  border: none;\n  background-color: rgba(255, 255, 255, 0.466);\n  backdrop-filter: blur(2px);\n  color: black;\n}\n\n.contact-page nav>ul {\n  display: flex;\n  gap: 14px;\n  justify-content: space-evenly;\n}\n\n.contact-page ul>li {\n  list-style: none;\n  /* outline: 1px solid blue; */\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n  border-bottom-color: lightblue;\n  border-bottom-style: solid;\n  margin-bottom: 4px;\n}\n\n.contact-page li>button {\n  width: 65px;\n  height: 35px;\n  font-size: 0.8rem;\n}\n\n/* Start of main content (for contact page) */\n\n.contact-page main {\n  display: flex;\n  flex-direction: column;\n  grid-area: main;\n  justify-content: space-evenly;\n}\n\n/* selects main section header */\n.contact-page main>h1 {\n  align-self: center;\n}\n\n.contact-page main>div>div {\n  font-size: 1.2rem;\n  outline: 1px solid black;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-page .restaurantInfoContainers {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-area: main;\n  gap: 14px;\n  padding: 12px 26px;\n  align-items: center;\n  outline: 1px solid black;\n  height: 70%;\n  width: 80vw;\n  justify-content: center;\n  align-self: center;\n}\n\n.contact-page .phoneNumberContainer {\n  width: 178px;\n}\n\n.contact-page iframe {\n  height: 100%;\n  width: 100%;\n}\n\n.contact-page footer {\n  grid-area: foot;\n  background-color: lightblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\", \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n    \"Lucida Sans\", Arial, sans-serif;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home/home.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/PlayfairDisplay-Regular.ttf */ "./src/assets/fonts/PlayfairDisplay-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Poppins-Medium.ttf */ "./src/assets/fonts/Poppins-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mountain-background.jpg */ "./src/assets/mountain-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: Playfair Display;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: Poppins;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n:root {\n    --header-logo-font: \"Playfair Display\", serif, \"Times New Roman\", sans-serif,\n        \"Open Sans\", Arial, sans-serif;\n    --home-tagline: \"Poppins\", sans-serif, \"Times New Roman\", sans-serif,\n        \"Open Sans\", Arial, sans-serif;\n    --home-default: \"Roboto\", serif, \"Open Sans\", Arial;\n}\n\n/* Parent content styling */\n\n.home-page {\n    display: grid;\n    grid-template-areas:\n        \"head head head\"\n        \"main main main\"\n        \"foot foot foot\";\n    grid-template-rows: 80px auto 60px;\n    height: 100vh;\n}\n\n/* Start of home header */\n\nheader {\n    grid-area: head;\n    background-color: lightblue;\n    display: flex;\n    justify-content: space-between;\n    padding: 14px 4px;\n    align-items: center;\n    grid-area: head;\n    position: relative;\n    z-index: 2;\n    box-shadow: 1px 4px 5px 0px #80808075;\n}\n\n.home-page button {\n    border: none;\n    background-color: rgba(255, 255, 255, 0.466);\n    backdrop-filter: blur(2px);\n    color: black;\n}\n\nheader>p {\n    margin-left: 10px;\n    font-family: var(--header-logo-font);\n    font-family: \"Playfair Display\", serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n}\n\nnav>ul {\n    display: flex;\n    gap: 14px;\n    justify-content: space-evenly;\n}\n\n.home-page ul>li:first-of-type {}\n\nul>li {\n    list-style: none;\n    /* outline: 1px solid blue; */\n    height: 55px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2px;\n    border-bottom-color: lightblue;\n    border-bottom-style: solid;\n    margin-bottom: 4px;\n}\n\nli>button {\n    width: 65px;\n    height: 35px;\n    font-size: 0.8rem;\n}\n\n/* Main (middle) content styling */\n\n.home-page main {\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n}\n\n.home-page .headLine {\n    display: flex;\n    justify-content: center;\n    height: 125px;\n    background-color: rgb(165, 165, 165);\n    align-items: center;\n}\n\n.home-page .headLine>p {\n    font-size: 1.4rem;\n    font-family: var(--home-tagline);\n    text-align: center;\n}\n\n.home-page .backgroundImage>button {\n    width: 85px;\n    height: 60px;\n    padding: 12px;\n    font-size: 1.1rem;\n    background-color: rgba(255, 255, 255, 0.555);\n    border: none;\n}\n\n.home-page .backgroundImage {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: center;\n    background-size: cover;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1 auto;\n    padding: 0px 20px;\n}\n\n.home-page .backgroundImage>p {\n    background-color: rgba(0, 0, 0, 0.26);\n    /* filter: blur(0.5rem); */\n    padding: 16px;\n    font-family: var(--home-default);\n    border-radius: 12px 12px;\n    font-size: 1.4rem;\n    line-height: 1.8rem;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    box-shadow: #808080c2 0px 2px 6px 1px;\n}\n\n.home-page .backgroundImage>p::before {\n    background-color: rgba(0, 0, 0, 0.26);\n    filter: blur(0.5rem);\n    padding: 16px;\n    border-radius: 12px 12px;\n}\n\n/* Come back to this to add color overlay to bg image */\n.home-page .backgroundImage::after {\n    content: \"\";\n    background-color: rgba(0, 0, 0, 0.815);\n}\n\n/* footer styling */\n\n.home-page footer {\n    grid-area: foot;\n    background-color: lightblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--home-default);\n}", "",{"version":3,"sources":["webpack://./src/home/home.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,4CAAqD;AACzD;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;AAChD;;AAEA;IACI,mBAAmB;IACnB,4CAA4C;AAChD;;AAEA;IACI;sCACkC;IAClC;sCACkC;IAClC,mDAAmD;AACvD;;AAEA,2BAA2B;;AAE3B;IACI,aAAa;IACb;;;wBAGoB;IACpB,kCAAkC;IAClC,aAAa;AACjB;;AAEA,yBAAyB;;AAEzB;IACI,eAAe;IACf,2BAA2B;IAC3B,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,4CAA4C;IAC5C,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,oCAAoC;IACpC,sCAAsC;IACtC,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,6BAA6B;AACjC;;AAEA,gCAAgC;;AAEhC;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,8BAA8B;IAC9B,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA,kCAAkC;;AAElC;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,4CAA4C;IAC5C,YAAY;AAChB;;AAEA;IACI,yDAAwD;IACxD,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,0BAA0B;IAC1B,aAAa;IACb,gCAAgC;IAChC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,kCAAkC;IAClC,qCAAqC;AACzC;;AAEA;IACI,qCAAqC;IACrC,oBAAoB;IACpB,aAAa;IACb,wBAAwB;AAC5B;;AAEA,uDAAuD;AACvD;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA,mBAAmB;;AAEnB;IACI,eAAe;IACf,2BAA2B;IAC3B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;AACpC","sourcesContent":["@font-face {\n    font-family: Playfair Display;\n    src: url(../assets/fonts/PlayfairDisplay-Regular.ttf);\n}\n\n@font-face {\n    font-family: Poppins;\n    src: url(../assets/fonts/Poppins-Medium.ttf);\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url(../assets/fonts/Roboto-Regular.ttf);\n}\n\n:root {\n    --header-logo-font: \"Playfair Display\", serif, \"Times New Roman\", sans-serif,\n        \"Open Sans\", Arial, sans-serif;\n    --home-tagline: \"Poppins\", sans-serif, \"Times New Roman\", sans-serif,\n        \"Open Sans\", Arial, sans-serif;\n    --home-default: \"Roboto\", serif, \"Open Sans\", Arial;\n}\n\n/* Parent content styling */\n\n.home-page {\n    display: grid;\n    grid-template-areas:\n        \"head head head\"\n        \"main main main\"\n        \"foot foot foot\";\n    grid-template-rows: 80px auto 60px;\n    height: 100vh;\n}\n\n/* Start of home header */\n\nheader {\n    grid-area: head;\n    background-color: lightblue;\n    display: flex;\n    justify-content: space-between;\n    padding: 14px 4px;\n    align-items: center;\n    grid-area: head;\n    position: relative;\n    z-index: 2;\n    box-shadow: 1px 4px 5px 0px #80808075;\n}\n\n.home-page button {\n    border: none;\n    background-color: rgba(255, 255, 255, 0.466);\n    backdrop-filter: blur(2px);\n    color: black;\n}\n\nheader>p {\n    margin-left: 10px;\n    font-family: var(--header-logo-font);\n    font-family: \"Playfair Display\", serif;\n    font-size: 1.5rem;\n    font-weight: 900;\n}\n\nnav>ul {\n    display: flex;\n    gap: 14px;\n    justify-content: space-evenly;\n}\n\n.home-page ul>li:first-of-type {}\n\nul>li {\n    list-style: none;\n    /* outline: 1px solid blue; */\n    height: 55px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2px;\n    border-bottom-color: lightblue;\n    border-bottom-style: solid;\n    margin-bottom: 4px;\n}\n\nli>button {\n    width: 65px;\n    height: 35px;\n    font-size: 0.8rem;\n}\n\n/* Main (middle) content styling */\n\n.home-page main {\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n}\n\n.home-page .headLine {\n    display: flex;\n    justify-content: center;\n    height: 125px;\n    background-color: rgb(165, 165, 165);\n    align-items: center;\n}\n\n.home-page .headLine>p {\n    font-size: 1.4rem;\n    font-family: var(--home-tagline);\n    text-align: center;\n}\n\n.home-page .backgroundImage>button {\n    width: 85px;\n    height: 60px;\n    padding: 12px;\n    font-size: 1.1rem;\n    background-color: rgba(255, 255, 255, 0.555);\n    border: none;\n}\n\n.home-page .backgroundImage {\n    background-image: url(../assets/mountain-background.jpg);\n    background-position: center;\n    background-size: cover;\n    height: 400px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    flex: 1 auto;\n    padding: 0px 20px;\n}\n\n.home-page .backgroundImage>p {\n    background-color: rgba(0, 0, 0, 0.26);\n    /* filter: blur(0.5rem); */\n    padding: 16px;\n    font-family: var(--home-default);\n    border-radius: 12px 12px;\n    font-size: 1.4rem;\n    line-height: 1.8rem;\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n    box-shadow: #808080c2 0px 2px 6px 1px;\n}\n\n.home-page .backgroundImage>p::before {\n    background-color: rgba(0, 0, 0, 0.26);\n    filter: blur(0.5rem);\n    padding: 16px;\n    border-radius: 12px 12px;\n}\n\n/* Come back to this to add color overlay to bg image */\n.home-page .backgroundImage::after {\n    content: \"\";\n    background-color: rgba(0, 0, 0, 0.815);\n}\n\n/* footer styling */\n\n.home-page footer {\n    grid-area: foot;\n    background-color: lightblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: var(--home-default);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Lora-Regular.ttf */ "./src/assets/fonts/Lora-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Lora;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n:root {\n  --menu-font: \"Lora\", serif, \"Times New Roman\";\n  --menu-default-font: \"Roboto\", serif, \"Times New Roman\";\n}\n\n.menu-page {\n  display: grid;\n  grid-template-areas:\n    \"head head head\"\n    \"main main main\"\n    \"foot foot foot\";\n  grid-template-rows: 80px auto 60px;\n  height: 100vh;\n  position: relative;\n}\n\n/* Start of menu header */\n\nheader {\n  grid-area: head;\n  background-color: lightblue;\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 4px;\n  align-items: center;\n  grid-area: head;\n  position: relative;\n  z-index: 2;\n  box-shadow: 1px 4px 5px 0px #80808075;\n}\n\nheader>p {\n  margin-left: 10px;\n}\n\n.menu-page button {\n  border: none;\n  background-color: rgba(255, 255, 255, 0.466);\n  backdrop-filter: blur(2px);\n  color: black;\n}\n\nnav>ul {\n  display: flex;\n  gap: 14px;\n  justify-content: space-evenly;\n  margin-right: 10px;\n}\n\nul>li {\n  list-style: none;\n  /* outline: 1px solid blue; */\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n  border-bottom-color: lightblue;\n  border-bottom-style: solid;\n  margin-bottom: 4px;\n}\n\nli>button {\n  width: 65px;\n  height: 35px;\n  font-size: 0.8rem;\n}\n\n/* Start of main content (for menu page) */\n\n.menu-page main {\n  display: grid;\n  grid-area: main;\n  grid-auto-rows: 1fr 1fr 1fr;\n  padding: 14px 19px;\n  background-color: whitesmoke;\n}\n\n.menu-page main>* {\n  font-family: var(--menu-font);\n}\n\n.menu-page main>div {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}\n\n.menu-page .startersLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .entreesLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .dessertsLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .startersContainer {\n  grid-row: 1/2;\n  padding: 8px;\n}\n\n.menu-page main>div>div {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 22px;\n}\n\n.menu-page main>div>div>div {\n  height: 250px;\n  outline: 1px;\n  /* outline: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-shadow: 4px 4px grey;\n  background-color: lightgrey;\n}\n\n.menu-page main>div>div>div>p:last-child {\n  font-size: 1.2rem;\n  width: 75%;\n}\n\n.menu-page main>div>div>div>p:first-child {\n  font-size: 1.4rem;\n  margin-bottom: 8px;\n}\n\nfooter {\n  grid-area: foot;\n  background-color: lightblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/menu/menu.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,4CAA0C;AAC5C;;AAEA;EACE,6CAA6C;EAC7C,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb;;;oBAGkB;EAClB,kCAAkC;EAClC,aAAa;EACb,kBAAkB;AACpB;;AAEA,yBAAyB;;AAEzB;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,qCAAqC;AACvC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,4CAA4C;EAC5C,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,8BAA8B;EAC9B,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA,0CAA0C;;AAE1C;EACE,aAAa;EACb,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":["@font-face {\n  font-family: Lora;\n  src: url(../assets/fonts/Lora-Regular.ttf);\n}\n\n:root {\n  --menu-font: \"Lora\", serif, \"Times New Roman\";\n  --menu-default-font: \"Roboto\", serif, \"Times New Roman\";\n}\n\n.menu-page {\n  display: grid;\n  grid-template-areas:\n    \"head head head\"\n    \"main main main\"\n    \"foot foot foot\";\n  grid-template-rows: 80px auto 60px;\n  height: 100vh;\n  position: relative;\n}\n\n/* Start of menu header */\n\nheader {\n  grid-area: head;\n  background-color: lightblue;\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 4px;\n  align-items: center;\n  grid-area: head;\n  position: relative;\n  z-index: 2;\n  box-shadow: 1px 4px 5px 0px #80808075;\n}\n\nheader>p {\n  margin-left: 10px;\n}\n\n.menu-page button {\n  border: none;\n  background-color: rgba(255, 255, 255, 0.466);\n  backdrop-filter: blur(2px);\n  color: black;\n}\n\nnav>ul {\n  display: flex;\n  gap: 14px;\n  justify-content: space-evenly;\n  margin-right: 10px;\n}\n\nul>li {\n  list-style: none;\n  /* outline: 1px solid blue; */\n  height: 55px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2px;\n  border-bottom-color: lightblue;\n  border-bottom-style: solid;\n  margin-bottom: 4px;\n}\n\nli>button {\n  width: 65px;\n  height: 35px;\n  font-size: 0.8rem;\n}\n\n/* Start of main content (for menu page) */\n\n.menu-page main {\n  display: grid;\n  grid-area: main;\n  grid-auto-rows: 1fr 1fr 1fr;\n  padding: 14px 19px;\n  background-color: whitesmoke;\n}\n\n.menu-page main>* {\n  font-family: var(--menu-font);\n}\n\n.menu-page main>div {\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n}\n\n.menu-page .startersLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .entreesLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .dessertsLabel {\n  grid-row: 1/2;\n  align-self: center;\n  font-size: 1.5rem;\n}\n\n.menu-page .startersContainer {\n  grid-row: 1/2;\n  padding: 8px;\n}\n\n.menu-page main>div>div {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 22px;\n}\n\n.menu-page main>div>div>div {\n  height: 250px;\n  outline: 1px;\n  /* outline: 1px solid black; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 12px;\n  box-shadow: 4px 4px grey;\n  background-color: lightgrey;\n}\n\n.menu-page main>div>div>div>p:last-child {\n  font-size: 1.2rem;\n  width: 75%;\n}\n\n.menu-page main>div>div>div>p:first-child {\n  font-size: 1.4rem;\n  margin-bottom: 8px;\n}\n\nfooter {\n  grid-area: foot;\n  background-color: lightblue;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type=\"search\"] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type=\"search\"]:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n\n\n\n\n\n\n::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Apply border box to entire document */\n* {\n    box-sizing: border-box;\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\ninput {\n    -webkit-appearance: none;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* Give input and text area consistent look */\ninput,\ntextarea {\n    background: none;\n    border: 1px solid grey;\n    border-radius: 5px;\n    outline: none;\n    padding: 4px;\n}\n\ntextarea {\n    display: block;\n    padding: 10px;\n    margin: 10px 0 0 -10px;\n    width: 100%;\n    height: 90%;\n    border-right: 1px solid;\n    resize: none;\n    overflow: auto;\n}\n\nbutton {\n    padding: 5px;\n    font: bold 0.6em sans-serif;\n    border: 1px solid #333;\n    border-radius: 5px;\n    background: none;\n    cursor: pointer;\n}\n\nbutton:hover,\nbutton:focus {\n    outline: none;\n    /* background: #000;\n    color: #fff; */\n}\n\n/* Gets rid of default search to remove restrictions */\ninput[type=\"search\"] {\n    appearance: none;\n}\n\n/* Fix for inconsistent display of clear \"x\" icon in search inputs across different browsers. \n  , this code removes the icon in Edge and Chrome when the input loses focus, while keeping it visible in Safari. */\ninput[type=\"search\"]:not(:focus, :active)::-webkit-search-cancel-button {\n    display: none;\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\n\n\n\n\n\n\n::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 4px;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/contact/contact.css":
/*!*********************************!*\
  !*** ./src/contact/contact.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/contact/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home/home.css":
/*!***************************!*\
  !*** ./src/home/home.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu/menu.css":
/*!***************************!*\
  !*** ./src/menu/menu.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.css */ "./src/contact/contact.css");


const contactPageLoad = () => {
  const renderHeader = () => {
    const header = document.createElement("header");

    // function creates and renders content inside of header element

    const leftLogoText = document.createElement("p");
    leftLogoText.textContent = "Rocky Top";
    header.appendChild(leftLogoText);

    // Create right side nav container and its child elements
    const rightSideNav = document.createElement("nav");
    rightSideNav.classList.add("rightSideNav");

    // Create unordered list that contains nav links to other pages
    const ul = document.createElement("ul");
    let li;
    let button;

    const pageNames = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
      li = document.createElement("li");
      if (pageNames[i] === "Contact") {
        li.style.borderBottomColor = "black";
      }
      button = document.createElement("button");
      button.classList.add(`page-${i + 1}`);
      button.textContent = pageNames[i];
      li.appendChild(button);
      ul.appendChild(li);
    }

    rightSideNav.appendChild(ul);
    header.appendChild(rightSideNav);
    return header;
  };

  const renderMain = () => {
    const main = document.createElement("main");
    // allows us to keep our css files specific to the current page
    main.classList.add("contact-page");

    const h1 = document.createElement("h1");
    h1.textContent = "Get in Contact with us!";
    main.appendChild(h1);

    const restaurantInfoContainers = document.createElement("div");
    restaurantInfoContainers.classList.add("restaurantInfoContainers");
    main.appendChild(restaurantInfoContainers);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");
    restaurantInfoContainers.appendChild(contactContainer);

    const phoneNumberContainer = document.createElement("div");
    phoneNumberContainer.classList.add("phoneNumberContainer");
    contactContainer.appendChild(phoneNumberContainer);

    const h3PhoneContainer = document.createElement("h3");
    h3PhoneContainer.textContent = "Phone number:";
    phoneNumberContainer.appendChild(h3PhoneContainer);

    const phoneNumberPara = document.createElement("p");
    phoneNumberPara.classList.add("phoneNumber");
    phoneNumberPara.textContent = "(123) 456-7890";
    phoneNumberContainer.appendChild(phoneNumberPara);

    const emailContainer = document.createElement("div");
    emailContainer.classList.add("emailContainer");
    contactContainer.appendChild(emailContainer);

    const h3EmailContainer = document.createElement("h3");
    h3EmailContainer.textContent = "Email:";
    emailContainer.appendChild(h3EmailContainer);

    const emailPara = document.createElement("p");
    emailPara.classList.add("emailPara");
    emailPara.textContent = "fakeemail@email.com";
    emailContainer.appendChild(emailPara);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("locationContainer");
    restaurantInfoContainers.appendChild(locationContainer);

    // Create iframe to embed google map
    const iframe = document.createElement("iframe");
    setAttributes(iframe, {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13348.154443976124!2d-106.37357130474606!3d39.59902409313627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876a7060c630dbdb%3A0xb8abce9f79af70e4!2sEagle%20County%2C%20CO%2081657!5e0!3m2!1sen!2sus!4v1678649680796!5m2!1sen!2sus",
      allowfullscreen: "false",
      loading: "lazy",
      referrerpolicy: "no-referrer-when-downgrade",
    });
    locationContainer.appendChild(iframe);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  // helper function that sets multiple attributes on DOM element
  // at once
  const setAttributes = (el, attrs) => {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  return { renderHeader, setAttributes, renderFooter, renderMain };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageLoad);


/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home/home.css");
// import "./normalize.css";


// loads home page using DOM
const homePageLoad = () => {
  const renderHeader = () => {
    const header = document.createElement("header");

    // function creates and renders content inside of header element

    const leftLogoText = document.createElement("p");
    leftLogoText.textContent = "Rocky Top";
    header.appendChild(leftLogoText);

    // Create right side nav container and its child elements
    const rightSideNav = document.createElement("nav");
    rightSideNav.classList.add("rightSideNav");

    // Create unordered list that contains nav links to other pages
    const ul = document.createElement("ul");
    let li;
    let button;

    const pageNames = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
      li = document.createElement("li");
      li.classList.add(`li-${i + 1}`);
      if (pageNames[i] === "Home"){
        li.style.borderBottomColor = "black";
      }
      button = document.createElement("button");
      button.classList.add(`page-${i + 1}`);
      button.textContent = pageNames[i];
      li.appendChild(button);
      ul.appendChild(li);
    }

    rightSideNav.appendChild(ul);
    header.appendChild(rightSideNav);
    return header;
  };

  const renderMain = () => {
    const main = document.createElement("main");
    // allows us to keep our css files specific to the current page
    main.classList.add("home-page");

    // Create head line for top of home page with p element for text
    const headLine = document.createElement("div");
    headLine.classList.add("headLine");
    const headLinePara = document.createElement("p");
    headLinePara.textContent = "An exceptional dining experience... Rocky Top";
    headLine.appendChild(headLinePara);

    // Create bg image, class, & alt attribute
    const backgroundImage = document.createElement("div");
    backgroundImage.classList.add("backgroundImage");
    backgroundImage.setAttribute(
      "alt",
      "A landscape picture of the mountains covered in snow"
    );

    // Create bg img p element & class
    const bgImgPara = document.createElement("p");
    bgImgPara.classList.add("bg-img-headline");
    bgImgPara.textContent =
      "Come experience our tasty meals with a fantastic view! We offer a wide variety of food and the atmosphere is fantastic";

    backgroundImage.appendChild(bgImgPara);

    main.appendChild(headLine);
    main.appendChild(backgroundImage);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  return { renderHeader, renderMain, renderFooter };
};

/* homePageLoad(); */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePageLoad);


/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/menu/menu.css");
// import "./normalize.css";


const menuPageLoad = () => {
  const renderHeader = () => {
    const header = document.createElement("header");

    // function creates and renders content inside of header element

    const leftLogoText = document.createElement("p");
    leftLogoText.textContent = "Rocky Top";
    header.appendChild(leftLogoText);

    // Create right side nav container and its child elements
    const rightSideNav = document.createElement("nav");
    rightSideNav.classList.add("rightSideNav");

    // Create unordered list that contains nav links to other pages
    const ul = document.createElement("ul");
    let li;
    let button;

    const pageNames = ["Home", "Menu", "Contact"];
    for (let i = 0; i < 3; i++) {
      li = document.createElement("li");
      if (pageNames[i] === "Menu"){
        li.style.borderBottomColor = "black";
      }
      button = document.createElement("button");
      button.classList.add(`page-${i + 1}`);
      button.textContent = pageNames[i];
      li.appendChild(button);
      ul.appendChild(li);
    }

    rightSideNav.appendChild(ul);
    header.appendChild(rightSideNav);
    return header;
  };

  const renderMain = () => {
    const main = document.createElement("main");
    // allows us to keep our css files specific to the current page
    main.classList.add("menu-main");

    // Start of starters container
    const startersContainer = document.createElement("div");
    startersContainer.classList.add("startersContainer");

    const startersLabel = document.createElement("p");
    startersLabel.classList.add("startersLabel");
    startersLabel.textContent = "Starters";
    startersContainer.appendChild(startersLabel);

    // Creates div that holds the actual menu (starters) items
    const starters = document.createElement("div");
    starters.classList.add("starters");

    // Start of oysters menu item
    const roastedOysters = document.createElement("div");
    roastedOysters.classList.add("roastedOysters");

    const oystersTitleAndPrice = document.createElement("p");
    oystersTitleAndPrice.classList.add("titleAndPrice");
    oystersTitleAndPrice.textContent = "Roasted Oysters ($18)";
    const oystersDescription = document.createElement("p");
    oystersDescription.classList.add("description");
    oystersDescription.textContent =
      " Enjoy the briny flavor of fresh oysters roasted in garlic butter and served with a squeeze of lemon.";

    roastedOysters.append(oystersTitleAndPrice, oystersDescription);

    // Start of beef tartare menu item
    const beefTartare = document.createElement("div");
    beefTartare.classList.add("beefTartare");

    const beefTartareTitleAndPrice = document.createElement("p");
    beefTartareTitleAndPrice.classList.add("titleAndPrice");
    beefTartareTitleAndPrice.textContent = "Beef Tartare ($22)";
    const beefTartareDescription = document.createElement("p");
    beefTartareDescription.classList.add("description");
    beefTartareDescription.textContent =
      "A classic dish of finely chopped raw beef seasoned with capers, mustard and a quail egg on top";

    beefTartare.append(beefTartareTitleAndPrice, beefTartareDescription);

    // Start of artic char menu item
    const articChar = document.createElement("div");
    articChar.classList.add("articChar");

    const articCharTitleAndPrice = document.createElement("p");
    articCharTitleAndPrice.classList.add("titleAndPrice");
    articCharTitleAndPrice.textContent = "Arctic Char ($20)";
    const articCharDescription = document.createElement("p");
    articCharDescription.classList.add("description");
    articCharDescription.textContent =
      " A delicate fish cured with citrus and served with a crisp fennel salad and a dollop of dill cream.";

    articChar.append(articCharTitleAndPrice, articCharDescription);

    // append menu items to starters div, and starters div to starters container
    starters.append(roastedOysters, beefTartare, articChar);
    startersContainer.appendChild(starters);

    // Start of entrees container
    const entreesContainer = document.createElement("div");
    entreesContainer.classList.add("entreesContainer");

    const entreesLabel = document.createElement("p");
    entreesLabel.classList.add("entreesLabel");
    entreesLabel.textContent = "Entrees";
    entreesContainer.appendChild(entreesLabel);

    // Creates div that holds the actual menu (entrees) items
    const entrees = document.createElement("div");
    entrees.classList.add("entrees");

    // Start of skate menu item
    const skate = document.createElement("div");
    skate.classList.add("skate");

    const skateTitleAndPrice = document.createElement("p");
    skateTitleAndPrice.classList.add("titleAndPrice");
    skateTitleAndPrice.textContent = "Skate ($36)";
    const skateDescription = document.createElement("p");
    skateDescription.classList.add("description");
    skateDescription.textContent =
      "A tender fillet of skate pan-fried in brown butter and garnished with capers and parsley.";

    skate.append(skateTitleAndPrice, skateDescription);

    // Start of lamb menu item
    const lamb = document.createElement("div");
    lamb.classList.add("lamb");

    const lambTitleAndPrice = document.createElement("p");
    lambTitleAndPrice.classList.add("titleAndPrice");
    lambTitleAndPrice.textContent = "Lamb ($42)";
    const lambDescription = document.createElement("p");
    lambDescription.classList.add("description");
    lambDescription.textContent =
      "A succulent cut of lamb roasted to perfection and accompanied by a tangy mint sauce and crispy potatoes.";

    lamb.append(lambTitleAndPrice, lambDescription);

    // Start of pork shoulder menu item
    const porkShoulder = document.createElement("div");
    porkShoulder.classList.add("articChar");

    const porkShoulderTitleAndPrice = document.createElement("p");
    porkShoulderTitleAndPrice.classList.add("titleAndPrice");
    porkShoulderTitleAndPrice.textContent = "Pork Shoulder ($38)";
    const porkShoulderDescription = document.createElement("p");
    porkShoulderDescription.classList.add("description");
    porkShoulderDescription.textContent =
      "A hearty portion of pork shoulder braised until fork-tender and topped with a sweet and spicy apple chutney. Served with mashed sweet potatoes.";

    porkShoulder.append(porkShoulderTitleAndPrice, porkShoulderDescription);

    // append menu items to starters div, and starters div to starters container
    entrees.append(skate, lamb, porkShoulder);
    entreesContainer.appendChild(entrees);

    // Start of desserts container
    const dessertsContainer = document.createElement("div");
    dessertsContainer.classList.add("dessertsContainer");

    const dessertsLabel = document.createElement("p");
    dessertsLabel.classList.add("dessertsLabel");
    dessertsLabel.textContent = "Desserts";
    dessertsContainer.appendChild(dessertsLabel);

    // Creates div that holds the actual menu (dessert) items
    const desserts = document.createElement("div");
    desserts.classList.add("desserts");

    // Start of chocolate mousse menu item
    const chocolateMousse = document.createElement("div");
    chocolateMousse.classList.add("chocolateMousse");

    const chocolateMousseTitleAndPrice = document.createElement("p");
    chocolateMousseTitleAndPrice.classList.add("titleAndPrice");
    chocolateMousseTitleAndPrice.textContent = "Chocolate Mousse ($12)";
    const chocolateMousseDescription = document.createElement("p");
    chocolateMousseDescription.classList.add("description");
    chocolateMousseDescription.textContent =
      "A decadent dessert of rich chocolate mousse topped with whipped cream and fresh raspberries.";

    chocolateMousse.append(
      chocolateMousseTitleAndPrice,
      chocolateMousseDescription
    );

    // Start of apple pie menu item
    const applePie = document.createElement("div");
    applePie.classList.add("applePie");

    const applePieTitleAndPrice = document.createElement("p");
    applePieTitleAndPrice.classList.add("titleAndPrice");
    applePieTitleAndPrice.textContent = "Apple Pie ($10)";
    const applePieDescription = document.createElement("p");
    applePieDescription.classList.add("description");
    applePieDescription.textContent =
      "A warm slice of homemade apple pie filled with cinnamon-spiced apples and drizzled with caramel sauce. Served with vanilla ice cream.";

    applePie.append(applePieTitleAndPrice, applePieDescription);

    // Start of lemon cheesecake menu item
    const lemonCheesecake = document.createElement("div");
    lemonCheesecake.classList.add("lemonCheesecake");

    const lemonCheesecakeTitleAndPrice = document.createElement("p");
    lemonCheesecakeTitleAndPrice.classList.add("titleAndPrice");
    lemonCheesecakeTitleAndPrice.textContent = "Lemon Cheesecake ($11)";
    const lemonCheesecakeDescription = document.createElement("p");
    lemonCheesecakeDescription.classList.add("description");
    lemonCheesecakeDescription.textContent =
      "A creamy cheesecake flavored with lemon zest and baked on a graham cracker crust. Served with a blueberry compote.";

    lemonCheesecake.append(
      lemonCheesecakeTitleAndPrice,
      lemonCheesecakeDescription
    );

    // append menu items to starters div, and starters div to starters container
    desserts.append(chocolateMousse, applePie, lemonCheesecake);
    dessertsContainer.appendChild(desserts);

    // append menu items inside main element
    main.append(startersContainer, entreesContainer, dessertsContainer);
    return main;
  };

  const renderFooter = () => {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: TheRealBill91";
    return footer;
  };

  return { renderHeader, renderMain, renderFooter };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageLoad);


/***/ }),

/***/ "./src/assets/fonts/Lora-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/assets/fonts/Lora-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3cbc2c45690ac3703d2.ttf";

/***/ }),

/***/ "./src/assets/fonts/PlayfairDisplay-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/PlayfairDisplay-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27705d9c43e8c36b1abd.ttf";

/***/ }),

/***/ "./src/assets/fonts/Poppins-Medium.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Poppins-Medium.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "673ed42382ab264e0bf5.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/assets/mountain-background.jpg":
/*!********************************************!*\
  !*** ./src/assets/mountain-background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "36aab69f3c0846b8b051.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home */ "./src/home/home.js");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");
/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact */ "./src/contact/contact.js");
/* import Pic from './assets/mountain-background.jpg' */





function loadHomePage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("home-page");
  contentContainer.appendChild((0,_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])().renderHeader());
  contentContainer.appendChild((0,_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])().renderMain());
  contentContainer.appendChild((0,_home_home__WEBPACK_IMPORTED_MODULE_1__["default"])().renderFooter());
}

function loadMenuPage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("menu-page");
  contentContainer.appendChild((0,_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])().renderHeader());
  contentContainer.appendChild((0,_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])().renderMain());
  contentContainer.appendChild((0,_menu_menu__WEBPACK_IMPORTED_MODULE_2__["default"])().renderFooter());
}

function loadContactPage() {
  const contentContainer = document.getElementById("content");
  // Prevents other css styles from being applied to current page
  contentContainer.className = "";
  contentContainer.classList.add("contact-page");
  contentContainer.appendChild((0,_contact_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().renderHeader());
  contentContainer.appendChild((0,_contact_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().renderMain());
  contentContainer.appendChild((0,_contact_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().renderFooter());


}

function pageSwitcher() {
  const homeButton = document.querySelector(".page-1");
  const menuButton = document.querySelector(".page-2");
  const contactButton = document.querySelector(".page-3");
  const contentContainer = document.getElementById("content");


  homeButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadHomePage();
    pageSwitcher();
  });

  menuButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadMenuPage();
    pageSwitcher();
  });

  contactButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    loadContactPage();
    pageSwitcher();
  });
}

loadHomePage();
pageSwitcher();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxN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QzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3lCO0FBQ2M7QUFDQTtBQUNTOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFZO0FBQzNDLCtCQUErQixzREFBWTtBQUMzQywrQkFBK0Isc0RBQVk7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBWTtBQUMzQywrQkFBK0Isc0RBQVk7QUFDM0MsK0JBQStCLHNEQUFZO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNERBQWU7QUFDOUMsK0JBQStCLDREQUFlO0FBQzlDLCtCQUErQiw0REFBZTs7O0FBRzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0L2NvbnRhY3QuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51L21lbnUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC9jb250YWN0LmNzcz85NTc5Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lL2hvbWUuY3NzPzhkNDEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvbWVudS5jc3M/ZmViMyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbm9ybWFsaXplLmNzcz82ODU2Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51L21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFjdC1wYWdlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZCBoZWFkIGhlYWRcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcImZvb3QgZm9vdCBmb290XFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvIDYwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWxvZ28tZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIC0taG9tZS10YWdsaW5lOiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtLWhvbWUtZGVmYXVsdDogXFxcIlJvYm90b1xcXCIsIHNlcmlmLCBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWw7XFxufVxcblxcbi8qIFN0YXJ0IG9mIGNvbnRhY3QgaGVhZGVyICovXFxuXFxuLmNvbnRhY3QtcGFnZSBoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE0cHggNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZDtcXG4gIHotaW5kZXg6IDI7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAwcHggIzgwODA4MDc1O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGhlYWRlcj5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIG5hdj51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb250YWN0LXBhZ2UgdWw+bGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSBsaT5idXR0b24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogU3RhcnQgb2YgbWFpbiBjb250ZW50IChmb3IgY29udGFjdCBwYWdlKSAqL1xcblxcbi5jb250YWN0LXBhZ2UgbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4vKiBzZWxlY3RzIG1haW4gc2VjdGlvbiBoZWFkZXIgKi9cXG4uY29udGFjdC1wYWdlIG1haW4+aDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIG1haW4+ZGl2PmRpdiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIC5yZXN0YXVyYW50SW5mb0NvbnRhaW5lcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ2FwOiAxNHB4O1xcbiAgcGFkZGluZzogMTJweCAyNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSAucGhvbmVOdW1iZXJDb250YWluZXIge1xcbiAgd2lkdGg6IDE3OHB4O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGlmcmFtZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSBmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRhY3QvY29udGFjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2I7OztvQkFHa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRTtrQ0FDZ0M7RUFDaEM7a0NBQ2dDO0VBQ2hDLG1EQUFtRDtBQUNyRDs7QUFFQSw0QkFBNEI7O0FBRTVCO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQSw2Q0FBNkM7O0FBRTdDO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsZUFBZTtFQUNmLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQjtvQ0FDa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhY3QtcGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWQgaGVhZCBoZWFkXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290IGZvb3QgZm9vdFxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0byA2MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbjpyb290IHtcXG4gIC0taGVhZGVyLWxvZ28tZm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNhbnMtc2VyaWYsXFxuICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIC0taG9tZS10YWdsaW5lOiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzYW5zLXNlcmlmLFxcbiAgICBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAtLWhvbWUtZGVmYXVsdDogXFxcIlJvYm90b1xcXCIsIHNlcmlmLCBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWw7XFxufVxcblxcbi8qIFN0YXJ0IG9mIGNvbnRhY3QgaGVhZGVyICovXFxuXFxuLmNvbnRhY3QtcGFnZSBoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE0cHggNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZDtcXG4gIHotaW5kZXg6IDI7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAwcHggIzgwODA4MDc1O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGhlYWRlcj5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIG5hdj51bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5jb250YWN0LXBhZ2UgdWw+bGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSBsaT5idXR0b24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogU3RhcnQgb2YgbWFpbiBjb250ZW50IChmb3IgY29udGFjdCBwYWdlKSAqL1xcblxcbi5jb250YWN0LXBhZ2UgbWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4vKiBzZWxlY3RzIG1haW4gc2VjdGlvbiBoZWFkZXIgKi9cXG4uY29udGFjdC1wYWdlIG1haW4+aDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIG1haW4+ZGl2PmRpdiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIC5yZXN0YXVyYW50SW5mb0NvbnRhaW5lcnMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ2FwOiAxNHB4O1xcbiAgcGFkZGluZzogMTJweCAyNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IDgwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSAucGhvbmVOdW1iZXJDb250YWluZXIge1xcbiAgd2lkdGg6IDE3OHB4O1xcbn1cXG5cXG4uY29udGFjdC1wYWdlIGlmcmFtZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRhY3QtcGFnZSBmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIlRyZWJ1Y2hldCBNU1xcXCIsIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgXFxcIkx1Y2lkYSBHcmFuZGVcXFwiLFxcbiAgICBcXFwiTHVjaWRhIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUGxheWZhaXJEaXNwbGF5LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbW91bnRhaW4tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1oZWFkZXItbG9nby1mb250OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgLS1ob21lLXRhZ2xpbmU6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNhbnMtc2VyaWYsXFxuICAgICAgICBcXFwiT3BlbiBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIC0taG9tZS1kZWZhdWx0OiBcXFwiUm9ib3RvXFxcIiwgc2VyaWYsIFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbDtcXG59XFxuXFxuLyogUGFyZW50IGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5ob21lLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWQgaGVhZCBoZWFkXFxcIlxcbiAgICAgICAgXFxcIm1haW4gbWFpbiBtYWluXFxcIlxcbiAgICAgICAgXFxcImZvb3QgZm9vdCBmb290XFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG8gNjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogU3RhcnQgb2YgaG9tZSBoZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxNHB4IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDFweCA0cHggNXB4IDBweCAjODA4MDgwNzU7XFxufVxcblxcbi5ob21lLXBhZ2UgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuaGVhZGVyPnAge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRlci1sb2dvLWZvbnQpO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbm5hdj51bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTRweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5ob21lLXBhZ2UgdWw+bGk6Zmlyc3Qtb2YtdHlwZSB7fVxcblxcbnVsPmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5saT5idXR0b24ge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogTWFpbiAobWlkZGxlKSBjb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uaG9tZS1wYWdlIG1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5ob21lLXBhZ2UgLmhlYWRMaW5lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDE2NSwgMTY1KTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtcGFnZSAuaGVhZExpbmU+cCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taG9tZS10YWdsaW5lKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1wYWdlIC5iYWNrZ3JvdW5kSW1hZ2U+YnV0dG9uIHtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NTUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4OiAxIGF1dG87XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4uaG9tZS1wYWdlIC5iYWNrZ3JvdW5kSW1hZ2U+cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XFxuICAgIC8qIGZpbHRlcjogYmx1cigwLjVyZW0pOyAqL1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taG9tZS1kZWZhdWx0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIGJveC1zaGFkb3c6ICM4MDgwODBjMiAwcHggMnB4IDZweCAxcHg7XFxufVxcblxcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZT5wOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbiAgICBmaWx0ZXI6IGJsdXIoMC41cmVtKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcbn1cXG5cXG4vKiBDb21lIGJhY2sgdG8gdGhpcyB0byBhZGQgY29sb3Igb3ZlcmxheSB0byBiZyBpbWFnZSAqL1xcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgxNSk7XFxufVxcblxcbi8qIGZvb3RlciBzdHlsaW5nICovXFxuXFxuLmhvbWUtcGFnZSBmb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3Q7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ob21lLWRlZmF1bHQpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw0Q0FBcUQ7QUFDekQ7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJO3NDQUNrQztJQUNsQztzQ0FDa0M7SUFDbEMsbURBQW1EO0FBQ3ZEOztBQUVBLDJCQUEyQjs7QUFFM0I7SUFDSSxhQUFhO0lBQ2I7Ozt3QkFHb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw0Q0FBNEM7SUFDNUMsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCw2QkFBNkI7QUFDakM7O0FBRUEsZ0NBQWdDOztBQUVoQztJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBRWxDO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5REFBd0Q7SUFDeEQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBLHVEQUF1RDtBQUN2RDtJQUNJLFdBQVc7SUFDWCxzQ0FBc0M7QUFDMUM7O0FBRUEsbUJBQW1COztBQUVuQjtJQUNJLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1BvcHBpbnMtTWVkaXVtLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWhlYWRlci1sb2dvLWZvbnQ6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWYsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzYW5zLXNlcmlmLFxcbiAgICAgICAgXFxcIk9wZW4gU2Fuc1xcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAtLWhvbWUtdGFnbGluZTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2Fucy1zZXJpZixcXG4gICAgICAgIFxcXCJPcGVuIFNhbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgLS1ob21lLWRlZmF1bHQ6IFxcXCJSb2JvdG9cXFwiLCBzZXJpZiwgXFxcIk9wZW4gU2Fuc1xcXCIsIEFyaWFsO1xcbn1cXG5cXG4vKiBQYXJlbnQgY29udGVudCBzdHlsaW5nICovXFxuXFxuLmhvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZCBoZWFkIGhlYWRcXFwiXFxuICAgICAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiXFxuICAgICAgICBcXFwiZm9vdCBmb290IGZvb3RcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0byA2MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBTdGFydCBvZiBob21lIGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDE0cHggNHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGhlYWQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm94LXNoYWRvdzogMXB4IDRweCA1cHggMHB4ICM4MDgwODA3NTtcXG59XFxuXFxuLmhvbWUtcGFnZSBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjYpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5oZWFkZXI+cCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGVyLWxvZ28tZm9udCk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxubmF2PnVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmhvbWUtcGFnZSB1bD5saTpmaXJzdC1vZi10eXBlIHt9XFxuXFxudWw+bGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTsgKi9cXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcblxcbmxpPmJ1dHRvbiB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiBNYWluIChtaWRkbGUpIGNvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5ob21lLXBhZ2UgbWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhvbWUtcGFnZSAuaGVhZExpbmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NSwgMTY1LCAxNjUpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1wYWdlIC5oZWFkTGluZT5wIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ob21lLXRhZ2xpbmUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZT5idXR0b24ge1xcbiAgICB3aWR0aDogODVweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1NSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmhvbWUtcGFnZSAuYmFja2dyb3VuZEltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9tb3VudGFpbi1iYWNrZ3JvdW5kLmpwZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogOHB4O1xcbiAgICBmbGV4OiAxIGF1dG87XFxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4uaG9tZS1wYWdlIC5iYWNrZ3JvdW5kSW1hZ2U+cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XFxuICAgIC8qIGZpbHRlcjogYmx1cigwLjVyZW0pOyAqL1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taG9tZS1kZWZhdWx0KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxuICAgIGJveC1zaGFkb3c6ICM4MDgwODBjMiAwcHggMnB4IDZweCAxcHg7XFxufVxcblxcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZT5wOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbiAgICBmaWx0ZXI6IGJsdXIoMC41cmVtKTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4O1xcbn1cXG5cXG4vKiBDb21lIGJhY2sgdG8gdGhpcyB0byBhZGQgY29sb3Igb3ZlcmxheSB0byBiZyBpbWFnZSAqL1xcbi5ob21lLXBhZ2UgLmJhY2tncm91bmRJbWFnZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgxNSk7XFxufVxcblxcbi8qIGZvb3RlciBzdHlsaW5nICovXFxuXFxuLmhvbWUtcGFnZSBmb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3Q7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1ob21lLWRlZmF1bHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9Mb3JhLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTG9yYTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tZW51LWZvbnQ6IFxcXCJMb3JhXFxcIiwgc2VyaWYsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiO1xcbiAgLS1tZW51LWRlZmF1bHQtZm9udDogXFxcIlJvYm90b1xcXCIsIHNlcmlmLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIjtcXG59XFxuXFxuLm1lbnUtcGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWQgaGVhZCBoZWFkXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiXFxuICAgIFxcXCJmb290IGZvb3QgZm9vdFxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0byA2MHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLyogU3RhcnQgb2YgbWVudSBoZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDE0cHggNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtYXJlYTogaGVhZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBib3gtc2hhZG93OiAxcHggNHB4IDVweCAwcHggIzgwODA4MDc1O1xcbn1cXG5cXG5oZWFkZXI+cCB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLm1lbnUtcGFnZSBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2Nik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxubmF2PnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE0cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxudWw+bGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibHVlOyAqL1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiBsaWdodGJsdWU7XFxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuXFxubGk+YnV0dG9uIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi8qIFN0YXJ0IG9mIG1haW4gY29udGVudCAoZm9yIG1lbnUgcGFnZSkgKi9cXG5cXG4ubWVudS1wYWdlIG1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGdyaWQtYXV0by1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIHBhZGRpbmc6IDE0cHggMTlweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5tZW51LXBhZ2UgbWFpbj4qIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tZW51LWZvbnQpO1xcbn1cXG5cXG4ubWVudS1wYWdlIG1haW4+ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLm1lbnUtcGFnZSAuc3RhcnRlcnNMYWJlbCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZW51LXBhZ2UgLmVudHJlZXNMYWJlbCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZW51LXBhZ2UgLmRlc3NlcnRzTGFiZWwge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubWVudS1wYWdlIC5zdGFydGVyc0NvbnRhaW5lciB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubWVudS1wYWdlIG1haW4+ZGl2PmRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDIycHg7XFxufVxcblxcbi5tZW51LXBhZ2UgbWFpbj5kaXY+ZGl2PmRpdiB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbiAgb3V0bGluZTogMXB4O1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4ubWVudS1wYWdlIG1haW4+ZGl2PmRpdj5kaXY+cDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuXFxuLm1lbnUtcGFnZSBtYWluPmRpdj5kaXY+ZGl2PnA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3Q7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQiw0Q0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiOzs7b0JBR2tCO0VBQ2xCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBLHlCQUF5Qjs7QUFFekI7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNENBQTRDO0VBQzVDLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUEsMENBQTBDOztBQUUxQztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBMb3JhO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL0xvcmEtUmVndWxhci50dGYpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1lbnUtZm9udDogXFxcIkxvcmFcXFwiLCBzZXJpZiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCI7XFxuICAtLW1lbnUtZGVmYXVsdC1mb250OiBcXFwiUm9ib3RvXFxcIiwgc2VyaWYsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiO1xcbn1cXG5cXG4ubWVudS1wYWdlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZCBoZWFkIGhlYWRcXFwiXFxuICAgIFxcXCJtYWluIG1haW4gbWFpblxcXCJcXG4gICAgXFxcImZvb3QgZm9vdCBmb290XFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvIDYwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4vKiBTdGFydCBvZiBtZW51IGhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTRweCA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBoZWFkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIGJveC1zaGFkb3c6IDFweCA0cHggNXB4IDBweCAjODA4MDgwNzU7XFxufVxcblxcbmhlYWRlcj5wIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubWVudS1wYWdlIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY2KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5uYXY+dWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTRweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG51bD5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7ICovXFxuICBoZWlnaHQ6IDU1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5cXG5saT5idXR0b24ge1xcbiAgd2lkdGg6IDY1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogU3RhcnQgb2YgbWFpbiBjb250ZW50IChmb3IgbWVudSBwYWdlKSAqL1xcblxcbi5tZW51LXBhZ2UgbWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgcGFkZGluZzogMTRweCAxOXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuXFxuLm1lbnUtcGFnZSBtYWluPioge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1lbnUtZm9udCk7XFxufVxcblxcbi5tZW51LXBhZ2UgbWFpbj5kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4ubWVudS1wYWdlIC5zdGFydGVyc0xhYmVsIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1lbnUtcGFnZSAuZW50cmVlc0xhYmVsIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1lbnUtcGFnZSAuZGVzc2VydHNMYWJlbCB7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tZW51LXBhZ2UgLnN0YXJ0ZXJzQ29udGFpbmVyIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5tZW51LXBhZ2UgbWFpbj5kaXY+ZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogMjJweDtcXG59XFxuXFxuLm1lbnUtcGFnZSBtYWluPmRpdj5kaXY+ZGl2IHtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBvdXRsaW5lOiAxcHg7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3gtc2hhZG93OiA0cHggNHB4IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcbi5tZW51LXBhZ2UgbWFpbj5kaXY+ZGl2PmRpdj5wOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG4ubWVudS1wYWdlIG1haW4+ZGl2PmRpdj5kaXY+cDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogQXBwbHkgYm9yZGVyIGJveCB0byBlbnRpcmUgZG9jdW1lbnQgKi9cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5pbnB1dCB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogR2l2ZSBpbnB1dCBhbmQgdGV4dCBhcmVhIGNvbnNpc3RlbnQgbG9vayAqL1xcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgLTEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogYm9sZCAwLjZlbSBzYW5zLXNlcmlmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjZmZmOyAqL1xcbn1cXG5cXG4vKiBHZXRzIHJpZCBvZiBkZWZhdWx0IHNlYXJjaCB0byByZW1vdmUgcmVzdHJpY3Rpb25zICovXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiBGaXggZm9yIGluY29uc2lzdGVudCBkaXNwbGF5IG9mIGNsZWFyIFxcXCJ4XFxcIiBpY29uIGluIHNlYXJjaCBpbnB1dHMgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy4gXFxuICAsIHRoaXMgY29kZSByZW1vdmVzIHRoZSBpY29uIGluIEVkZ2UgYW5kIENocm9tZSB3aGVuIHRoZSBpbnB1dCBsb3NlcyBmb2N1cywgd2hpbGUga2VlcGluZyBpdCB2aXNpYmxlIGluIFNhZmFyaS4gKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTpub3QoOmZvY3VzLCA6YWN0aXZlKTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7OztBQUdGO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsTUFBTTtBQUNWOztBQUVBLHdDQUF3QztBQUN4QztJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7OztJQUdJOztBQUVKO0lBQ0ksdUJBQXVCO0lBQ3ZCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0FBQ1Y7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksaUNBQWlDO0lBQ2pDLE1B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QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEFwcGx5IGJvcmRlciBib3ggdG8gZW50aXJlIGRvY3VtZW50ICovXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaW5wdXQge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIEdpdmUgaW5wdXQgYW5kIHRleHQgYXJlYSBjb25zaXN0ZW50IGxvb2sgKi9cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAwIC0xMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQ6IGJvbGQgMC42ZW0gc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI2ZmZjsgKi9cXG59XFxuXFxuLyogR2V0cyByaWQgb2YgZGVmYXVsdCBzZWFyY2ggdG8gcmVtb3ZlIHJlc3RyaWN0aW9ucyAqL1xcbmlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyogRml4IGZvciBpbmNvbnNpc3RlbnQgZGlzcGxheSBvZiBjbGVhciBcXFwieFxcXCIgaWNvbiBpbiBzZWFyY2ggaW5wdXRzIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuIFxcbiAgLCB0aGlzIGNvZGUgcmVtb3ZlcyB0aGUgaWNvbiBpbiBFZGdlIGFuZCBDaHJvbWUgd2hlbiB0aGUgaW5wdXQgbG9zZXMgZm9jdXMsIHdoaWxlIGtlZXBpbmcgaXQgdmlzaWJsZSBpbiBTYWZhcmkuICovXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl06bm90KDpmb2N1cywgOmFjdGl2ZSk6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2NvbnRhY3QuY3NzXCI7XG5cbmNvbnN0IGNvbnRhY3RQYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICAvLyBmdW5jdGlvbiBjcmVhdGVzIGFuZCByZW5kZXJzIGNvbnRlbnQgaW5zaWRlIG9mIGhlYWRlciBlbGVtZW50XG5cbiAgICBjb25zdCBsZWZ0TG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZWZ0TG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlJvY2t5IFRvcFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsZWZ0TG9nb1RleHQpO1xuXG4gICAgLy8gQ3JlYXRlIHJpZ2h0IHNpZGUgbmF2IGNvbnRhaW5lciBhbmQgaXRzIGNoaWxkIGVsZW1lbnRzXG4gICAgY29uc3QgcmlnaHRTaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICByaWdodFNpZGVOYXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0U2lkZU5hdlwiKTtcblxuICAgIC8vIENyZWF0ZSB1bm9yZGVyZWQgbGlzdCB0aGF0IGNvbnRhaW5zIG5hdiBsaW5rcyB0byBvdGhlciBwYWdlc1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBsaTtcbiAgICBsZXQgYnV0dG9uO1xuXG4gICAgY29uc3QgcGFnZU5hbWVzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChwYWdlTmFtZXNbaV0gPT09IFwiQ29udGFjdFwiKSB7XG4gICAgICAgIGxpLnN0eWxlLmJvcmRlckJvdHRvbUNvbG9yID0gXCJibGFja1wiO1xuICAgICAgfVxuICAgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGBwYWdlLSR7aSArIDF9YCk7XG4gICAgICBidXR0b24udGV4dENvbnRlbnQgPSBwYWdlTmFtZXNbaV07XG4gICAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZU5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJpZ2h0U2lkZU5hdik7XG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNYWluID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICAvLyBhbGxvd3MgdXMgdG8ga2VlcCBvdXIgY3NzIGZpbGVzIHNwZWNpZmljIHRvIHRoZSBjdXJyZW50IHBhZ2VcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXBhZ2VcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiR2V0IGluIENvbnRhY3Qgd2l0aCB1cyFcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRJbmZvQ29udGFpbmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzdGF1cmFudEluZm9Db250YWluZXJzLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50SW5mb0NvbnRhaW5lcnNcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mb0NvbnRhaW5lcnMpO1xuXG4gICAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRhaW5lclwiKTtcbiAgICByZXN0YXVyYW50SW5mb0NvbnRhaW5lcnMuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGhvbmVOdW1iZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBob25lTnVtYmVyQ29udGFpbmVyXCIpO1xuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXJDb250YWluZXIpO1xuXG4gICAgY29uc3QgaDNQaG9uZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBoM1Bob25lQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXI6XCI7XG4gICAgcGhvbmVOdW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaDNQaG9uZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlclBhcmEuY2xhc3NMaXN0LmFkZChcInBob25lTnVtYmVyXCIpO1xuICAgIHBob25lTnVtYmVyUGFyYS50ZXh0Q29udGVudCA9IFwiKDEyMykgNDU2LTc4OTBcIjtcbiAgICBwaG9uZU51bWJlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlclBhcmEpO1xuXG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVtYWlsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbWFpbENvbnRhaW5lclwiKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGgzRW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDNFbWFpbENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRW1haWw6XCI7XG4gICAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaDNFbWFpbENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBlbWFpbFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbWFpbFBhcmEuY2xhc3NMaXN0LmFkZChcImVtYWlsUGFyYVwiKTtcbiAgICBlbWFpbFBhcmEudGV4dENvbnRlbnQgPSBcImZha2VlbWFpbEBlbWFpbC5jb21cIjtcbiAgICBlbWFpbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbFBhcmEpO1xuXG4gICAgY29uc3QgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvbkNvbnRhaW5lclwiKTtcbiAgICByZXN0YXVyYW50SW5mb0NvbnRhaW5lcnMuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xuXG4gICAgLy8gQ3JlYXRlIGlmcmFtZSB0byBlbWJlZCBnb29nbGUgbWFwXG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGlmcmFtZSwge1xuICAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDEzMzQ4LjE1NDQ0Mzk3NjEyNCEyZC0xMDYuMzczNTcxMzA0NzQ2MDYhM2QzOS41OTkwMjQwOTMxMzYyNyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODc2YTcwNjBjNjMwZGJkYiUzQTB4YjhhYmNlOWY3OWFmNzBlNCEyc0VhZ2xlJTIwQ291bnR5JTJDJTIwQ08lMjA4MTY1NyE1ZTAhM20yITFzZW4hMnN1cyE0djE2Nzg2NDk2ODA3OTYhNW0yITFzZW4hMnN1c1wiLFxuICAgICAgYWxsb3dmdWxsc2NyZWVuOiBcImZhbHNlXCIsXG4gICAgICBsb2FkaW5nOiBcImxhenlcIixcbiAgICAgIHJlZmVycmVycG9saWN5OiBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIsXG4gICAgfSk7XG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnk6IFRoZVJlYWxCaWxsOTFcIjtcbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IHNldHMgbXVsdGlwbGUgYXR0cmlidXRlcyBvbiBET00gZWxlbWVudFxuICAvLyBhdCBvbmNlXG4gIGNvbnN0IHNldEF0dHJpYnV0ZXMgPSAoZWwsIGF0dHJzKSA9PiB7XG4gICAgZm9yICh2YXIga2V5IGluIGF0dHJzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVySGVhZGVyLCBzZXRBdHRyaWJ1dGVzLCByZW5kZXJGb290ZXIsIHJlbmRlck1haW4gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlTG9hZDtcbiIsIi8vIGltcG9ydCBcIi4vbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9ob21lLmNzc1wiO1xuXG4vLyBsb2FkcyBob21lIHBhZ2UgdXNpbmcgRE9NXG5jb25zdCBob21lUGFnZUxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgLy8gZnVuY3Rpb24gY3JlYXRlcyBhbmQgcmVuZGVycyBjb250ZW50IGluc2lkZSBvZiBoZWFkZXIgZWxlbWVudFxuXG4gICAgY29uc3QgbGVmdExvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGVmdExvZ29UZXh0LnRleHRDb250ZW50ID0gXCJSb2NreSBUb3BcIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGVmdExvZ29UZXh0KTtcblxuICAgIC8vIENyZWF0ZSByaWdodCBzaWRlIG5hdiBjb250YWluZXIgYW5kIGl0cyBjaGlsZCBlbGVtZW50c1xuICAgIGNvbnN0IHJpZ2h0U2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgcmlnaHRTaWRlTmF2LmNsYXNzTGlzdC5hZGQoXCJyaWdodFNpZGVOYXZcIik7XG5cbiAgICAvLyBDcmVhdGUgdW5vcmRlcmVkIGxpc3QgdGhhdCBjb250YWlucyBuYXYgbGlua3MgdG8gb3RoZXIgcGFnZXNcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBsZXQgbGk7XG4gICAgbGV0IGJ1dHRvbjtcblxuICAgIGNvbnN0IHBhZ2VOYW1lcyA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKGBsaS0ke2kgKyAxfWApO1xuICAgICAgaWYgKHBhZ2VOYW1lc1tpXSA9PT0gXCJIb21lXCIpe1xuICAgICAgICBsaS5zdHlsZS5ib3JkZXJCb3R0b21Db2xvciA9IFwiYmxhY2tcIjtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChgcGFnZS0ke2kgKyAxfWApO1xuICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gcGFnZU5hbWVzW2ldO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICByaWdodFNpZGVOYXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyaWdodFNpZGVOYXYpO1xuICAgIHJldHVybiBoZWFkZXI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWFpbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgLy8gYWxsb3dzIHVzIHRvIGtlZXAgb3VyIGNzcyBmaWxlcyBzcGVjaWZpYyB0byB0aGUgY3VycmVudCBwYWdlXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1wYWdlXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGhlYWQgbGluZSBmb3IgdG9wIG9mIGhvbWUgcGFnZSB3aXRoIHAgZWxlbWVudCBmb3IgdGV4dFxuICAgIGNvbnN0IGhlYWRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkTGluZS5jbGFzc0xpc3QuYWRkKFwiaGVhZExpbmVcIik7XG4gICAgY29uc3QgaGVhZExpbmVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaGVhZExpbmVQYXJhLnRleHRDb250ZW50ID0gXCJBbiBleGNlcHRpb25hbCBkaW5pbmcgZXhwZXJpZW5jZS4uLiBSb2NreSBUb3BcIjtcbiAgICBoZWFkTGluZS5hcHBlbmRDaGlsZChoZWFkTGluZVBhcmEpO1xuXG4gICAgLy8gQ3JlYXRlIGJnIGltYWdlLCBjbGFzcywgJiBhbHQgYXR0cmlidXRlXG4gICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2UuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmRJbWFnZVwiKTtcbiAgICBiYWNrZ3JvdW5kSW1hZ2Uuc2V0QXR0cmlidXRlKFxuICAgICAgXCJhbHRcIixcbiAgICAgIFwiQSBsYW5kc2NhcGUgcGljdHVyZSBvZiB0aGUgbW91bnRhaW5zIGNvdmVyZWQgaW4gc25vd1wiXG4gICAgKTtcblxuICAgIC8vIENyZWF0ZSBiZyBpbWcgcCBlbGVtZW50ICYgY2xhc3NcbiAgICBjb25zdCBiZ0ltZ1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiZ0ltZ1BhcmEuY2xhc3NMaXN0LmFkZChcImJnLWltZy1oZWFkbGluZVwiKTtcbiAgICBiZ0ltZ1BhcmEudGV4dENvbnRlbnQgPVxuICAgICAgXCJDb21lIGV4cGVyaWVuY2Ugb3VyIHRhc3R5IG1lYWxzIHdpdGggYSBmYW50YXN0aWMgdmlldyEgV2Ugb2ZmZXIgYSB3aWRlIHZhcmlldHkgb2YgZm9vZCBhbmQgdGhlIGF0bW9zcGhlcmUgaXMgZmFudGFzdGljXCI7XG5cbiAgICBiYWNrZ3JvdW5kSW1hZ2UuYXBwZW5kQ2hpbGQoYmdJbWdQYXJhKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZExpbmUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltYWdlKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnk6IFRoZVJlYWxCaWxsOTFcIjtcbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlckhlYWRlciwgcmVuZGVyTWFpbiwgcmVuZGVyRm9vdGVyIH07XG59O1xuXG4vKiBob21lUGFnZUxvYWQoKTsgKi9cblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2VMb2FkO1xuIiwiLy8gaW1wb3J0IFwiLi9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuL21lbnUuY3NzXCI7XG5cbmNvbnN0IG1lbnVQYWdlTG9hZCA9ICgpID0+IHtcbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICAvLyBmdW5jdGlvbiBjcmVhdGVzIGFuZCByZW5kZXJzIGNvbnRlbnQgaW5zaWRlIG9mIGhlYWRlciBlbGVtZW50XG5cbiAgICBjb25zdCBsZWZ0TG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZWZ0TG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlJvY2t5IFRvcFwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsZWZ0TG9nb1RleHQpO1xuXG4gICAgLy8gQ3JlYXRlIHJpZ2h0IHNpZGUgbmF2IGNvbnRhaW5lciBhbmQgaXRzIGNoaWxkIGVsZW1lbnRzXG4gICAgY29uc3QgcmlnaHRTaWRlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICByaWdodFNpZGVOYXYuY2xhc3NMaXN0LmFkZChcInJpZ2h0U2lkZU5hdlwiKTtcblxuICAgIC8vIENyZWF0ZSB1bm9yZGVyZWQgbGlzdCB0aGF0IGNvbnRhaW5zIG5hdiBsaW5rcyB0byBvdGhlciBwYWdlc1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxldCBsaTtcbiAgICBsZXQgYnV0dG9uO1xuXG4gICAgY29uc3QgcGFnZU5hbWVzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGlmIChwYWdlTmFtZXNbaV0gPT09IFwiTWVudVwiKXtcbiAgICAgICAgbGkuc3R5bGUuYm9yZGVyQm90dG9tQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICB9XG4gICAgICBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoYHBhZ2UtJHtpICsgMX1gKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHBhZ2VOYW1lc1tpXTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuXG4gICAgcmlnaHRTaWRlTmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlTmF2KTtcbiAgICByZXR1cm4gaGVhZGVyO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIC8vIGFsbG93cyB1cyB0byBrZWVwIG91ciBjc3MgZmlsZXMgc3BlY2lmaWMgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1lbnUtbWFpblwiKTtcblxuICAgIC8vIFN0YXJ0IG9mIHN0YXJ0ZXJzIGNvbnRhaW5lclxuICAgIGNvbnN0IHN0YXJ0ZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFydGVyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RhcnRlcnNDb250YWluZXJcIik7XG5cbiAgICBjb25zdCBzdGFydGVyc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc3RhcnRlcnNMYWJlbC5jbGFzc0xpc3QuYWRkKFwic3RhcnRlcnNMYWJlbFwiKTtcbiAgICBzdGFydGVyc0xhYmVsLnRleHRDb250ZW50ID0gXCJTdGFydGVyc1wiO1xuICAgIHN0YXJ0ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJzTGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlcyBkaXYgdGhhdCBob2xkcyB0aGUgYWN0dWFsIG1lbnUgKHN0YXJ0ZXJzKSBpdGVtc1xuICAgIGNvbnN0IHN0YXJ0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFydGVycy5jbGFzc0xpc3QuYWRkKFwic3RhcnRlcnNcIik7XG5cbiAgICAvLyBTdGFydCBvZiBveXN0ZXJzIG1lbnUgaXRlbVxuICAgIGNvbnN0IHJvYXN0ZWRPeXN0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb2FzdGVkT3lzdGVycy5jbGFzc0xpc3QuYWRkKFwicm9hc3RlZE95c3RlcnNcIik7XG5cbiAgICBjb25zdCBveXN0ZXJzVGl0bGVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG95c3RlcnNUaXRsZUFuZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUFuZFByaWNlXCIpO1xuICAgIG95c3RlcnNUaXRsZUFuZFByaWNlLnRleHRDb250ZW50ID0gXCJSb2FzdGVkIE95c3RlcnMgKCQxOClcIjtcbiAgICBjb25zdCBveXN0ZXJzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBveXN0ZXJzRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIG95c3RlcnNEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBcIiBFbmpveSB0aGUgYnJpbnkgZmxhdm9yIG9mIGZyZXNoIG95c3RlcnMgcm9hc3RlZCBpbiBnYXJsaWMgYnV0dGVyIGFuZCBzZXJ2ZWQgd2l0aCBhIHNxdWVlemUgb2YgbGVtb24uXCI7XG5cbiAgICByb2FzdGVkT3lzdGVycy5hcHBlbmQob3lzdGVyc1RpdGxlQW5kUHJpY2UsIG95c3RlcnNEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBTdGFydCBvZiBiZWVmIHRhcnRhcmUgbWVudSBpdGVtXG4gICAgY29uc3QgYmVlZlRhcnRhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJlZWZUYXJ0YXJlLmNsYXNzTGlzdC5hZGQoXCJiZWVmVGFydGFyZVwiKTtcblxuICAgIGNvbnN0IGJlZWZUYXJ0YXJlVGl0bGVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJlZWZUYXJ0YXJlVGl0bGVBbmRQcmljZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVBbmRQcmljZVwiKTtcbiAgICBiZWVmVGFydGFyZVRpdGxlQW5kUHJpY2UudGV4dENvbnRlbnQgPSBcIkJlZWYgVGFydGFyZSAoJDIyKVwiO1xuICAgIGNvbnN0IGJlZWZUYXJ0YXJlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBiZWVmVGFydGFyZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBiZWVmVGFydGFyZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIFwiQSBjbGFzc2ljIGRpc2ggb2YgZmluZWx5IGNob3BwZWQgcmF3IGJlZWYgc2Vhc29uZWQgd2l0aCBjYXBlcnMsIG11c3RhcmQgYW5kIGEgcXVhaWwgZWdnIG9uIHRvcFwiO1xuXG4gICAgYmVlZlRhcnRhcmUuYXBwZW5kKGJlZWZUYXJ0YXJlVGl0bGVBbmRQcmljZSwgYmVlZlRhcnRhcmVEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBTdGFydCBvZiBhcnRpYyBjaGFyIG1lbnUgaXRlbVxuICAgIGNvbnN0IGFydGljQ2hhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXJ0aWNDaGFyLmNsYXNzTGlzdC5hZGQoXCJhcnRpY0NoYXJcIik7XG5cbiAgICBjb25zdCBhcnRpY0NoYXJUaXRsZUFuZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXJ0aWNDaGFyVGl0bGVBbmRQcmljZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVBbmRQcmljZVwiKTtcbiAgICBhcnRpY0NoYXJUaXRsZUFuZFByaWNlLnRleHRDb250ZW50ID0gXCJBcmN0aWMgQ2hhciAoJDIwKVwiO1xuICAgIGNvbnN0IGFydGljQ2hhckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXJ0aWNDaGFyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGFydGljQ2hhckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIFwiIEEgZGVsaWNhdGUgZmlzaCBjdXJlZCB3aXRoIGNpdHJ1cyBhbmQgc2VydmVkIHdpdGggYSBjcmlzcCBmZW5uZWwgc2FsYWQgYW5kIGEgZG9sbG9wIG9mIGRpbGwgY3JlYW0uXCI7XG5cbiAgICBhcnRpY0NoYXIuYXBwZW5kKGFydGljQ2hhclRpdGxlQW5kUHJpY2UsIGFydGljQ2hhckRlc2NyaXB0aW9uKTtcblxuICAgIC8vIGFwcGVuZCBtZW51IGl0ZW1zIHRvIHN0YXJ0ZXJzIGRpdiwgYW5kIHN0YXJ0ZXJzIGRpdiB0byBzdGFydGVycyBjb250YWluZXJcbiAgICBzdGFydGVycy5hcHBlbmQocm9hc3RlZE95c3RlcnMsIGJlZWZUYXJ0YXJlLCBhcnRpY0NoYXIpO1xuICAgIHN0YXJ0ZXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0ZXJzKTtcblxuICAgIC8vIFN0YXJ0IG9mIGVudHJlZXMgY29udGFpbmVyXG4gICAgY29uc3QgZW50cmVlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW50cmVlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW50cmVlc0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGVudHJlZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVudHJlZXNMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZW50cmVlc0xhYmVsXCIpO1xuICAgIGVudHJlZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiRW50cmVlc1wiO1xuICAgIGVudHJlZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW50cmVlc0xhYmVsKTtcblxuICAgIC8vIENyZWF0ZXMgZGl2IHRoYXQgaG9sZHMgdGhlIGFjdHVhbCBtZW51IChlbnRyZWVzKSBpdGVtc1xuICAgIGNvbnN0IGVudHJlZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVudHJlZXMuY2xhc3NMaXN0LmFkZChcImVudHJlZXNcIik7XG5cbiAgICAvLyBTdGFydCBvZiBza2F0ZSBtZW51IGl0ZW1cbiAgICBjb25zdCBza2F0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2thdGUuY2xhc3NMaXN0LmFkZChcInNrYXRlXCIpO1xuXG4gICAgY29uc3Qgc2thdGVUaXRsZUFuZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2thdGVUaXRsZUFuZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUFuZFByaWNlXCIpO1xuICAgIHNrYXRlVGl0bGVBbmRQcmljZS50ZXh0Q29udGVudCA9IFwiU2thdGUgKCQzNilcIjtcbiAgICBjb25zdCBza2F0ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc2thdGVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgc2thdGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBcIkEgdGVuZGVyIGZpbGxldCBvZiBza2F0ZSBwYW4tZnJpZWQgaW4gYnJvd24gYnV0dGVyIGFuZCBnYXJuaXNoZWQgd2l0aCBjYXBlcnMgYW5kIHBhcnNsZXkuXCI7XG5cbiAgICBza2F0ZS5hcHBlbmQoc2thdGVUaXRsZUFuZFByaWNlLCBza2F0ZURlc2NyaXB0aW9uKTtcblxuICAgIC8vIFN0YXJ0IG9mIGxhbWIgbWVudSBpdGVtXG4gICAgY29uc3QgbGFtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGFtYi5jbGFzc0xpc3QuYWRkKFwibGFtYlwiKTtcblxuICAgIGNvbnN0IGxhbWJUaXRsZUFuZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGFtYlRpdGxlQW5kUHJpY2UuY2xhc3NMaXN0LmFkZChcInRpdGxlQW5kUHJpY2VcIik7XG4gICAgbGFtYlRpdGxlQW5kUHJpY2UudGV4dENvbnRlbnQgPSBcIkxhbWIgKCQ0MilcIjtcbiAgICBjb25zdCBsYW1iRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsYW1iRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxhbWJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBcIkEgc3VjY3VsZW50IGN1dCBvZiBsYW1iIHJvYXN0ZWQgdG8gcGVyZmVjdGlvbiBhbmQgYWNjb21wYW5pZWQgYnkgYSB0YW5neSBtaW50IHNhdWNlIGFuZCBjcmlzcHkgcG90YXRvZXMuXCI7XG5cbiAgICBsYW1iLmFwcGVuZChsYW1iVGl0bGVBbmRQcmljZSwgbGFtYkRlc2NyaXB0aW9uKTtcblxuICAgIC8vIFN0YXJ0IG9mIHBvcmsgc2hvdWxkZXIgbWVudSBpdGVtXG4gICAgY29uc3QgcG9ya1Nob3VsZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwb3JrU2hvdWxkZXIuY2xhc3NMaXN0LmFkZChcImFydGljQ2hhclwiKTtcblxuICAgIGNvbnN0IHBvcmtTaG91bGRlclRpdGxlQW5kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwb3JrU2hvdWxkZXJUaXRsZUFuZFByaWNlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZUFuZFByaWNlXCIpO1xuICAgIHBvcmtTaG91bGRlclRpdGxlQW5kUHJpY2UudGV4dENvbnRlbnQgPSBcIlBvcmsgU2hvdWxkZXIgKCQzOClcIjtcbiAgICBjb25zdCBwb3JrU2hvdWxkZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBvcmtTaG91bGRlckRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBwb3JrU2hvdWxkZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBcIkEgaGVhcnR5IHBvcnRpb24gb2YgcG9yayBzaG91bGRlciBicmFpc2VkIHVudGlsIGZvcmstdGVuZGVyIGFuZCB0b3BwZWQgd2l0aCBhIHN3ZWV0IGFuZCBzcGljeSBhcHBsZSBjaHV0bmV5LiBTZXJ2ZWQgd2l0aCBtYXNoZWQgc3dlZXQgcG90YXRvZXMuXCI7XG5cbiAgICBwb3JrU2hvdWxkZXIuYXBwZW5kKHBvcmtTaG91bGRlclRpdGxlQW5kUHJpY2UsIHBvcmtTaG91bGRlckRlc2NyaXB0aW9uKTtcblxuICAgIC8vIGFwcGVuZCBtZW51IGl0ZW1zIHRvIHN0YXJ0ZXJzIGRpdiwgYW5kIHN0YXJ0ZXJzIGRpdiB0byBzdGFydGVycyBjb250YWluZXJcbiAgICBlbnRyZWVzLmFwcGVuZChza2F0ZSwgbGFtYiwgcG9ya1Nob3VsZGVyKTtcbiAgICBlbnRyZWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVudHJlZXMpO1xuXG4gICAgLy8gU3RhcnQgb2YgZGVzc2VydHMgY29udGFpbmVyXG4gICAgY29uc3QgZGVzc2VydHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlc3NlcnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0c0NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGRlc3NlcnRzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNzZXJ0c0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0c0xhYmVsXCIpO1xuICAgIGRlc3NlcnRzTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG4gICAgZGVzc2VydHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzc2VydHNMYWJlbCk7XG5cbiAgICAvLyBDcmVhdGVzIGRpdiB0aGF0IGhvbGRzIHRoZSBhY3R1YWwgbWVudSAoZGVzc2VydCkgaXRlbXNcbiAgICBjb25zdCBkZXNzZXJ0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzc2VydHMuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpO1xuXG4gICAgLy8gU3RhcnQgb2YgY2hvY29sYXRlIG1vdXNzZSBtZW51IGl0ZW1cbiAgICBjb25zdCBjaG9jb2xhdGVNb3Vzc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNob2NvbGF0ZU1vdXNzZS5jbGFzc0xpc3QuYWRkKFwiY2hvY29sYXRlTW91c3NlXCIpO1xuXG4gICAgY29uc3QgY2hvY29sYXRlTW91c3NlVGl0bGVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNob2NvbGF0ZU1vdXNzZVRpdGxlQW5kUHJpY2UuY2xhc3NMaXN0LmFkZChcInRpdGxlQW5kUHJpY2VcIik7XG4gICAgY2hvY29sYXRlTW91c3NlVGl0bGVBbmRQcmljZS50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIE1vdXNzZSAoJDEyKVwiO1xuICAgIGNvbnN0IGNob2NvbGF0ZU1vdXNzZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2hvY29sYXRlTW91c3NlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNob2NvbGF0ZU1vdXNzZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIFwiQSBkZWNhZGVudCBkZXNzZXJ0IG9mIHJpY2ggY2hvY29sYXRlIG1vdXNzZSB0b3BwZWQgd2l0aCB3aGlwcGVkIGNyZWFtIGFuZCBmcmVzaCByYXNwYmVycmllcy5cIjtcblxuICAgIGNob2NvbGF0ZU1vdXNzZS5hcHBlbmQoXG4gICAgICBjaG9jb2xhdGVNb3Vzc2VUaXRsZUFuZFByaWNlLFxuICAgICAgY2hvY29sYXRlTW91c3NlRGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgLy8gU3RhcnQgb2YgYXBwbGUgcGllIG1lbnUgaXRlbVxuICAgIGNvbnN0IGFwcGxlUGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBsZVBpZS5jbGFzc0xpc3QuYWRkKFwiYXBwbGVQaWVcIik7XG5cbiAgICBjb25zdCBhcHBsZVBpZVRpdGxlQW5kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhcHBsZVBpZVRpdGxlQW5kUHJpY2UuY2xhc3NMaXN0LmFkZChcInRpdGxlQW5kUHJpY2VcIik7XG4gICAgYXBwbGVQaWVUaXRsZUFuZFByaWNlLnRleHRDb250ZW50ID0gXCJBcHBsZSBQaWUgKCQxMClcIjtcbiAgICBjb25zdCBhcHBsZVBpZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXBwbGVQaWVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgYXBwbGVQaWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgICBcIkEgd2FybSBzbGljZSBvZiBob21lbWFkZSBhcHBsZSBwaWUgZmlsbGVkIHdpdGggY2lubmFtb24tc3BpY2VkIGFwcGxlcyBhbmQgZHJpenpsZWQgd2l0aCBjYXJhbWVsIHNhdWNlLiBTZXJ2ZWQgd2l0aCB2YW5pbGxhIGljZSBjcmVhbS5cIjtcblxuICAgIGFwcGxlUGllLmFwcGVuZChhcHBsZVBpZVRpdGxlQW5kUHJpY2UsIGFwcGxlUGllRGVzY3JpcHRpb24pO1xuXG4gICAgLy8gU3RhcnQgb2YgbGVtb24gY2hlZXNlY2FrZSBtZW51IGl0ZW1cbiAgICBjb25zdCBsZW1vbkNoZWVzZWNha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxlbW9uQ2hlZXNlY2FrZS5jbGFzc0xpc3QuYWRkKFwibGVtb25DaGVlc2VjYWtlXCIpO1xuXG4gICAgY29uc3QgbGVtb25DaGVlc2VjYWtlVGl0bGVBbmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxlbW9uQ2hlZXNlY2FrZVRpdGxlQW5kUHJpY2UuY2xhc3NMaXN0LmFkZChcInRpdGxlQW5kUHJpY2VcIik7XG4gICAgbGVtb25DaGVlc2VjYWtlVGl0bGVBbmRQcmljZS50ZXh0Q29udGVudCA9IFwiTGVtb24gQ2hlZXNlY2FrZSAoJDExKVwiO1xuICAgIGNvbnN0IGxlbW9uQ2hlZXNlY2FrZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGVtb25DaGVlc2VjYWtlRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGxlbW9uQ2hlZXNlY2FrZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIFwiQSBjcmVhbXkgY2hlZXNlY2FrZSBmbGF2b3JlZCB3aXRoIGxlbW9uIHplc3QgYW5kIGJha2VkIG9uIGEgZ3JhaGFtIGNyYWNrZXIgY3J1c3QuIFNlcnZlZCB3aXRoIGEgYmx1ZWJlcnJ5IGNvbXBvdGUuXCI7XG5cbiAgICBsZW1vbkNoZWVzZWNha2UuYXBwZW5kKFxuICAgICAgbGVtb25DaGVlc2VjYWtlVGl0bGVBbmRQcmljZSxcbiAgICAgIGxlbW9uQ2hlZXNlY2FrZURlc2NyaXB0aW9uXG4gICAgKTtcblxuICAgIC8vIGFwcGVuZCBtZW51IGl0ZW1zIHRvIHN0YXJ0ZXJzIGRpdiwgYW5kIHN0YXJ0ZXJzIGRpdiB0byBzdGFydGVycyBjb250YWluZXJcbiAgICBkZXNzZXJ0cy5hcHBlbmQoY2hvY29sYXRlTW91c3NlLCBhcHBsZVBpZSwgbGVtb25DaGVlc2VjYWtlKTtcbiAgICBkZXNzZXJ0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNzZXJ0cyk7XG5cbiAgICAvLyBhcHBlbmQgbWVudSBpdGVtcyBpbnNpZGUgbWFpbiBlbGVtZW50XG4gICAgbWFpbi5hcHBlbmQoc3RhcnRlcnNDb250YWluZXIsIGVudHJlZXNDb250YWluZXIsIGRlc3NlcnRzQ29udGFpbmVyKTtcbiAgICByZXR1cm4gbWFpbjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnk6IFRoZVJlYWxCaWxsOTFcIjtcbiAgICByZXR1cm4gZm9vdGVyO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlckhlYWRlciwgcmVuZGVyTWFpbiwgcmVuZGVyRm9vdGVyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZUxvYWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogaW1wb3J0IFBpYyBmcm9tICcuL2Fzc2V0cy9tb3VudGFpbi1iYWNrZ3JvdW5kLmpwZycgKi9cbmltcG9ydCBcIi4vbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IGhvbWVQYWdlTG9hZCBmcm9tIFwiLi9ob21lL2hvbWVcIjtcbmltcG9ydCBtZW51UGFnZUxvYWQgZnJvbSBcIi4vbWVudS9tZW51XCI7XG5pbXBvcnQgY29udGFjdFBhZ2VMb2FkIGZyb20gXCIuL2NvbnRhY3QvY29udGFjdFwiO1xuXG5mdW5jdGlvbiBsb2FkSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIC8vIFByZXZlbnRzIG90aGVyIGNzcyBzdHlsZXMgZnJvbSBiZWluZyBhcHBsaWVkIHRvIGN1cnJlbnQgcGFnZVxuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiXCI7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtcGFnZVwiKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob21lUGFnZUxvYWQoKS5yZW5kZXJIZWFkZXIoKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VMb2FkKCkucmVuZGVyTWFpbigpKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChob21lUGFnZUxvYWQoKS5yZW5kZXJGb290ZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51UGFnZSgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgLy8gUHJldmVudHMgb3RoZXIgY3NzIHN0eWxlcyBmcm9tIGJlaW5nIGFwcGxpZWQgdG8gY3VycmVudCBwYWdlXG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NOYW1lID0gXCJcIjtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1wYWdlXCIpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlTG9hZCgpLnJlbmRlckhlYWRlcigpKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51UGFnZUxvYWQoKS5yZW5kZXJNYWluKCkpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlTG9hZCgpLnJlbmRlckZvb3RlcigpKTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAvLyBQcmV2ZW50cyBvdGhlciBjc3Mgc3R5bGVzIGZyb20gYmVpbmcgYXBwbGllZCB0byBjdXJyZW50IHBhZ2VcbiAgY29udGVudENvbnRhaW5lci5jbGFzc05hbWUgPSBcIlwiO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXBhZ2VcIik7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2VMb2FkKCkucmVuZGVySGVhZGVyKCkpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlTG9hZCgpLnJlbmRlck1haW4oKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2VMb2FkKCkucmVuZGVyRm9vdGVyKCkpO1xuXG5cbn1cblxuZnVuY3Rpb24gcGFnZVN3aXRjaGVyKCkge1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLTFcIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtMlwiKTtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS0zXCIpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5cbiAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsb2FkSG9tZVBhZ2UoKTtcbiAgICBwYWdlU3dpdGNoZXIoKTtcbiAgfSk7XG5cbiAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsb2FkTWVudVBhZ2UoKTtcbiAgICBwYWdlU3dpdGNoZXIoKTtcbiAgfSk7XG5cbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICBwYWdlU3dpdGNoZXIoKTtcbiAgfSk7XG59XG5cbmxvYWRIb21lUGFnZSgpO1xucGFnZVN3aXRjaGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=