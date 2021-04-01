/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contacttab.js":
/*!***************************!*\
  !*** ./src/contacttab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction fillContacts(container) {\n    const head = document.createElement(\"h2\");\n    head.textContent = \"Contact\";\n    container.appendChild(head);\n\n    const contactBar = document.createElement(\"ul\");\n    contactBar.style.cssText = (\"display:flex;justify-content:space-evenly\");\n\n    function fillContactBar(...content) {\n        content.forEach(string => {\n            const contactType = document.createElement(\"li\");\n            contactType.className = \"contact\";\n            contactType.textContent = string;\n            contactBar.appendChild(contactType);\n        });\n    };\n\n    fillContactBar(\n        \"\\u2709 : 1 Restaurant Road, London, England\",\n        \"\\u260f : 555-123-4567\",\n        \"@ : sorry@basicrestaurant.com\"\n    );\n    container.appendChild(contactBar);\n\n    const form = document.createElement(\"form\");\n    function addInput(name, type, placeholder) {\n        const label = document.createElement(\"label\");\n        label.textContent = name.charAt(0).toUpperCase() +\n            name.slice(1) + \": \";\n        label.setAttribute(\"for\", name);\n        form.appendChild(label);\n        const box = document.createElement(\"input\");\n        function setAllAttributes() {\n            box.setAttribute(\"type\", type);\n            box.setAttribute(\"id\", name);\n            box.setAttribute(\"name\", name);\n            box.setAttribute(\"placeholder\", placeholder);\n        }\n        setAllAttributes();\n        form.appendChild(box);\n    }\n    addInput(\"full name\", \"text\", \"Please enter name\");\n    addInput(\"email\", \"email\", \"Please enter email address\");\n    addInput(\"message\", \"textarea\", \"I'd style this box more if this was a longer project\");\n\n    const button = document.createElement(\"button\");\n    button.setAttribute(\"id\", \"submit\");\n    button.textContent = \"Send\";\n    \n    form.setAttribute(\"onsubmit\", \"return false\"); // this isn't real\n\n    form.appendChild(button);\n\n    container.appendChild(form);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillContacts);\n\n//# sourceURL=webpack://restaurant-page/./src/contacttab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload.js */ \"./src/pageload.js\");\n/* harmony import */ var _menutab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menutab.js */ \"./src/menutab.js\");\n/* harmony import */ var _contacttab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacttab.js */ \"./src/contacttab.js\");\n\n\n\n\n(function() {\n    const tabs = document.querySelectorAll(\".page\");\n    tabs.forEach(tab => {\n        tab.addEventListener('click', changePage);\n    });\n    \n    function selectTab(element) {\n        element.classList.add(\"selectedTab\");\n    }\n    const homeTab = document.querySelector(\".page\");\n    selectTab(homeTab);\n    \n    const container = document.querySelector(\"#content\");\n    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n    \n    function changePage() {\n        function deselectTabs() {\n            tabs.forEach(tab => tab.classList.remove(\"selectedTab\"));\n        }\n        deselectTabs()\n        \n        selectTab(this);\n\n        function emptyElement(element) {\n            while (element.lastChild) {\n                element.removeChild(element.lastChild);\n            }\n        };\n        emptyElement(container);\n\n        function populateElement(element) {\n            switch (element.textContent) {\n                case \"Home\" :\n                    (0,_pageload_js__WEBPACK_IMPORTED_MODULE_0__.default)(container);\n                    break;\n                case \"Menu\" :\n                    (0,_menutab_js__WEBPACK_IMPORTED_MODULE_1__.default)(container);\n                    break;\n                case \"Contact\" :\n                    (0,_contacttab_js__WEBPACK_IMPORTED_MODULE_2__.default)(container);\n            }\n        }\n        populateElement(this);\n    }\n    \n})();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = [\n    {\n        \"dishName\": \"Pizza\",\n        \"dishInfo\": \"If they only offer margherita it better be good\",\n        \"dishPrice\": \"£13.99\"\n    },\n    {\n        \"dishName\": \"Carbonara\",\n        \"dishInfo\": \"Pasta with bacon and cream I believe\",\n        \"dishPrice\": \"£14.99\"\n    },\n    {\n        \"dishName\": \"Calzone\",\n        \"dishInfo\": \"Like a pizza sandwich which can burn your tongue\",\n        \"dishPrice\": \"£17.99\"\n    },\n    {\n        \"dishName\": \"Salt-Baked Red Snapper\",\n        \"dishInfo\": \"Don't bother, it takes forever to dig the fish out\",\n        \"dishPrice\": \"£23.99\"\n    }\n];\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/menutab.js":
/*!************************!*\
  !*** ./src/menutab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nfunction fillMenu(container) {\n\n    const head = document.createElement(\"h2\");\n    head.textContent = \"Menu\";\n    container.appendChild(head);\n\n    const dishContainer = document.createElement(\"div\");\n    dishContainer.className = \"dishcontainer\";\n\n    function makeMenuItem(dish) {\n        const menuItem = document.createElement(\"div\");\n        menuItem.className = \"dish\";\n\n        function populateItem(cssClass, text) {\n            const element = document.createElement(\"p\");\n            element.className = cssClass;\n            element.textContent = text;\n            menuItem.appendChild(element);\n        }\n        for (let prop in dish) {\n            populateItem(prop, dish[prop])\n        }\n        dishContainer.appendChild(menuItem);\n    }\n\n    _menu_js__WEBPACK_IMPORTED_MODULE_0__.menu.forEach(dish => makeMenuItem(dish));\n    container.appendChild(dishContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menutab.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction fillHomePage(container) {\n\n    const head = document.createElement(\"h1\");\n    head.textContent = \"Basic Restaurant\";\n    container.appendChild(head);\n\n    const subHead = document.createElement(\"h2\");\n    subHead.textContent = \"I'm not going to work too long on this.\";\n    subHead.className = \"subhead\";\n    container.appendChild(subHead);\n\n    const copy = document.createElement(\"div\");\n    copy.id = \"copy\";\n\n    const para1 = document.createElement(\"p\");\n    para1.innerHTML = \"Before I started studying JavaScript, my only experience of \" +\n                        \"web design was the <em>'Black Goose Bakery'</em> in Jennifer \" +\n                        \"Neiderst Robbins' <cite>Learning Web Design</cite>. As such, \" +\n                        \"I admit that I would be more excited to attack projects \" +\n                        \"<em>other</em> than fake bistro pages. This particular project \" +\n                        \"will therefore be very simple, and lacks responsive media queries. \" +\n                        \"I went down the animation and transition rabbit hole on my last \" +\n                        \"project, so this serves simply as a proof of ability to use \" +\n                        \"npm and webpack.\"\n    copy.appendChild(para1);\n    const para2 = document.createElement(\"p\");\n    para2.textContent = \"As much as possible, I've tried to keep \" +\n                        \"the element generation code DRY and function-dependent. I thought \" +\n                        \"it would also be nice to populate the menu from an array imported \" +\n                        \"from a separate file, so that menu items could be modified and \" +\n                        \"updated independent of all of the DOM manipulation code. I'm sure \" +\n                        \"there would be an even easier way to keep the menu easily \" +\n                        \"maintainable by the restaurant, which I would pursue on a longer \" +\n                        \"project.\"\n    copy.appendChild(para2);\n\n    container.appendChild(copy);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;