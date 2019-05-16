<template>
  <div class="hot-page">
    <div class="header">
      <span class="iconfont icon-huo hot-icon"></span>
      <p class="title">热门话题</p>
      </div>
      <div class="tag-box">
        <span class="tag">#生活用品</span>
        <span class="tag">#学习用品</span>
        <span class="tag">#办公用品</span>
      </div>
      <ul class="list-content">
        <li v-for="(item,index) in hot_list" :key="index">
          <demand-item :data="item"></demand-item>
        </li>
      </ul>
  </div>
</template>

<script>
import DemandItem from "@/components/demand-item";
export default {
  components: {
    "demand-item": DemandItem
  },
  data() {
    return {
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      },
      hot_list: []
    };
  },
  mounted() {
    wx.request({
      url: "http://62.234.59.173/item/itemHotlist",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          res.data.map(item => {
            this.hot_list.push({
              id:item.itemId,
              title: item.itemTitle,
              time: item.toNow,
              detail: item.itemContent,
              pay: item.itemPrice,
              tag: item.tags,
              visit_count: 123,
              is_need: item.itemNeed
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
.hot-page {
  .header {
    .hot-icon {
      color: #d4237a;
      font-size: 20px;
      padding: 0 10px;
    }
    .title {
      display: inline-block;
      width: 75%;
      margin: 0 auto;
      font-weight: bold;
      font-size: 14px;
      border-bottom: 1px solid #ccc;
    }
  }

  .tag-box {
    width: 80%;
    margin: 0 auto;
    .tag {
      text-align: center;
      margin: auto 15px;
      font-size: 14px;
      color: #4dba8c;
    }
  }
  .list-content {
    margin-top: 10px;
    border-top: 1px solid #ccc;
  }
}
</style>
