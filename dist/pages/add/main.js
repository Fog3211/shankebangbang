require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(38);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_524c43b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(39)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-524c43b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_524c43b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-524c43b9", Component.options)
  } else {
    hotAPI.reload("data-v-524c43b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_input__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mpvue_weui_src_toast__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_src_picker__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mpvue_weui_src_switch__ = __webpack_require__(49);
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
    mpInput: __WEBPACK_IMPORTED_MODULE_0_mpvue_weui_src_input__["a" /* default */],
    mpPicker: __WEBPACK_IMPORTED_MODULE_2_mpvue_weui_src_picker__["a" /* default */],
    mpSwitch: __WEBPACK_IMPORTED_MODULE_3_mpvue_weui_src_switch__["a" /* default */]
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
        pics: [],
        tag: [],
        contact: "",
        switchValue: false
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      },
      pickerValueArray: [{
        label: "寻物启事",
        value: "寻物启事"
      }, {
        label: "社交活动",
        value: "社交活动"
      }, {
        label: "资源共享",
        value: "资源共享"
      }, {
        label: "学习互助",
        value: "学习互助"
      }, {
        label: "心得交流",
        value: "心得交流"
      }, {
        label: "竞赛组队",
        value: "竞赛组队"
      }, {
        label: "其他",
        value: "其他"
      }]
    };
  },

  methods: {
    chooseImage: function chooseImage(e) {
      var _this = this;
      wx.chooseImage({
        count: 3, // 默认9
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
    switchChange: function switchChange() {
      this.add_form.switchValue = !this.add_form.switchValue;
    },
    handlePush: function handlePush() {
      var _this2 = this;

      if (!this.checkForm()) {
        return;
      }
      var open_id = wx.getStorageSync("open_id");

      this.upLoadImg();

      wx.request({
        url: "http://62.234.59.173/item",
        method: "POST",
        data: {
          title: this.add_form.title,
          content: this.add_form.description,
          price: this.pay_arr[this.select_pay_index],
          open_id: open_id,
          contact: this.add_form.contact,
          sumOfneed: 1,
          isNeed: this.add_form.switchValue === false ? 0 : 1,
          tag1: this.add_form.tag[0],
          tag2: this.add_form.tag[1] || "",
          tag3: this.add_form.tag[2] || "",
          pics: this.add_form.pics
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            if (res.data.err === "ok") {
              _this2.toast = {
                toastType: "success",
                showToast: true,
                content: "添加成功"
              };

              // 清空表单
              _this2.select_pay_index = -1;
              _this2.add_form = {
                title: "",
                description: "",
                files: [],
                tag: [],
                contact: ""
              };
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                });
              }, 1000);
            }
            // console.log(res);
          } else {
              // console.log(res.errMsg);
            }
        }
      });
    },
    upLoadImg: function upLoadImg() {
      var _this3 = this;

      for (var i = 0; i < this.add_form.files.length; i++) {
        wx.uploadFile({
          url: "https://sm.ms/api/upload",
          filePath: this.add_form.files[i],
          name: "smfile",
          success: function success(res) {
            console.log("图片上传成功！");
            _this3.add_form.pics.push(JSON.parse(res.data).data.url);
          },
          complete: function complete() {
            console.log("图片上传！");
          }
        });
      }
    },
    checkForm: function checkForm() {
      var open_id = wx.getStorageSync("open_id");
      if (!open_id) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请先登录"
        };
        return;
      }

      var _add_form = this.add_form,
          title = _add_form.title,
          description = _add_form.description,
          files = _add_form.files,
          tag = _add_form.tag,
          contact = _add_form.contact;

      if (title === "" || title.trim() === "") {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "标题不能为空"
        };
        return false;
      } else if (description === "" || description.trim() === "") {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "具体描述不能为空"
        };
        return false;
      } else if (tag.length === 0) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请至少添加一个标签"
        };
        return false;
      } else if (this.select_pay_index === -1) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请选择合适的报酬"
        };
        return false;
      } else if (!/^1[34578]\d{9}$/.test(contact)) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请输入正确的手机号"
        };
        return false;
      } else {
        return true;
      }
    },
    delTag: function delTag(index) {
      this.add_form.tag.splice(index, 1);
    },
    addTag: function addTag() {
      this.$refs.mpPicker.show();
    },
    onConfirm: function onConfirm(e) {
      // console.log(e);
      if (this.add_form.tag.includes(e.label)) {
        return;
      }
      this.add_form.tag.push(e.label);
    }
  }
});

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_0c5a37ef_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(44);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
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
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_0c5a37ef_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
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
    hotAPI.createRecord("data-v-0c5a37ef", Component.options)
  } else {
    hotAPI.reload("data-v-0c5a37ef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
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

/***/ 44:
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
     require("vue-hot-reload-api").rerender("data-v-0c5a37ef", esExports)
  }
}

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_232319df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(48);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(46)
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
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_232319df_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-weui\\src\\picker\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232319df", Component.options)
  } else {
    hotAPI.reload("data-v-232319df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 46:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 47:
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
  data: function data() {
    return {
      showPicker: false,
      pickerChangeValue: [],
      pickerValue: [],
      pickerValueArrayChange: true,
      modeChange: false,
      pickerValueSingleArray: [],
      pickerValueHour: [],
      pickerValueMinute: [],
      pickerValueMulArray: [],
      pickerValueMulTwoOne: [],
      pickerValueMulTwoTwo: [],
      pickerValueMulThreeOne: [],
      pickerValueMulThreeTwo: [],
      pickerValueMulThreeThree: []
    };
  },

  props: {
    /* mode */
    mode: {
      type: String,
      default: 'selector'
    },
    /* picker 数值 */
    pickerValueArray: {
      type: Array,
      default: []
    },
    /* 默认值 */
    pickerValueDefault: {
      type: Array,
      default: []
    },
    /* 几级联动 */
    deepLength: {
      type: Number,
      default: 2
    }
  },
  watch: {
    pickerValueArray: function pickerValueArray(oldVal, newVal) {
      this.pickerValueArrayChange = true;
    },
    mode: function mode(oldVal, newVal) {
      this.modeChange = true;
    }
  },
  methods: {
    initPicker: function initPicker(valueArray) {
      var pickerValueArray = valueArray;
      this.pickerValue = this.pickerValueDefault;
      // 初始化多级联动
      if (this.mode === 'selector') {
        this.pickerValueSingleArray = valueArray;
      } else if (this.mode === 'timeSelector') {
        this.modeChange = false;
        var hourArray = [];
        var minuteArray = [];
        for (var i = 0; i < 24; i++) {
          hourArray.push({
            value: i,
            label: i > 9 ? i + ' \u65F6' : '0' + i + ' \u65F6'
          });
        }
        for (var _i = 0; _i < 60; _i++) {
          minuteArray.push({
            value: _i,
            label: _i > 9 ? _i + ' \u5206' : '0' + _i + ' \u5206'
          });
        }
        this.pickerValueHour = hourArray;
        this.pickerValueMinute = minuteArray;
      } else if (this.mode === 'multiSelector') {
        this.pickerValueMulArray = valueArray;
      } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 2) {
        // 两级联动
        var pickerValueMulTwoOne = [];
        var pickerValueMulTwoTwo = [];
        // 第一列
        for (var _i2 = 0, length = pickerValueArray.length; _i2 < length; _i2++) {
          pickerValueMulTwoOne.push(pickerValueArray[_i2]);
        }
        // 渲染第二列
        // 如果有设定的默认值
        if (this.pickerValueDefault.length === 2) {
          var num = this.pickerValueDefault[0];
          for (var _i3 = 0, _length = pickerValueArray[num].children.length; _i3 < _length; _i3++) {
            pickerValueMulTwoTwo.push(pickerValueArray[num].children[_i3]);
          }
        } else {
          for (var _i4 = 0, _length2 = pickerValueArray[0].children.length; _i4 < _length2; _i4++) {
            pickerValueMulTwoTwo.push(pickerValueArray[0].children[_i4]);
          }
        }
        this.pickerValueMulTwoOne = pickerValueMulTwoOne;
        this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
      } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 3) {
        var pickerValueMulThreeOne = [];
        var pickerValueMulThreeTwo = [];
        var pickerValueMulThreeThree = [];
        // 第一列
        for (var _i5 = 0, _length3 = pickerValueArray.length; _i5 < _length3; _i5++) {
          pickerValueMulThreeOne.push(pickerValueArray[_i5]);
        }
        // 渲染第二列
        this.pickerValueDefault = this.pickerValueDefault.length === 3 ? this.pickerValueDefault : [0, 0, 0];
        if (this.pickerValueDefault.length === 3) {
          var _num = this.pickerValueDefault[0];
          for (var _i6 = 0, _length4 = pickerValueArray[_num].children.length; _i6 < _length4; _i6++) {
            pickerValueMulThreeTwo.push(pickerValueArray[_num].children[_i6]);
          }
          // 第三列
          var numSecond = this.pickerValueDefault[1];
          for (var _i7 = 0, _length5 = pickerValueArray[_num].children[numSecond].children.length; _i7 < _length5; _i7++) {
            pickerValueMulThreeThree.push(pickerValueArray[_num].children[numSecond].children[_i7]);
          }
        }
        this.pickerValueMulThreeOne = pickerValueMulThreeOne;
        this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
        this.pickerValueMulThreeThree = pickerValueMulThreeThree;
      }
    },
    show: function show() {
      var _this = this;

      setTimeout(function () {
        if (_this.pickerValueArrayChange || _this.modeChange) {
          _this.initPicker(_this.pickerValueArray);
          _this.showPicker = true;
          _this.pickerValueArrayChange = false;
          _this.modeChange = false;
        } else {
          _this.showPicker = true;
        }
      }, 0);
    },
    maskClick: function maskClick() {
      this.pickerCancel();
    },
    pickerCancel: function pickerCancel() {
      this.showPicker = false;
      this._initPickerVale();
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
      };
      this.$emit('onCancel', pickObj);
    },
    pickerConfirm: function pickerConfirm(e) {
      this.showPicker = false;
      this._initPickerVale();
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
      };
      this.$emit('onConfirm', pickObj);
    },
    showPickerView: function showPickerView() {
      this.showPicker = true;
    },
    pickerChange: function pickerChange(e) {
      this.pickerValue = e.mp.detail.value;
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
      };
      this.$emit('onChange', pickObj);
    },
    pickerChangeMul: function pickerChangeMul(e) {
      if (this.deepLength === 2) {
        var pickerValueArray = this.pickerValueArray;
        var changeValue = e.mp.detail.value;
        // 处理第一列滚动
        if (changeValue[0] !== this.pickerValue[0]) {
          var pickerValueMulTwoTwo = [];
          // 第一列滚动第二列数据更新
          for (var i = 0, length = pickerValueArray[changeValue[0]].children.length; i < length; i++) {
            pickerValueMulTwoTwo.push(pickerValueArray[changeValue[0]].children[i]);
          }
          this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
          // 第二列初始化为 0
          changeValue[1] = 0;
        }
        this.pickerValue = changeValue;
      } else if (this.deepLength === 3) {
        var _pickerValueArray = this.pickerValueArray;
        var _changeValue = e.mp.detail.value;
        var pickerValueMulThreeTwo = [];
        var pickerValueMulThreeThree = [];
        // 重新渲染第二列
        // 如果是第一列滚动
        if (_changeValue[0] !== this.pickerValue[0]) {
          this.pickerValueMulThreeTwo = [];
          for (var _i8 = 0, _length6 = _pickerValueArray[_changeValue[0]].children.length; _i8 < _length6; _i8++) {
            pickerValueMulThreeTwo.push(_pickerValueArray[_changeValue[0]].children[_i8]);
          }
          // 重新渲染第三列
          for (var _i9 = 0, _length7 = _pickerValueArray[_changeValue[0]].children[0].children.length; _i9 < _length7; _i9++) {
            pickerValueMulThreeThree.push(_pickerValueArray[_changeValue[0]].children[0].children[_i9]);
          }
          _changeValue[1] = 0;
          _changeValue[2] = 0;
          this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
          this.pickerValueMulThreeThree = pickerValueMulThreeThree;
        } else if (_changeValue[1] !== this.pickerValue[1]) {
          // 第二列滚动
          // 重新渲染第三列
          this.pickerValueMulThreeThree = [];
          pickerValueMulThreeTwo = this.pickerValueMulThreeTwo;
          for (var _i10 = 0, _length8 = _pickerValueArray[_changeValue[0]].children[_changeValue[1]].children.length; _i10 < _length8; _i10++) {
            pickerValueMulThreeThree.push(_pickerValueArray[_changeValue[0]].children[_changeValue[1]].children[_i10]);
          }
          _changeValue[2] = 0;
          this.pickerValueMulThreeThree = pickerValueMulThreeThree;
        }
        this.pickerValue = _changeValue;
      }
      var pickObj = {
        index: this.pickerValue,
        value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
        label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
      };
      this.$emit('onChange', pickObj);
    },

    // 获取 pxikerLabel
    _getPickerLabelAndValue: function _getPickerLabelAndValue(value, mode) {
      var pickerLable = void 0;
      var pickerGetValue = [];
      // selector
      if (mode === 'selector') {
        pickerLable = this.pickerValueSingleArray[value].label;
        pickerGetValue.push(this.pickerValueSingleArray[value].value);
      } else if (mode === 'timeSelector') {
        pickerLable = this.pickerValueHour[value[0]].label + '-' + this.pickerValueMinute[value[1]].label;
        pickerGetValue.push(this.pickerValueHour[value[0]].value);
        pickerGetValue.push(this.pickerValueMinute[value[1]].value);
      } else if (mode === 'multiSelector') {
        for (var i = 0; i < value.length; i++) {
          if (i > 0) {
            pickerLable += this.pickerValueMulArray[i][value[i]].label + (i === value.length - 1 ? '' : '-');
          } else {
            pickerLable = this.pickerValueMulArray[i][value[i]].label + '-';
          }
          pickerGetValue.push(this.pickerValueMulArray[i][value[i]].value);
        }
      } else if (mode === 'multiLinkageSelector') {
        /* eslint-disable indent */
        pickerLable = this.deepLength === 2 ? this.pickerValueMulTwoOne[value[0]].label + '-' + this.pickerValueMulTwoTwo[value[1]].label : this.pickerValueMulThreeOne[value[0]].label + '-' + this.pickerValueMulThreeTwo[value[1]].label + '-' + this.pickerValueMulThreeThree[value[2]].label;
        if (this.deepLength === 2) {
          pickerGetValue.push(this.pickerValueMulTwoOne[value[0]].value);
          pickerGetValue.push(this.pickerValueMulTwoTwo[value[1]].value);
        } else {
          pickerGetValue.push(this.pickerValueMulThreeOne[value[0]].value);
          pickerGetValue.push(this.pickerValueMulThreeTwo[value[1]].value);
          pickerGetValue.push(this.pickerValueMulThreeThree[value[2]].value);
        }
        /* eslint-enable indent */
      }
      return {
        label: pickerLable,
        value: pickerGetValue
      };
    },

    // 初始化 pickerValue 默认值
    _initPickerVale: function _initPickerVale() {
      if (this.pickerValue.length === 0) {
        if (this.mode === 'selector') {
          this.pickerValue = [0];
        } else if (this.mode === 'multiSelector') {
          this.pickerValue = new Int8Array(this.pickerValueArray.length);
        } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 2) {
          this.pickerValue = [0, 0];
        } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 3) {
          this.pickerValue = [0, 0, 0];
        }
      }
    }
  }
});

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mpvue-picker"
  }, [_c('div', {
    class: {
      'pickerMask': _vm.showPicker
    },
    attrs: {
      "catchtouchmove": "true",
      "eventid": '0'
    },
    on: {
      "click": _vm.maskClick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "mpvue-picker-content ",
    class: {
      'mpvue-picker-view-show': _vm.showPicker
    }
  }, [_c('div', {
    staticClass: "mpvue-picker__hd"
  }, [_c('div', {
    staticClass: "mpvue-picker__action",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.pickerCancel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "mpvue-picker__action",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.pickerConfirm
    }
  }, [_vm._v("确定")])]), _vm._v(" "), (_vm.mode === 'selector' && _vm.pickerValueSingleArray.length > 0) ? _c('picker-view', {
    staticClass: "mpvue-picker-view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '3'
    },
    on: {
      "change": _vm.pickerChange
    }
  }, [_c('block', [_c('picker-view-column', {
    attrs: {
      "mpcomid": '0'
    }
  }, _vm._l((_vm.pickerValueSingleArray), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  }))], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.mode === 'timeSelector') ? _c('picker-view', {
    staticClass: "mpvue-picker-view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '4'
    },
    on: {
      "change": _vm.pickerChange
    }
  }, [_c('block', [_c('picker-view-column', {
    attrs: {
      "mpcomid": '1'
    }
  }, _vm._l((_vm.pickerValueHour), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('picker-view-column', {
    attrs: {
      "mpcomid": '2'
    }
  }, _vm._l((_vm.pickerValueMinute), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  }))], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.mode === 'multiSelector') ? _c('picker-view', {
    staticClass: "mpvue-picker-view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '5'
    },
    on: {
      "change": _vm.pickerChange
    }
  }, _vm._l((_vm.pickerValueMulArray.length), function(n, index) {
    return _c('block', {
      key: index
    }, [_c('picker-view-column', {
      attrs: {
        "mpcomid": '3_' + index
      }
    }, _vm._l((_vm.pickerValueMulArray[n]), function(item, index1) {
      return _c('div', {
        key: index1,
        staticClass: "picker-item"
      }, [_vm._v(_vm._s(item.label))])
    }))], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.mode === 'multiLinkageSelector' && _vm.deepLength === 2) ? _c('picker-view', {
    staticClass: "mpvue-picker-view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '6'
    },
    on: {
      "change": _vm.pickerChangeMul
    }
  }, [_c('block', [_c('picker-view-column', {
    attrs: {
      "mpcomid": '4'
    }
  }, _vm._l((_vm.pickerValueMulTwoOne), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('picker-view-column', {
    attrs: {
      "mpcomid": '5'
    }
  }, _vm._l((_vm.pickerValueMulTwoTwo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  }))], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.mode === 'multiLinkageSelector' && _vm.deepLength === 3) ? _c('picker-view', {
    staticClass: "mpvue-picker-view",
    attrs: {
      "indicator-style": "height: 40px;",
      "value": _vm.pickerValue,
      "eventid": '7'
    },
    on: {
      "change": _vm.pickerChangeMul
    }
  }, [_c('block', [_c('picker-view-column', {
    attrs: {
      "mpcomid": '6'
    }
  }, _vm._l((_vm.pickerValueMulThreeOne), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('picker-view-column', {
    attrs: {
      "mpcomid": '7'
    }
  }, _vm._l((_vm.pickerValueMulThreeTwo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  })), _vm._v(" "), _c('picker-view-column', {
    attrs: {
      "mpcomid": '8'
    }
  }, _vm._l((_vm.pickerValueMulThreeThree), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "picker-item"
    }, [_vm._v(_vm._s(item.label))])
  }))], 1)], 1) : _vm._e()], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-232319df", esExports)
  }
}

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_7f543105_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(50)
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
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_7f543105_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-weui\\src\\switch\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f543105", Component.options)
  } else {
    hotAPI.reload("data-v-7f543105", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      switchValue: this.value
    };
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  methods: {
    change: function change(e) {
      this.switchValue = e.mp.detail.value;
      this.$emit('input', this.switchValue);
      this.$emit('change', this.switchValue);
    }
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-switch-content"
  }, [_c('switch', {
    attrs: {
      "checked": _vm.switchValue,
      "disabled": _vm.disabled,
      "color": _vm.color,
      "eventid": '0'
    },
    on: {
      "change": _vm.change
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f543105", esExports)
  }
}

/***/ }),

/***/ 53:
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
    staticClass: "box tag-box"
  }, [_c('div', {
    staticClass: "icon-box"
  }, [_c('span', {
    staticClass: "iconfont icon-biaoqian tag-icon"
  }), _vm._v(" "), _c('label', {
    staticClass: "tag",
    attrs: {
      "for": "tag"
    }
  }, [_vm._v("标签")])], 1), _vm._v(" "), _c('ul', {
    staticClass: "tag-group"
  }, _vm._l((_vm.add_form.tag), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "tag-item",
      attrs: {
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.delTag(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('Button', {
    staticClass: "add-tag-btn",
    attrs: {
      "disabled": _vm.add_form.tag.length >= 3,
      "eventid": '6',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.addTag
    }
  }, [_vm._v("添加标签")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box type-box"
  }, [_c('div', {
    staticClass: "icon-box"
  }, [_c('span', {
    staticClass: "iconfont icon-leixing type-icon"
  }), _vm._v(" "), _c('label', {
    staticClass: "type",
    attrs: {
      "for": "type"
    }
  }, [_vm._v("类型")])], 1), _vm._v(" "), _c('div', {
    staticClass: "type-info-box"
  }, [_c('span', {
    staticClass: "type-info"
  }, [_vm._v(_vm._s(_vm.add_form.switchValue === false ? "我能帮人" : "找人帮我"))]), _vm._v(" "), _c('div', {
    staticClass: "switch-box"
  }, [_c('mp-switch', {
    attrs: {
      "eventid": '7',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.switchChange
    }
  })], 1)])]), _vm._v(" "), _c('div', {
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
      "placeholder": "请输入11位手机号",
      "type": "number",
      "maxlength": "11",
      "eventid": '8',
      "mpcomid": '2'
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
  }))], 1)]), _vm._v(" "), _c('Button', {
    staticClass: "push-btn",
    attrs: {
      "eventid": '10',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.handlePush
    }
  }, [_vm._v("发布")]), _vm._v(" "), _c('mp-toast', {
    attrs: {
      "type": _vm.toast.toastType,
      "content": _vm.toast.content,
      "eventid": '11',
      "mpcomid": '4'
    },
    model: {
      value: (_vm.toast.showToast),
      callback: function($$v) {
        _vm.toast.showToast = $$v
      },
      expression: "toast.showToast"
    }
  }), _vm._v(" "), _c('mp-picker', {
    ref: "mpPicker",
    attrs: {
      "pickerValueArray": _vm.pickerValueArray,
      "eventid": '12',
      "mpcomid": '5'
    },
    on: {
      "onConfirm": _vm.onConfirm,
      "onCancel": _vm.onCancel
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
     require("vue-hot-reload-api").rerender("data-v-524c43b9", esExports)
  }
}

/***/ })

},[37]);