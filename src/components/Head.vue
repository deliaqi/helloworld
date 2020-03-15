
<template>
<div class="header">
  <el-row class="container">
    <el-col :span = "10" class="logo" >
      <div class="logo"><img src=../assets/moleqode.png height="28%" width="28%"></div>
    </el-col>
    <el-col :span="10" class="menu">
      <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        @select="handleSelect">
          <el-menu-item index="1" @click="toHome">首页</el-menu-item>
          <el-menu-item index="2" @click="toCourse">课程介绍</el-menu-item>
          <el-menu-item index="3" @click="toNews">码粒资讯</el-menu-item>
          <!-- <el-submenu index="3">
            <template slot="title">个人中心</template>
            <el-menu-item index="3-1" @click="userpage">个人信息</el-menu-item>
            <el-menu-item index="3-2" @click="orderCourse">预约课程</el-menu-item>
            <el-menu-item index="3-3" @click="myScratch">我的作品</el-menu-item>
          </el-submenu> -->
        </el-menu>
    </el-col>
    <el-col :span="2" class="wechat">
      <el-popover
        placement="bottom-start"
        title=""
        width="180"
        height="250"
        trigger="hover">
        <div>
          <img src=../assets/wechat-logo.png height="80%" width="80%">
        </div>
        <div class="wechat"><img src=../assets/wechat.png height="180" width="180"></div>
        <el-button slot="reference" icon="el-icon-thumb">关注我们</el-button>
      </el-popover>
    </el-col>

  </el-row>


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
    height: 60px;
    /*font-size: 20px !important;*/
    /*font-size: xx-large;*/
    /*background-color: #e5e9f2;*/

  }

/*  .el-menu--horizontal .el-menu .el-menu-item {
    float: none;
    height: 23px;
    line-height: 23px;
    width: auto;
    font-size: xx-large;
  }*/

  .logo {
    /*background-color: #545c64;*/
    /*margin-left: 50px;*/
    /*border: 1px solid #ddd;*/
  }

  .menu{
    float: left;
    /*margin-right: 100px;*/
    margin-top: 20px;
  }

  .wechat{
    float: left;
    margin-right: 100px;
    margin-top: 30px;
  }

  .el-menu-demo{
    /*float: left;*/
    /*margin-top: 20px;*/
    /*padding-top:20px;*/
    /*background-color: #545c64;*/
  }



</style>

