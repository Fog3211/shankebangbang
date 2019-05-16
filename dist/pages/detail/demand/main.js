require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(42);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_731e6395_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(45);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(43)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-731e6395"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_731e6395_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\demand\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731e6395", Component.options)
  } else {
    hotAPI.reload("data-v-731e6395", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_toast__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      id: -1,
      data: {
        title: "标题占位符0000000",
        tag: ["计算机", "软件", "物联网", "数媒", "网络"],
        description: "MinUI 是蘑菇街前端开发团队开发的基于微信小程序自定义组件特性开发而成的一套简洁、易用、高效的组件库，适用场景广，覆盖小程序原生框架，各种小程序组件主流框架等，并且提供了专门的命令行工具。MinUI 是蘑菇街前端开发团队开发的基于微信小程序自定义组件特性开发而成的一套简洁、易用、高效的组件库，适用场景广，覆盖小程序原生框架，各种小程序组件主流框架等，并且提供了专门的命令行工具。",
        time: "2019-02-22",
        visit_count: 321,
        files: ["/static/images/other/1.png", "/static/images/other/1.png"],
        pay: 30,
        avatar: "/static/images/avatar/1.jpg",
        name: "李二狗"
      }
    };
  },

  methods: {
    handleApply: function handleApply() {
      console.log("提交申请");
    }
  },
  mounted: function mounted() {
    var _this = this;

    // 获取页面参数
    this.id = this.$root.$mp.query.id;
    // 请求数据
    wx.request({
      url: "http://62.234.59.173/item/itemlist/" + this.id,
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(res) {
        if (res.statusCode == 200) {
          var item = res.data;
          _this.data = {
            title: item.itemTitle,
            tag: item.tags,
            description: item.itemContent,
            time: item.toNow,
            visit_count: 321,
            files: ["/static/images/other/1.png", "/static/images/other/1.png"],
            pay: item.itemPrice,
            avatar: "/static/images/avatar/1.jpg",
            name: "李二狗"
          };
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
});

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-demand"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "iconfont icon-02 radio"
  }), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.data.title))])]), _vm._v(" "), _c('ul', {
    staticClass: "tag-box"
  }, _vm._l((_vm.data.tag), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "tag"
    }, [_vm._v("\n     # " + _vm._s(item) + "\n    ")])
  })), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n    " + _vm._s(_vm.data.description) + "\n  ")]), _vm._v(" "), _c('ul', {
    staticClass: "img-box"
  }, _vm._l((_vm.data.files), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "img-item"
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": item,
        "alt": "img"
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.data.avatar,
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.data.name))]), _vm._v(" "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.data.time))]), _vm._v(" "), _c('span', {
    staticClass: "visit"
  }, [_vm._v("浏览·" + _vm._s(_vm.data.visit_count))])]), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "btn"
  }, [_vm._v("￥" + _vm._s(_vm.data.pay))]), _vm._v(" "), _c('button', {
    staticClass: "btn apply-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.handleApply
    }
  }, [_vm._v("申请")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-731e6395", esExports)
  }
}

/***/ })

},[41]);