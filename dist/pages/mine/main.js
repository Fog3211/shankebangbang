require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(108);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_e2f442c6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
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

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_demand_item__ = __webpack_require__(8);
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
    "demand-item": __WEBPACK_IMPORTED_MODULE_1__components_demand_item__["a" /* default */]
  },
  data: function data() {
    return {
      account: {
        name: "未登录",
        avatar: "/static/images/avatar/1.jpg",
        school: ""
      },
      tabs: ["已发布", "已帮助"],
      active_index: 0,
      data1: [{
        id: 1,
        title: "已发布标题占位符1",
        time: "2018-4-2",
        detail: "\u4F8B\u5982 bindregionchange \u4E8B\u4EF6\u76F4\u63A5\u5728 dom&nbsp; \n            sadashkjdsajk",
        pay: 1,
        tag: ["计算机"],
        visit_count: 83
      }, {
        id: 1,
        title: "已发布标题占位符2",
        time: "2018-5-2",
        detail: "\u4F8B\u5982 bindregionchange \u4E8B\u4EF6\u76F4\u63A5\u5728 dom&nbsp; \n            sadashkjdsajk",
        pay: 1,
        tag: ["占位符1", "占位符2"],
        visit_count: 2
      }, {
        id: 1,
        title: "已发布标题占位符3",
        time: "2019-4-2",
        detail: "\u4F8B\u5982 bindregionchange \u4E8B\u4EF6\u76F4\u63A5\u5728 dom&nbsp; \n            sadashkjdsajk",
        pay: 1,
        tag: ["占位符3", "占位符33", "占位符32"],
        visit_count: 192
      }],
      data2: [{
        id: 1,
        title: "已帮助标题占位符1",
        time: "2019-4-21",
        detail: "\u4F8B\u5982 bindregionchange \u4E8B\u4EF6\u76F4\u63A5\u5728 dom&nbsp; \n            sadashkjdsajk",
        pay: 1,
        tag: ["占位符1", "占位符2"],
        visit_count: 12
      }]
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
                console.log("111");
                // console.log(res.userInfo);
                // set触发对象更新
                // Vue.set(this.account, "name", res.userInfo.nickName);
                // Vue.set(this.account, "avatar", res.userInfo.avatarUrl);
                //用户已经授权过
                console.log("用户已经授权过");
              }
            });
          } else {
            // console.log("用户还未授权过");
            wx.getUserInfo({
              success: function success(res) {
                // console.log(res.userInfo);
                // set触发对象更新
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this.account, "name", res.userInfo.nickName);
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.set(_this.account, "avatar", res.userInfo.avatarUrl);
                console.log("用户还未授权过");
              }
            });
          }
        }
      });
    },
    test: function test() {
      var _this2 = this;

      wx.login({
        success: function success(res) {
          var js_code = res.code;
          if (js_code) {
            console.log("获取用户登录凭证：" + js_code);
            wx.request({
              url: "http://62.234.59.173:80/api/me/login", //后端接口获取openid和session_key
              data: { code: js_code, userName: _this2.account.name },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: function success(res) {
                if (res.statusCode == 200) {
                  // console.log("获取到的openid为：" + res);
                  console.log(res);
                  wx.setStorageSync("openid", res.data.open_id);
                } else {
                  console.log(res.errMsg);
                }
              }
            });
          } else {
            console.log("获取用户登录失败：" + res.errMsg);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 111:
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
    staticClass: "school"
  }, [_vm._v(_vm._s(_vm.account.school))]), _vm._v(" "), _c('span', {
    staticClass: "iconfont icon-iconfontjiantou2 right-icon"
  })], 1), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "bindgetuserinfo": "bindGetUserInfo",
      "eventid": '0'
    },
    on: {
      "click": _vm.getSetting
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.test
    }
  }, [_vm._v("测试")])], 1), _vm._v(" "), _c('div', {
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
  }, [_c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data1), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__content",
    attrs: {
      "hidden": _vm.active_index !== 1
    }
  }, [_c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data2), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '1_' + index
      }
    })], 1)
  }))], 1)])])])
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

},[107]);