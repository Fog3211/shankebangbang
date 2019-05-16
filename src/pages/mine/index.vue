<template>
  <div class="mine-page">
    <div class="header">
      <img :src="account.avatar" alt="avatar" class="avatar">
      <div class="account-box">
        <p class="name">{{account.name}}</span>
        <p class="school">{{account.school}}</p>
        <span class="iconfont icon-iconfontjiantou2 right-icon"></span>
      </div>
      <button open-type="getUserInfo"
        bindgetuserinfo="bindGetUserInfo" @click="getSetting">登录</button>
      <button @click="test">测试</button>
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
            <ul class="list-content">
              <li v-for="(item,index) in data1" :key="index" >
                <demand-item :data="item"></demand-item>
              </li>
            </ul>
        </div>
        <div class="weui-tab__content" :hidden="active_index !== 1">
            <ul class="list-content">
              <li v-for="(item,index) in data2" :key="index">
                <demand-item :data="item"></demand-item>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import DemandItem from "@/components/demand-item";
export default {
  components: {
    "demand-item": DemandItem
  },
  data() {
    return {
      account: {
        name: "未登录",
        avatar: "/static/images/avatar/1.jpg",
        school: ""
      },
      tabs: ["已发布", "已帮助"],
      active_index: 0,
      data1: [
        {
          id: 1,
          title: "已发布标题占位符1",
          time: "2018-4-2",
          detail: `例如 bindregionchange 事件直接在 dom&nbsp; 
            sadashkjdsajk`,
          pay: 1,
          tag: ["计算机"],
          visit_count: 83
        },
        {
          id: 1,
          title: "已发布标题占位符2",
          time: "2018-5-2",
          detail: `例如 bindregionchange 事件直接在 dom&nbsp; 
            sadashkjdsajk`,
          pay: 1,
          tag: ["占位符1", "占位符2"],
          visit_count: 2
        },
        {
          id: 1,
          title: "已发布标题占位符3",
          time: "2019-4-2",
          detail: `例如 bindregionchange 事件直接在 dom&nbsp; 
            sadashkjdsajk`,
          pay: 1,
          tag: ["占位符3", "占位符33", "占位符32"],
          visit_count: 192
        }
      ],
      data2: [
        {
          id: 1,
          title: "已帮助标题占位符1",
          time: "2019-4-21",
          detail: `例如 bindregionchange 事件直接在 dom&nbsp; 
            sadashkjdsajk`,
          pay: 1,
          tag: ["占位符1", "占位符2"],
          visit_count: 12
        }
      ]
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
              success: res => {
                // console.log(res.userInfo);
                // set触发对象更新
                Vue.set(this.account, "name", res.userInfo.nickName);
                Vue.set(this.account, "avatar", res.userInfo.avatarUrl);
                console.log("用户还未授权过");
              }
            });
          }
        }
      });
    },
    test() {
      wx.login({
        success: res => {
          const js_code = res.code;
          if (js_code) {
            console.log("获取用户登录凭证：" + js_code);
            wx.request({
              url: "http://62.234.59.173:80/api/me/login", //后端接口获取openid和session_key
              data: { code: js_code, userName: this.account.name },
              method: "GET",
              header: {
                "content-type": "application/json"
              },
              success: res => {
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
      .school {
        font-size: 14px;
      }
      .right-icon {
        position: absolute;
        right: 10px;
        top: 35px;
        font-size: 20px;
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
