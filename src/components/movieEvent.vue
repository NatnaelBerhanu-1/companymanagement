<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h3 class="pt-3">Movie Event</h3>
          <table class="table table-striped table-bordered table-responsive-xl">
              <thead>
                  <tr>
                      <th scope="col">Cinema</th>
                      <th scope="col">Title</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                     
                  </tr>

              </thead>
              <tbody>
                  <tr>
                      <td>Edenamall</td>
                      <td>Avengers Endgame</td>
                      <td>06/12/2019</td>
                      <td>9:00pm</td>
                     
                  </tr>
                  <tr>
                      <td>Century</td>
                      <td>Shaft</td>
                      <td>21/11/2019</td>
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
     name: 'movieEvent',
    components: {
        Header
    },
}
</script>
