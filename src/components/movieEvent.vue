<template>
<div class="container-fluid">
      <Header v-bind:add_link="'/add/company'"/>
      <div class="container bg-white p-3 mb-5 shadow bank-event">
          <h3 class="pt-3">Movie Event</h3>
          <table class="table table-striped table-bordered table-responsive-xl">
              
              <tbody>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4">Ednmal</th>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>The lion king</td>
                      <td>4:00am<br/>The Avengers Endgame</td>
                      <td>6:00am<br/>The Shaft</td>
                      <td>10:00am<br/>The Hacker</td>
                  </tr>
                  <tr>
                      <th rowspan="2" class="pt-5 pl-4">Century</th>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td>
                      <td>12/04/2021</td> 
                  </tr>
                  <tr>
                      <td>2:00am<br/>The invisible</td>
                      <td>4:00am<br/>The Sarahan Deset</td>
                      <td>6:00am<br/> Spider man far from home</td>
                      <td>10:00am<br/>How to be Single</td>
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
