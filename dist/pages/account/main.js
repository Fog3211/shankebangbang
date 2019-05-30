require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(29);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07c263b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(35);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(30)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07c263b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07c263b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\account\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07c263b9", Component.options)
  } else {
    hotAPI.reload("data-v-07c263b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 30:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_toast__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
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
      account: {
        userName: "",
        address: "",
        money: 0,
        phone: "",
        qq: ""
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },

  methods: {
    getAccount: function getAccount() {
      var _this = this;

      var open_id = wx.getStorageSync("open_id");
      wx.request({
        url: "https://62.234.59.173/api/getUserByOpenId/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            // console.log(res.data);
            var item = res.data;
            _this.account = {
              userName: item.userName,
              address: "",
              phone: item.userPhone,
              money: item.campusMoney,
              qq: item.userQq
            };
          } else {
            // console.log(res.errMsg);
            _this.toast = {
              toastType: "error",
              showToast: true,
              content: "出错了，请重试"
            };
          }
        }
      });
    },
    handleSubmit: function handleSubmit() {
      if (this.checkInput()) {
        console.log("账户信息修改");
      }
    },
    checkInput: function checkInput() {
      var _account = this.account,
          address = _account.address,
          phone = _account.phone,
          qq = _account.qq;

      if (address === "" || address.trim() === "") {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请检查输入的地址"
        };
        return false;
      } else if (!/^1[34578]\d{9}$/.test(phone)) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请检查输入的手机号"
        };
        return false;
      } else if (qq === "" || qq.trim() === "" || qq.trim().length < 4) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请检查输入的QQ号"
        };
        return false;
      } else {
        return true;
      }
    }
  },
  onShow: function onShow() {
    var open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getAccount();
    }
  }
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "account-page"
  }, [_c('li', {
    staticClass: "account-item"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont icon-xingming"
  }), _vm._v("用户名")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.account.userName),
      expression: "account.userName"
    }],
    attrs: {
      "disabled": "true",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.account.userName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.account.userName = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "account-item"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont icon-diqu"
  }), _vm._v("所在地区")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.account.address),
      expression: "account.address"
    }],
    attrs: {
      "placeholder": "请输入所在地区",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.account.address)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.account.address = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "account-item"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont icon-qian"
  }), _vm._v("校园币")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.account.money),
      expression: "account.money"
    }],
    attrs: {
      "disabled": "true",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.account.money)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.account.money = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "account-item"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont icon-shouji"
  }), _vm._v("手机号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.account.phone),
      expression: "account.phone"
    }],
    attrs: {
      "placeholder": "请输入手机号",
      "type": "number",
      "maxlength": "11",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.account.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.account.phone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "account-item"
  }, [_c('p', [_c('span', {
    staticClass: "iconfont icon-qq"
  }), _vm._v("QQ号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.account.qq),
      expression: "account.qq"
    }],
    attrs: {
      "placeholder": "请输入QQ号",
      "type": "number",
      "maxlength": "11",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.account.qq)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.account.qq = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('li', {
    staticClass: "btn-box"
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "eventid": '5',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("修改账户信息")])], 1), _vm._v(" "), _c('mp-toast', {
    attrs: {
      "type": _vm.toast.toastType,
      "content": _vm.toast.content,
      "eventid": '6',
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-07c263b9", esExports)
  }
}

/***/ })

},[28]);