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
                        <th>P.O.Box</th>
                        <th>City</th>
                        <th>Services</th>
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
                    <tr v-for="company in companies" v-bind:key="company.id" @click="rowClicked(company)" data-toggle="modal" data-target="#exampleModalLong">
                    <th scope="row">1</th>
                    <td >{{ company.name }}</td>
                    <td>{{ company.pobox }}</td>
                    <td>{{ company.city }}</td>
                    <td>{{ company.services}}</td>
                    <td>
                        <font-awesome-icon class="text-danger mr-4 action-icon" v-on:click="removeCompany(company.id)" icon="trash"/>
                        <router-link v-bind:to="'/edit/' + company.id"><font-awesome-icon class="text-primary action-icon" icon="file"/></router-link> </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <h3 class="text-primary">{{displayCompany.name}}</h3>
          <strong> serivces</strong><br/>{{displayCompany.services}}<br/>
          <strong> ketema</strong><br/>{{displayCompany.kifle_ketema}}<br/>
          <strong> city</strong><br/>{{displayCompany.city}}<br/>
          <strong> sefer</strong><br/>{{displayCompany.sefer}}<br/>
          <strong> kebele</strong><br/>{{displayCompany.kebele}}<br/>
          <strong> direction</strong> <br/>{{displayCompany.direction}}<br/>
          <strong> houseNum </strong> <br/>{{displayCompany.house_num}}<br/>
         <strong> phoneNum </strong><br/>{{displayCompany.phone_num}}<br/>
          <strong> pobox </strong><br/>{{displayCompany.pobox}}<br/>
          

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
    },
    data() {
        return {
            searchText: '',
            filteredCompany: [],
            displayCompany:{}
        }
    },
    methods: {
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
        rowClicked(company){
            this.displayCompany = company;
            console.log(company);
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
        cursor: default;
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
        cursor: pointer;
    }

</style>