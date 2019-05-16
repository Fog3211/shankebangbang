require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 100:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_msg_item__ = __webpack_require__(102);
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
  components: {
    "msg-item": __WEBPACK_IMPORTED_MODULE_0__components_msg_item__["a" /* default */]
  },
  data: function data() {
    return {
      off_msg: {
        msg_type: "official",
        new_msg_count: 0
      },
      msg_list: [{
        id: "11",
        name: "李二狗",
        avatar: "/static/images/avatar/1.jpg",
        msg_type: "accept",
        new_msg_count: 1,
        time: "2019-2-2"
      }, {
        id: "22",
        name: "赵铁柱",
        avatar: "/static/images/avatar/2.jpg",
        msg_type: "apply",
        new_msg_count: 0,
        time: "2019-4-2"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    wx.request({
      url: "http://62.234.59.173/governMsg/governMsg",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(res) {
        if (res.statusCode == 200) {
          // this.msg_list = res.data;
          _this.off_msg.new_msg_count = res.data.length;
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_msg_item_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c76cf0e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_msg_item_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c76cf0e8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_msg_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c76cf0e8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_msg_item_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\msg-item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] msg-item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c76cf0e8", Component.options)
  } else {
    hotAPI.reload("data-v-c76cf0e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    msg_data: {
      type: Object,
      default: {
        id: 0,
        name: "",
        avatar: "",
        msg_type: "",
        new_msg_count: 0
      }
    }
  },
  methods: {
    handleMsgDeatil: function handleMsgDeatil() {
      wx.navigateTo({ url: "/pages/detail/message/ordinary-message/main" });
    },
    handleOffMsgDeatil: function handleOffMsgDeatil() {
      wx.navigateTo({ url: "/pages/detail/message/official-message/main" });
    }
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "msg-list"
  }, [(_vm.msg_data.msg_type !== 'official') ? _c('div', {
    staticClass: "item-box",
    attrs: {
      "hover-class": "weui-cell_active",
      "eventid": '1'
    },
    on: {
      "click": _vm.handleMsgDeatil
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.msg_data.avatar,
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.msg_data.name))]), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v(_vm._s(_vm.msg_data.msg_type === 'apply' ? '申请了我的求助' : '接受了我的帮助'))]), _vm._v(" "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.msg_data.time))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.msg_data.new_msg_count > 0),
      expression: "msg_data.new_msg_count>0"
    }],
    staticClass: "weui-badge weui-badge_dot dot-badge"
  })]) : (_vm.msg_data.msg_type === 'official') ? _c('div', {
    staticClass: "item-box",
    attrs: {
      "hover-class": "weui-cell_active",
      "eventid": '0'
    },
    on: {
      "click": _vm.handleOffMsgDeatil
    }
  }, [_c('img', {
    staticClass: "tip-icon",
    attrs: {
      "src": "/static/images/icon/tongzhi.png",
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text tip-text"
  }, [_vm._v("官方通知")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.msg_data.new_msg_count > 0),
      expression: "msg_data.new_msg_count>0"
    }],
    staticClass: "weui-badge msg-badge"
  }, [_vm._v(_vm._s(_vm.msg_data.new_msg_count))]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-iconfontjiantou2 right-icon"
  })]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c76cf0e8", esExports)
  }
}

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message-page"
  }, [_c('ul', {
    staticClass: "msg-list"
  }, [_c('msg-item', {
    attrs: {
      "msg_data": _vm.off_msg,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.msg_list), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('msg-item', {
      attrs: {
        "msg_data": item,
        "mpcomid": '1_' + index
      }
    })], 1)
  })], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-268bd113", esExports)
  }
}

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(99);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_268bd113_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-268bd113"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_268bd113_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\message\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-268bd113", Component.options)
  } else {
    hotAPI.reload("data-v-268bd113", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[98]);