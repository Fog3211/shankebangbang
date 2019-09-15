<template>
    <ul class="list-content">
      <li v-for="(item,index) in list" :key="index">
        <demand-item :data="item"></demand-item>
      </li>
          <mp-loading :showLoading="isShowLoading" loadingText="数据加载中..."></mp-loading>
    </ul>
</template>

<script>
import DemandItem from "@/components/demand-item";
import { checkDate } from "@/utils/checkTime";
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
      list: [],
      isShowLoading: true
    };
  },
  methods: {
    getData() {
      const open_id = wx.getStorageSync("open_id");
      wx.request({
        url: "http://62.234.59.173/myHistory/getHelpedList/" + open_id,
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
              this.list.push({
                id: item.itemId,
                title: item.itemTitle,
                time: checkDate(item.itemTime),
                detail: item.itemContent,
                pay: item.itemPrice,
                tag: item.tags,
                visit_count: item.itemScan,
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
  },
  onShow() {
    this.list = [];
    const open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getData();
    }
  }
};
</script>

<style scoped lang="scss">
.list-content {
  margin-top: 5px;
  border-top: 1px solid #ccc;
}
</style>
