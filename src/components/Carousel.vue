<!-- 图片轮播组件 -->
<template>

<div class="carousel-home">
 <el-carousel :interval="4000" arrow="always" height="500px">
    <el-carousel-item v-for="item in 1" :key="item">
      <img src='../assets/pic1.jpeg' width="70%" height="100%">
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <img src='../assets/img/intro2.jpeg' width="70%" height="100%">
    </el-carousel-item>
    <el-carousel-item v-for="item in 1" :key="item">
      <img src='../assets/img/news1.jpeg' width="70%" height="100%">
    </el-carousel-item>
  </el-carousel>
  <div class="home-pics">
    <div style="border: 1px solid #ddd">
      <img src='../assets/img/intro1.jpeg' width="100%" height="100%">
    </div>
    <div style="border: 1px solid #ddd">
      <img src='../assets/img/intro2.jpeg' width="100%" height="100%">
    </div>
    <div style="border: 1px solid #ddd">
      <img src='../assets/img/intro3.jpeg' width="100%" height="100%">
    </div>
    <div style="border: 1px solid #ddd">
      <img src='../assets/img/intro4.jpeg' width="100%" height="100%">
    </div>
    <div><img style="margin-top: 20px; margin-bottom: 30px" src=../assets/footer.png height="50%" width="50%"></div>
  </div>

</div>


</template>

<script>
  export default {
    name: 'Carousel',
    data: {
      slideList: [
        {
          desc: 'pic',
          image: '../assets/pic1.png',
        },
      ],
    },
  };

</script>

<style>
  .carousel-home{
    position: relative;
    height: 500px;
    margin-top: 150px;
    /*border: 1px solid #ddd;*/
    z-index: 1;
  }
  .home-pics{
    position: absolute;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: 50px;
    /*border: 1px solid #ddd;*/
  }
  .carousel-home.el-carousel-item{

  }


</style>
