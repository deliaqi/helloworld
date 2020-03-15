<template>

    <div class="login_content">
      <p>
        登录
      </p>
      <!--<el-input placeholder="请输入用户名"></el-input>-->
      <!--<el-input placeholder="请输入密码" type="password"></el-input>-->

      <el-form ref="userinfo" :model="userinfo" labelWidth="80px">
        <el-form-item prop="username" label="账号">
          <el-input v-model="userinfo.username" placeholder=""></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="userinfo.password" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">提交</el-button>
        </el-form-item>

      </el-form>


    </div>

</template>

<script>
//  import Header from '../components/Head';
//  import ElForm from '../../node_modules/element-ui/packages/form/src/form.vue';
//  import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item.vue';
//  import ElButton from '../../node_modules/element-ui/packages/button/src/button.vue';
//  import ElInput from '../../node_modules/element-ui/packages/input/src/input.vue';

  export default {
    name: 'Login',
    data() {
      return {
        userinfo: {
          username: 'admin',
          password: 'admin',
        },
        isLoging: false,
        apiUrl: 'http://127.0.0.1:8090/logintest',
      };
    },
//    components: {
//      Header },
    methods: {
      // 登录逻辑
      login() {
        // this.toLogin();
        this.$router.push({ path: '/center' });
        console.log('login successfully!');
      },
      toLogin() {
//        this.$http({
//          method: "post",
//          url: this.apiUrl,
//          data: this.userinfo,
//        )}.then((response) => {
//          console.log(response.body);
//        });
        this.$http({
          url: this.apiUrl,
          method: 'POST',
//          params: this.userinfo,
          body: this.userinfo,
        }).then((response) => {
          console.log(response.status);
          this.$router.push({ path: '/center' });
        });
      },
    },
  };
</script>

<style>
  .header{
    position: fixed;
    top: 0px;
    width: 100%;
    color: #323a45;
  }

  .login_content {
    text-align: center;
    margin-top: 150px;
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }

  .login_content > .el-input {
    margin: 5px;
  }

  .login_content > .el-button {
    width: 100%;
    margin: 13px 13px;
  }
</style>


