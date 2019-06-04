require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(55);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_731e6395_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(56)
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

/***/ 56:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 57:
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
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    mpToast: __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_toast__["a" /* default */]
  },
  data: function data() {
    return {
      data: {
        id: -1,
        title: "",
        tag: [],
        description: "",
        time: "",
        visit_count: 0,
        files: [],
        pay: 0,
        avatar: "",
        name: "",
        contact: "",
        itemNeed: 0
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },

  methods: {
    handleApply: function handleApply() {
      var open_id = wx.getStorageSync("open_id");
      // 未登录
      if (!open_id) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请先登录"
        };
        return;
      }
      if (this.data.itemNeed === 0) {
        this.apply("https://wx.api.fog3211.com/item/applyNeed/");
      } else {
        this.apply("https://wx.api.fog3211.com/item/applyTalent/");
      }
    },
    apply: function apply(url) {
      var _this = this;

      var open_id = wx.getStorageSync("open_id");
      wx.request({
        url: url + open_id + "/" + this.data.id,
        method: "PUT",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            if (res.data === 1) {
              _this.toast = {
                toastType: "success",
                showToast: true,
                content: "申请成功"
              };
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                });
              }, 1000);
            } else if (res.data === -4) {
              _this.toast = {
                toastType: "error",
                showToast: true,
                content: "不能申请自己的请求"
              };
            } else if (res.data === -5) {
              _this.toast = {
                toastType: "error",
                showToast: true,
                content: "您的校园币不足"
              };
            } else {
              _this.toast = {
                toastType: "error",
                showToast: true,
                content: "出错了，请重试"
              };
            }
          } else {
            // console.log("error");
          }
        }
      });
    },
    copyContact: function copyContact() {
      wx.setClipboardData({
        data: this.data.contact,
        success: function success(res) {
          wx.getClipboardData({
            success: function success(res) {
              // console.log(res.data);
            }
          });
        }
      });
    },
    getItem: function getItem() {
      var _this2 = this;

      // 获取页面参数
      var id = this.$root.$mp.query.id;
      // 请求数据
      wx.request({
        url: "https://wx.api.fog3211.com/item/itemlist/" + id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            var item = res.data;
            _this2.data = {
              id: item.itemId,
              title: item.itemTitle,
              tag: item.tags,
              description: item.itemContent,
              time: item.toNow,
              visit_count: item.itemScan,
              files: pics,
              pay: item.itemPrice,
              avatar: item.user.touxiang || "/static/images/avatar/default.jpg",
              name: item.user.userName,
              contact: item.itemContact,
              itemNeed: item.itemNeed
            };
            // console.log(res.data);
          } else {
            // console.log(res.errMsg);
            _this2.toast = {
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
    this.getItem();
  }
});

/***/ }),

/***/ 58:
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
    staticClass: "contact-box"
  }, [_c('span', {
    staticClass: "contact-label"
  }, [_vm._v("联系方式")]), _vm._v(" "), _c('span', {
    staticClass: "contact"
  }, [_vm._v(_vm._s(_vm.data.contact || "暂无"))]), _vm._v(" "), (_vm.data.contact) ? _c('button', {
    staticClass: "copy-btn",
    attrs: {
      "type": "primary",
      "eventid": '0'
    },
    on: {
      "click": _vm.copyContact
    }
  }, [_vm._v("复制")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "btn-box"
  }, [_c('button', {
    staticClass: "btn"
  }, [_vm._v("￥" + _vm._s(_vm.data.pay))]), _vm._v(" "), _c('button', {
    staticClass: "btn apply-btn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleApply
    }
  }, [_vm._v("申请")])], 1), _vm._v(" "), _c('mp-toast', {
    attrs: {
      "type": _vm.toast.toastType,
      "content": _vm.toast.content,
      "eventid": '2',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.toast.showToast),
      callback: function($$v) {
        _vm.toast.showToast = $$v
      },
      expression: "toast.showToast"
    }
  })], 1)
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

},[54]);