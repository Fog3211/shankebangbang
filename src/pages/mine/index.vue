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
    <ul class="mine-list">
      <li class="mine-item" @click="handleItemList('push')">
           <span class="iconfont icon-fabu"></span>
        我的发布
        </li>
      <li class="mine-item" @click="handleItemList('help')">
         <span class="iconfont icon-shou"></span>
        帮助过我
        </li>
      <li class="mine-item" @click="handleAbout">
         <span class="iconfont icon-about"></span>
        关于
        </li>
      <li class="mine-item" @click="handleLogout" v-if="logout_btn_show">
         <span class="iconfont icon-tuichu"></span>
        注销登录
        </li>
    </ul>
    <mp-modal ref="mpModal" title="" content="确认注销登录？" :showCancel="true" @confirm="loginOut"></mp-modal>
  </div>
</template>

<script>
import mpModal from "mpvue-weui/src/modal";
import mpToast from "mpvue-weui/src/toast";

export default {
  components: {
    mpToast,
    mpModal
  },
  data() {
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
                this.logout_btn_show = true;
                this.getOpenId();
              }
            });
          } else {
            // 未授权
            this.login_btn_show = true;
            this.logout_btn_show = false;
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
          toastType: "warn",
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
              url: "http://62.234.59.173/api/me/login",
              data: {
                code: js_code,
                userName: this.account.name,
                userHead: this.account.avatar
              },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: res => {
                if (res.statusCode == 200) {
                  this.logout_btn_show = true;
                  wx.setStorageSync("open_id", res.data.open_id);
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
      if (open_id) {
        wx.navigateTo({ url: "/pages/account/main" });
      }
    },
    handleLogout() {
      this.$refs.mpModal.show();
    },
    loginOut() {
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
    handleItemList(str) {
      const open_id = wx.getStorageSync("open_id");
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
    handleAbout() {
      wx.navigateTo({ url: "/pages/about/main" });
    }
  },
  mounted() {
    this.getSetting();
  }
};
</script>

<style scoped lang="scss">
.mine-page {
  padding-top: 10px;
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
      border: 1px solid #34ca40;
    }
    .account-box {
      padding-top: 15px;
      margin-left: 5px;
      .name {
        font-size: 18px;
        font-weight: bold;
      }
      .is-login {
        font-size: 14px;
      }
      .right-icon {
        position: absolute;
        right: 10px;
        top: 30px;
        font-size: 22px;
        padding: 5px;
        &:active {
          background-color: #e6e1e1;
        }
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
  .mine-list {
    width: 100%;

    .mine-item {
      margin-top: 10px;
      background-color: rgb(243, 244, 245);
      height: 80px;
      line-height: 80px;
      padding-left: 40px;
      font-weight: bold;
      border-radius: 5%;
      letter-spacing: 4px;
      &:active {
        background-color: rgb(224, 227, 231);
      }
      .iconfont {
        font-size: 26px;
        margin-right: 5px;
      }
      .icon-fabu {
        color: rgb(168, 118, 67);
      }
      .icon-shou {
        color: #41a77b;
      }
      .icon-about {
        color: rgb(114, 78, 236);
      }
      .icon-tuichu {
        color: #c43e57;
      }
    }
  }
}
</style>
