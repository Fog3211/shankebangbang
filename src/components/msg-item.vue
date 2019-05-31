<template>
    <div class="msg-list">
        <div hover-class="weui-cell_active" v-if="msg_data.msg_type!=='official'" class="item-box">
            <img :src="msg_data.avatar" alt="avatar" class="avatar">
            <span class="name">{{msg_data.name}}</span>
            <span class="text">{{msg_data.msg_type==='apply'?'申请了我的求助':'接受了我的帮助'}}</span>
            <span class="time">{{msg_data.time}}</span>
            <div class="weui-badge weui-badge_dot dot-badge" v-show="msg_data.new_msg_count>0"></div>
        </div>
        <div hover-class="weui-cell_active" v-else-if="msg_data.msg_type==='official'" class="item-box"  @click="handleOffMsgDeatil">
            <img src="/static/images/icon/tongzhi.png" alt="avatar" class="tip-icon">
            <span class="text tip-text">官方通知</span>
            <div class="weui-badge msg-badge" v-show="msg_data.new_msg_count>0">{{msg_data.new_msg_count}}</div>
            <span class="iconfont icon-iconfontjiantou2 right-icon"></span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    msg_data: {
      type: Object,
      default: {
        id: 0,
        name: "",
        avatar: "",
        msg_type: "",
        new_msg_count: 0
      }
    }
  },
  methods: {
    handleOffMsgDeatil() {
      wx.navigateTo({ url: "/pages/detail/message/official-message/main" });
    }
  }
};
</script>

<style scoped lang="scss">
.msg-list {
  border-bottom: 1px solid rgb(224, 219, 219);
  .item-box {
    height: 70px;
    position: relative;
    // 常规
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
      margin-left: 10px;
      margin-right: 20px;
    }
    .name {
      font-size: 18px;
      font-weight: bold;
      line-height: 70px;
    }
    .text {
      font-size: 16px;
      line-height: 70px;
      margin-left: 0.4em;
    }
    .time {
      position: absolute;
      right: 10px;
      top: 5px;
      font-size: 14px;
      color: #ccc;
    }
    .dot-badge {
      position: absolute;
      right: 10px;
      top: 35px;
    }
    // 官方通知
    .tip-icon {
      width: 35px;
      height: 35px;
      vertical-align: middle;
      margin-left: 20px;
      margin-right: 20px;
    }
    .tip-text {
      font-size: 20px;
      font-weight: bold;
    }
    .right-icon {
      float: right;
      font-size: 24px;
      margin-right: 15px;
      line-height: 70px;
    }
    .msg-badge {
      font-size: 16px;
      margin: auto 10px;
    }
  }
}
</style>