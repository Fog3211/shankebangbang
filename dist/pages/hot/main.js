require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_demand_item__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
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
    "demand-item": __WEBPACK_IMPORTED_MODULE_0__components_demand_item__["a" /* default */]
  },
  data: function data() {
    return {
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      },
      tag_list: ["寻物启事", "学习互助", "资源共享"],
      hot_list: []
    };
  },

  methods: {
    handleTagCheck: function handleTagCheck(item) {
      var _this = this;

      this.hot_list.map(function (el, index) {
        if (!el.tag.includes(item)) {
          _this.hot_list[index].show = false;
        } else {
          _this.hot_list[index].show = true;
        }
      });
    }
  },
  onShow: function onShow() {
    var _this2 = this;

    wx.request({
      url: "https://wx.api.fog3211.com/item/itemHotlist",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(res) {
        if (res.statusCode == 200) {
          res.data.map(function (item) {
            _this2.hot_list.push({
              id: item.itemId,
              title: item.itemTitle,
              time: item.toNow,
              detail: item.itemContent,
              pay: item.itemPrice,
              tag: item.tags,
              visit_count: item.itemScan,
              is_need: item.itemNeed,
              show: true
            });
          });
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
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hot-page"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "iconfont icon-huo hot-icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("热门话题")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tag-box"
  }, _vm._l((_vm.tag_list), function(item, index) {
    return _c('span', {
      key: index,
      staticClass: "tag",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleTagCheck(item)
        }
      }
    }, [_vm._v("\n      #" + _vm._s(item) + "\n    ")])
  })), _vm._v(" "), _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.hot_list), function(item, index) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.show),
        expression: "item.show"
      }],
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '0_' + index
      }
    })], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52ab4659", esExports)
  }
}

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(98);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52ab4659_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(99)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-52ab4659"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_52ab4659_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\hot\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52ab4659", Component.options)
  } else {
    hotAPI.reload("data-v-52ab4659", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[97]);