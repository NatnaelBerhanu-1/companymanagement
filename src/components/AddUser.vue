<template>
  <div>
      <Header v-bind:add_link="''"/>
      <div class="container bg-white shadow p-5 mb-5 add-user">
          <h3 class="pt-3">Add User</h3>
          <div class="alert alert-success d-none" id="alert" role="alert">
            added successfully!!!
          </div>
          <form @submit="addUser">
              <div class="form-group">
                  <label >Username</label>
                  <input type="text" v-model="name" class="form-control" required>
              </div>
              <div class="form-group">
                  <label >Email</label>
                  <input type="email" v-model="email" class="form-control" required>
              </div>
              <div class="form-group">
                  <label >Phone number</label>
                  <input type="text" v-model="phonenum" class="form-control" required>
              </div>
              <div class="form-group">
                  <label >Password </label>
                  <span class="text-primary"> default password is "password"</span>
                  <input type="text" placeholder="password" v-model="password" class="form-control">
              </div>
              <div class="form-group">
                  <label >Role</label>
                  <select v-model="role" class="form-control" required>
                      <option value="" selected>select role</option>
                      <option value="admin">Admin</option>
                      <option value="dispatcher">Dispatcher</option>
                  </select>
              </div>
              <button type="submit" class="btn btn-danger">Add</button>
          </form>

      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Axios from 'axios';


export default {
    name: 'AddUser',
    components: {
        Header
    },
    data() {
        return {
            name: '',
            email: '',
            phonenum: '',
            password: '',
            role: ''
        }
    },
    methods: {
        addUser(e) {
            e.preventDefault();
            if(this.password === ''){
                this.password = 'password';
            }

            const newUser = {
                name: this.name,
                email: this.email,
                phonenum: this.phonenum,
                password: this.password,
                role: this.role
            }

            Axios.post('http://localhost/companymgmt/public/index.php/api/user/add',
                newUser
            )
            .then(res => {
                console.log(res.data);
                if(res.data.message == "success"){
                    document.getElementById("alert").classList.remove("d-none");
                    document.getElementById("alert").classList.add("d-block"); 
                    this.name=this.email=this.phonenum=this.password=this.role='';
                }
            })
            .catch(err => console.log(err))
        }
    }

}
</script>

<style scoped>
    .add-user{
        max-width: 900px;
    }
</style>