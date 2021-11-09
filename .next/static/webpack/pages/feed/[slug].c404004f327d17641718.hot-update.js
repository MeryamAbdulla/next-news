webpackHotUpdate_N_E("pages/feed/[slug]",{

/***/ "./pages/feed/[slug].js":
/*!******************************!*\
  !*** ./pages/feed/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSP, Feed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Feed.module.css */ "./styles/Feed.module.css");
/* harmony import */ var _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Array Tech\\Desktop\\projects\\next\\pages\\feed\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();



var __N_SSP = true;
var Feed = function Feed(_ref) {
  _s();

  var pageNumber = _ref.pageNumber,
      articles = _ref.articles;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "page-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
      children: articles.map(function (article, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.post,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: article.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: article.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, _this), !!article.urlToImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: article.urlToImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 46
          }, _this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.paginator,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          if (pageNumber > 1) {
            router.push("/feed/".concat(pageNumber - 1)).then(function () {
              return window.scrollTo(0, 0);
            });
          }

          ;
        },
        className: pageNumber === 1 ? _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active,
        children: "Previous Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [" #", pageNumber]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: function onClick() {
          if (pageNumber < 5) {
            router.push("/feed/".concat(pageNumber + 1)).then(function () {
              return window.scrollTo(0, 0);
            });
          }

          ;
        },
        className: pageNumber === 1 ? _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : _styles_Feed_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active,
        children: "Next Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_s(Feed, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Feed;
/* harmony default export */ __webpack_exports__["default"] = (Feed);

var _c;

$RefreshReg$(_c, "Feed");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC9bc2x1Z10uanMiXSwibmFtZXMiOlsiRmVlZCIsInBhZ2VOdW1iZXIiLCJhcnRpY2xlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlcyIsIm1haW4iLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiLCJwb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJwYWdpbmF0b3IiLCJwdXNoIiwidGhlbiIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGlzYWJsZWQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUE7O0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUU1QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxnQkFDS0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsNEJBQ1Y7QUFBaUIsbUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssSUFBbkM7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLRixPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQUlILE9BQU8sQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0ssQ0FBQyxDQUFDSixPQUFPLENBQUNLLFVBQVYsaUJBQXdCO0FBQUssZUFBRyxFQUFFTCxPQUFPLENBQUNLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSDdCO0FBQUEsV0FBVUosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVdJO0FBQUssZUFBUyxFQUFFSiw4REFBTSxDQUFDUyxTQUF2QjtBQUFBLDhCQUNJO0FBQ0EsZUFBTyxFQUFFLG1CQUFNO0FBQ1gsY0FBR2IsVUFBVSxHQUFHLENBQWhCLEVBQW1CO0FBQ2ZFLGtCQUFNLENBQUNZLElBQVAsaUJBQXFCZCxVQUFVLEdBQUcsQ0FBbEMsR0FBdUNlLElBQXZDLENBQTRDO0FBQUEscUJBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUEsYUFBNUM7QUFBeUU7O0FBQUE7QUFDNUUsU0FKTDtBQUtBLGlCQUFTLEVBQUVqQixVQUFVLEtBQUssQ0FBZixHQUFtQkksOERBQU0sQ0FBQ2MsUUFBMUIsR0FBcUNkLDhEQUFNLENBQUNlLE1BTHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFVSTtBQUFBLHlCQUFRbkIsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSixlQVlJO0FBQ0EsZUFBTyxFQUFFLG1CQUFNO0FBQ1gsY0FBR0EsVUFBVSxHQUFHLENBQWhCLEVBQW1CO0FBQ2ZFLGtCQUFNLENBQUNZLElBQVAsaUJBQXFCZCxVQUFVLEdBQUcsQ0FBbEMsR0FBdUNlLElBQXZDLENBQTRDO0FBQUEscUJBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUEsYUFBNUM7QUFBeUU7O0FBQUE7QUFDNUUsU0FKTDtBQUtBLGlCQUFTLEVBQUVqQixVQUFVLEtBQUssQ0FBZixHQUFtQkksOERBQU0sQ0FBQ2MsUUFBMUIsR0FBcUNkLDhEQUFNLENBQUNlLE1BTHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQ0gsQ0F4Q007O0dBQU1wQixJO1VBRU1JLHFEOzs7S0FGTkosSTtBQTJFRUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZC9bc2x1Z10uYzQwNDAwNGYzMjdkMTc2NDE3MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0ZlZWQubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBGZWVkID0gKHtwYWdlTnVtYmVyLCBhcnRpY2xlc30pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7ISFhcnRpY2xlLnVybFRvSW1hZ2UgJiYgPGltZyBzcmM9e2FydGljbGUudXJsVG9JbWFnZX0gLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2luYXRvcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ2VOdW1iZXIgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZmVlZC8ke3BhZ2VOdW1iZXIgLSAxfWApLnRoZW4oKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VOdW1iZXIgPT09IDEgPyBzdHlsZXMuZGlzYWJsZWQgOiBzdHlsZXMuYWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIFByZXZpb3VzIFBhZ2VcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+ICN7cGFnZU51bWJlcn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhZ2VOdW1iZXIgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvZmVlZC8ke3BhZ2VOdW1iZXIgKyAxfWApLnRoZW4oKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApKX07XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VOdW1iZXIgPT09IDEgPyBzdHlsZXMuZGlzYWJsZWQgOiBzdHlsZXMuYWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIE5leHQgUGFnZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgcGFnZUNvbnRleHQgPT4ge1xyXG4gICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2VDb250ZXh0LnF1ZXJ5LnNsdWc7XHJcblxyXG4gICAgaWYoIXBhZ2VOdW1iZXIgfHwgcGFnZU51bWJlciA8IDEgfHwgcGFnZU51bWJlciA+IDUpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlczogW10sXHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKFxyXG4gICAgICAgIGBodHRwczovL25ld3NhcGkub3JnL3YyL3RvcC1oZWFkbGluZXM/Y291bnRyeT11cyZwYWdlU2l6ZT01JnBhZ2U9JHtwYWdlTnVtYmVyfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVXU19LRVl9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhcGlKc29uID0gYXdhaXQgYXBpUmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3Qge2FydGljbGVzfSA9IGFwaUpzb247XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYXJ0aWNsZXMsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IE51bWJlci5wYXJzZUludChwYWdlTnVtYmVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZCJdLCJzb3VyY2VSb290IjoiIn0=