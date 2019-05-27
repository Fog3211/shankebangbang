<template>
    <ul class="demand-item" @click="handleDetail" hover-class="weui-cell_active">
        <li class="header">
            <span class="iconfont icon-02 radio"></span>
            <span class="title">{{data.title}}</span>
            <span class="time">{{data.time}}</span>
        </li>
        <li class="describe">
            <pre class="detail">
                 {{data.detail}}
            </pre>
            <div class="pay-box">
                <div class="pay">￥{{data.pay}}</div>
            </div>
        </li>
        <li class="footer">
            <div class="tag-box">
               <span v-for="(item,index) in data.tag" :key="index" class="tag">#{{item}}</span>
            </div>
            <span class="iconfont icon-more more"></span>
            <span class="visit">浏览·{{data.visit_count}}</span>
        </li>
    </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        id: 1,
        title: "",
        time: "",
        detail: "",
        pay: 0,
        tag: [],
        visit_count: 0
      }
    }
  },
  data() {
    return {
      id: 1
    };
  },
  methods: {
    handleDetail() {
      wx.navigateTo({ url: "/pages/detail/demand/main?id=" + this.data.id });
    }
  }
};
</script>

<style scoped lang="scss">
.demand-item {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  img {
    width: 25px;
    height: 25px;
  }
  /* 第一行 */
  .header {
    .radio {
      float: left;
      font-size: 24px;
      margin-left: 5px;
      margin-top: -5px;
      color: #efb274;
    }
    .title {
      text-align: left;
      display: inline-block;
      width: 250px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: bold;
    }
    .time {
      float: right;
      width: 70px;
      padding-right: 5px;
      text-align: center;
      color: #ccc;
      font-size: 14px;
    }
  }
  /* 第二行 */
  .describe {
    display: flex;
    min-height: 40px;
    max-height: 120px;
    padding-bottom: 5px;
    .detail {
      display: inline-block;
      width: 65%;
      padding: 5px 15px;
      text-align: left;
      font-size: 15px;
      color: rgb(88, 88, 88);
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .pay-box {
      width: 35%;
      position: relative;
      .pay {
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        transform: translateX(-50%) translateY(-50%);
        color: rgb(221, 218, 54);
        background-color: #4dba8c;
        border-radius: 10px;
      }
    }
  }
  /* 第三行 */
  .footer {
    width: 100%;
    font-size: 14px;
    .tag-box {
      display: inline-block;
      width: 250px;
      overflow: hidden;
      .tag {
        float: left;
        text-align: left;
        padding: 5px;
        margin-left: 5px;
        color: #4dba8c;
      }
    }
    .visit {
      margin-top: 5px;
      float: right;
    }
    .more {
      float: right;
      margin-top: 5px;
      padding: 0 10px 0 20px;
    }
  }
}
</style>