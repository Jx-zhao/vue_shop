import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',component:Login,
    name:'Login'
  },
  {
    path:'/',redirect: '/Login', 
  },
  {
    path:'/home',component:Home,
    name:'Home'
  },
]


const router = new VueRouter({
  routes
})
routesrouter.beforeEach((to, from, next) => {
  if(to.path === {name:'Login'}) return next();
  const tokenStr=window.sessionStorage.getItem('token');
  if(!tokenStr) return next({name:"Login"});
  next();
}) 


export default router;
