<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h3 class="pt-3">Bank Event</h3>
         <table class="table table-striped table-bordered table-responsive-xl">
              <thead>
                  <tr>
                      <th scope="col">Bank</th>
                      <th scope="col">Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                     
                  </tr>

              </thead>
              <tbody>
                  <tr>
                      <td>Berhan</td>
                      <td>Meeting</td>
                      <td>11/12/2019</td>
                      <td>9:00am</td>
                     
                  </tr>
                  <tr>
                      <td>Dashen</td>
                      <td>Training</td>
                      <td>17/12/2019</td>
                      <td>9:00am</td>
                     
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
     name: 'bankEvent',
    components: {
        Header
    },
}
</script>
