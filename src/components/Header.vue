<template>
    <div class="container-fluid">
        <nav class="navbar p-3 mb-5">
            <div class="row">
                <router-link to="/" class="text-white ml-4"><strong>Company Management</strong></router-link>
                <router-link to="/admin" class="text-white ml-4">Companies</router-link>
                <router-link to="/user" class="text-white ml-4" v-show="show()">Users</router-link>
                <div class="dropdown" v-show="showevent()">
  <button class="btn btn-primary dropdown-toggle offset-9" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Event
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/movieEvent">Movie</a>
    <a class="dropdown-item" href="/bankEvent">Bank</a>
    <a class="dropdown-item" href="/schoolEvent">School</a>
  </div>
</div>
            </div>
            
            <div>
                
                
                <router-link v-bind:to="add_link" class="text-white mr-3">Add</router-link>
                <span @click="logout" class="text-white">Logout</span>

            
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        add_link: String
    }, 
    methods: {
        show() {
            console.log(window.localStorage.getItem('role')=== 'admin');
            return window.localStorage.getItem('role') === 'admin';
        },
        logout() {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('role');
            this.$router.push({path: '/'});
        },
        showevent(){
             return window.localStorage.getItem('role') === 'dispatcher';
        }
    }
}
</script>

<style scoped>
    span {
        cursor: pointer;
    }
    
    span:hover{
        text-decoration: underline;
    }
</style>