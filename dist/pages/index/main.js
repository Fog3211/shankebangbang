require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 100:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "empty-list": __WEBPACK_IMPORTED_MODULE_1__components_empty_list__["a" /* default */]
  },
  data: function data() {
    return {
      tabs: ["需求", "人才"],
      active_index: 0,
      inputShowed: false,
      keyword: "",
      data_need: [],
      data_talent: [],
      imgUrls: ["/static/images/swiper/1.png", "/static/images/swiper/2.png", "/static/images/swiper/3.png", "/static/images/swiper/4.png"],
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      }
    };
  },

  computed: {
    navbarSliderClass: function navbarSliderClass() {
      return "weui-navbar__slider_" + this.active_index;
    }
  },
  methods: {
    //  搜索框
    showInput: function showInput() {
      this.inputShowed = true;
    },
    hideInput: function hideInput() {
      this.keyword = "";
      this.inputShowed = false;
    },
    clearInput: function clearInput() {
      this.keyword = "";
    },
    inputTyping: function inputTyping(e) {
      this.keyword = e.mp.detail.value;
    },

    // confirm触发回车搜索
    handleSearch: function handleSearch() {
      // console.log(this.keyword);
      if (this.keyword && this.keyword.trim()) {
        this.getAllItem("http://62.234.59.173/search/byKeyWord/" + this.keyword);
        this.keyword = "";
      } else {
        this.getAllItem("http://62.234.59.173/item/itemlist");
      }
    },
    tabClick: function tabClick(e) {
      this.active_index = Number(e.currentTarget.id);
    },

    // 添加需求
    handleAdd: function handleAdd() {
      wx.navigateTo({
        url: "/pages/add/main"
      });
    },
    getAllItem: function getAllItem(url) {
      var _this = this;

      this.data_need = [];
      this.data_talent = [];
      wx.request({
        url: url,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: function success(res) {
          if (res.statusCode == 200) {
            res.data.map(function (item) {
              // 需求
              if (item.itemNeed === 0) {
                _this.data_need.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: Object(__WEBPACK_IMPORTED_MODULE_3__utils_checkTime__["a" /* checkDate */])(item.toNow),
                  detail: item.itemContent,
                  pay: item.itemPrice,
                  tag: item.tags,
                  visit_count: item.itemScan,
                  contact: item.itemContact,
                  is_need: 0
                });
              } else {
                // 人才
                _this.data_talent.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: Object(__WEBPACK_IMPORTED_MODULE_3__utils_checkTime__["a" /* checkDate */])(item.toNow),
                  detail: item.itemContent,
                  pay: item.itemPrice,
                  tag: item.tags,
                  visit_count: item.itemScan,
                  is_need: 1
                });
              }
            });
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
  },
  mounted: function mounted() {
    this.getAllItem("http://62.234.59.173/item/itemlist");
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index-page"
  }, [_c('div', {
    staticClass: "weui-search-bar"
  }, [_c('div', {
    staticClass: "weui-search-bar__form"
  }, [_c('div', {
    staticClass: "weui-search-bar__box"
  }, [_c('icon', {
    staticClass: "weui-icon-search_in-box",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    staticClass: "weui-search-bar__input",
    attrs: {
      "type": "text",
      "placeholder": "搜索",
      "focus": _vm.inputShowed,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }, _vm.inputTyping],
      "confirm": _vm.handleSearch
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.keyword.length > 0),
      expression: "keyword.length > 0"
    }],
    staticClass: "weui-icon-clear",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }, [_c('icon', {
    attrs: {
      "type": "clear",
      "size": "14"
    }
  })], 1)], 1), _vm._v(" "), _c('label', {
    staticClass: "weui-search-bar__label",
    attrs: {
      "hidden": _vm.inputShowed,
      "eventid": '2'
    },
    on: {
      "click": _vm.showInput
    }
  }, [_c('icon', {
    staticClass: "weui-icon-search",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__text"
  }, [_vm._v("请输入搜索内容")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-search-bar__cancel-btn",
    attrs: {
      "hidden": !_vm.inputShowed,
      "eventid": '3'
    },
    on: {
      "click": _vm.hideInput
    }
  }, [_vm._v("取消")])]), _vm._v(" "), _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": "true",
      "autoplay": "true",
      "circular": "true"
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-img"
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item
      }
    })])], 1)
  })), _vm._v(" "), _c('div', {
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
        "eventid": '4_' + index
      },
      on: {
        "click": _vm.tabClick
      }
    }, [_c('div', {
      staticClass: "weui-navbar__title"
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
  }, [(_vm.data_need.length !== 0) ? _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data_need), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '1_' + index
      }
    })], 1)
  })) : _c('empty-list', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-tab__content",
    attrs: {
      "hidden": _vm.active_index !== 1
    }
  }, [(_vm.data_talent.length !== 0) ? _c('ul', {
    staticClass: "list-content"
  }, _vm._l((_vm.data_talent), function(item, index) {
    return _c('li', {
      key: index
    }, [_c('demand-item', {
      attrs: {
        "data": item,
        "mpcomid": '3_' + index
      }
    })], 1)
  })) : _c('empty-list', {
    attrs: {
      "mpcomid": '4'
    }
  })], 1)])]), _vm._v(" "), _c('image', {
    staticClass: "add-btn",
    attrs: {
      "src": "/static/images/icon/add.png",
      "alt": "add",
      "eventid": '5'
    },
    on: {
      "click": _vm.handleAdd
    }
  }), _vm._v(" "), _c('mp-toast', {
    attrs: {
      "type": _vm.toast.toastType,
      "content": _vm.toast.content,
      "eventid": '6',
      "mpcomid": '5'
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
     require("vue-hot-reload-api").rerender("data-v-30b09f44", esExports)
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



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30b09f44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
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
var __vue_scopeId__ = "data-v-30b09f44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_30b09f44_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30b09f44", Component.options)
  } else {
    hotAPI.reload("data-v-30b09f44", Component.options)
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