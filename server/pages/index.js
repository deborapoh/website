"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js



const Home = (props)=>/*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("img", {
                src: props.imageUrl
            })
        ]
    })
;
async function getStaticProps() {
    const res = await external_isomorphic_unfetch_default()("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    const data = await res.json();
    return {
        props: {
            title: data.title,
            imageUrl: data.url
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(148));
module.exports = __webpack_exports__;

})();