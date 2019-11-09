<template>
    <div class="container-fluid">
        <nav class="navbar p-3 mb-5">
            <div>
                <router-link to="/admin" class="text-white"><strong>Company Management</strong></router-link>
                <router-link to="/admin" class="text-white ml-4">Home</router-link>
            </div>
            
            <div>
                <router-link to="/add" class="text-white mr-3">Add</router-link>
                <span @click="logout" class="text-white">Logout</span>
            </div>
            
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            window.localStorage.removeItem('user');
            this.$router.push({path: '/login'});
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