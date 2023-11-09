"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/About.tsx":
/*!**********************************!*\
  !*** ./src/components/About.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.json */ \"./src/config/index.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar About = function() {\n    var _this1 = _this;\n    var company = _config_index_json__WEBPACK_IMPORTED_MODULE_2__.company, about = _config_index_json__WEBPACK_IMPORTED_MODULE_2__.about;\n    var logo = company.logo, companyName = company.name;\n    var socialMedia = about.socialMedia, sections = about.sections;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"about\",\n        className: \"mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12\",\n        __source: {\n            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n            lineNumber: 11\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            __source: {\n                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                lineNumber: 15\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 16\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: logo,\n                        alt: companyName,\n                        className: \"w-16 h-16\",\n                        __source: {\n                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                            lineNumber: 17\n                        },\n                        __self: _this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12\",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 19\n                    },\n                    __self: _this,\n                    children: sections.map(function(section, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: section.href,\n                            className: \"hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 21\n                            },\n                            __self: _this1,\n                            children: section.name\n                        }, \"\".concat(section.name, \"-\").concat(index));\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center gap-x-8 mt-6 h-8\",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 30\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"github\",\n                            href: socialMedia.github,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 31\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"24\",\n                                height: \"24\",\n                                viewBox: \"0 0 24 24\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 37\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                    d: \"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 44\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"linkedin\",\n                            href: socialMedia.linkedin,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 47\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"24\",\n                                height: \"24\",\n                                viewBox: \"0 0 24 24\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 53\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                    d: \"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 60\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"stackOverflow\",\n                            href: socialMedia.stackOverflow,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 63\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"16\",\n                                height: \"16\",\n                                fill: \"currentColor\",\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                viewBox: \"0 0 16 16\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 69\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                        d: \"M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z\",\n                                        __source: {\n                                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                            lineNumber: 77\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                        d: \"M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z\",\n                                        __source: {\n                                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                            lineNumber: 78\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex flex-col items-center mt-6 \",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 82\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"flex flex-row max-w-md\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 83\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    className: \"mt-6 text-xs lg:text-sm leading-none text-gray-400 dark:text-gray-50\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 84\n                                    },\n                                    __self: _this,\n                                    children: \"*Free hosting is offered on all projects, however, depending on your requirements, you may choose to host your project on your own server or pay for a hosting plan.\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    className: \"px-20 mt-6 text-xs lg:text-sm leading-none text-gray-400 dark:text-gray-50\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 89\n                                    },\n                                    __self: _this,\n                                    children: \"†For first time clients a deposit may be required, with remaining balances payable on terms of contract.\"\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            className: \"mt-6 text-xs lg:text-sm leading-none text-gray-700 dark:text-gray-50\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 94\n                            },\n                            __self: _this,\n                            children: [\n                                \"\\xa9 \",\n                                new Date().getFullYear(),\n                                \" designed by\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: \"https://github.com/issaafalkattan\",\n                                    rel: \"nofollow\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 96\n                                    },\n                                    __self: _this,\n                                    children: \"Issaaf Kattan\"\n                                }),\n                                \" \",\n                                \"and Taylor Burke\"\n                            ]\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDakVELENBQUk7d0NBQUNDLENBQUMsRUFBQyxDQUF1UTs7Ozs7Ozs7Ozs7O3NGQUlwUnJCLENBQUc7b0JBQUNFLFNBQVMsRUFBQyxDQUFrQzs7Ozs7Ozs4RkFDOUNGLENBQUc7NEJBQUNFLFNBQVMsRUFBQyxDQUF3Qjs7Ozs7OztxR0FDcEN1QixDQUFDO29DQUFDdkIsU0FBUyxFQUFDLENBQXNFOzs7Ozs7OENBQUMsQ0FJcEY7O3FHQUNDdUIsQ0FBQztvQ0FBQ3ZCLFNBQVMsRUFBQyxDQUE0RTs7Ozs7OzhDQUFDLENBRzFGOzs7OzhGQUVEdUIsQ0FBQzs0QkFBQ3ZCLFNBQVMsRUFBQyxDQUFzRTs7Ozs7OztnQ0FBQyxDQUMzRTtnQ0FBQyxHQUFHLENBQUN3QixJQUFJLEdBQUdDLFdBQVc7Z0NBQUcsQ0FBWTtnQ0FBQyxDQUFHO3FHQUNoRGxCLENBQUM7b0NBQUNDLElBQUksRUFBQyxDQUFtQztvQ0FBQ0ksR0FBRyxFQUFDLENBQVU7Ozs7Ozs4Q0FBQyxDQUUzRDs7Z0NBQUssQ0FBRztnQ0FBQyxDQUVYOzs7Ozs7OztBQUtWLENBQUM7S0FwR0t0QixLQUFLO0FBcUdYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQudHN4P2JhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi9jb25maWcvaW5kZXguanNvblwiO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgeyBjb21wYW55LCBhYm91dCB9ID0gY29uZmlnO1xuICBjb25zdCB7IGxvZ28sIG5hbWU6IGNvbXBhbnlOYW1lIH0gPSBjb21wYW55O1xuICBjb25zdCB7IHNvY2lhbE1lZGlhLCBzZWN0aW9ucyB9ID0gYWJvdXQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cImFib3V0XCJcbiAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gY29udGFpbmVyIHhsOnB4LTIwIGxnOnB4LTEyIHNtOnB4LTYgcHgtNCBweS0xMlwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9e2NvbXBhbnlOYW1lfSBjbGFzc05hbWU9XCJ3LTE2IGgtMTZcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBzbTpnYXAtMTAgZ2FwLTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTQgaC0xMlwiPlxuICAgICAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBrZXk9e2Ake3NlY3Rpb24ubmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICBocmVmPXtzZWN0aW9uLmhyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0ZXh0LWJhc2UgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy00IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzZWN0aW9uLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LTggbXQtNiBoLThcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImdpdGh1YlwiXG4gICAgICAgICAgICBocmVmPXtzb2NpYWxNZWRpYS5naXRodWJ9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibGlua2VkaW5cIlxuICAgICAgICAgICAgaHJlZj17c29jaWFsTWVkaWEubGlua2VkaW59XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE5IDBoLTE0Yy0yLjc2MSAwLTUgMi4yMzktNSA1djE0YzAgMi43NjEgMi4yMzkgNSA1IDVoMTRjMi43NjIgMCA1LTIuMjM5IDUtNXYtMTRjMC0yLjc2MS0yLjIzOC01LTUtNXptLTExIDE5aC0zdi0xMWgzdjExem0tMS41LTEyLjI2OGMtLjk2NiAwLTEuNzUtLjc5LTEuNzUtMS43NjRzLjc4NC0xLjc2NCAxLjc1LTEuNzY0IDEuNzUuNzkgMS43NSAxLjc2NC0uNzgzIDEuNzY0LTEuNzUgMS43NjR6bTEzLjUgMTIuMjY4aC0zdi01LjYwNGMwLTMuMzY4LTQtMy4xMTMtNCAwdjUuNjA0aC0zdi0xMWgzdjEuNzY1YzEuMzk2LTIuNTg2IDctMi43NzcgNyAyLjQ3NnY2Ljc1OXpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwic3RhY2tPdmVyZmxvd1wiXG4gICAgICAgICAgICBocmVmPXtzb2NpYWxNZWRpYS5zdGFja092ZXJmbG93fVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgaG92ZXI6dGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIuNDEyIDE0LjU3MlYxMC4yOWgxLjQyOFYxNkgxdi01LjcxaDEuNDI4djQuMjgyaDkuOTg0elwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy44NTcgMTMuMTQ1aDcuMTM3di0xLjQyOEgzLjg1N3YxLjQyOHpNMTAuMjU0IDAgOS4xMDguODUybDQuMjYgNS43MjcgMS4xNDYtLjg1MkwxMC4yNTQgMHptLTMuNTQgMy4zNzcgNS40ODQgNC41NjcuOTEzLTEuMDk3TDcuNjI3IDIuMjhsLS45MTQgMS4wOTd6TTQuOTIyIDYuNTVsNi40NyAzLjAxMy42MDMtMS4yOTQtNi40Ny0zLjAxMy0uNjAzIDEuMjk0em0tLjkyNSAzLjM0NCA2Ljk4NSAxLjQ2OS4yOTQtMS4zOTgtNi45ODUtMS40NjgtLjI5NCAxLjM5N3pcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtdC02IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LXhzIGxnOnRleHQtc20gbGVhZGluZy1ub25lIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgKkZyZWUgaG9zdGluZyBpcyBvZmZlcmVkIG9uIGFsbCBwcm9qZWN0cywgaG93ZXZlciwgZGVwZW5kaW5nIG9uXG4gICAgICAgICAgICAgIHlvdXIgcmVxdWlyZW1lbnRzLCB5b3UgbWF5IGNob29zZSB0byBob3N0IHlvdXIgcHJvamVjdCBvbiB5b3VyIG93blxuICAgICAgICAgICAgICBzZXJ2ZXIgb3IgcGF5IGZvciBhIGhvc3RpbmcgcGxhbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIwIG10LTYgdGV4dC14cyBsZzp0ZXh0LXNtIGxlYWRpbmctbm9uZSB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwXCI+XG4gICAgICAgICAgICAgIOKAoEZvciBmaXJzdCB0aW1lIGNsaWVudHMgYSBkZXBvc2l0IG1heSBiZSByZXF1aXJlZCwgd2l0aCByZW1haW5pbmdcbiAgICAgICAgICAgICAgYmFsYW5jZXMgcGF5YWJsZSBvbiB0ZXJtcyBvZiBjb250cmFjdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQteHMgbGc6dGV4dC1zbSBsZWFkaW5nLW5vbmUgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS01MFwiPlxuICAgICAgICAgICAgJmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGRlc2lnbmVkIGJ5e1wiIFwifVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pc3NhYWZhbGthdHRhblwiIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgIElzc2FhZiBLYXR0YW5cbiAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICBhbmQgVGF5bG9yIEJ1cmtlXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY29uZmlnIiwiQWJvdXQiLCJjb21wYW55IiwiYWJvdXQiLCJsb2dvIiwiY29tcGFueU5hbWUiLCJuYW1lIiwic29jaWFsTWVkaWEiLCJzZWN0aW9ucyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwibWFwIiwic2VjdGlvbiIsImluZGV4IiwiYSIsImhyZWYiLCJhcmlhLWxhYmVsIiwiZ2l0aHViIiwidGFyZ2V0IiwicmVsIiwic3ZnIiwieG1sbnMiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJwYXRoIiwiZCIsImxpbmtlZGluIiwic3RhY2tPdmVyZmxvdyIsImZpbGwiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About.tsx\n");

/***/ })

});