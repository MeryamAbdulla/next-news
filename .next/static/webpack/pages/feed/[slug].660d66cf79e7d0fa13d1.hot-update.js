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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
      }, _this)
    }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmVlZC9bc2x1Z10uanMiXSwibmFtZXMiOlsiRmVlZCIsInBhZ2VOdW1iZXIiLCJhcnRpY2xlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInN0eWxlcyIsIm1haW4iLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiLCJwb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybFRvSW1hZ2UiLCJwYWdpbmF0b3IiLCJwdXNoIiwidGhlbiIsIndpbmRvdyIsInNjcm9sbFRvIiwiZGlzYWJsZWQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQTRCO0FBQUE7O0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUU1QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDQTtBQUFLLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsSUFBdkI7QUFBQSxnQkFDS0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsNEJBQ1Y7QUFBaUIsbUJBQVMsRUFBRUosOERBQU0sQ0FBQ0ssSUFBbkM7QUFBQSxrQ0FDSTtBQUFBLHNCQUFLRixPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsc0JBQUlILE9BQU8sQ0FBQ0k7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR0ssQ0FBQyxDQUFDSixPQUFPLENBQUNLLFVBQVYsaUJBQXdCO0FBQUssZUFBRyxFQUFFTCxPQUFPLENBQUNLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSDdCO0FBQUEsV0FBVUosS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQVdJO0FBQUssZUFBUyxFQUFFSiw4REFBTSxDQUFDUyxTQUF2QjtBQUFBLDZCQUNJO0FBQ0EsZUFBTyxFQUFFLG1CQUFNO0FBQ1gsY0FBR2IsVUFBVSxHQUFHLENBQWhCLEVBQW1CO0FBQ2ZFLGtCQUFNLENBQUNZLElBQVAsaUJBQXFCZCxVQUFVLEdBQUcsQ0FBbEMsR0FBdUNlLElBQXZDLENBQTRDO0FBQUEscUJBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUEsYUFBNUM7QUFBeUU7O0FBQUE7QUFDNUUsU0FKTDtBQUtBLGlCQUFTLEVBQUVqQixVQUFVLEtBQUssQ0FBZixHQUFtQkksOERBQU0sQ0FBQ2MsUUFBMUIsR0FBcUNkLDhEQUFNLENBQUNlLE1BTHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBN0JNOztHQUFNcEIsSTtVQUVNSSxxRDs7O0tBRk5KLEk7QUFnRUVBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWQvW3NsdWddLjY2MGQ2NmNmNzllN2QwZmExM2QxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9GZWVkLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgRmVlZCA9ICh7cGFnZU51bWJlciwgYXJ0aWNsZXN9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2FydGljbGUudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgeyEhYXJ0aWNsZS51cmxUb0ltYWdlICYmIDxpbWcgc3JjPXthcnRpY2xlLnVybFRvSW1hZ2V9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0b3J9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwYWdlTnVtYmVyID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2ZlZWQvJHtwYWdlTnVtYmVyIC0gMX1gKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSl9O1xyXG4gICAgICAgICAgICAgICAgICAgIH19IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlTnVtYmVyID09PSAxID8gc3R5bGVzLmRpc2FibGVkIDogc3R5bGVzLmFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICBQcmV2aW91cyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyBwYWdlQ29udGV4dCA9PiB7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnZUNvbnRleHQucXVlcnkuc2x1ZztcclxuXHJcbiAgICBpZighcGFnZU51bWJlciB8fCBwYWdlTnVtYmVyIDwgMSB8fCBwYWdlTnVtYmVyID4gNSl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIGFydGljbGVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IDEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBpUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoXHJcbiAgICAgICAgYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jb3VudHJ5PXVzJnBhZ2VTaXplPTUmcGFnZT0ke3BhZ2VOdW1iZXJ9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19ORVdTX0tFWX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFwaUpzb24gPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB7YXJ0aWNsZXN9ID0gYXBpSnNvbjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBhcnRpY2xlcyxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogTnVtYmVyLnBhcnNlSW50KHBhZ2VOdW1iZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==