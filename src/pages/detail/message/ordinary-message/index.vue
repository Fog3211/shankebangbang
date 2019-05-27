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
export default {
  data() {
    return {
      data: {
        id: -1,
        name: "",
        time: "",
        content: ""
      }
    };
  },
  mounted() {
    this.id = this.$root.$mp.query.id;
    this.data = {
      id: this.$root.$mp.query.id,
      name: "张三",
      time: "2019-06-01",
      content: "测试消息"
    };
  }
};
</script>

<style scoped lang="scss">
.msg-box {
  text-align: center;
}
</style>