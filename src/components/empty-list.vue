<template>
  <div class="empty-box">
    <img src="/static/images/other/empty.png" alt="empty" class="empty-pic">
    <p class="empty-info">糟糕，列表竟然是空的</p>
  </div>
</template>

<script>
export default {
  name: "empty-list"
};
</script>

<style lang="scss" scoped>
.empty-box {
  margin-top: -50px;
  margin-bottom: 10px;

  .empty-pic {
    margin-top: -30px;
    width: 50%;
  }

  .empty-info {
    color: rgb(182, 179, 179);
    letter-spacing: 2.5px;
    text-align: center;
  }
}
</style>
