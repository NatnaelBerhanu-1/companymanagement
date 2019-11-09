<template>
  <div class="container mt-4">
      <div class="table-holder bg-white shadow-sm p-3">
            <h3 class="mb-4">Company List</h3>
            <div class="row mb-3">
                <div class="col-md-4">
                    <input v-on:input="filterCompany" v-on:focus="removeFilter" v-model="searchText" type="text" class="form-control search-input" placeholder="search by name . . . .">
                    <div class="auto-complete position-absolute bg-white">
                        <div v-for="company in filteredCompany" v-on:click="filterTable(newVal = {selectedVal: company.name, title:'name'})" v-bind:key="company.id" class="pl-2 p-1 rounded-bottom  border-right border-left border-bottom">{{company.name}}</div>
                    </div>
                    
                </div>
                
            </div>
            
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Company Name</th>
                        <th>City</th>
                        <th>Services</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <b> #</b>
                        </td>
                        <td>
                            <DataFilter v-bind:title="'name'" v-on:filter="filterTable" v-bind:companies="companies"/>
                        </td>
                        <td>

                        </td>
                        <td>
                            <DataFilter v-bind:title="'city'" v-on:filter="filterTable" v-bind:companies="companies"/>
                        </td>
                        <td>
                            <DataFilter v-bind:title="'services'" v-on:filter="filterTable" v-bind:companies="companies"/>
                        </td>
                        <td>
                            <button class="btn btn-outline-primary" v-on:click="removeFilter">reset filter</button>
                        </td>
                        
                    </tr>
                    <tr v-for="company in companies" v-bind:key="company.id">
                    <th scope="row">1</th>
                    <td>{{ company.name }}</td>
                    <td>{{ company.city }}</td>
                    <td>{{ company.services }}</td>
                    <td v-bind:class="company.status === 'pending' ? 'badge-warning' : 'badge-success'" class="badge p-1 ml-3 mt-3">{{ company.status }}</td>
                    <td>
                        <div v-if="show()">
                            <font-awesome-icon class="text-danger mr-4 action-icon" v-on:click="removeCompany(company.id)" icon="trash"/>
                            <router-link v-bind:to="'/edit/' + company.id"><font-awesome-icon class="text-primary action-icon" icon="file"/></router-link>
                            <font-awesome-icon class="text-success ml-4 action-icon" v-if="company.status === 'pending'" v-on:click="activateCompany(company.id)" icon="toggle-on"/>
                        </div>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
import DataFilter from './DataFilter.vue';
import Router from 'vue-router';

export default {
    name: 'Company',
    components: {
        DataFilter
    },
    props: {
        companies: Array,
    },
    data() {
        return {
            searchText: '',
            filteredCompany: []
        }
    },
    methods: {
        show() {
            console.log(window.localStorage.getItem('role'));
            return window.localStorage.getItem('role') === 'admin';
        },
        filterTable(newVal) {
            this.$emit('filter', newVal);
            this.filteredCompany = [];
            this.searchText = '';
        },
        removeFilter() {
            console.log('reseting');
            this.$emit('resetFilter');
        },
        filterCompany() {
            //console.log(this.searchText);
            this.filteredCompany = this.companies.filter(el => el.name.includes(this.searchText));
            //console.log(this.filteredCompany);
        },
        removeCompany(id) {
            this.$emit('remove-company', id);
        },
        activateCompany(id) {
            this.$emit('activate-company', id);
        }
    }
}
</script>

<style scoped>
    .auto-complete{
        width: 92%;
        z-index: 1000;
        display: none;
    }

    .action-icon{
        cursor: pointer;
    }

    .auto-complete:hover{
        display: block;
    }

    .auto-complete > div:hover {
        background: #f0f0f0;
    }

    .search-input:enabled + div {
        display: block;
    }

    .table-holder{
        margin-bottom: 50px;
    }

    tr{
        max-height: 50px !important;
    }

</style>