import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from "./router";
import Element from "element-ui";
import "element-ui/lib/theme-default/index.css";
Vue.use(ElementUI,router,Element);//使用各大模块
new Vue({ 
  el: '#app',
  router,//加载路由
  render: h => h(App)
})
