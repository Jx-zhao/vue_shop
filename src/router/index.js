import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue";
import Less from "less";

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',component:Login,
    name:'Login'
  },
  {
    path:'/',redirect: '/Login', 
  }
]

const router = new VueRouter({
  routes
})

export default router
