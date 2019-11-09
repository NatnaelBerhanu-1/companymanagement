<template>
  <div class="container-fluid home d-flex flex-column align-items-center justify-content-center">
      <h1>Welcome to Company management system</h1><br>
      <button class="btn btn-outline-warning text-white" @click="login">Login</button>
  </div>
</template>

<script>
export default {
    methods: {
        login() {
            this.$router.push({path: '/login'});
        }
    }
}
</script>

<style scoped>
    .home{
        height: 100vh;
        background: #222222;
    }
    h1{
        color: #ffffff;
    }
    .btn{
        width: 200px;
        padding: 10px;
        border-radius: 20px;
    }
</style>