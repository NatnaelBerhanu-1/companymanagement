<template>
  <div class="container mt-4">
      <div class="row bg-white shadow-sm p-3">
          <h3 class="mb-4 col-md-12">Company List</h3>
          <div class="col-md-4">
              <p class="text-primary remove-filter" v-on:click="removeFilter"><strong><u> reset filter</u></strong></p>
              <div class="filter-holder mt-3 row">
                    <DataFilter class="col-md-4" v-bind:title="'name'" v-on:filter="filterTable" v-bind:companies="names"/>
                    <DataFilter class="col-md-4" v-bind:title="'city'" v-on:filter="filterTable" v-bind:companies="city"/>
                    <DataFilter class="col-md-4" v-bind:title="'services'" v-on:filter="filterTable" v-bind:companies="services"/>
                    <!-- <DataFilter class="col-md-3" v-bind:title="'status'" v-on:filter="filterTable" v-bind:companies="status"/> -->
              </div>
          </div>
          <div class="col-md-8">
                <div class="table-holder">
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <form @submit="filterCompanies">
                                <input v-on:input="filterCompany" v-on:focusout="hideAutoComplete" v-on:focus="removeFilter" v-model="searchText" type="text" class="form-control search-input" placeholder="search by name . . . .">
                                <div class="auto-complete position-absolute bg-white">
                                    <div v-for="company in filteredCompany" v-on:click="filterTable(newVal = {selectedVal: company.name, title:'name'})" v-bind:key="company.id" class="pl-2 p-1 rounded-bottom  border-right border-left border-bottom">{{company.name}}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <table class="table table-striped table-bordered table-responsive-xl">
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
                            <tr v-for="company in filteredCompanies" v-bind:key="company.id" @click="rowClicked(company)" data-toggle="modal" data-target="#exampleModalLong">
                                <th scope="row">{{ company.id }}</th>
                                <td>{{ company.name }}</td>
                                <td>{{ company.city }}</td>
                                <td>{{ company.services.slice(0, 25) }}</td>
                                <td> <span  v-bind:class="company.status === 'pending' ? 'badge-warning' : 'badge-success'" class="badge">{{ company.status }}</span> </td>
                                <td>
                                    <div v-if="show()">
                                        <font-awesome-icon class="text-danger mr-2 action-icon" v-on:click="removeCompany(company.id)" icon="trash"/>
                                        <router-link v-bind:to="'/edit/company/' + company.id"><font-awesome-icon class="text-primary action-icon" icon="pencil-alt"/></router-link>
                                        <font-awesome-icon class="text-success ml-2 action-icon" v-if="company.status === 'pending'" v-on:click="activateCompany(company.id)" icon="toggle-on"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
          </div>
      </div>

      

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title text-white">{{displayCompany.name}}</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-white">&times;</span>
                    </button>
                </div>
                <div class="modal-body row">
                    <h3 class="text-primary col-md-12"></h3>
                    <div class="col-md-6">
                        <strong> serivces</strong><br/>{{displayCompany.services}}<br/>
                        <strong> ketema</strong><br/>{{displayCompany.kifle_ketema}}<br/>
                        <strong> city</strong><br/>{{displayCompany.city}}<br/>
                        <strong> sefer</strong><br/>{{displayCompany.sefer}}<br/>
                        <strong> kebele</strong><br/>{{displayCompany.kebele}}<br/>
                    </div>
                    <div class="col-md-6">
                        <strong> direction</strong> <br/>{{displayCompany.direction}}<br/>
                        <strong> houseNum </strong> <br/>{{displayCompany.house_num}}<br/>
                        <strong> phoneNum </strong><br/>{{displayCompany.phone_num}}<br/>
                        <strong> pobox </strong><br/>{{displayCompany.pobox}}<br/>
                        <strong> status </strong><br>
                        <span  v-bind:class="displayCompany.status === 'pending' ? 'badge-warning' : 'badge-success'" class="badge">{{ displayCompany.status }}</span>
                    </div>
                    
                </div>
            </div>
            </div>
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
        filteredCompanies: Array
    },
    computed: {
        names: function() {
            var data = [];
            var uniqueData = [];
            this.companies.filter(function(item, pos){
                if(data.indexOf(item.name) === -1){
                    data.push(item.name);
                    uniqueData.push({name:item.name.slice(0, 25), id:item.id});
                }
            });
            var ids = null;
            return uniqueData;
        },
        services: function(){
            var data = [];
            var uniqueData = [];
            this.companies.filter(function(item, pos){
                if(data.indexOf(item.services) === -1){
                    data.push(item.services);
                    uniqueData.push({name:item.services.slice(0, 25), id:item.id});
                }
            });
            var ids = null;
            return uniqueData;
        },
        city: function(){
            var data = [];
            var uniqueData = [];
            this.companies.filter(function(item, pos){
                if(data.indexOf(item.city) === -1){
                    data.push(item.city);
                    uniqueData.push({name:item.city.slice(0,25), id:item.id});
                }
            });
            var ids = null;
            return uniqueData;
        },
        status: function(){
            return [{name: 'active', id:1}, {name: 'pending', id: 2}]
        }
    },
    data() {
        return {
            row: 0,
            searchText: '',
            filteredCompany: [],
            displayCompany:{}
        }
    },
    methods: {
        hideAutoComplete(){
            console.log("focus lost");
            this.filteredCompany = [];
        },
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
            this.filteredCompany = this.companies.filter(el => el.name.toLowerCase().includes(this.searchText.toLowerCase()));
            //console.log(this.filteredCompany);
        },
        removeCompany(id) {
            this.$emit('remove-company', id);
        },
        activateCompany(id) {
            this.$emit('activate-company', id);
        },
        rowClicked(company){
            this.displayCompany = company;
            console.log(company);
        },
        filterCompanies(e){
            e.preventDefault();
            this.filterTable({selectedVal: this.searchText, title:'name'});
        }
    }
}
</script>

<style>
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

    .auto-complete > div{
        width: 100%;
    }

    .search-input:enabled + div {
        display: block;
        width: 90%;
    }

    .table-holder{
        margin-bottom: 50px;
    }

    tr{
        max-height: 50px !important;
        cursor: default;
    }

    .modal-dialog{
        width: 700px;
    }


    .filter-holder *{
        margin-bottom: 15px;
    }

    .remove-filter{
        cursor: pointer;
    }
    
    .modal-header{
        border-bottom: none!important;
        background: url('../assets/wave.svg') no-repeat;
        background-size: cover;
    }

    @media only screen and (max-width: 700px){
        .modal-dialog{
            width: 450px;
            margin: auto;
        }
    }

</style>