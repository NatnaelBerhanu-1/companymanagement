<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h5 class="pt-3">School Event</h5>
          <table class="table table-striped table-bordered table-responsive-xl">
              
              <tbody>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4"> AAiT</th>
                      <td>12/04/2020</td>
                      <td>12/04/2020</td>
                      <td>12/04/2020</td>
                      <td>12/04/2020</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>AI Conference</td>
                      <td>4:00am<br/>cisco Training</td>
                      <td>6:00am<br/>space science week</td>
                      <td>10:00am<br/>Student meeting</td>
                  </tr>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4">AASTU</th>
                      <td>18/01/2020</td>
                      <td>17/04/2020</td>
                      <td>15/06/2020</td>
                      <td>13/02/2020</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>Hackathon</td>
                      <td>4:00am<br/>coders night</td>
                      <td>6:00am<br/> meeting</td>
                      <td>10:00am<br/>sebseba</td>
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
