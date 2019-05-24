<template>
  <div class="ordinary-message">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        id: -1,
        name: "",
        time: "",
        msg: ""
        
      }
    };
  },
  mounted() {
    this.id = this.$root.$mp.query.id;
    this.data = {};
    // console.log(this.id)
    // wx.request({
    //   url: "http://62.234.59.173/",
    //   method: "GET",
    //   header: {
    //     "content-type": "application/json"
    //   },
    //   success: res => {
    //     if (res.statusCode == 200) {
    //       this.msg_list = res.data;
    //       // console.log(res.data);
    //     } else {
    //       this.toast = {
    //         toastType: "error",
    //         showToast: true,
    //         content: "获取数据错误，请重试"
    //       };
    //     }
    //   }
    // });
  }
};
</script>

<style scoped lang="scss">
</style>