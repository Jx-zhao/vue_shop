<template>
  <el-container class="home-centainer">
    <el-header>
      <div><img src="../assets/home_logo.png" alt=""><span>电商后台管理系统</span></div>
      <el-button type="info" @click="logout">退出</el-button></el-header>
    <el-container>
      <el-aside width="200px">
              <!-- default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" -->
    <el-menu
      background-color="#333744"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 一级菜单 -->
      <el-submenu index="1">
        <!-- 一级菜单模版 -->
        <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span>导航一</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item index="1-4-1">
                  <template slot="title">
          <!-- 图标 -->
          <i class="el-icon-location"></i>
          <!-- 文本 -->
          <span>二级菜单</span>
        </template>
          </el-menu-item>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="less" scoped>
.home-centainer{
  height: 100%;
}
.el-header {
  background-color: #373d41;
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
  background-color: #333744;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #eaedf1;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

</style>
