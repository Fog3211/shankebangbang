<template>
  <div class="detail-demand">
    <div class="header">
     <span class="iconfont icon-02 radio"></span>
     <span class="title">{{data.title}}</span>
    </div>
    <ul class="tag-box">
      <li v-for="(item,index) in data.tag" :key="index" class="tag">
       # {{item}}
      </li>
    </ul>
    <div class="description">
      {{data.description}}
    </div>
    <ul class="img-box">
        <li v-for="(item,index) in data.files" :key="index" class="img-item">
          <img :src="item" alt="img" class="img">
        </li>
    </ul>
    <div class="footer">
      <img :src="data.avatar" alt="avatar" class="avatar">
      <span class="name">{{data.name}}</span>
      <span class="time">{{data.time}}</span>
      <span class="visit">浏览·{{data.visit_count}}</span>
    </div>
    <div class="btn-box">
      <button class="btn">￥{{data.pay}}</button>
      <button @click="handleApply" class="btn apply-btn">申请</button>
    </div>
  </div>
</template>

<script>
import mpToast from "mpvue-weui/src/toast";
export default {
  data() {
    return {
      id: -1,
      data: {
        title: "标题占位符0000000",
        tag: ["计算机", "软件", "物联网", "数媒", "网络"],
        description:
          "MinUI 是蘑菇街前端开发团队开发的基于微信小程序自定义组件特性开发而成的一套简洁、易用、高效的组件库，适用场景广，覆盖小程序原生框架，各种小程序组件主流框架等，并且提供了专门的命令行工具。MinUI 是蘑菇街前端开发团队开发的基于微信小程序自定义组件特性开发而成的一套简洁、易用、高效的组件库，适用场景广，覆盖小程序原生框架，各种小程序组件主流框架等，并且提供了专门的命令行工具。",
        time: "2019-02-22",
        visit_count: 321,
        files: ["/static/images/other/1.png", "/static/images/other/1.png"],
        pay: 30,
        avatar: "/static/images/avatar/1.jpg",
        name: "李二狗"
      }
    };
  },
  methods: {
    handleApply() {
      console.log("提交申请");
    }
  },
  mounted() {
    // 获取页面参数
    this.id = this.$root.$mp.query.id;
    // 请求数据
    wx.request({
      url: "http://62.234.59.173/item/itemlist/" + this.id,
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          const item = res.data;
          this.data = {
            title: item.itemTitle,
            tag: item.tags,
            description: item.itemContent,
            time: item.toNow,
            visit_count: 321,
            files: ["/static/images/other/1.png", "/static/images/other/1.png"],
            pay: item.itemPrice,
            avatar: "/static/images/avatar/1.jpg",
            name: "李二狗"
          };
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
.detail-demand {
  padding-top: 10px;
  .header {
    position: relative;
    height: 40px;
    .radio {
      font-size: 28px;
      position: absolute;
      left: 10px;
      color: #efb274;
    }
    .title {
      text-align: left;
      display: inline-block;
      width: 260px;
      margin: 0 50px;
      line-height: 40px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: bold;
    }
  }
  .tag-box {
    text-align: left;
    width: 90%;
    margin: 10px auto;
    border-bottom: 1px solid #ccc;
    .tag {
      display: inline;
      margin: 0 15px;
      font-size: 15px;
      color: #4dba8c;
    }
  }
  .description {
    width: 90%;
    margin: 10px auto;
    text-indent: 2em;
    font-size: 16px;
    color: #838282;
  }
  .img-box {
    margin: 10px auto;
    padding: 10px 20px;
  }
  .footer {
    padding: 0 20px;
    font-size: 14px;
    color: rgb(124, 117, 117);
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
    .name {
      font-size: 16px;
      font-weight: bold;
      line-height: 40px;
      margin: 0 10px;
    }
    .time {
      line-height: 40px;
    }
    .visit {
      float: right;
      line-height: 40px;
    }
  }
  .btn-box {
    width: 70%;
    margin: 40px auto;
    font-weight: bold;
    display: flex;
    text-align: center;
    .btn {
      display: inline-block;
      padding: 5px 30px;
      margin: auto 5px;
      color: rgb(221, 218, 54);
      background-color: #4dba8c;
      letter-spacing: 2px;
      border-radius: 15px 0 0 15px;
    }
    .apply-btn {
      border-radius: 0 15px 15px 0;
      color: #fff;
    }
  }
}
</style>
