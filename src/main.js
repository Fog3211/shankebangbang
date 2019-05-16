import Vue from 'vue'
import App from './App'
import './style/app.css'
import 'mpvue-weui/src/style/weui.css';
import '../static/iconfont/iconfont.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
