import Vue from 'vue';
import Router from 'vue-router';
import page1 from "../components/common/page1.vue";
import page2 from "../components/common/page2.vue";
Vue.use(Router);//使用路由模块

export default new Router({
    routes: [
        {  
           path:"/" ,
           redirect: "/page1",
           component:page1 //使用重定向，默认跳转到page1
        },
        {
            path: '/page1',
            component:page1,
            meta: { title: '自述文件' },
        },
        {
            path: '/page2',
            component:page2,
            meta: { title: '自述文件' },
        }
    ]
})

