<template>
    <div class="home">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 banner-left">
                    <div>
                        <h1 class="text-secondary">Welcome to Company management system</h1><br>
                        <button class="btn btn-warning text-white" @click="login">Login</button>
                    </div>
                    
                </div>
                <div class="col-md-6">
                    <img src="../assets/undraw_file_searching_duff.svg" class="banner-img" alt="bannner image">
                </div>
            </div>
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
        min-height: 100vh;
        background: #f8f8f8;
    }

    .btn{
        border-radius: 20px;
        width: 200px;
        height: 40px;
        font-size: 18px;
        font-weight: 500;
    }

    .container{
        height: 100vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
    }

    .banner-left{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .banner-left>div{
    }

    .banner-img{
        width: 400px;
    }

</style>