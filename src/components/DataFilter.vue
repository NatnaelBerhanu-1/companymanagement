<template>
  <div class="">
        <div class="dropdown">
            <select name="" id="" class="form-control" v-on:change="filter" v-model="selectedVal" required>
                <option >{{ 'filter by ' + this.title }}</option>
                <option v-for="name in companies" v-bind:value="name.name" v-bind:key="name.id">{{ name.name }}</option>
                <!-- <option v-for="company in companies" v-bind:value="(title === 'name') ? company.name: (title === 'services') ? company.services: (title === 'city') ? company.city: company.status" v-bind:key="company.id">{{ (title === 'name') ? company.name: (title === 'services') ? company.services: company.city }}</option> -->
            </select>
        </div>
  </div>
</template>

<script>
export default {
    name: 'DataFilter',
    props: {
        title: String,
        companies: Array
    },
    data() {
        return {
          selectedVal: "filter by " + this.title
        }
    },
    methods: {
        filter() {
            const newVal = {
                selectedVal: this.selectedVal,
                title: this.title
            }

            if(!this.selectedVal.startsWith("filter"))
            this.$emit('filter', newVal);
        }
    }
}
</script>

<style>

</style>