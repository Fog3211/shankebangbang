<template>
  <div class="mine-page">
    <div class="header">
      <img :src="account.avatar" alt="avatar" class="avatar">
      <div class="account-box">
        <p class="name">{{account.name}}</span>
        <p class="is-login">{{account.is_login}}</p>
        <span class="iconfont icon-iconfontjiantou2 right-icon" @click="changeAccount" v-if="!login_btn_show"></span>
      </div>
        <button type="primary" open-type="getUserInfo"
        @getuserinfo="bindGetUserInfo" @click="editionCheck" v-if="login_btn_show" class="login-btn">登录</button>
    </div>
    <div class="weui-tab">
      <div class="weui-navbar">
        <block v-for="(item,index) in tabs" :key="index">
          <div :id="index" :class="{'weui-bar__item_on':active_index == index}" class="weui-navbar__item" @click="tabClick">
            <div class="weui-navbar__title nav-title">{{item}}</div>
          </div>
          <span class="nav-cut" v-show="index===0">|</span>
        </block>
        <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
      </div>
      <div class="weui-tab__panel">
        <div class="weui-tab__content" :hidden="active_index !== 0">
            <ul class="list-content" v-if="data_push.length!==0">
              <li v-for="(item,index) in data_push" :key="index" >
                <demand-item :data="item"></demand-item>
              </li>
            </ul>
            <empty-list v-else></empty-list>
        </div>
        <div class="weui-tab__content" :hidden="active_index !== 1">
            <ul class="list-content" v-if="data_help.length!==0">
              <li v-for="(item,index) in data_help" :key="index">
                <demand-item :data="item"></demand-item>
              </li>
            </ul>
            <empty-list v-else></empty-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DemandItem from "@/components/demand-item";
import EmptyList from "@/components/empty-list";
import mpToast from "mpvue-weui/src/toast";
import { checkDate } from "@/utils/checkTime";
export default {
  components: {
    "demand-item": DemandItem,
    "empty-list": EmptyList,
    mpToast
  },
  data() {
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
    navbarSliderClass() {
      return "weui-navbar__slider_" + this.active_index;
    }
  },
  methods: {
    tabClick(e) {
      this.active_index = Number(e.currentTarget.id);
    },
    getSetting() {
      wx.getSetting({
        success: res => {
          if (res.authSetting["scope.userInfo"]) {
            wx.getUserInfo({
              success: res => {
                // console.log(res.userInfo);
                // 已授权获取头像
                this.account = {
                  name: res.userInfo.nickName,
                  avatar: res.userInfo.avatarUrl,
                  is_login: "已登录"
                };
                // 隐藏登录按钮
                this.login_btn_show = false;
                this.getOpenId();
              }
            });
          } else {
            // 未授权
            this.login_btn_show = true;
          }
        }
      });
    },
    editionCheck() {
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
    getOpenId() {
      wx.login({
        success: res => {
          const js_code = res.code;
          if (js_code) {
            // console.log("获取用户登录凭证：" + js_code);
            wx.request({
              url: "http://62.234.59.173:/api/me/login",
              data: { code: js_code, userName: this.account.name },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: res => {
                if (res.statusCode == 200) {
                  // console.log("获取到的openid为：" + res);
                  wx.setStorageSync("open_id", res.data.open_id);
                  this.getAllItemList();
                } else {
                  // console.log(res.errMsg);
                }
              }
            });
          } else {
            // console.log("获取用户登录失败：" + res.errMsg);
            this.toast = {
              toastType: "error",
              showToast: true,
              content: "登录失败，请重试"
            };
          }
        }
      });
    },
    bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData) {
        //用户按了允许授权按钮
        this.getSetting();
      } else {
        //用户按了拒绝按钮
        return;
      }
    },
    changeAccount() {
      const open_id = wx.getStorageSync("open_id");
      wx.navigateTo({ url: "/pages/account?open_id=" + open_id });
    },
    getAllItemList() {
      const open_id = wx.getStorageSync("open_id");
      this.data_push = [];
      this.data_help = [];
      this.getItemList(
        "http://62.234.59.173/myHistory/getHelpedList/" + open_id
      );
      this.getItemList(
        "https://62.234.59.173/myHistory/getReleasedList/" + open_id
      );
    },
    getItemList(url) {
      wx.request({
        url: url,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            // console.log(res.data);
            // 已发布
            if (url.includes("getReleasedList")) {
              res.data.map(item => {
                this.data_push.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: checkDate(item.itemTime),
                  detail: item.itemContent,
                  pay: item.itemPrice,
                  tag: item.tags,
                  visit_count: item.itemScan,
                  contact: item.itemContact
                });
              });
            } else {
              // 已帮助
              res.data.map(item => {
                this.data_help.push({
                  id: item.itemId,
                  title: item.itemTitle,
                  time: checkDate(item.itemTime),
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
            this.toast = {
              toastType: "error",
              showToast: true,
              content: "获取数据错误，请重试"
            };
          }
        }
      });
    }
  },
  mounted() {
    this.getSetting();
    const open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getAllItemList();
    }
  }
};
</script>

<style scoped lang="scss">
.mine-page {
  .header {
    position: relative;
    padding: 10px;
    border: 1px solid #d9d9d9;
    display: flex;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 0 10px;
      vertical-align: middle;
    }
    .account-box {
      padding-top: 15px;
      .name {
        font-size: 16px;
        font-weight: bold;
      }
      .is-login {
        font-size: 14px;
      }
      .right-icon {
        position: absolute;
        right: 10px;
        top: 35px;
        font-size: 20px;
      }
    }
    .login-btn {
      background-color: #4dba8c;
      height: 50px;
      line-height: 50px;
      margin-top: 10px;
      letter-spacing: 2px;
      &:active {
        background-color: #41a77b;
      }
    }
  }
  .weui-tab {
    .nav-title {
      font-size: 18px;
    }
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
    .nav-cut {
      color: #4dba8c;
      line-height: 53px;
    }
    .list-content {
      margin-top: -50px;
    }
  }
}
</style>
