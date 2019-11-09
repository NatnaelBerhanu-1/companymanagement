<template>
  <div class="container-fluid">
      <Header/>
      <div class="container bg-white shadow p-3 mb-5" id="add-company">
          <h3 class="pt-3">Add Company</h3>
          <div class="alert alert-success d-none" id="alert" role="alert">
            added successfully!!!
          </div>
          <form @submit="addCompany">
              <div class="row">
                  <div class="col-md-6">
                      <div class="form-group">
                        <label >Name</label>
                        <input type="text" v-model="name" class="form-control" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                      <div class="form-group">
                        <label >City</label>
                        <input type="text" v-model="city" class="form-control" required>
                    </div>
                  </div>
              </div>
          
              <div class="row">
                  <div class="col-md-12">
                        <div class="form-group">
                            <label >Services</label>
                            <textarea v-model="services" class="form-control" required></textarea>
                        </div>
                  </div>
              </div>

              <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                        <label >Kifle Ketema</label>
                        <input type="text" v-model="ketema" class="form-control" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                        <div class="form-group">
                            <label >Sefer</label>
                            <input type="text" v-model="sefer" class="form-control" required>
                        </div>
                  </div>
              </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label >Kebele</label>
                        <input type="text" v-model="kebele" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label >Direction</label>
                        <input type="text" v-model="direction" class="form-control" required>
                    </div>
                </div>
            </div>

          
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                                <label >House No</label>
                                <input type="text" v-model="houseNum" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label >Phone</label>
                        <input type="text" v-model="phoneNum" class="form-control" required>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label >P.O.Box</label>
                        <input type="text" v-model="pobox" class="form-control" required>
                    </div>
                </div>
            </div>
          
          <button type="submit" class="btn btn-danger mt-3">Add</button>
      </form>
      </div>
      
  </div>
</template>

<script>
/* eslint-disable */

import Header from './Header.vue';
import axios from 'axios';

export default {
    name: 'Add',
    data(){
        return {
            name: '',
            city: '',
            services: '',
            ketema: '',
            sefer: '',
            kebele: '',
            direction: '',
            houseNum: '',
            phoneNum: '',
            pobox: ''
        }
    },
    components: {
        Header
    },
    methods: {
        addCompany(e) {
            e.preventDefault();
            const newCompany = {
                name: this.name,
                city: this.city,
                services: this.services,
                ketema: this.ketema,
                sefer: this.sefer,
                kebele: this.kebele,
                direction: this.direction,
                houseNum: this.houseNum,
                phoneNum: this.phoneNum,
                pobox: this.pobox
            }
        
        axios.post(
            'http://localhost/companymgmt/public/index.php/api/company/add',
            newCompany)
            .then(res => {if(res.data.message === "success") document.getElementById("alert").classList.remove("d-none");document.getElementById("alert").classList.add("d-block"); console.log(res.data)})
            .catch(error => console.log(error));

        this.name = this.city = this.services = this.ketema = this.sefer = this.kebele = this.direction = this.houseNum = this.phoneNum = this.pobox = '';
        }
    }
}
</script>

<style scoped>
#add-company{
    width: 900px;
}

#add-company form {
    width: 100%;
}

.form-group{
    width: 100%;
    padding: 0;
    margin:0;
}

</style>