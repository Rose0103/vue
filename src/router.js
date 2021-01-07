import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/login.vue'
import Home from './components/home.vue'


Vue.use(Router)

const router = new Router({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
    ]
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to 表示即将要进入的页面
    //from 表示从哪里路径跳转而来
    //next 是一个函数，表示放行
    //      next() 放行        next('/login') 强制跳转

    if (to.path == '/login') return next();

    //获取token
    // const tokenStr = window.sessionStorage.getItem('token');

    //如果token不存在，就是未登录，就强制跳转到登录页面
    // if (!tokenStr) return next('/login');

    //否则放行
    next();

})

export default router;