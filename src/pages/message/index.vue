<template>
  <div class="message-page">
    <ul class="msg-list">
      <!-- 官方消息 -->
       <msg-item :msg_data="off_msg"></msg-item>
      <li v-for="(item,index) in msg_list" :key="index">
        <!-- 互动消息 -->
        <msg-item :msg_data="item"></msg-item>
      </li>
    </ul>
  </div>
</template>

<script>
import MsgItem from "@/components/msg-item";
import { checkDate } from "@/utils/checkTime";
export default {
  components: {
    "msg-item": MsgItem
  },
  data() {
    return {
      off_msg: {
        msg_type: "official",
        new_msg_count: 0
      },
      msg_list: []
    };
  },
  methods: {
    // 获取官方通知
    getOffMsg() {
      wx.request({
        url: "https://wx.api.fog3211.com/governMsg/governMsg",
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            // this.msg_list = res.data
            this.off_msg.new_msg_count = res.data.length;
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
    getOrdMsg() {
      const open_id = wx.getStorageSync("open_id");
      if (!open_id) {
        return;
      }
      // 获取需求消息
      wx.request({
        url: "https://wx.api.fog3211.com/notice/getNeedNoticeList/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            res.data.map(item => {
              this.msg_list.push({
                id: item.userItemId,
                name: item.otherUserName,
                avatar:
                  item.otherUserTouxiang || "/static/images/avatar/default.jpg",
                msg_type: "apply",
                time: checkDate(item.creatTime)
              });
            });
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
      // 获取人才消息
      wx.request({
        url: "https://wx.api.fog3211.com/notice/getTalentNoticeList/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            res.data.map(item => {
              this.msg_list.push({
                id: item.userItemId,
                name: item.otherUserName,
                avatar:
                  item.otherUserTouxiang || "/static/images/avatar/default.jpg",
                msg_type: "accept",
                time: checkDate(item.creatTime)
              });
            });
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
  },
  onShow() {
    this.msg_list = [];
    this.getOffMsg();
    this.getOrdMsg();
  }
};
</script>

<style scoped lang="scss">
.message-page {
  padding-top: 10px;
}
</style>