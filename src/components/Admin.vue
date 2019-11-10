<template>
  <div>
      <Header v-bind:add_link="'/add/company'"/>
      <Company v-bind:companies = "companies" v-on:filter="filterTable" v-on:resetFilter="resetFilter" v-on:activate-company="activateCompany" v-on:remove-company="removeCompany"/>
  </div>
</template>

<script>
/* eslint-disable */

import Header from './Header.vue';
import Company from './Company.vue';
import Axios from 'axios';

export default {
    name: 'Admin',
    components: {
        Header,
        Company
    },
    data(){
        return {
            companies: []
        }
    },
    methods: {
        filterTable(newVal) {
            console.log(newVal);
            if(newVal.title === "name"){
                this.companies = this.companies.filter(el => el.name.toLowerCase().includes(newVal.selectedVal.toLowerCase()));
            }else if(newVal.title === "city"){
                this.companies = this.companies.filter(el => el.city.toLowerCase().includes(newVal.selectedVal.toLowerCase()));
            }else if(newVal.title === "services"){
                this.companies = this.companies.filter(el => el.services.toLowerCase().includes(newVal.selectedVal.toLowerCase()));                
            }else if(newVal.title === "status"){
                this.companies = this.companies.filter(el => el.status == newVal.selectedVal);                
            }
        },
        resetFilter() {
            this.getData();
        },
        getData() {
            Axios.get('http://localhost/companymgmt/public/index.php/api/companies/')
            .then(res => this.companies = res.data)
            .catch(err => console.log(err));
        },
        removeCompany(id){
            const confirmed = confirm("do you wan't to delete this company?");
            if(confirmed){
                Axios.delete('http://localhost/companymgmt/public/index.php/api/company/delete/'+id)
                .then(res => this.companies = this.companies.filter(el => el.id != id))
                .catch(error => console.log(error))
            }
        },
        activateCompany(id){
            const confirmed = confirm("do you wan't to activate this company?");
            if(confirmed){
                Axios.put('http://localhost/companymgmt/public/index.php/api/company/activate',
                {
                    id: id
                }
                )
                .then(res => {
                    const index = this.companies.findIndex(obj => obj.id == id)
                    this.companies[index].status = 'active';
                    })
                .catch(error => console.log(error))
            }
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style scoped>
    .fa{
        color: #ffffff;
    }
</style>