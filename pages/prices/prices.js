/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/main.scss"
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/assets/fonts/DelaGothicOne-Regular.woff2"
/*!******************************************************!*\
  !*** ./src/assets/fonts/DelaGothicOne-Regular.woff2 ***!
  \******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/DelaGothicOne-Regular.dafd4e0f79b2995e6346.woff2";

/***/ },

/***/ "./src/assets/image/about-image.webp"
/*!*******************************************!*\
  !*** ./src/assets/image/about-image.webp ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-image.ff7456c61ce2cbc98ef9.webp";

/***/ },

/***/ "./src/assets/image/icons/consultation.svg"
/*!*************************************************!*\
  !*** ./src/assets/image/icons/consultation.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/consultation.f47555360bd377997a56.svg";

/***/ },

/***/ "./src/assets/image/icons/diagnostics.svg"
/*!************************************************!*\
  !*** ./src/assets/image/icons/diagnostics.svg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/diagnostics.d6ae9059bf9b5d0d33ad.svg";

/***/ },

/***/ "./src/assets/image/icons/installation.svg"
/*!*************************************************!*\
  !*** ./src/assets/image/icons/installation.svg ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/installation.16793717c72e6c633035.svg";

/***/ },

/***/ "./src/assets/image/icons/maintenance.svg"
/*!************************************************!*\
  !*** ./src/assets/image/icons/maintenance.svg ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/maintenance.76aca5da1bd25d48a79a.svg";

/***/ },

/***/ "./src/assets/image/icons/telegram.svg"
/*!*********************************************!*\
  !*** ./src/assets/image/icons/telegram.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/telegram.4c392bb82e3173650284.svg";

/***/ },

/***/ "./src/assets/image/icons/whatsapp.svg"
/*!*********************************************!*\
  !*** ./src/assets/image/icons/whatsapp.svg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/whatsapp.4c4c8879c12e5979e98f.svg";

/***/ },

/***/ "./src/assets/image/logo.svg"
/*!***********************************!*\
  !*** ./src/assets/image/logo.svg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.74b428cae23d41587ad0.svg";

/***/ },

/***/ "./src/components/burgerMenu.js"
/*!**************************************!*\
  !*** ./src/components/burgerMenu.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)
/* harmony export */ });
const burgerMenu = () => {
  const modal = document.querySelector(".header__form-modal");

  const menu = document.querySelector(".burger-menu");
  const burgerBtn = document.querySelector(".header__burger");

  const overlay = document.querySelector(".header__overlay");
  
  let isMenuOpen = false;

  function openMenu() {

    menu.classList.add("burger-menu__open");
    overlay.classList.add("active");

    isMenuOpen = true;
  }

  function closeMenu() {
    menu.classList.remove("burger-menu__open");
    overlay.classList.remove("active");
    isMenuOpen = false;
  }

  burgerBtn.addEventListener("click", openMenu);

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      isMenuOpen &&
      (target.classList.contains("header__overlay") ||
        target.classList.contains("burger-menu__close") ||
        target.closest(".burger-menu__close"))
    ) {
      closeMenu();
    }
  });
};


/***/ },

/***/ "./src/utils/setFavicon.js"
/*!*********************************!*\
  !*** ./src/utils/setFavicon.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setFavicon: () => (/* binding */ setFavicon)
/* harmony export */ });
const setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.type = 'image/svg';
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
}

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/pages/prices/prices.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/image/logo.svg */ "./src/assets/image/logo.svg");
/* harmony import */ var _assets_fonts_DelaGothicOne_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/fonts/DelaGothicOne-Regular.woff2 */ "./src/assets/fonts/DelaGothicOne-Regular.woff2");
/* harmony import */ var _assets_image_icons_telegram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/image/icons/telegram.svg */ "./src/assets/image/icons/telegram.svg");
/* harmony import */ var _assets_image_icons_whatsapp_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/image/icons/whatsapp.svg */ "./src/assets/image/icons/whatsapp.svg");
/* harmony import */ var _assets_image_about_image_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/image/about-image.webp */ "./src/assets/image/about-image.webp");
/* harmony import */ var _assets_image_icons_installation_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/image/icons/installation.svg */ "./src/assets/image/icons/installation.svg");
/* harmony import */ var _assets_image_icons_maintenance_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/image/icons/maintenance.svg */ "./src/assets/image/icons/maintenance.svg");
/* harmony import */ var _assets_image_icons_diagnostics_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/image/icons/diagnostics.svg */ "./src/assets/image/icons/diagnostics.svg");
/* harmony import */ var _assets_image_icons_consultation_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/image/icons/consultation.svg */ "./src/assets/image/icons/consultation.svg");
/* harmony import */ var _utils_setFavicon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/setFavicon */ "./src/utils/setFavicon.js");
/* harmony import */ var _components_burgerMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/burgerMenu */ "./src/components/burgerMenu.js");













(0,_utils_setFavicon__WEBPACK_IMPORTED_MODULE_10__.setFavicon)(_assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
(0,_components_burgerMenu__WEBPACK_IMPORTED_MODULE_11__.burgerMenu)();
})();

/******/ })()
;
//# sourceMappingURL=prices.js.map