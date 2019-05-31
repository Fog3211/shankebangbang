<template>
    <div class="about-page">
        <div class="info">
             山科帮帮是一款面向校园学生群体的小程序，主要为了解决在校学生间互相帮助问题，该小程序可以为附近地区的同学提供免费的信息共享服务功能。
        </div>
        <p class="copyright">Copyright 2019 by sdust</p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-page {
  .info {
    margin: 20px;
    padding: 10px;
    letter-spacing: 2px;
    color: #262626;
    text-indent: 2em;
    border-radius: 5px;
    background-color: #f5f2f2;
    height: 80vh;
  }
  .copyright {
    position: fixed;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    text-align: center;
    color: #888;
    font-size: 14px;
  }
}
</style>