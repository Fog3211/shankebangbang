require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(115);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e2f442c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(118);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(116)
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

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_demand_item__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_empty_list__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_src_toast__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_checkTime__ = __webpack_require__(2);
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
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    "demand-item": __WEBPACK_IMPORTED_MODULE_0__components_demand_item__["a" /* default */],
    "empty-list": __WEBPACK_IMPORTED_MODULE_1__components_empty_list__["a" /* default */],
    mpToast: __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_src_toast__["a" /* default */]
  },
  data: function data() {
    return {
      login_btn_show: true,
      account: {
        name: "未登录",
        avatar: "/static/images/avatar/1.jpg",
        is_login: "请先授权登录"
      },
      tabs: ["已发布", "已帮助"],
      active_index: 0,
      data_push: [],
      data_help: [],
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },

  computed: {
    navbarSliderClass: function navbarSliderClass() {
      return "weui-navbar__slider_" + this.active_index;
    }
  },
  methods: {
    tabClick: function tabClick(e) {
      this.active_index = Number(e.currentTarget.id);
    },
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
          toastType: "error",
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
              url: "http://62.234.59.173:/api/me/login",
              data: { code: js_code, userName: _this2.account.name },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: function success(res) {
                if (res.statusCode == 200) {
                  // console.log("获取到的openid为：" + res);
                  wx.setStorageSync("open_id", res.data.open_id);
                  _this2.getAllItemList();
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
      wx.navigateTo({ url: "/pages/account?open_id=" + open_id });
    },
    getAllItemList: function getAllItemList() {
      var open_id = wx.getStorageSync("open_id");
      this.data_push = [];
      this.data_help = [];
      this.getItemList("http://62.234.59.173/myHistory/getHelpedList/" + open_id);
      this.getItemList("https://62.234.59.173/myHistory/getReleasedList/" + open_id);
    },
    getItemList: function getItemList(url) {
      var _this3 = this;

      wx.request({
        url: url,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            // console.log(res.data);
            // 已发布
            if (url.includes("getReleasedList")) {
              res.data.map(function (item) {
                _this3.data_push.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: Object(__WEBPACK_IMPORTED_MODULE_3__utils_checkTime__["a" /* checkDate */])(item.itemTime),
                  detail: item.itemContent,
                  pay: item.itemPrice,
                  tag: item.tags,
                  visit_count: item.itemScan,
                  contact: item.itemContact
                });
              });
            } else {
              // 已帮助
              res.data.map(function (item) {
                _this3.data_help.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: Object(__WEBPACK_IMPORTED_MODULE_3__utils_checkTime__["a" /* checkDate */])(item.itemTime),
                  detail: item.itemContent,
                  pay: item.itemPrice,
                  tag: item.tags,
                  visit_count: item.itemScan,
                  contact: item.itemContact
                });
              });
            }
            // console.log(res.data);
          } else {
            // console.log("error");
            _this3.toast = {
              toastType: "error",
              showToast: true,
              content: "获取数据错误，请重试"
            };
          }
        }
      });
    }
  },
  mounted: function mounted() {
    this.getSetting();
    var open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getAllItemList();
    }
  }
});

/***/ }),

/***/ 118:
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
  }, [_vm._v("登录")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-tab"
  }, [_c('div', {
    staticClass: "weui-navbar"
  }, [_vm._l((_vm.tabs), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      staticClass: "weui-navbar__item",
      class: {
        'weui-bar__item_on': _vm.active_index == index
      },
      attrs: {
        "id": index,
        "eventid": '2_' + index
      },
      on: {
        "click": _vm.tabClick
      }
    }, [_c('div', {
      staticClass: "weui-navbar__title nav-title"
    }, [_vm._v(_vm._s(item))])]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index === 0),
        expression: "index===0"
      }],
      staticClass: "nav-cut"
    }, [_vm._v("|")])])
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-navbar__slider",
    class: _vm.navbarSliderClass
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__panel"
  }, [_c('div', {
    staticClass: "weui-tab__content",
    attrs: {
      "hidden": _vm.active_index !== 0
    }
  }, [(_vm.data_push.length !== 0) ? _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data_push), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  })) : _c('empty-list', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__content",
    attrs: {
      "hidden": _vm.active_index !== 1
    }
  }, [(_vm.data_help.length !== 0) ? _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data_help), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '2_' + index
      }
    })], 1)
  })) : _c('empty-list', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1)])])])
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

},[114]);