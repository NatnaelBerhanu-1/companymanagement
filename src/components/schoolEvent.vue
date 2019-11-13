<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h3 class="pt-3">School Event</h3>
          <table class="table table-striped table-bordered table-responsive-xl">
              <thead>
                  <tr>
                      <th scope="col">School</th>
                      <th scope="col">Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                     
                  </tr>

              </thead>
              <tbody>
                  <tr>
                      <td>AAiT</td>
                      <td>AI conference</td>
                      <td>24/10/2020</td>
                      <td>9:00pm</td>
                     
                  </tr>
                  <tr>
                      <td>AASTU</td>
                      <td>space science Training</td>
                      <td>06/12/2019</td>
                      <td>9:00pm</td>
                     
                  </tr>
              </tbody>
          </table>
      </div>
</div>
</template>
<style scoped>
/* .bank-event{
    max-width: 900px;
    margin-top: 135px;
} */
</style>


<script>
import Header from './Header.vue';
export default {
     name: 'schoolEvent',
    components: {
        Header
    },
}
</script>
