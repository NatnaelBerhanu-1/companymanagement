<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h5 class="pt-3">Bank Event</h5>
         <table class="table table-striped table-bordered table-responsive-xl">
              
              <tbody>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4">Berhan Bank</th>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>Customer Support meeting</td>
                      <td>4:00am<br/>Shareholders meeting</td>
                      <td>6:00am<br/>training</td>
                      <td>10:00am<br/>general meeting</td>
                  </tr>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4">CBE</th>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>general meeting</td>
                      <td>4:00am<br/>Share holders meeting</td>
                      <td>6:00am<br/> accountants training</td>
                      <td>10:00am<br/>Meeting</td>
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
