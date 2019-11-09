<template>
  <div class="container-fluid">
      <Header />
      <div class="container bg-white shadow p-3  mb-5" id="edit-company">
          <h3 class="pt-3">Edit Company</h3>
          <div class="alert alert-success d-none" id="alert" role="alert">
            edited successfully!!!
          </div>
          <form @submit="updateCompany">
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
          
          <button type="submit" class="btn btn-danger mt-3">Update</button>
      </form>
      </div>
  </div>
</template>

<script>

/* eslint-disable */
import Header from './Header.vue';
import Axios from 'axios';

export default {
    name: 'EditCompany',
    components: {
        Header
    },
    data() {
        return {
            company: {},
            id: '',
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
    methods: {
        fetchData(id){
            Axios.get('http://localhost/companymgmt/public/index.php/api/company/' + id)
            .then(res => { 
                const {id, name, services, city, kifle_ketema, sefer, kebele, direction, house_num, phone_num, pobox} = res.data
                this.name = name;this.services = services; this.city = city; this.ketema = kifle_ketema; this.sefer = sefer;
                this.kebele = kebele; this.direction = direction; this.houseNum = house_num; this.phoneNum = phone_num; this.pobox = pobox;
                this.company = res.data;
                console.log(this.company)
            })
            .catch(err => console.log(err));
        },
        updateCompany(e){
            e.preventDefault();
            const updatedCompany = {
                id: this.id,
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
            Axios.put('http://localhost/companymgmt/public/index.php/api/company',
                updatedCompany
            )
            .then((res) => {
                    if(res.data.message === "success"){
                        document.getElementById("alert").classList.remove('d-none');
                        document.getElementById("alert").classList.add('d-block');
                    }
                })
            .catch(err => console.log(err))
        }
    },
    mounted() {
        this.id = this.$route.params.id
        this.fetchData(this.id);
    }
}
</script>

<style scoped>
    #edit-company{
        max-width: 900px;
    }

    #edit-company form {
    width: 100%;
    }

    .form-group{
        width: 100%;
        padding: 0;
        margin:0;
    }
</style>