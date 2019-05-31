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
     <div class="contact-box">
       <span class="contact-label">联系方式</span>
       <span class="contact">{{data.contact||"暂无"}}</span>
       <button type="primary" @click="copyContact" class="copy-btn" v-if="data.contact">复制</button>
    </div>
    <div class="btn-box">
      <button class="btn">￥{{data.pay}}</button>
      <button @click="handleApply" class="btn apply-btn">申请</button>
    </div>
    <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content"></mp-toast>
  </div>
</template>

<script>
import mpToast from "mpvue-weui/src/toast";
export default {
  components: {
    mpToast
  },
  data() {
    return {
      data: {
        id: -1,
        title: "",
        tag: [],
        description: "",
        time: "",
        visit_count: 0,
        files: [],
        pay: 0,
        avatar: "",
        name: "",
        contact: "",
        itemNeed: 0
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },
  methods: {
    handleApply() {
      const open_id = wx.getStorageSync("open_id");
      // 未登录
      if (!open_id) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请先登录"
        };
        return;
      }
      if (this.data.itemNeed === 0) {
        this.apply("https://wx.api.fog3211.com/item/applyNeed/");
      } else {
        this.apply("https://wx.api.fog3211.com/item/applyTalent/");
      }
    },
    apply(url) {
      const open_id = wx.getStorageSync("open_id");
      wx.request({
        url: url + open_id + "/" + this.data.id,
        method: "PUT",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            if (res.data === 1) {
              this.toast = {
                toastType: "success",
                showToast: true,
                content: "申请成功"
              };
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                });
              }, 1000);
            } else if (res.data === -4) {
              this.toast = {
                toastType: "error",
                showToast: true,
                content: "不能申请自己的请求"
              };
            } else if (res.data === -5) {
              this.toast = {
                toastType: "error",
                showToast: true,
                content: "您的校园币不足"
              };
            } else {
              this.toast = {
                toastType: "error",
                showToast: true,
                content: "出错了，请重试"
              };
            }
          } else {
            // console.log("error");
          }
        }
      });
    },
    copyContact() {
      wx.setClipboardData({
        data: this.data.contact,
        success(res) {
          wx.getClipboardData({
            success(res) {
              // console.log(res.data);
            }
          });
        }
      });
    },
    getItem() {
      // 获取页面参数
      const id = this.$root.$mp.query.id;
      // 请求数据
      wx.request({
        url: "https://wx.api.fog3211.com/item/itemlist/" + id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            const item = res.data;
            this.data = {
              id: item.itemId,
              title: item.itemTitle,
              tag: item.tags,
              description: item.itemContent,
              time: item.toNow,
              visit_count: item.itemScan,
              files: [],
              pay: item.itemPrice,
              avatar: "/static/images/avatar/2.jpg",
              name: item.usrName,
              contact: item.itemContact,
              itemNeed: item.itemNeed
            };
            this.getPic(item.itemId);
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
    },
    // 处理图片
    getPic(itemId) {
      wx.request({
        url: "https://wx.api.fog3211.com/pic/getPic?itemId=" + itemId,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            res.data.map(el => {
              this.data.files.push(
                "https://wx.api.fog3211.com/uploads/" + el.itemPic
              );
            });
            // console.log(this.data.files);
          } else {
            // console.log(res.errMsg);
          }
        }
      });
    }
  },
  onShow() {
    this.getItem();
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
  .contact-box {
    position: relative;
    padding: 15px 15px 5px;
    font-size: 18px;
    .contact {
      margin-left: 10px;
      width: 150px;
      display: inline-block;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
    .copy-btn {
      position: absolute;
      top: 5px;
      margin-left: 15px;
      display: inline-block;
      width: 70px;
      height: 45px;
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
