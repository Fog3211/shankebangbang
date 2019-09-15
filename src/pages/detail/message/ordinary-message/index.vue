<template>
  <div class="ordinary-message">
     <ul class="msg-box">
       <li class="msg-item">{{data.name}}</li>
       <li class="msg-item">{{data.time}}</li>
       <li class="msg-item">{{data.content}}</li>
     </ul>
  </div>
</template>

<script>
import { checkDate } from "@/utils/checkTime";
export default {
  data() {
    return {
      data: {
        id: -1,
        name: "",
        time: "",
        content: "",
        other_name: ""
      }
    };
  },
  mounted() {
    const id = this.$root.$mp.query.id;
    wx.request({
      url: "http://62.234.59.173/governMsg/governMsg",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        const item = res.data;
        if (res.statusCode == 200) {
          this.data = {
            id: item.itemId,
            name: item.otherUserName,
            other_name: item.otherUserOpenId,
            time: checkDate(item.creatTime)
          };
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
.msg-box {
  text-align: center;
}
</style>