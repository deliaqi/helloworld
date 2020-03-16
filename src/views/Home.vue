<template>
  <div class="home">
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播组件 -->
    <Carousel></Carousel>
    <!-- <NewsInfo></NewsInfo> -->

    <!-- <Footer></Footer> -->

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
  import Carousel from '../components/Carousel';
  import Login from '../components/Login';
  import Footer from '../components/Footer';
  import NewsInfo from '../components/NewsInfo';

  export default {
    components: {
      Header, Login, Carousel, Footer,NewsInfo,
    },
  };

</script>





<style>

</style>
