import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Users from "../components/user/Users.vue";
import Rights from "../components/power/Rights.vue";
import Roles from "../components/power/Roles.vue";
import Cate from "../components/goods/Cate.vue";
import GoodList from "../components/goods/List.vue";
import Params from "../components/goods/Params.vue";
import Order from "../components/order/Order.vue";
import Report from "../components/report/Report.vue";
import Add from "../components/goods/Add.vue";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',redirect: '/Login', 
  },
  {
    path:'/login',component: Login,
    name:'Login'
  },
  {
    path:'/home',component: Home,
    name:'Home',
    redirect: '/welcome', 
    children:[
      {path:'/welcome',component:Welcome},
      {path:'/users',component:Users},
      {path:'/rights',component:Rights},
      {path:'/roles',component:Roles},
      {path:'/categories',component:Cate},
      {path:'/goods',component:GoodList},
      {path:'/params',component:Params},
      {path:'/orders',component:Order},
      {path:'/reports',component:Report},
      {path:'/goods/add',component:Add},
    ]
  },
]


const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next();
  //获取token
  const tokenStr=window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  next();
}) 

export default router;
