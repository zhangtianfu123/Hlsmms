import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//引入
import login from './views/login.vue'
Vue.use(Router)

export default new Router({
  //路由添加
  routes: [
    {
      // 主页
      path: '/',
      name: 'home',
      component: Home
    },
    // 用户添加
    {
      path: '/useradd',
      component: () => import(/* webpackChunkName: "about" */ './views/userAdd.vue')
    },
    // 登录页面
    {
      path: '/login',
      component: login
    },
    //用户列表
    {
      path: '/userlist',
      component: () => import(/* webpackChunkName: "about" */ './views/userList.vue')
    },
    //用户密码修改
    {
      path: '/userpwd',
      component: () => import(/* webpackChunkName: "about" */ './views/userPwd.vue')
    },
    //添加管理
    {
      path: '/append',
      component: () => import(/* webpackChunkName: "about" */ './views/append.vue')
    },


  ]
})
