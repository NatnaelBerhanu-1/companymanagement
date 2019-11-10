<template>
    <div class="container-fluid">
        <nav class="navbar p-3 mb-5">
            <div>
                <router-link to="/" class="text-white"><strong>Company Management</strong></router-link>
                <router-link to="/admin" class="text-white ml-4">Companies</router-link>
                <router-link to="/user" class="text-white ml-4" v-show="show()">Users</router-link>
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