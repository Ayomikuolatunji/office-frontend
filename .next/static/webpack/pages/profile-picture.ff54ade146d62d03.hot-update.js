"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile-picture",{

/***/ "./layout/Avatar.js":
/*!**************************!*\
  !*** ./layout/Avatar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ \"./node_modules/buffer/index.js\");\n/* harmony import */ var _util_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/Button */ \"./util/Button.js\");\n/* harmony import */ var _api_authApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/authApi */ \"./api/authApi.js\");\n/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader/Loader */ \"./components/loader/Loader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n     display: flex;\\n     justify-content: center;\\n     align-items: center;\\n     flex-direction: column;\\n     gap: 3rem;\\n     background-color: #131324;\\n     height: 100vh;\\n\\n     .title {\\n        h1{\\n           color: #fff;\\n        }\\n     }\\n\\n     .avatars{\\n       display: flex;\\n       gap: 3rem;\\n        \\n       .avatar {\\n         border: 0.4rem solid transparent;\\n         padding: 0.4rem;\\n         border-radius: 5rem;\\n         display: flex;\\n         justify-content: center;\\n         align-items: center;\\n         cursor: pointer;\\n         transition: 0.5s ease-in-out all;\\n         img{\\n           height: 6rem;\\n         }\\n         .selected{\\n          border: 7.4rem solid #997af0;\\n          background-color: green;\\n         }\\n       }\\n     }\\n     button{\\n            background-color: #997af0;\\n            border-radius: 0.4rem;\\n            cursor: pointer;\\n            text-transform: uppercase;\\n            color: #fff;\\n            padding: 1rem 2rem;\\n            font-size: 1rem;\\n            font-weight: bold;\\n            color: #fff;\\n            border: none;\\n            transition: 0.5s ease-in-out;\\n            &:hover{\\n                background-color: #4e0eff; \\n            }\\n         }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nfunction Avatar() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), avatars = ref[0], setAvatars = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), selectedAvatar = ref2[0], setSelectedAvatar = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), user = ref3[0], setUser = ref3[1];\n    var api = \"https://api.multiavatar.com/45678945\";\n    var toastOption = {\n        position: \"bottom-right\",\n        autoclose: 8000,\n        pauseOnHover: true,\n        draggable: true,\n        theme: \"dark\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var userId = localStorage.getItem(\"userId\");\n        var id = JSON.parse(userId);\n        fetch(\"http://localhost:8080/office-api/auth/\".concat(JSON.parse(userId))).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setUser(data);\n        }).catch(function(err) {\n            console.log(err.message);\n        });\n    }, []);\n    var proflePicture = function() {\n        var _ref = _asyncToGenerator(_home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var setAvatar;\n            return _home_ayomiku_Desktop_officeFrontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(selectedAvatar === undefined)) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(\"Profile picture required\", toastOption);\n                        return _ctx.abrupt(\"return\", false);\n                    case 3:\n                        if (!user) {\n                            _ctx.next = 8;\n                            break;\n                        }\n                        console.log(user);\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"\".concat(_api_authApi__WEBPACK_IMPORTED_MODULE_10__.profile, \"/\").concat(data.user._id));\n                    case 7:\n                        setAvatar = _ctx.sent;\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function proflePicture() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(user);\n    // useEffect(()=>{\n    //   async function fetch(){\n    //     let data=[]\n    //     for(let i=0; i<=5; i++){\n    //      const image=await axios.get(`${api}/${Math.random(Math.random()* 1000)}`)\n    //      const buffer=new Buffer(image.data)\n    //      data.push(buffer.toString(\"base64\"))\n    //     }\n    //     setAvatars(data)\n    //     setLoading(false)\n    //   }\n    //   fetch()\n    // },[])\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false));\n};\n_s(Avatar, \"zZB6nGhkZug4A81+Uojim6fjy3M=\");\n_c = Avatar;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div(_templateObject());\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE0QztJQUM1QyxFQUFRO0lBQ1IsRUFBdUI7SUFDdkIsRUFBd0I7SUFDeEIsRUFBTTtJQUNOLEVBQVk7SUFDWixFQUFRO0lBQ1YsTUFBTTtBQTRCUixDQUFDO0dBbEZ1QlIsTUFBTTtLQUFOQSxNQUFNO0FBb0Y5QixHQUFLLENBQUNzQyxTQUFTLEdBQUMzQyw4REFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvQXZhdGFyLmpzP2E0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3V0aWwvQnV0dG9uXCJcbmltcG9ydCB7IHByb2ZpbGUgfSBmcm9tICcuLi9hcGkvYXV0aEFwaSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKCkge1xuICAgIGNvbnN0IFthdmF0YXJzLHNldEF2YXRhcnNdPVJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRBdmF0YXIsc2V0U2VsZWN0ZWRBdmF0YXJdPXVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl09dXNlU3RhdGUoW10pICAgIFxuICAgIGNvbnN0IGFwaT1cImh0dHBzOi8vYXBpLm11bHRpYXZhdGFyLmNvbS80NTY3ODk0NVwiO1xuXG4gICAgY29uc3QgdG9hc3RPcHRpb249e1xuICAgICAgICBwb3NpdGlvbjogXCJib3R0b20tcmlnaHRcIixcbiAgICAgICAgYXV0b2Nsb3NlOjgwMDAsXG4gICAgICAgIHBhdXNlT25Ib3Zlcjp0cnVlLFxuICAgICAgICBkcmFnZ2FibGU6dHJ1ZSxcbiAgICAgICAgdGhlbWU6XCJkYXJrXCJcbiAgICB9XG4gXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBjb25zdCB1c2VySWQ9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcbiAgICAgIGNvbnN0IGlkPUpTT04ucGFyc2UodXNlcklkKVxuICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvb2ZmaWNlLWFwaS9hdXRoLyR7SlNPTi5wYXJzZSh1c2VySWQpfWApXG4gICAgICAgLnRoZW4ocmVzPT57XG4gICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgIH0pXG4gICAgICAgLnRoZW4oZGF0YT0+e1xuICAgICAgICAgc2V0VXNlcihkYXRhKVxuICAgICAgIH0pXG4gICAgICAgLmNhdGNoKGVycj0+e1xuICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgfSlcbiAgICB9LFtdKVxuXG4gICAgY29uc3QgcHJvZmxlUGljdHVyZT1hc3luYygpPT57XG4gICAgICAgIGlmKHNlbGVjdGVkQXZhdGFyPT09dW5kZWZpbmVkKXtcbiAgICAgICAgICB0b2FzdC5lcnJvcihcIlByb2ZpbGUgcGljdHVyZSByZXF1aXJlZFwiLCB0b2FzdE9wdGlvbik7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlIFxuICAgICAgICB9XG4gICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgICAgICAgY29uc3Qgc2V0QXZhdGFyPWF3YWl0ICBheGlvcy5wb3N0KGAke3Byb2ZpbGV9LyR7ZGF0YS51c2VyLl9pZH1gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XG4gICAgLy8gICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpe1xuICAgIC8vICAgICBsZXQgZGF0YT1bXVxuICAgIC8vICAgICBmb3IobGV0IGk9MDsgaTw9NTsgaSsrKXtcbiAgICAvLyAgICAgIGNvbnN0IGltYWdlPWF3YWl0IGF4aW9zLmdldChgJHthcGl9LyR7TWF0aC5yYW5kb20oTWF0aC5yYW5kb20oKSogMTAwMCl9YClcbiAgICAvLyAgICAgIGNvbnN0IGJ1ZmZlcj1uZXcgQnVmZmVyKGltYWdlLmRhdGEpXG4gICAgLy8gICAgICBkYXRhLnB1c2goYnVmZmVyLnRvU3RyaW5nKFwiYmFzZTY0XCIpKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldEF2YXRhcnMoZGF0YSlcbiAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAvLyAgIH1cbiAgICAvLyAgIGZldGNoKClcbiAgICAvLyB9LFtdKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIHsvKiB7bG9hZGluZyAmJiA8TG9hZGVyLz59XG4gICAgICAge2xvYWRpbmcgfHwgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgIDxoMT5QaWNrIGFuIEF2YXRhciBhcyB5b3VyIHByb2ZpbGUgcGljdHVyZTwvaDE+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhcnNcIj5cbiAgICAgICAgICAgICAgIHthdmF0YXJzLm1hcCgoYXZhdGFyLGluZGV4KT0+e1xuICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IFxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGF2YXRhciAke3NlbGVjdGVkQXZhdGFyP1wic2VsZWN0ZWRcIjpcIiBcIn1gfSBcbiAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWRBdmF0YXIoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7YXZhdGFyfWB9IGFsdD1cImF2YXRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgIHRleHQ9e1wiU2V0IGFzIFByb2ZpbGUgUGljdHVyZVwifVxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5wcm9mbGVQaWN0dXJlKCl9XG4gICAgICAgICAgICAgLz4gICAgXG4gICAgICAgIDwvQ29udGFpbmVyPn1cbiAgICAgICAgPFRvYXN0Q29udGFpbmVyIGxpbWl0PXsxfS8+ICovfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lcj1zdHlsZWQuZGl2YFxuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgZ2FwOiAzcmVtO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzI0O1xuICAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgIC50aXRsZSB7XG4gICAgICAgIGgxe1xuICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICB9XG5cbiAgICAgLmF2YXRhcnN7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBnYXA6IDNyZW07XG4gICAgICAgIFxuICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgYm9yZGVyOiAwLjRyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQgYWxsO1xuICAgICAgICAgaW1ne1xuICAgICAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgICAgICB9XG4gICAgICAgICAuc2VsZWN0ZWR7XG4gICAgICAgICAgYm9yZGVyOiA3LjRyZW0gc29saWQgIzk5N2FmMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgIH1cbiAgICAgICB9XG4gICAgIH1cbiAgICAgYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5N2FmMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGUwZWZmOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbmBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlRvYXN0Q29udGFpbmVyIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInN0eWxlZCIsIkJ1ZmZlciIsIkJ1dHRvbiIsInByb2ZpbGUiLCJMb2FkZXIiLCJBdmF0YXIiLCJhdmF0YXJzIiwic2V0QXZhdGFycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5kZWZpbmVkIiwic2VsZWN0ZWRBdmF0YXIiLCJzZXRTZWxlY3RlZEF2YXRhciIsInVzZXIiLCJzZXRVc2VyIiwiYXBpIiwidG9hc3RPcHRpb24iLCJwb3NpdGlvbiIsImF1dG9jbG9zZSIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInRoZW1lIiwidXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlkIiwiSlNPTiIsInBhcnNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicHJvZmxlUGljdHVyZSIsInNldEF2YXRhciIsImVycm9yIiwicG9zdCIsIl9pZCIsIkNvbnRhaW5lciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/Avatar.js\n");

/***/ })

});