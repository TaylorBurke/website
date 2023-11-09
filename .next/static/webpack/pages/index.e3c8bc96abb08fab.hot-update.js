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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_index_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.json */ \"./src/config/index.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _this = undefined;\nvar About = function() {\n    var _this1 = _this;\n    var company = _config_index_json__WEBPACK_IMPORTED_MODULE_2__.company, about = _config_index_json__WEBPACK_IMPORTED_MODULE_2__.about;\n    var logo = company.logo, companyName = company.name;\n    var socialMedia = about.socialMedia, sections = about.sections;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        id: \"about\",\n        className: \"mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12\",\n        __source: {\n            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n            lineNumber: 11\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            __source: {\n                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                lineNumber: 15\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 16\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        src: logo,\n                        alt: companyName,\n                        className: \"w-16 h-16\",\n                        __source: {\n                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                            lineNumber: 17\n                        },\n                        __self: _this\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12\",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 19\n                    },\n                    __self: _this,\n                    children: sections.map(function(section, index) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            href: section.href,\n                            className: \"hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 21\n                            },\n                            __self: _this1,\n                            children: section.name\n                        }, \"\".concat(section.name, \"-\").concat(index));\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"flex items-center gap-x-8 mt-6 h-8\",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 30\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"github\",\n                            href: socialMedia.github,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 31\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"24\",\n                                height: \"24\",\n                                viewBox: \"0 0 24 24\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 37\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                    d: \"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 44\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"linkedin\",\n                            href: socialMedia.linkedin,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 47\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"svg\", {\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"24\",\n                                height: \"24\",\n                                viewBox: \"0 0 24 24\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 53\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                    d: \"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z\",\n                                    __source: {\n                                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                        lineNumber: 60\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            \"aria-label\": \"stackOverflow\",\n                            href: socialMedia.stackOverflow,\n                            target: \"_blank\",\n                            rel: \"noreferrer\",\n                            __source: {\n                                fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                lineNumber: 63\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                width: \"16\",\n                                height: \"16\",\n                                fill: \"currentColor\",\n                                className: \"fill-current text-gray-800 dark:text-white hover:text-primary\",\n                                viewBox: \"0 0 16 16\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 69\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                        d: \"M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984z\",\n                                        __source: {\n                                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                            lineNumber: 77\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"path\", {\n                                        d: \"M3.857 13.145h7.137v-1.428H3.857v1.428zM10.254 0 9.108.852l4.26 5.727 1.146-.852L10.254 0zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397z\",\n                                        __source: {\n                                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                            lineNumber: 78\n                                        },\n                                        __self: _this\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"flex items-center mt-6 max-w-sm\",\n                    __source: {\n                        fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                        lineNumber: 82\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                        className: \" mt-6 text-xs lg:text-sm leading-none text-gray-700 dark:text-gray-50\",\n                        __source: {\n                            fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                            lineNumber: 83\n                        },\n                        __self: _this,\n                        children: [\n                            \"Free hosting is offered to all projects, however, depending on your requirements, you may choose to host your project on your own server or pay for a hosting plan. \\xa9 \",\n                            new Date().getFullYear(),\n                            \" \",\n                            \"designed by\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                href: \"https://github.com/issaafalkattan\",\n                                rel: \"nofollow\",\n                                __source: {\n                                    fileName: \"/Users/taylorburke/dev/website/src/components/About.tsx\",\n                                    lineNumber: 88\n                                },\n                                __self: _this,\n                                children: \"Issaaf Kattan\"\n                            }),\n                            \" \",\n                            \"and Taylor Burke\"\n                        ]\n                    })\n                })\n            ]\n        })\n    }));\n};\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDakVELENBQUk7d0NBQUNDLENBQUMsRUFBQyxDQUF1UTs7Ozs7Ozs7Ozs7O3FGQUlwUnJCLENBQUc7b0JBQUNFLFNBQVMsRUFBQyxDQUFpQzs7Ozs7O29HQUM3Q3VCLENBQUM7d0JBQUN2QixTQUFTLEVBQUMsQ0FBdUU7Ozs7Ozs7NEJBQUMsQ0FHakQ7NEJBQUMsR0FBRyxDQUFDd0IsSUFBSSxHQUFHQyxXQUFXOzRCQUFJLENBQUc7NEJBQUMsQ0FDdEQ7NEJBQUMsQ0FBRztpR0FDZGxCLENBQUM7Z0NBQUNDLElBQUksRUFBQyxDQUFtQztnQ0FBQ0ksR0FBRyxFQUFDLENBQVU7Ozs7OzswQ0FBQyxDQUUzRDs7NEJBQUssQ0FBRzs0QkFBQyxDQUVYOzs7Ozs7O0FBS1YsQ0FBQztLQTVGS3RCLEtBQUs7QUE2RlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BYm91dC50c3g/YmE0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9pbmRleC5qc29uXCI7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbXBhbnksIGFib3V0IH0gPSBjb25maWc7XG4gIGNvbnN0IHsgbG9nbywgbmFtZTogY29tcGFueU5hbWUgfSA9IGNvbXBhbnk7XG4gIGNvbnN0IHsgc29jaWFsTWVkaWEsIHNlY3Rpb25zIH0gPSBhYm91dDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiYWJvdXRcIlxuICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBjb250YWluZXIgeGw6cHgtMjAgbGc6cHgtMTIgc206cHgtNiBweC00IHB5LTEyXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD17Y29tcGFueU5hbWV9IGNsYXNzTmFtZT1cInctMTYgaC0xNlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHNtOmdhcC0xMCBnYXAtOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtNCBoLTEyXCI+XG4gICAgICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGtleT17YCR7c2VjdGlvbi5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGhyZWY9e3NlY3Rpb24uaHJlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRleHQtYmFzZSBjdXJzb3ItcG9pbnRlciBsZWFkaW5nLTQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3NlY3Rpb24ubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtOCBtdC02IGgtOFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiZ2l0aHViXCJcbiAgICAgICAgICAgIGhyZWY9e3NvY2lhbE1lZGlhLmdpdGh1Yn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsaW5rZWRpblwiXG4gICAgICAgICAgICBocmVmPXtzb2NpYWxNZWRpYS5saW5rZWRpbn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5elwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzdGFja092ZXJmbG93XCJcbiAgICAgICAgICAgIGhyZWY9e3NvY2lhbE1lZGlhLnN0YWNrT3ZlcmZsb3d9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMi40MTIgMTQuNTcyVjEwLjI5aDEuNDI4VjE2SDF2LTUuNzFoMS40Mjh2NC4yODJoOS45ODR6XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjg1NyAxMy4xNDVoNy4xMzd2LTEuNDI4SDMuODU3djEuNDI4ek0xMC4yNTQgMCA5LjEwOC44NTJsNC4yNiA1LjcyNyAxLjE0Ni0uODUyTDEwLjI1NCAwem0tMy41NCAzLjM3NyA1LjQ4NCA0LjU2Ny45MTMtMS4wOTdMNy42MjcgMi4yOGwtLjkxNCAxLjA5N3pNNC45MjIgNi41NWw2LjQ3IDMuMDEzLjYwMy0xLjI5NC02LjQ3LTMuMDEzLS42MDMgMS4yOTR6bS0uOTI1IDMuMzQ0IDYuOTg1IDEuNDY5LjI5NC0xLjM5OC02Ljk4NS0xLjQ2OC0uMjk0IDEuMzk3elwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTYgbWF4LXctc21cIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbXQtNiB0ZXh0LXhzIGxnOnRleHQtc20gbGVhZGluZy1ub25lIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktNTBcIj5cbiAgICAgICAgICAgIEZyZWUgaG9zdGluZyBpcyBvZmZlcmVkIHRvIGFsbCBwcm9qZWN0cywgaG93ZXZlciwgZGVwZW5kaW5nIG9uIHlvdXJcbiAgICAgICAgICAgIHJlcXVpcmVtZW50cywgeW91IG1heSBjaG9vc2UgdG8gaG9zdCB5b3VyIHByb2plY3Qgb24geW91ciBvd24gc2VydmVyXG4gICAgICAgICAgICBvciBwYXkgZm9yIGEgaG9zdGluZyBwbGFuLiAmY29weTsge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX17XCIgXCJ9XG4gICAgICAgICAgICBkZXNpZ25lZCBieXtcIiBcIn1cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaXNzYWFmYWxrYXR0YW5cIiByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICBJc3NhYWYgS2F0dGFuXG4gICAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgICAgYW5kIFRheWxvciBCdXJrZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbmZpZyIsIkFib3V0IiwiY29tcGFueSIsImFib3V0IiwibG9nbyIsImNvbXBhbnlOYW1lIiwibmFtZSIsInNvY2lhbE1lZGlhIiwic2VjdGlvbnMiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsIm1hcCIsInNlY3Rpb24iLCJpbmRleCIsImEiLCJocmVmIiwiYXJpYS1sYWJlbCIsImdpdGh1YiIsInRhcmdldCIsInJlbCIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJsaW5rZWRpbiIsInN0YWNrT3ZlcmZsb3ciLCJmaWxsIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/About.tsx\n");

/***/ })

});