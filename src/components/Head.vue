<!-- 头部组件样式 -->

<template>
<div class="header">
  <el-row class="container">
    <el-col :span = "1" class="logo" >
      <img src=../assets/bcwt.png height="75" width="150">
    </el-col>
    <el-col :span="5" class="menu">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect">
          <el-menu-item index="1" @click="toHome">首页</el-menu-item>
          <el-menu-item index="2" @click="toCourse">课程介绍</el-menu-item>
          <el-submenu index="3">
            <template slot="title">个人中心</template>
            <el-menu-item index="3-1" @click="userpage">个人信息</el-menu-item>
            <el-menu-item index="3-2" @click="orderCourse">预约课程</el-menu-item>
            <el-menu-item index="3-3" @click="myScratch">我的作品</el-menu-item>
          </el-submenu>
        </el-menu>
    </el-col>

  </el-row>

<!-- 
      <div class="logo">
        <img src=../assets/bcwt.png height="75" width="150">
      </div>

      <div class="menu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="toHome">首页</el-menu-item>
          <el-menu-item index="2" @click="toCourse">课程介绍</el-menu-item>
          <el-submenu index="3">
            <template slot="title">个人中心</template>
            <el-menu-item index="3-1" @click="userpage">个人信息</el-menu-item>
            <el-menu-item index="3-2" @click="orderCourse">预约课程</el-menu-item>
            <el-menu-item index="3-3" @click="myScratch">我的作品</el-menu-item>
          </el-submenu>
        </el-menu>
      </div> -->

</div>
</template>

<script>
export default {
  name: 'Head',
  methods: {
    toHome() {
      this.$router.push({ path: '/' });
    },
    toCourse() {
      this.$router.push({ path: '/course' });
    },
    userpage() {
      this.$router.push({ path: '/login' });
    },
    orderCourse() {
      this.$router.push({ path: '/login' });
    },
    myScratch() {
      this.$router.push({ path: '/login' });
    },
  },
};
</script>

<style>
  .header {
    position: fixed;
    top: 0px;
    width: 100%;
    padding-top:10px; /*inside*/
    padding-bottom:20px;
    margin-left: 0px;
    margin-right: 0px;
    border-bottom: 1px solid #ddd;
    /*display: flex;*/
    /*justify-content: space-between;*/
    height: 50px;
    /*background-color: #e5e9f2;*/

  }

  .header.logo {
    /*margin-left: 50px;*/
  }

  .menu{
    float: right;
    margin-right: 100px;
  }

    .el-menu-demo{
    margin-top: 10px;
    /*background-color: #545c64;*/

  }



</style>

