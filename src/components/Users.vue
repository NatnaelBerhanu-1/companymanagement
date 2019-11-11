<template>
  <div>
      <Header v-bind:add_link="'/add/user'"/>
      <div class="container bg-white">
        <h3 class="mb-4 p-3">Users List</h3>
        <div class="row mb-3">
            <div class="col-md-4">
              <form @submit="filterUsers">
                <input v-on:input="filterUser" v-on:focus="removeFilter" v-model="searchText" type="text" class="form-control search-input p-3" placeholder="search by name . . . .">                
                <div class="auto-complete position-absolute bg-white">
                    <div v-for="user in filteredUsers" v-on:click="filterTable" v-bind:key="user.id" class="pl-2 p-1 rounded-bottom  border-right border-left border-bottom">{{user.username}}</div>
                </div>
              </form>
            </div>
            <div class="col-md-4">
              <p class="text-primary remove-filter" v-on:click="removeFilter"><strong><u> reset filter</u></strong></p>
            </div>
        </div>
        <table class="table table-striped table-bordered table-responsive-xl">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone number</th>
              <th><span><font-awesome-icon class="text-info mr-2 action-icon" v-on:click="showPassword" icon="eye"/></span>Password</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.id">
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone_num }}</td>
              <td>{{ show ? user.password: "*".repeat(user.password.length) }}</td>
              <td> 
                <span v-bind:class="user.role === 'admin' ? 'badge-primary' : 'badge-warning'" class="badge">{{ user.role }}</span>              
              </td>
              <td>
                <router-link v-bind:to="'/edit/user/'+ user.id"><font-awesome-icon class="text-primary ml-2 action-icon" icon="pencil-alt"/></router-link> 
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Axios from 'axios';

export default {
  name: 'Users',
  components: {
    Header
  },
  data() {
    return {
      users: [],
      show: false,
      searchText: '',
      filteredUsers: []
    }
  },
  methods: {
    filterUser(){
      this.filteredUsers = this.users.filter(el => el.username.includes(this.searchText));
      console.log(this.filteredUsers);
    },
    filterTable(){
      this.users = this.users.filter(el =>el.username.includes(this.searchText));
      this.searchText = '';
      this.filteredUsers = [];
    },
    removeFilter(){
      this.getUsers();
    },
    filterUsers(e){
      e.preventDefault();
      this.filterTable();
    },
    getUsers() {
      Axios.get('http://localhost/companymgmt/public/index.php/api/users')
      .then(res => this.users = res.data)
      .catch(err => console.log(err))
    },
    showPassword(){
      this.show = !this.show;
    }
  },
  created() {
    this.getUsers();
    this.filteredUsers = this.users;
  }
}
</script>

<style scoped>
  .container{
    height: 100vh;
    margin-bottom: 100px;
  }

  .remove-filter{
    line-height: 40px;
  }
</style>