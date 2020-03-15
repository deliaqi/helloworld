<!-- 图片轮播组件 -->
<template>

<div class="carousel-home">
 <el-carousel :interval="5000" arrow="always" height="500px">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src='../assets/pic1.jpeg' width="900" height="450">
      <!--<h3>{{ item }}</h3>-->
    </el-carousel-item>
  </el-carousel>

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
    height: 500px;
    margin-top: 100px;
    border: 1px solid #ddd;
  }
  .carousel-home.el-carousel-item{

  }


</style>
