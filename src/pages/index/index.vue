<template>
  <div class="index-page">
    <!-- 搜索部分 -->
     <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="keyword" :focus="inputShowed" @input="inputTyping" @confirm="handleSearch"/>
            <div class="weui-icon-clear" v-show="keyword.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">请输入搜索内容</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
      <!-- 轮播图部分 -->
      <swiper indicator-dots="true" autoplay="true" circular="true" class="swiper">
        <div v-for="(item, index) in imgUrls" :key="index" class="swiper-img">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
      <!-- 导航栏部分 -->
    <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':active_index == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
            <span class="nav-cut" v-show="index===0">|</span>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="active_index !== 0">
            <!-- 渲染子组件需求列表 -->
              <ul class="list-content">
                <li v-for="(item,index) in data0" :key="index" >
                  <demand-item :data="item"></demand-item>
                </li>
              </ul>
          </div>
          <div class="weui-tab__content" :hidden="active_index !== 1">
             <ul class="list-content">
                <li v-for="(item,index) in data1" :key="index">
                  <demand-item :data="item"></demand-item>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <!-- 添加按钮 -->
      <image src="/static/images/icon/add.png" alt="add" @click="handleAdd" class="add-btn" />
      <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content"></mp-toast>
  </div>
</template>

<script>
import DemandItem from "@/components/demand-item";
import mpToast from "mpvue-weui/src/toast";
export default {
  components: {
    "demand-item": DemandItem
  },
  data() {
    return {
      tabs: ["需求", "人才"],
      active_index: 0,
      inputShowed: false,
      keyword: "",
      data0: [],
      data1: [],
      imgUrls: [
        "/static/images/swiper/1.png",
        "/static/images/swiper/2.png",
        "/static/images/swiper/3.png",
        "/static/images/swiper/4.png"
      ],
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      }
    };
  },
  computed: {
    navbarSliderClass() {
      return "weui-navbar__slider_" + this.active_index;
    }
  },
  methods: {
    //  搜索框
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.keyword = "";
      this.inputShowed = false;
    },
    clearInput() {
      this.keyword = "";
    },
    inputTyping(e) {
      this.keyword = e.mp.detail.value;
    },
    // confirm触发回车搜索
    handleSearch() {
      if (this.keyword && this.keyword.trim()) {
        console.log(this.keyword);
        this.keyword = "";
      } else {
        return false;
      }
    },
    tabClick(e) {
      this.active_index = Number(e.currentTarget.id);
    },
    // 添加需求
    handleAdd() {
      wx.navigateTo({ url: "/pages/add/main" });
    }
  },
  mounted() {
    //  请求数据
    wx.request({
      url: "http://62.234.59.173:80/item/itemlist",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          res.data.map(item => {
            // 需求
            if (item.itemNeed === 0) {
              this.data0.push({
                id: item.itemId,
                title: item.itemTitle,
                time: item.toNow,
                detail: item.itemContent,
                pay: item.itemPrice,
                tag: item.tags,
                visit_count: 123,
                is_need: 0
              });
            } else {
              // 人才
              this.data1.push({
                id: item.itemId,
                title: item.itemTitle,
                time: item.toNow,
                detail: item.itemContent,
                pay: item.itemPrice,
                tag: item.tags,
                visit_count: 123,
                is_need: 1
              });
            }
          });
          // console.log(res.data);
        } else {
          // console.log(res.errMsg);
          this.toast = {
            toastType: "error",
            showToast: true,
            content: "获取数据错误，请重试"
          };
        }
      }
    });
  }
};
</script>

<style scoped lang="scss">
.index-page {
  /* 添加 */
  .add-btn {
    width: 50px;
    height: 50px;
    position: fixed;
    z-index: 100;
    bottom: 10px;
    right: 2%;
  }
  /* 搜索部分 */
  .searchbar-result {
    margin-top: 0;
    font-size: 14px;
  }
  .searchbar-result:before {
    display: none;
  }
  .weui-search-bar__cancel-btn {
    font-size: 16px;
  }

  /* 轮播图 */
  .swiper {
    height: 200px;
  }
  .slide-image {
    width: 100%;
    height: 100%;
  }
  /* 导航栏部分 */
  .weui-tab__content {
    padding-top: 60px;
    text-align: center;
  }
  .weui-navbar__slider_0 {
    left: 40px;
    transform: translateX(0);
  }
  .weui-navbar__slider_1 {
    left: 40px;
    transform: translateX(192px);
  }
  /* nav分割线 */
  .nav-cut {
    color: #4dba8c;
    line-height: 53px;
  }
  /* 需求列表 */
  .list-content {
    margin-top: -50px;
  }
}
</style>
