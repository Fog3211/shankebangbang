require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(116);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_457fddb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(119);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-457fddb7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_457fddb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\list\\push\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-457fddb7", Component.options)
  } else {
    hotAPI.reload("data-v-457fddb7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_demand_item__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_checkTime__ = __webpack_require__(3);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    "demand-item": __WEBPACK_IMPORTED_MODULE_0__components_demand_item__["a" /* default */]
  },
  data: function data() {
    return {
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      },
      list: []
    };
  },

  methods: {
    getData: function getData() {
      var _this = this;

      var open_id = wx.getStorageSync("open_id");
      wx.request({
        url: "https://wx.api.fog3211.com/myHistory/getReleasedList/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            res.data.map(function (item) {
              _this.list.push({
                id: item.itemId,
                title: item.itemTitle,
                time: Object(__WEBPACK_IMPORTED_MODULE_1__utils_checkTime__["a" /* checkDate */])(item.itemTime),
                detail: item.itemContent,
                pay: item.itemPrice,
                tag: item.tags,
                visit_count: item.itemScan,
                is_need: item.itemNeed
              });
            });
            // console.log(res.data);
          } else {
            // console.log(res.errMsg);
            _this.toast = {
              toastType: "error",
              showToast: true,
              content: "获取数据错误，请重试"
            };
          }
        }
      });
    }
  },
  onShow: function onShow() {
    var open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getData();
    }
  }
});

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-457fddb7", esExports)
  }
}

/***/ })

},[115]);