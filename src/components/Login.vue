<template>
      <div class="text-center">
          <div class="form-holder p-5 shadow">
            <h1>Login</h1>
            <p class="text-danger text-bold d-none" id="login-alert"><strong> login failed try again </strong></p>
            <form @submit="login" class="" id="login-form">
              <div class="form-group" >
                <label for="emailInput">Email address</label>
                <input type="text" v-model="username" class="form-control" id="emailInput"  placeholder="Enter username">
              </div>
              <div class="form-group">
                <label for="passwordInput">Password</label>
                <input type="password" v-model="password" class="form-control" id="passwordInput" placeholder="Enter password">
              </div>
              <button type="submit" class="btn form-control btn-primary" value="submit">Login</button>
            </form>
          </div>
      </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            if(this.username === "nati" && this.password === "password")
            {
                console.log('logged in');
                window.localStorage.setItem('user',"1234");
                this.$router.push({ path: '/admin'})
            }else{
                 document.getElementById("login-alert").classList.remove("d-none");
                 document.getElementById("login-alert").classList.add("d-block");
            }
        }
    }
}
</script>

<style scoped>
    *{
      box-sizing: border-box;
    }

    #login-form{
        width: 100%;
        text-align: left;
    }

    .form-holder{
        background: #ffffff;
        max-width: 400px;
        margin: auto;
        margin-top: 100px;
    }

    .form-holder *{
      width: 100%;
      max-width: 400px;
    }
</style> 