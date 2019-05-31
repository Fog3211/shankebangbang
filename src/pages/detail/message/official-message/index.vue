<template>
  <div class="official-message">
    <ul class="msg-box" v-if="msg_list.length>0">
      <li v-for="(item,index) in msg_list" :key="index" class="msg" @click="showMsgDetail(item, index)">
        <div class="header">
          <span class="title">{{item.title}}</span>
          <span class="time">{{item.time}}</span>
          <div class="weui-badge weui-badge_dot dot-badge" v-if="item.is_new"></div>
        </div>
        <span class="content">{{item.content}}</span>
      </li>
    </ul>
    <div class="no-msg" v-else>
      <img src="/static/images/other/no-msg.png" alt="no-msg" class="pic">
    </div>
    <div class="msg-detail" v-if="show_msg_detail" @click="hiddenMsgDetail">
      <div class="content">
        <p class="title">{{ msg_detail.title }}</p>
        <p>{{ msg_detail.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { checkDate } from "@/utils/checkTime";
export default {
  data() {
    return {
      msg_list: [],
      show_msg_detail: false,
      msg_detail: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    showMsgDetail(item, index) {
      this.msg_detail = {
        ...item
      };
      this.show_msg_detail = true;
      this.msg_list[index].is_new = false;
    },
    hiddenMsgDetail() {
      this.show_msg_detail = false;
    }
  },
  mounted() {
    wx.request({
      url: "https://wx.api.fog3211.com/governMsg/governMsg",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          res.data.map(item => {
            this.msg_list.push({
              id: item.id,
              title: item.title,
              time: item.time,
              content: item.content
            });
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
.official-message {
  padding: 10px 15px;

  .msg-box {
    margin: 10px auto;

    .msg {
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-top: 10px;
      padding: 5px;

      .header {
        position: relative;
        line-height: 30px;

        .title {
          text-indent: 1em;
          display: inline-block;
          font-weight: bold;
          width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 5px;
        }

        .time {
          position: absolute;
          right: 10px;
          top: 5px;
          font-size: 12px;
          color: #ccc;
        }

        .dot-badge {
          position: absolute;
          right: 3px;
          top: 3px;
        }
      }

      .content {
        text-indent: 2em;
        border-radius: 5px;
        margin: 5px auto;
        height: 100px;
        font-size: 15px;
        color: rgb(88, 88, 88);
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }

  .no-msg {
    text-align: center;
    margin-top: 40px;
    .pic {
      width: 70%;
      height: 70vh;
    }
  }

  .msg-detail {
    width: 95%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      margin: 0 auto;
      width: 90%;
      background: #fff;
      border-radius: 0.2rem;
      min-height: 1rem;
      padding: 0.3rem 0.6rem;
      box-shadow: 0 0 10rem 5rem rgba(0, 0, 0, 0.5);
      font-size: 0.34rem;
      line-height: 0.5rem;

      .title {
        text-align: left;
        padding-left: 0.2rem;
        font-size: 0.4rem;
        font-weight: bolder;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>
