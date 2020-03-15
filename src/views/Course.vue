<template>
  <div class="course">
    <!-- 头部 -->
    <Header></Header>
    <!-- 课程介绍 -->
    <CourseInfo></CourseInfo>

    <!--<div class="head_home">-->
      <!--<div class="head_center">-->
        <!--<router-link to="/login">登陆</router-link>-->
        <!--<a>注册</a>-->
      <!--</div>-->

    <!--</div>-->

  </div>
</template>

<script>
  import Header from '../components/Head';
  import CourseInfo from '../components/CourseInfo';
  import Login from '../components/Login';

  export default {
    components: {
      Header, Login, CourseInfo,
    },
  };

</script>





<style>

</style>
