<template>
  <div class="hot-page">
    <div class="header">
      <span class="iconfont icon-huo hot-icon"></span>
      <p class="title">热门话题</p>
    </div>
    <div class="tag-box">
      <span v-for="(item,index) in tag_list" :key="index" class="tag" @click="handleTagCheck(item)">
        #{{item}}
      </span>
    </div>
    <ul class="list-content">
      <li v-for="(item,index) in hot_list" :key="index" v-show="item.show">
        <demand-item :data="item"></demand-item>
      </li>
    </ul>
        <mp-loading :showLoading="isShowLoading" loadingText="数据加载中..."></mp-loading>
  </div>
</template>

<script>
import DemandItem from "@/components/demand-item";
import mpLoading from "mpvue-weui/src/loading";
export default {
  components: {
    "demand-item": DemandItem,
    mpLoading
  },
  data() {
    return {
      toast: {
        toastType: "error",
        showToast: false,
        content: "获取数据错误，请重试"
      },
      tag_list: ["寻物启事", "学习互助", "资源共享"],
      hot_list: [],
      isShowLoading: true
    };
  },
  methods: {
    handleTagCheck(item) {
      this.hot_list.map((el, index) => {
        if (!el.tag.includes(item)) {
          this.hot_list[index].show = false;
        } else {
          this.hot_list[index].show = true;
        }
      });
    }
  },
  onShow() {
    this.hot_list = [];
    wx.request({
      url: "http://62.234.59.173/item/itemHotlist",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        if (res.statusCode == 200) {
          setTimeout(() => {
            this.isShowLoading = false;
          }, 1000);
          if (!res.data) return;
          res.data.map(item => {
            this.hot_list.push({
              id: item.itemId,
              title: item.itemTitle,
              time: item.toNow,
              detail: item.itemContent,
              pay: item.itemPrice,
              tag: item.tags,
              visit_count: item.itemScan,
              is_need: item.itemNeed,
              show: true
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
      font-size: 16px;
    }
  }

  .tag-box {
    width: 90%;
    margin: 0 auto;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    .tag {
      text-align: center;
      margin: auto 15px;
      font-size: 16px;
      color: #4dba8c;
      &:active {
        color: #1f684a;
      }
    }
  }

  .list-content {
    margin-top: 10px;
    border-top: 1px solid #ccc;
  }
}
</style>
