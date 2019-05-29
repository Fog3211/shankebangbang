<template>
    <ul class="list-content">
      <li v-for="(item,index) in list" :key="index">
        <demand-item :data="item"></demand-item>
      </li>
    </ul>
</template>

<script>
import DemandItem from "@/components/demand-item";
import { checkDate } from "@/utils/checkTime";
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
      list: []
    };
  },
  methods: {
    getData() {
      const open_id = wx.getStorageSync("open_id");
      wx.request({
        url: "https://62.234.59.173/myHistory/getHelpedList/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
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
