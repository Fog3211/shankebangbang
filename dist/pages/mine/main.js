require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(130);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e2f442c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e2f442c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e2f442c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\mine\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2f442c6", Component.options)
  } else {
    hotAPI.reload("data-v-e2f442c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_modal__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_weui_src_toast__ = __webpack_require__(2);
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
    mpToast: __WEBPACK_IMPORTED_MODULE_1_mpvue_weui_src_toast__["a" /* default */],
    mpModal: __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_modal__["a" /* default */]
  },
  data: function data() {
    return {
      login_btn_show: true,
      logout_btn_show: false,
      account: {
        name: "未登录",
        avatar: "/static/images/avatar/default.jpg",
        is_login: "请先授权登录"
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },

  methods: {
    getSetting: function getSetting() {
      var _this = this;

      wx.getSetting({
        success: function success(res) {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: function success(res) {
                // console.log(res.userInfo);
                // 已授权获取头像
                _this.account = {
                  name: res.userInfo.nickName,
                  avatar: res.userInfo.avatarUrl,
                  is_login: "已登录"
                };
                // 隐藏登录按钮
                _this.login_btn_show = false;
                _this.getOpenId();
              }
            });
          } else {
            // 未授权
            _this.login_btn_show = true;
          }
        }
      });
    },
    editionCheck: function editionCheck() {
      // click事件先触发,检查当前版本可用
      if (wx.canIUse("button.open-type.getUserInfo")) {
        // 用户版本可用
      } else {
        this.toast = {
          toastType: "warn",
          showToast: true,
          content: "请升级微信版本"
        };
      }
    },
    getOpenId: function getOpenId() {
      var _this2 = this;

      wx.login({
        success: function success(res) {
          var js_code = res.code;
          if (js_code) {
            // console.log("获取用户登录凭证：" + js_code);
            wx.request({
              url: "http://62.234.59.173/api/me/login",
              data: {
                code: js_code,
                userName: _this2.account.name,
                userHead: _this2.account.avatar
              },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: function success(res) {
                if (res.statusCode == 200) {
                  _this2.logout_btn_show = true;
                  wx.setStorageSync("open_id", res.data.open_id);
                } else {
                  // console.log(res.errMsg);
                }
              }
            });
          } else {
            // console.log("获取用户登录失败：" + res.errMsg);
            _this2.toast = {
              toastType: "error",
              showToast: true,
              content: "登录失败，请重试"
            };
          }
        }
      });
    },
    bindGetUserInfo: function bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        this.getSetting();
      } else {
        //用户按了拒绝按钮
        return;
      }
    },
    changeAccount: function changeAccount() {
      var open_id = wx.getStorageSync("open_id");
      if (open_id) {
        wx.navigateTo({ url: "/pages/account/main" });
      }
    },
    handleLogout: function handleLogout() {
      this.$refs.mpModal.show();
    },
    loginOut: function loginOut() {
      wx.removeStorage({
        key: "open_id"
      });
      this.account = {
        name: "未登录",
        avatar: "/static/images/avatar/default.jpg",
        is_login: "请先授权登录"
      };
      this.login_btn_show = true;
      this.logout_btn_show = false;
      this.toast = {
        toastType: "success",
        showToast: true,
        content: "已成功退出"
      };
    },
    handleItemList: function handleItemList(str) {
      var open_id = wx.getStorageSync("open_id");
      if (!open_id) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请先登录"
        };
        return;
      }
      if (str === "push") {
        wx.navigateTo({ url: "/pages/list/push/main" });
      } else {
        wx.navigateTo({ url: "/pages/list/help/main" });
      }
    },
    handleAbout: function handleAbout() {
      wx.navigateTo({ url: "/pages/about/main" });
    }
  },
  onShow: function onShow() {
    this.getSetting();
  }
});

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_7958e706_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_7958e706_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-weui\\src\\modal\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7958e706", Component.options)
  } else {
    hotAPI.reload("data-v-7958e706", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelColor: {
      type: String,
      default: '#000000'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmColor: {
      type: String,
      default: '#3cc51f'
    }
  },
  methods: {
    show: function show() {
      var _this = this;

      wx.showModal({
        title: this.title,
        content: this.content,
        showCancel: this.showCancel,
        cancelText: this.cancelText,
        cancelColor: this.cancelColor,
        confirmText: this.confirmText,
        confirmColor: this.confirmColor,
        success: function success(res) {
          if (res.confirm) {
            _this.$emit('confirm', res);
          } else {
            _this.$emit('cancel', res);
          }
        },
        fail: function fail(res) {
          _this.$emit('fail', res);
        },
        complete: function complete(res) {
          _this.$emit('complete', res);
        }
      });
    }
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-modal-content"
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7958e706", esExports)
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine-page"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": _vm.account.avatar,
      "alt": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "account-box"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.account.name))]), _c('p', {
    staticClass: "is-login"
  }, [_vm._v(_vm._s(_vm.account.is_login))]), _vm._v(" "), (!_vm.login_btn_show) ? _c('span', {
    staticClass: "iconfont icon-iconfontjiantou2 right-icon",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changeAccount
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.login_btn_show) ? _c('button', {
    staticClass: "login-btn",
    attrs: {
      "type": "primary",
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo,
      "click": _vm.editionCheck
    }
  }, [_vm._v("登录")]) : _vm._e()], 1), _vm._v(" "), _c('ul', {
    staticClass: "mine-list"
  }, [_c('li', {
    staticClass: "mine-item",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.handleItemList('push')
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-fabu"
  }), _vm._v("\n      我的发布\n      ")]), _vm._v(" "), _c('li', {
    staticClass: "mine-item",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.handleItemList('help')
      }
    }
  }, [_c('span', {
    staticClass: "iconfont icon-shou"
  }), _vm._v("\n      帮助过我\n      ")]), _vm._v(" "), _c('li', {
    staticClass: "mine-item",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.handleAbout
    }
  }, [_c('span', {
    staticClass: "iconfont icon-about"
  }), _vm._v("\n      关于\n      ")]), _vm._v(" "), (_vm.logout_btn_show) ? _c('li', {
    staticClass: "mine-item",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.handleLogout
    }
  }, [_c('span', {
    staticClass: "iconfont icon-tuichu"
  }), _vm._v("\n      注销登录\n      ")]) : _vm._e()], 1), _vm._v(" "), _c('mp-modal', {
    ref: "mpModal",
    attrs: {
      "title": "",
      "content": "确认注销登录？",
      "showCancel": true,
      "eventid": '6',
      "mpcomid": '0'
    },
    on: {
      "confirm": _vm.loginOut
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
     require("vue-hot-reload-api").rerender("data-v-e2f442c6", esExports)
  }
}

/***/ })

},[129]);