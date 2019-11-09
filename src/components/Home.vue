<template>
    <div class="home">
        <div class="container-fluid d-flex flex-column align-items-center justify-content-center">
            <h1>Welcome to Company management system</h1><br>
            <button class="btn btn-outline-warning text-white" @click="login">Login</button>
        </div>
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
        width: 100%;
        height: 100vh;
        background: #0099ff;
    }
    h1{
        color: #ffffff;
    }

    .btn{
        width: 250px;
        padding: 10px;
        border-radius: 50px;
        font-weight: bold;
        font-size: 18px;
    }

    .container-fluid{
        position: absolute;
        top: 200px;
    }
</style>