<template>
  <div class="add-page">
    <div ref="addForm">
      <!-- 标题部分 -->
      <input type="text" placeholder="标题" class="title" v-model="add_form.title" />
      <!-- 文字描述部分 -->
      <div class="weui-cells weui-cells_after-title description-box">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea placeholder="请添加具体描述（限120字）" v-model="add_form.description" />
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
      <div class="box tag-box">
        <div class="icon-box">
           <span class="iconfont icon-biaoqian tag-icon"></span>
           <label for="tag" class="tag">标签</label>
        </div>
        <ul class="tag-group">
          <li v-for="(item,index) in add_form.tag" :key="index" class="tag-item" @click="delTag(index)">{{item}}</li>
        </ul>
        <Button class="add-tag-btn" @click="addTag" :disabled="add_form.tag.length>=3">添加标签</Button>
      </div>
      <!-- 发布类型 -->
      <div class="box type-box">
        <div class="icon-box">
           <span class="iconfont icon-leixing type-icon"></span>
           <label for="type" class="type">类型</label>
        </div>
        <div class="type-info-box">
          <span class="type-info">{{add_form.switchValue===false?"我需要帮助":"我是牛人"}}</span>
          <div class="switch-box">
            <mp-switch @change="switchChange"></mp-switch>
          </div>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="box" style="padding:10px;">
        <span class="iconfont icon-lianxifangshi contact-icon"></span>
        <label for="contact" class="contact">联系方式</label>
        <mp-input placeholder="请输入11位手机号" v-model="add_form.contact" type="number" maxlength="11"></mp-input>
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
     <Button class="push-btn" @click="handlePush">发布</Button>
     <!-- 弹窗提示 -->
     <mp-toast :type="toast.toastType" v-model="toast.showToast" :content="toast.content"></mp-toast>
     <!-- 标签选择 -->
     <mp-picker ref="mpPicker" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mp-picker>
  </div>
</template>

<script>
import mpInput from "mpvue-weui/src/input";
import mpToast from "mpvue-weui/src/toast";
import mpPicker from "mpvue-weui/src/picker";
import mpSwitch from "mpvue-weui/src/switch";
export default {
  components: {
    mpToast,
    mpInput,
    mpPicker,
    mpSwitch
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
        switchValue: false
      },
      toast: {
        toastType: "error",
        showToast: false,
        content: ""
      },
      pickerValueArray: [
        {
          label: "寻物启事",
          value: "寻物启事"
        },
        {
          label: "社交活动",
          value: "社交活动"
        },
        {
          label: "资源共享",
          value: "资源共享"
        },
        {
          label: "学习互助",
          value: "学习互助"
        },
        {
          label: "心得交流",
          value: "心得交流"
        },
        {
          label: "竞赛组队",
          value: "竞赛组队"
        },
        {
          label: "其他",
          value: "其他"
        }
      ]
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
    switchChange() {
      this.add_form.switchValue = !this.add_form.switchValue;
    },
    handlePush() {
      if (!this.checkForm()) {
        return;
      }
      const open_id = wx.getStorageSync("open_id");
      // console.log(this.add_form.files);
      wx.uploadFile({
        url: "https://wx.api.fog3211.com/pic/uploadImage?itemId=122",
        filePath: this.add_form.files[0],
        name: "uploadFile", // 文件对应的 key ,(后台接口规定的关于图片的请求参数)
        header: {
          "content-type": "multipart/form-data"
        }, // 设置请求的 header
        formData: {}, // HTTP 请求中其他额外的参数
        success: res => {
          console.log("success");
        },
        fail: res => {}
      });
      wx.request({
        url: "https://wx.api.fog3211.com/item",
        method: "POST",
        data: {
          title: this.add_form.title,
          content: this.add_form.description,
          price: this.pay_arr[this.select_pay_index],
          open_id,
          contact: this.add_form.contact,
          sumOfneed: 1,
          isNeed: this.add_form.switchValue === false ? 0 : 1,
          tag1: this.add_form.tag[0],
          tag2: this.add_form.tag[1] || "",
          tag3: this.add_form.tag[2] || ""
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: res => {
          if (res.statusCode == 200) {
            if (res.data.err === "ok") {
              this.toast = {
                toastType: "success",
                showToast: true,
                content: "添加成功"
              };
              // 清空表单
              this.select_pay_index = -1;
              this.add_form = {
                title: "",
                description: "",
                files: [],
                tag: [],
                contact: ""
              };
              setTimeout(() => {
                wx.navigateBack({
                  delta: 1
                });
              }, 1000);
            }
            // console.log(res);
          } else {
            // console.log(res.errMsg);
          }
        }
      });
    },
    checkForm() {
      const open_id = wx.getStorageSync("open_id");
      if (!open_id) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请先登录"
        };
        return;
      }

      const { title, description, files, tag, contact } = this.add_form;
      if (title === "" || title.trim() === "") {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "标题不能为空"
        };
        return false;
      } else if (description === "" || description.trim() === "") {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "具体描述不能为空"
        };
        return false;
      } else if (tag.length === 0) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请至少添加一个标签"
        };
        return false;
      } else if (this.select_pay_index === -1) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请选择合适的报酬"
        };
        return false;
      } else if (!/^1[34578]\d{9}$/.test(contact)) {
        this.toast = {
          toastType: "error",
          showToast: true,
          content: "请输入正确的手机号"
        };
        return false;
      } else {
        return true;
      }
    },
    delTag(index) {
      this.add_form.tag.splice(index, 1);
    },
    addTag() {
      this.$refs.mpPicker.show();
    },
    onConfirm(e) {
      // console.log(e);
      if (this.add_form.tag.includes(e.label)) {
        return;
      }
      this.add_form.tag.push(e.label);
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
    .type,
    .pay,
    .contact {
      color: #4dba8c;
      font-size: 18px;
      margin-left: 5px;
      vertical-align: middle;
      font-weight: bolder;
    }

    .tag-icon,
    .type-icon,
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
  .tag-box {
    padding: 0 10px;
    text-align: center;
    .icon-box {
      text-align: left;
    }
    .tag-group {
      width: 90%;
      margin: 10px auto 20px;
      display: flex;
      justify-content: space-around;
      .tag-item {
        padding: 5px 10px;
        border: 1px solid #4dba8c;
        border-radius: 10%;
        color: #4dba8c;
      }
    }
    .add-tag-btn {
      width: 85%;
    }
  }
  .type-box {
    .type-icon {
      color: #4dba8c;
    }
    .type-info-box {
      width: 80%;
      margin: 10px auto;
      position: relative;

      .type-info {
        font-size: 20px;
        color: rgb(95, 93, 93);
      }
      .switch-box {
        display: inline-block;
        position: absolute;
        right: 10px;
      }
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
