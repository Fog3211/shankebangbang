<template>
  <ul class="account-page">
    <li class="account-item">
      <p><span class="iconfont icon-xingming"></span>用户名</p>
      <input v-model="account.userName" disabled="true" />
    </li>
    <li class="account-item">
      <p><span class="iconfont icon-qian"></span>校园币</p>
         <input v-model="account.money" disabled="true" />
    </li>
    <li class="account-item">
      <p><span class="iconfont icon-shouji"></span>手机号</p>
      <input placeholder="请输入手机号" v-model="account.phone" type="number" maxlength="11" />
    </li>
    <!-- <li class="account-item">
      <p><span class="iconfont icon-qq"></span>QQ号</p>
      <input placeholder="请输入QQ号" v-model="account.qq" type="number" maxlength="11" />
    </li> -->
    <li class="btn-box">
      <Button type="primary" @click="handleSubmit">修改账户信息</Button>
    </li>
    <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content"></mp-toast>
  </ul>
</template>

<script>
import mpToast from "mpvue-weui/src/toast";
import Vue from "vue";
export default {
  components: {
    mpToast
  },
  data() {
    return {
      account: {
        userName: "",
        money: 0,
        phone: "",
        qq: ""
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },
  methods: {
    getAccount() {
      const open_id = wx.getStorageSync("open_id");
      wx.request({
        url: "http://62.234.59.173/api/getUserByOpenId/" + open_id,
        method: "GET",
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            // console.log(res.data);
            const item = res.data;
            this.account = {
              userName: item.userName,
              address: "",
              phone: item.userPhone,
              money: item.campusMoney,
              qq: item.userQq
            };
          } else {
            // console.log(res.errMsg);
            this.toast = {
              toastType: "error",
              showToast: true,
              content: "出错了，请重试"
            };
          }
        }
      });
    },
    handleSubmit() {
      if (this.checkInput()) {
        const open_id = wx.getStorageSync("open_id");
        wx.request({
          url:
            "http://62.234.59.173/api/changePhone/" +
            open_id +
            "/" +
            this.account.phone,
          method: "PUT",
          header: {
            "content-type": "application/json"
          },
          success: res => {
            if (res.statusCode == 200) {
              if (res.data === 1) {
                this.toast = {
                  toastType: "success",
                  showToast: true,
                  content: "修改成功"
                };
                this.getAccount();
              } else {
                this.toast = {
                  toastType: "error",
                  showToast: true,
                  content: "修改错误，请重试"
                };
              }
              // console.log(res.data);
            } else {
              // console.log(res.errMsg);
              this.toast = {
                toastType: "error",
                showToast: true,
                content: "修改错误，请重试"
              };
            }
          }
        });
      }
    },
    checkInput() {
      const { phone, qq } = this.account;
      if (!/^1[34578]\d{9}$/.test(phone)) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请检查输入的手机号"
        };
        return false;
      }
      // else if (qq && qq.length < 4) {
      //   this.toast = {
      //     toastType: "error",
      //     showToast: true,
      //     content: "请检查输入的QQ号"
      //   };
      //   return false;
      // }
      else {
        return true;
      }
    }
  },
  onShow() {
    const open_id = wx.getStorageSync("open_id");
    if (open_id) {
      this.getAccount();
    }
  }
};
</script>

<style lang="scss" scoped>
.account-page {
  padding: 20px 30px;
  .account-item {
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    letter-spacing: 3px;
    p {
      letter-spacing: 1px;
      font-weight: bold;
      span {
        margin: 5px;
        font-size: 24px;
      }
      .icon-xingming {
        color: rgb(189, 41, 41);
      }
      .icon-qian {
        color: rgb(59, 180, 124);
      }
      .icon-shouji {
        color: rgb(189, 41, 157);
      }
      .icon-qq {
        color: rgb(64, 148, 223);
      }
    }
    input {
      margin: 10px 20px;
    }
  }
  .btn-box {
    width: 80%;
    margin: 70px auto;
    letter-spacing: 3px;
  }
}
</style>
