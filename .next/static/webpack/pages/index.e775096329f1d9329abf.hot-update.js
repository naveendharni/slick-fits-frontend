webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");

var _jsxFileName = "C:\\Users\\navdharn\\Desktop\\Advanced-React\\sick-fits\\frontend\\components\\Product.js";



 // import formatMoney from '../lib/formatMoney';
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

function Product(_ref) {
  var _product$photo, _product$photo$image;

  var product = _ref.product;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/product/".concat(product.id),
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: formatMoney(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "buttonList",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: {
          pathname: '/update',
          query: {
            id: product.id
          }
        },
        children: "Edit \u270F\uFE0F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
_c = Product;

var _c;

$RefreshReg$(_c, "Product");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImlkIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUVlLFNBQVNBLE9BQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDM0Msc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBRUEsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVDLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMscURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUkscUJBQWNKLE9BQU8sQ0FBQ0ssRUFBdEIsQ0FBVjtBQUFBLGtCQUF1Q0wsT0FBTyxDQUFDSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBUUUscUVBQUMsd0RBQUQ7QUFBQSxnQkFBV0UsV0FBVyxDQUFDTixPQUFPLENBQUNPLEtBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSxnQkFBSVAsT0FBTyxDQUFDUTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUNFLFlBQUksRUFBRTtBQUNKQyxrQkFBUSxFQUFFLFNBRE47QUFFSkMsZUFBSyxFQUFFO0FBQ0xMLGNBQUUsRUFBRUwsT0FBTyxDQUFDSztBQURQO0FBRkgsU0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDtLQTVCdUJOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTc3NTA5NjMyOWYxZDkzMjlhYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gJy4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xyXG4vLyBpbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuLy8gaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSAnLi9EZWxldGVQcm9kdWN0JztcclxuLy8gaW1wb3J0IEFkZFRvQ2FydCBmcm9tICcuL0FkZFRvQ2FydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGl0bGU+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gfT57cHJvZHVjdC5uYW1lfTwvTGluaz5cclxuICAgICAgPC9UaXRsZT5cclxuICAgICAgPFByaWNlVGFnPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxyXG4gICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiAnL3VwZGF0ZScsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVkaXQg4pyP77iPXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsvKiA8QWRkVG9DYXJ0IGlkPXtwcm9kdWN0LmlkfSAvPlxyXG4gICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0LmlkfT5EZWxldGU8L0RlbGV0ZVByb2R1Y3Q+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=