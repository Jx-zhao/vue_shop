<template>
  <el-container class="home-centainer">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/home_logo.png" alt="" /><span
          >电商后台管理系统</span
        >
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
                text-color="#fff"
                background-color="#333744" -->
        <el-menu
          active-text-color="#029ce1"
          unique-opened
          :collapse = "isCollapse"
          :collapse-transition = "false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单模版 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import {data} from "./Welcome.vue";
export default {
  data() {
    return {
      //左侧菜单数据
      menulist: [],
      iconsObj: {
        '125': 'el-icon-s-custom',
        '103': 'el-icon-s-tools',
        '101': 'el-icon-s-shop',
        '102': 'el-icon-s-order',
        '145': 'el-icon-s-platform'
      },
      //是否折叠
      isCollapse: false,
      //被激活的地址
      activePath:''
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
    
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push({ name: 'Login' })
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    },
    //点击按钮,切换菜单的折叠与展开
    toggleCollapse(){
      this.isCollapse = !this.isCollapse;
    },
    //保存链接的激活状态
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath);
      this.activePath = activePath;
    },
  }
}
</script>

<style lang="less" scoped>
.home-centainer{
  height: 100%;
}
.el-header {
  background: url('../assets/zhiganbg.png');
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div{
    display: flex;
    align-items: center;
    img{
      width: 40px;
      height: 40px;
      margin:0 15px;
    }
  }
}

.el-aside {
  background:url(../assets/zhiganbg.png)  ;
  background-size: 200px;
  .el-menu{
    border-right: none;
    .el-menu-item{
      color:#fff;
    }
    .el-menu-item:hover{
      color:#029ce1;
    }
    .el-menu-item:hover i{
      color:#029ce1;
    }
    
  }
}
.el-main {
  background-color: #eaedf1;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-submenu__title{
  color:aliceblue;
}
.el-submenu__title:hover{
  background-color: rgba(255, 255, 255, 0.6);
}

.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
<style>
.el-submenu__title{
  color:aliceblue !important;
}
.el-submenu__title:hover{
  color: #666 !important;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>