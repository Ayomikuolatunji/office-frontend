"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./helpers/RegistrationValidation.js":
/*!*******************************************!*\
  !*** ./helpers/RegistrationValidation.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegistrationValidation\": function() { return /* binding */ RegistrationValidation; }\n/* harmony export */ });\n/* harmony import */ var _RegistrationHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationHook */ \"./helpers/RegistrationHook.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar RegistrationValidation = function() {\n    var ref = (0,_RegistrationHook__WEBPACK_IMPORTED_MODULE_0__.RegistrationHook)(), _values = ref.values, username = _values.username, email = _values.email, password = _values.password, confirmPassword = _values.confirmPassword;\n    var validateRegistration = function() {\n        console.log(values);\n        if (password !== confirmPassword) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(\"Password an confirm password should be seen !\", {\n                position: \"bottom-right\",\n                autoclose: 8000,\n                pauseOnHover: true,\n                draggable: true,\n                theme: \"dark\"\n            });\n        }\n    };\n    return {\n        validateRegistration: validateRegistration\n    };\n};\n_c = RegistrationValidation;\nvar _c;\n$RefreshReg$(_c, \"RegistrationValidation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL1JlZ2lzdHJhdGlvblZhbGlkYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDZjtBQUNRO0FBRXZDLEdBQUssQ0FBQ0Usc0JBQXNCLEdBQUMsUUFDbEMsR0FEc0MsQ0FBQztJQUN6QyxHQUFLLENBQW9ERixHQUFrQixHQUFsQkEsbUVBQWdCLGNBQWhCQSxHQUFrQixDQUFwRUcsTUFBTSxFQUFFQyxRQUFRLFdBQVJBLFFBQVEsRUFBQ0MsS0FBSyxXQUFMQSxLQUFLLEVBQUNDLFFBQVEsV0FBUkEsUUFBUSxFQUFDQyxlQUFlLFdBQWZBLGVBQWU7SUFHcEQsR0FBSyxDQUFDQyxvQkFBb0IsR0FBQyxRQUMzQixHQUQrQixDQUFDO1FBQzVCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsTUFBTTtRQUNwQixFQUFFLEVBQUNHLFFBQVEsS0FBSUMsZUFBZSxFQUFDLENBQUM7WUFDNUJOLHVEQUFXLENBQUMsQ0FBK0MsZ0RBQUUsQ0FBQztnQkFDMURXLFFBQVEsRUFBRSxDQUFjO2dCQUN4QkMsU0FBUyxFQUFDLElBQUk7Z0JBQ2RDLFlBQVksRUFBQyxJQUFJO2dCQUNqQkMsU0FBUyxFQUFDLElBQUk7Z0JBQ2RDLEtBQUssRUFBQyxDQUFNO1lBQ2hCLENBQUM7UUFDSCxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDO1FBQ05SLG9CQUFvQixFQUFwQkEsb0JBQW9CO0lBQ3RCLENBQUM7QUFDSCxDQUFDO0tBcEJZTixzQkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGVscGVycy9SZWdpc3RyYXRpb25WYWxpZGF0aW9uLmpzP2UwZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0cmF0aW9uSG9vayB9IGZyb20gXCIuL1JlZ2lzdHJhdGlvbkhvb2tcIlxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uVmFsaWRhdGlvbj0oKT0+e1xuY29uc3Qge3ZhbHVlczp7dXNlcm5hbWUsZW1haWwscGFzc3dvcmQsY29uZmlybVBhc3N3b3JkfX09UmVnaXN0cmF0aW9uSG9vaygpXG4gIFxuXG4gIGNvbnN0IHZhbGlkYXRlUmVnaXN0cmF0aW9uPSgpPT57XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgaWYocGFzc3dvcmQgIT09Y29uZmlybVBhc3N3b3JkKXtcbiAgICAgICAgdG9hc3QuZXJyb3IoXCJQYXNzd29yZCBhbiBjb25maXJtIHBhc3N3b3JkIHNob3VsZCBiZSBzZWVuICFcIiwge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLXJpZ2h0XCIsXG4gICAgICAgICAgICBhdXRvY2xvc2U6ODAwMCxcbiAgICAgICAgICAgIHBhdXNlT25Ib3Zlcjp0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOnRydWUsXG4gICAgICAgICAgICB0aGVtZTpcImRhcmtcIlxuICAgICAgICB9KTtcbiAgICAgIH0gICAgXG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgdmFsaWRhdGVSZWdpc3RyYXRpb25cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWdpc3RyYXRpb25Ib29rIiwidG9hc3QiLCJSZWdpc3RyYXRpb25WYWxpZGF0aW9uIiwidmFsdWVzIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwidmFsaWRhdGVSZWdpc3RyYXRpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwb3NpdGlvbiIsImF1dG9jbG9zZSIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/RegistrationValidation.js\n");

/***/ })

});