<template>
  <div class="message-page">
    <ul class="msg-list">
       <msg-item :msg_data="off_msg"></msg-item>
      <li v-for="(item,index) in msg_list" :key="index">
        <msg-item :msg_data="item"></msg-item>
      </li>
    </ul>
  </div>
</template>

<script>
import MsgItem from "@/components/msg-item";

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
      msg_list: [
        {
          id: "11",
          name: "李二狗",
          avatar: "/static/images/avatar/1.jpg",
          msg_type: "accept",
          new_msg_count: 1,
          time: "2019-2-2"
        },
        {
          id: "22",
          name: "赵铁柱",
          avatar: "/static/images/avatar/2.jpg",
          msg_type: "apply",
          new_msg_count: 0,
          time: "2019-4-2"
        }
      ]
    };
  },
  mounted() {
    wx.request({
      url: "http://62.234.59.173/governMsg/governMsg",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          // this.msg_list = res.data;
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
  }
};
</script>

<style scoped lang="scss">
.message-page {
  padding-top: 10px;
}
</style>