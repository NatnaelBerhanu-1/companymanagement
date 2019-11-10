<template>
  <div>
      <Header v-bind:add_link="''"/>
      <div class="container bg-white shadow p-5 mb-5 add-user">
          <h3 class="pt-3">Edit User</h3>
          <div class="alert alert-success d-none" id="alert" role="alert">
            updated successfully!!!
          </div>
          <form @submit="updateUser">
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
              <button type="submit" class="btn btn-danger">Update</button>
          </form>

      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Axios from 'axios';


export default {
    name: 'EditUser',
    components: {
        Header
    },
    data() {
        return {
            user: {},
            id: '',
            name: '',
            email: '',
            phonenum: '',
            password: '',
            role: ''
        }
    },
    methods: {
        updateUser(e) {
            e.preventDefault();
            Axios.put('http://localhost/companymgmt/public/index.php/api/user',
                {
                    name: this.name,
                    email: this.email,
                    phonenum: this.phonenum,
                    password: this.password,
                    role: this.role,
                    id: this.id
                }
            )
            .then(res => {
                console.log(res.data);
                document.getElementById("alert").classList.remove("d-none");
                document.getElementById("alert").classList.add("d-block"); 
                this.name=this.email=this.phonenum=this.password=this.role='';
            })
            .catch(err => console.log(err))
        },
        getUser(id){
            Axios.get('http://localhost/companymgmt/public/index.php/api/user/'+id)
            .then(res => {
                console.log(res.data);
                const { email, id, password, phone_num, role, username} = res.data;
                this.name = username;this.email = email; this.password = password; this.phonenum=phone_num; this.role=role;this.id=id
                
                })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.id  = this.$route.params.id;
        this.getUser(this.id);
    }

}
</script>

<style>

</style>