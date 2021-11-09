module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/feed/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/toolbar.js":
/*!*******************************!*\
  !*** ./components/toolbar.js ***!
  \*******************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Toolbar.module.css */ "./styles/Toolbar.module.css");
/* harmony import */ var _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Array Tech\\Desktop\\projects\\next\\components\\toolbar.js";


const Toolbar = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Toolbar_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => router.push('/'),
      children: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => router.push('/feed/1'),
      children: "Feed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => router.push('/eom'),
      children: "EOM"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: () => window.location.href = 'https:/twitter.com/AbdullaMeryam',
      children: "Twitter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./pages/feed/[slug].js":
/*!******************************!*\
  !*** ./pages/feed/[slug].js ***!
  \******************************/
/*! exports provided: Feed, getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Feed.module.css */ "./styles/Feed.module.css");
/* harmony import */ var _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/toolbar */ "./components/toolbar.js");

var _jsxFileName = "C:\\Users\\Array Tech\\Desktop\\projects\\next\\pages\\feed\\[slug].js";



const Feed = ({
  pageNumber,
  articles
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "page-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_toolbar__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
      children: articles.map((article, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.post,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: article.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: article.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), !!article.urlToImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: article.urlToImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 46
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paginator,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => {
          if (pageNumber > 1) {
            router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
          }

          ;
        },
        className: pageNumber === 1 ? _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active,
        children: "Previous Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" #", pageNumber]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => {
          if (pageNumber < 5) {
            router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
          }

          ;
        },
        className: pageNumber === 5 ? _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active,
        children: "Next Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};
const getServerSideProps = async pageContext => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    };
  }

  const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${"a59ca79b7ebd4b019e59032d4a4510b9"}`
    }
  });
  const apiJson = await apiResponse.json();
  const {
    articles
  } = apiJson;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./styles/Feed.module.css":
/*!********************************!*\
  !*** ./styles/Feed.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Feed_main__MyK6d",
	"post": "Feed_post__1w7p_",
	"paginator": "Feed_paginator__3G06U",
	"active": "Feed_active__2MywL",
	"disabled": "Feed_disabled__2Pxzi"
};


/***/ }),

/***/ "./styles/Toolbar.module.css":
/*!***********************************!*\
  !*** ./styles/Toolbar.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Toolbar_main__1tofk"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90b29sYmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZlZWQvW3NsdWddLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9GZWVkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL1Rvb2xiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlRvb2xiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJtYWluIiwicHVzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkZlZWQiLCJwYWdlTnVtYmVyIiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiLCJwb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJwYWdpbmF0b3IiLCJ0aGVuIiwic2Nyb2xsVG8iLCJkaXNhYmxlZCIsImFjdGl2ZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhZ2VDb250ZXh0IiwicXVlcnkiLCJzbHVnIiwicHJvcHMiLCJhcGlSZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiYXBpSnNvbiIsImpzb24iLCJOdW1iZXIiLCJwYXJzZUludCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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LG1CQUFhLEVBQUcsVUFBU0Msa0NBQWlDO0FBRHJEO0FBRGIsR0FGMkIsQ0FBL0I7QUFTQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUwsV0FBVyxDQUFDTSxJQUFaLEVBQXRCO0FBQ0EsUUFBTTtBQUFDeEI7QUFBRCxNQUFhdUIsT0FBbkI7QUFFQSxTQUFPO0FBQ0hOLFNBQUssRUFBRTtBQUNIakIsY0FERztBQUVIRCxnQkFBVSxFQUFFMEIsTUFBTSxDQUFDQyxRQUFQLENBQWdCM0IsVUFBaEI7QUFGVDtBQURKLEdBQVA7QUFPSCxDQS9CTTtBQWlDUUQsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2ZlZWQvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9mZWVkL1tzbHVnXS5qc1wiKTtcbiIsImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvVG9vbGJhci5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvb2xiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX0+SG9tZTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvZmVlZC8xJyl9PkZlZWQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2VvbScpfT5FT008L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovdHdpdHRlci5jb20vQWJkdWxsYU1lcnlhbSd9PlR3aXR0ZXI8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9GZWVkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFRvb2xiYXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Rvb2xiYXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWQgPSAoe3BhZ2VOdW1iZXIsIGFydGljbGVzfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxUb29sYmFyLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhYXJ0aWNsZS51cmxUb0ltYWdlICYmIDxpbWcgc3JjPXthcnRpY2xlLnVybFRvSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0b3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdlTnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ZlZWQvJHtwYWdlTnVtYmVyIC0gMX1gKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlTnVtYmVyID09PSAxID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAje3BhZ2VOdW1iZXJ9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdlTnVtYmVyIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ZlZWQvJHtwYWdlTnVtYmVyICsgMX1gKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlTnVtYmVyID09PSA1ID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICBOZXh0IFBhZ2VcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIHBhZ2VDb250ZXh0ID0+IHtcclxuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdlQ29udGV4dC5xdWVyeS5zbHVnO1xyXG5cclxuICAgIGlmKCFwYWdlTnVtYmVyIHx8IHBhZ2VOdW1iZXIgPCAxIHx8IHBhZ2VOdW1iZXIgPiA1KXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcGlSZXNwb25zZSA9IGF3YWl0IGZldGNoIChcclxuICAgICAgICBgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmcGFnZVNpemU9NSZwYWdlPSR7cGFnZU51bWJlcn1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX05FV1NfS0VZfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXBpSnNvbiA9IGF3YWl0IGFwaVJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHthcnRpY2xlc30gPSBhcGlKc29uO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBOdW1iZXIucGFyc2VJbnQocGFnZU51bWJlcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWQiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiRmVlZF9tYWluX19NeUs2ZFwiLFxuXHRcInBvc3RcIjogXCJGZWVkX3Bvc3RfXzF3N3BfXCIsXG5cdFwicGFnaW5hdG9yXCI6IFwiRmVlZF9wYWdpbmF0b3JfXzNHMDZVXCIsXG5cdFwiYWN0aXZlXCI6IFwiRmVlZF9hY3RpdmVfXzJNeXdMXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJGZWVkX2Rpc2FibGVkX18yUHh6aVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIlRvb2xiYXJfbWFpbl9fMXRvZmtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9