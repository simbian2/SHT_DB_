/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tab2.jsx":
/*!*****************************!*\
  !*** ./components/Tab2.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/heoyumyeong/Desktop/STUDY/All about \\u1109\\u1175\\u11AB\\u1112\\u1174\\u1110\\u1161/front/components/Tab2.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Tab2 = function Tab2() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),\n      tabBtn = _useState[0],\n      setTabBtn = _useState[1];\n\n  var btn1 = function btn1() {\n    setTabBtn(1);\n  };\n\n  var btn2 = function btn2() {\n    setTabBtn(2);\n  };\n\n  var btn3 = function btn3() {\n    setTabBtn(3);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"tab_right\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: btn1,\n          children: \"\\uBC84\\uD2BC1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: btn2,\n          children: \"\\uBC84\\uD2BC2\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: btn3,\n          children: \"\\uBC84\\uD2BC3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this), tabBtn === 1 ? ' 첫번째 내용' : tabBtn === 2 ? '두번째 내용' : '세번째 내용']\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Tab2, \"RwsWOzX4U3c60RUg9cvs5xm7lSA=\");\n\n_c = Tab2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tab2);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tab2\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWIyLmpzeD8wNzM0Il0sIm5hbWVzIjpbIlRhYjIiLCJ1c2VTdGF0ZSIsInRhYkJ0biIsInNldFRhYkJ0biIsImJ0bjEiLCJidG4yIiwiYnRuMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsK0NBQVEsQ0FBQyxDQUFELENBRHJCO0FBQUEsTUFDUkMsTUFEUTtBQUFBLE1BQ0FDLFNBREE7O0FBR2YsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmRCxhQUFTLENBQUMsQ0FBRCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZGLGFBQVMsQ0FBQyxDQUFELENBQVQ7QUFDSCxHQUZEOztBQUlBLE1BQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkgsYUFBUyxDQUFDLENBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBR0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBQSxnQ0FDQTtBQUFRLGlCQUFPLEVBQUVDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUE7QUFBUSxpQkFBTyxFQUFFQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQSxlQUdBO0FBQVEsaUJBQU8sRUFBRUMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFNUUosTUFBTSxLQUFLLENBQVgsR0FDTSxTQUROLEdBRU9BLE1BQU0sS0FBSyxDQUFYLEdBQ0csUUFESCxHQUVHLFFBVmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBa0JILENBaENEOztHQUFNRixJOztLQUFBQSxJO0FBa0NOLCtEQUFlQSxJQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYWIyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRhYjIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RhYkJ0biwgc2V0VGFiQnRuXSA9IHVzZVN0YXRlKDEpXG5cbiAgICBjb25zdCBidG4xID0gKCkgPT4ge1xuICAgICAgICBzZXRUYWJCdG4oMSlcbiAgICB9XG5cbiAgICBjb25zdCBidG4yID0gKCkgPT4ge1xuICAgICAgICBzZXRUYWJCdG4oMilcbiAgICB9XG5cbiAgICBjb25zdCBidG4zID0gKCkgPT4ge1xuICAgICAgICBzZXRUYWJCdG4oMylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiX3JpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0bjF9PuuyhO2KvDE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0bjJ9PuuyhO2KvDI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0bjN9PuuyhO2KvDM8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhYkJ0biA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnIOyyq+uyiOynuCDrgrTsmqknXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICh0YWJCdG4gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICfrkZDrsojsp7gg64K07JqpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ+yEuOuyiOynuCDrgrTsmqknXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiMjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tab2.jsx\n");

/***/ })

});