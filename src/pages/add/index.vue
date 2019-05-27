<template>
  <div class="add-page">
    <div ref="addForm">
      <!-- 标题部分 -->
      <input type="text" placeholder="标题" class="title" v-model="add_form.title"/>
      <!-- 文字描述部分 -->
      <div class="weui-cells weui-cells_after-title description-box">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea placeholder="请添加具体描述（限120字）" v-model="add_form.description"/>
          </div>
        </div>
      </div>
      <!-- 上传图片部分 -->
       <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__hd">
                <div class="weui-uploader__title">选择上传</div>
                <div class="weui-uploader__info">{{add_form.files.length}}/{{max_files_len}}</div>
              </div>
              <div class="weui-uploader__bd clearfix">
                <div class="weui-uploader__files clearfix" id="uploaderFiles">
                  <div v-for="(item ,index) in add_form.files" :key="index">
                    <div class="weui-uploader__file">
                      <image class="weui-uploader__img" :src="item" mode="aspectFill" @click="predivImage" :id="item" />
                      <div class="delete-icon" @click="deleteImg" :id="item"></div>
                    </div>
                  </div>
                </div>
                <div class="weui-uploader__input-box" v-show="add_form.files.length < max_files_len">
                  <div class="weui-uploader__input" @click="chooseImage"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 标签部分 -->
      <div class="box">
        <span class="iconfont icon-biaoqian tag-icon"></span>
        <label for="tag" class="tag">标签</label>
        <input type="text" v-model="add_form.tag[0]" placeholder="主标签（限10字）" class="tag-input" maxlength="10">  
        <input type="text" v-model="add_form.tag[1]" placeholder="副标签1（限7字）" class="tag-input" maxlength="7">  
        <input type="text" v-model="add_form.tag[2]" placeholder="副标签2（限7字）" class="tag-input" maxlength="7">  
      </div>
      <!-- 联系方式 -->
      <div class="box" style="padding:10px;">
        <span class="iconfont icon-lianxifangshi contact-icon"></span>
        <label for="contact" class="contact">联系方式</label>
        <mp-input placeholder="请输入联系电话" v-model="add_form.contact" type="number" maxlength="11"></mp-input>
      </div>
      <!-- 赏金部分 -->
      <div class="box">
        <span class="pay-icon">￥</span>
        <label for="pay" class="pay">赏金</label>
        <div class="weui-grids pay-box">
            <block v-for="(item,index) in pay_arr" :key="index">
                <div hover-class="weui-grid_active" @click="handleSelectPay(index)" :class="['weui-grid',index===select_pay_index?'pay_selected':'']">
                    <div class="weui-grid__label pay-title">{{item}}</div>
                    <div class="pay-text">校园币</div>
                </div>
            </block>
        </div>
      </div>
    </div>
     <button class="push-btn" @click="handlePush">发布</button>
     <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content"></mp-toast>
  </div>
</template>

<script>
import mpInput from "mpvue-weui/src/input";
import mpToast from "mpvue-weui/src/toast";
export default {
  components: {
    mpToast,
    mpInput
  },
  data() {
    return {
      max_files_len: 3, //最大图片上传数
      pay_arr: [1, 3, 5, 10, 30, 50, 100, 200, 500],
      select_pay_index: -1,
      add_form: {
        title: "",
        description: "",
        files: [],
        tag: [],
        contact: "",
        pay: 0
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      }
    };
  },
  methods: {
    chooseImage(e) {
      let _this = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          _this.add_form.files = _this.add_form.files.concat(res.tempFilePaths);
        },
        fail() {
          // console.log("fail");
        },
        complete() {
          // console.log("commplete");
        }
      });
    },
    predivImage(e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.add_form.files // 需要预览的图片http链接列表
      });
    },
    deleteImg(e) {
      Array.prototype.indexOf = function(val) {
        for (let i = 0; i < this.length; i++) {
          if (this[i] === val) return i;
        }
        return -1;
      };
      Array.prototype.remove = function(val) {
        let index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      this.add_form.files.remove(e.currentTarget.id);
    },
    handleSelectPay(index) {
      this.select_pay_index = index;
    },
    handlePush() {
      if (!this.checkForm()) {
        this.toast = {
          toastType: "warn",
          showToast: true,
          content: "请完善输入"
        };
        return;
      }
      const open_id = wx.getStorageSync("openid");
      // console.log(open_id)
      wx.request({
        url: "http://62.234.59.173/pic/uploadImage",
        method: "POST",
        data: {
          title: this.add_form.title,
          content: this.add_form.description,
          price: this.add_form.pay,
          open_id,
          contact: this.add_form.contact
          // multipartFile: "",
          // itemId: 111
        },
        header: {
          "content-type": "application/json"
        },
        success: res => {
          if (res.statusCode == 200) {
            if (res.data.msg === "ok") {
              this.toast = {
                toastType: "success",
                showToast: true,
                content: "添加成功"
              };
            }
            // console.log(res);
          } else {
            // console.log(res.errMsg);
          }
        }
      });
    },
    checkForm() {
      this.add_form.tag = this.add_form.tag.filter(s => {
        return s && s.trim();
      });
      const { title, description, files, tag, pay, contact } = this.add_form;
      if (
        title !== "" &&
        title.trim() !== "" &&
        description !== "" &&
        description.trim() !== "" &&
        contact !== "" &&
        contact.trim() !== "" &&
        files.length !== 0 &&
        tag.length !== 0 &&
        this.select_pay_index !== -1
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.add-page {
  padding-top: 20px;
  .title {
    text-indent: 1em;
    width: 70%;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
  }
  .description-box {
    margin: 15px auto 0;
  }
  /* 文件上传 */
  .weui-uploader__file {
    position: relative;
  }
  .weui-uploader__bd {
    overflow: visible;
  }
  .delete-icon {
    position: absolute;
    width: 40rpx;
    height: 40rpx;
    background: #f43530;
    right: 0;
    top: -20rpx;
    border-radius: 40rpx;
    z-index: 5;
  }
  .delete-icon::before {
    position: absolute;
    content: "";
    width: 26rpx;
    height: 4rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
  /* 标签，赏金，联系方式 */
  .box {
    margin-top: 20px;
    .tag,
    .pay,
    .contact {
      color: #4dba8c;
      font-size: 18px;
      margin-left: 5px;
      vertical-align: middle;
      font-weight: bolder;
    }
    .tag-input {
      font-size: 16px;
      width: 45%;
      margin-left: 20%;
      border-bottom: 1px solid #ccc;
      padding-left: 30px;
      letter-spacing: 3px;
    }
    .tag-icon,
    .contact-icon,
    .pay-icon {
      margin-left: 10px;
      font-size: 24px;
      vertical-align: middle;
      color: #4dba8c;
    }
    .contact-icon {
      margin-left: 0;
      margin-right: 10px;
    }
    .pay-icon {
      color: rgb(252, 225, 72);
    }
    /* 赏金 */
    .pay-title {
      color: #f43530;
      font-size: 24px;
    }
    .pay-box {
      margin-top: 15px;
    }
    .pay-text {
      font-size: 14px;
      text-align: center;
      color: #ccc;
    }
    .pay_selected {
      background-color: #e7f7eb;
    }
  }

  /* 发布按钮 */
  .push-btn {
    display: block;
    width: 150px;
    margin: 50px auto;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    background-color: #4dba8c;
  }
}
</style>
