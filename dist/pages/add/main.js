require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(23);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a28d1ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(24)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a28d1ad"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a28d1ad_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\add\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a28d1ad", Component.options)
  } else {
    hotAPI.reload("data-v-2a28d1ad", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 24:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_input__ = __webpack_require__(26);
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
    mpToast: __WEBPACK_IMPORTED_MODULE_1_mpvue_weui_src_toast__["a" /* default */],
    mpInput: __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_input__["a" /* default */]
  },
  data: function data() {
    return {
      max_files_len: 3, //最大图片上传数
      pay_arr: [1, 3, 5, 10, 30, 50, 100, 200, 500],
      select_pay_index: -1,
      add_form: {
        title: "",
        description: "",
        files: [],
        tag: [],
        contact: "",
        pay: 0
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },

  methods: {
    chooseImage: function chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: function success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.add_form.files = _this.add_form.files.concat(res.tempFilePaths);
        },
        fail: function fail() {
          // console.log("fail");
        },
        complete: function complete() {
          // console.log("commplete");
        }
      });
    },
    predivImage: function predivImage(e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.add_form.files // 需要预览的图片http链接列表
      });
    },
    deleteImg: function deleteImg(e) {
      Array.prototype.indexOf = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] === val) return i;
        }
        return -1;
      };
      Array.prototype.remove = function (val) {
        var index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      this.add_form.files.remove(e.currentTarget.id);
    },
    handleSelectPay: function handleSelectPay(index) {
      this.select_pay_index = index;
    },
    handlePush: function handlePush() {
      var _this2 = this;

      if (!this.checkForm()) {
        this.toast = {
          toastType: "warn",
          showToast: true,
          content: "请完善输入"
        };
        return;
      }
      var open_id = wx.getStorageSync("openid");
      // console.log(open_id)
      wx.request({
        url: "http://62.234.59.173/pic/uploadImage",
        method: "POST",
        data: {
          title: this.add_form.title,
          content: this.add_form.description,
          price: this.add_form.pay,
          open_id: open_id,
          contact: this.add_form.contact
          // multipartFile: "",
          // itemId: 111
        },
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            if (res.data.msg === "ok") {
              _this2.toast = {
                toastType: "success",
                showToast: true,
                content: "添加成功"
              };
            }
            // console.log(res);
          } else {
              // console.log(res.errMsg);
            }
        }
      });
    },
    checkForm: function checkForm() {
      this.add_form.tag = this.add_form.tag.filter(function (s) {
        return s && s.trim();
      });
      var _add_form = this.add_form,
          title = _add_form.title,
          description = _add_form.description,
          files = _add_form.files,
          tag = _add_form.tag,
          pay = _add_form.pay,
          contact = _add_form.contact;

      if (title !== "" && title.trim() !== "" && description !== "" && description.trim() !== "" && contact !== "" && contact.trim() !== "" && files.length !== 0 && tag.length !== 0 && this.select_pay_index !== -1) {
        return true;
      }
      return false;
    }
  }
});

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_c18f783a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(29);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
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
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_c18f783a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-weui\\src\\input\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c18f783a", Component.options)
  } else {
    hotAPI.reload("data-v-c18f783a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 27:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      inputValue: this.value
    };
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    placeholderStyle: {
      type: String,
      default: ''
    },
    placeholderClass: {
      type: String,
      default: 'placeholder-class'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 140
    },
    cursorSpacing: {
      type: [Number, String],
      default: 0
    },
    focus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: 'done'
    },
    confirmHold: {
      type: Boolean,
      default: false
    },
    adjustPosition: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    input: function input(e) {
      this.inputValue = e.mp.detail.value;
      this.$emit('input', this.inputValue);
    },
    focus: function focus(e) {
      this.$emit('focus', this.inputValue);
    },
    blur: function blur(e) {
      this.$emit('blur', this.inputValue);
    },
    confirm: function confirm(e) {
      this.$emit('confirm', this.inputValue);
    }
  }
});

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    staticClass: "weui-input",
    attrs: {
      "value": _vm.inputValue,
      "type": _vm.type,
      "password": _vm.password,
      "placeholder": _vm.placeholder,
      "placeholder-style": _vm.placeholderStyle,
      "placeholder-class": _vm.placeholderClass,
      "disabled": _vm.disabled,
      "maxlength": _vm.maxlength,
      "cursor-spacing": _vm.cursorSpacing,
      "focus": _vm.focus,
      "confirm-type": _vm.confirmType,
      "confirm-hold": _vm.confirmHold,
      "adjust-position": _vm.adjustPosition,
      "eventid": '0'
    },
    on: {
      "input": _vm.input,
      "focus": _vm.focus,
      "blur": _vm.blur,
      "confirm": _vm.confirm
    }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c18f783a", esExports)
  }
}

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "add-page"
  }, [_c('div', {
    ref: "addForm"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.add_form.title),
      expression: "add_form.title"
    }],
    staticClass: "title",
    attrs: {
      "type": "text",
      "placeholder": "标题",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.add_form.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.add_form.title = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-cells weui-cells_after-title description-box"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.add_form.description),
      expression: "add_form.description"
    }],
    attrs: {
      "placeholder": "请添加具体描述（限120字）",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.add_form.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.add_form.description = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "weui-uploader"
  }, [_c('div', {
    staticClass: "weui-uploader__hd"
  }, [_c('div', {
    staticClass: "weui-uploader__title"
  }, [_vm._v("选择上传")]), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__info"
  }, [_vm._v(_vm._s(_vm.add_form.files.length) + "/" + _vm._s(_vm.max_files_len))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-uploader__bd clearfix"
  }, [_c('div', {
    staticClass: "weui-uploader__files clearfix",
    attrs: {
      "id": "uploaderFiles"
    }
  }, _vm._l((_vm.add_form.files), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "weui-uploader__file"
    }, [_c('image', {
      staticClass: "weui-uploader__img",
      attrs: {
        "src": item,
        "mode": "aspectFill",
        "id": item,
        "eventid": '2_' + index
      },
      on: {
        "click": _vm.predivImage
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "delete-icon",
      attrs: {
        "id": item,
        "eventid": '3_' + index
      },
      on: {
        "click": _vm.deleteImg
      }
    })])])
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.add_form.files.length < _vm.max_files_len),
      expression: "add_form.files.length < max_files_len"
    }],
    staticClass: "weui-uploader__input-box"
  }, [_c('div', {
    staticClass: "weui-uploader__input",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.chooseImage
    }
  })])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('span', {
    staticClass: "iconfont icon-biaoqian tag-icon"
  }), _vm._v(" "), _c('label', {
    staticClass: "tag",
    attrs: {
      "for": "tag"
    }
  }, [_vm._v("标签")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.add_form.tag[0]),
      expression: "add_form.tag[0]"
    }],
    staticClass: "tag-input",
    attrs: {
      "type": "text",
      "placeholder": "主标签（限10字）",
      "maxlength": "10",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.add_form.tag[0])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.add_form.tag, 0, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.add_form.tag[1]),
      expression: "add_form.tag[1]"
    }],
    staticClass: "tag-input",
    attrs: {
      "type": "text",
      "placeholder": "副标签1（限7字）",
      "maxlength": "7",
      "eventid": '6'
    },
    domProps: {
      "value": (_vm.add_form.tag[1])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.add_form.tag, 1, $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.add_form.tag[2]),
      expression: "add_form.tag[2]"
    }],
    staticClass: "tag-input",
    attrs: {
      "type": "text",
      "placeholder": "副标签2（限7字）",
      "maxlength": "7",
      "eventid": '7'
    },
    domProps: {
      "value": (_vm.add_form.tag[2])
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.add_form.tag, 2, $event.target.value)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "box",
    staticStyle: {
      "padding": "10px"
    }
  }, [_c('span', {
    staticClass: "iconfont icon-lianxifangshi contact-icon"
  }), _vm._v(" "), _c('label', {
    staticClass: "contact",
    attrs: {
      "for": "contact"
    }
  }, [_vm._v("联系方式")]), _vm._v(" "), _c('mp-input', {
    attrs: {
      "placeholder": "请输入联系电话",
      "type": "number",
      "maxlength": "11",
      "eventid": '8',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.add_form.contact),
      callback: function($$v) {
        _vm.add_form.contact = $$v
      },
      expression: "add_form.contact"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('span', {
    staticClass: "pay-icon"
  }, [_vm._v("￥")]), _vm._v(" "), _c('label', {
    staticClass: "pay",
    attrs: {
      "for": "pay"
    }
  }, [_vm._v("赏金")]), _vm._v(" "), _c('div', {
    staticClass: "weui-grids pay-box"
  }, _vm._l((_vm.pay_arr), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('div', {
      class: ['weui-grid', index === _vm.select_pay_index ? 'pay_selected' : ''],
      attrs: {
        "hover-class": "weui-grid_active",
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleSelectPay(index)
        }
      }
    }, [_c('div', {
      staticClass: "weui-grid__label pay-title"
    }, [_vm._v(_vm._s(item))]), _vm._v(" "), _c('div', {
      staticClass: "pay-text"
    }, [_vm._v("校园币")])])])
  }))], 1), _vm._v("\n    所需人数sumOfneed\n    需求类型：isNeed\n  ")]), _vm._v(" "), _c('button', {
    staticClass: "push-btn",
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.handlePush
    }
  }, [_vm._v("发布")]), _vm._v(" "), _c('mp-toast', {
    attrs: {
      "type": _vm.toast.toastType,
      "content": _vm.toast.content,
      "eventid": '11',
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
     require("vue-hot-reload-api").rerender("data-v-2a28d1ad", esExports)
  }
}

/***/ })

},[22]);