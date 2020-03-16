<template>
  <div class="news">
<!--     <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <CourseInfo></CourseInfo>
      </el-main>
    </el-container> -->
    
    <Header></Header>
    <NewsInfo></NewsInfo>
  </div>
</template>

<script>
  import Header from '../components/Head';
  import NewsInfo from '../components/NewsInfo';
  import Login from '../components/Login';

  export default {
    components: {
      Header, Login, NewsInfo,
    },
  };

</script>


<style>

</style>
