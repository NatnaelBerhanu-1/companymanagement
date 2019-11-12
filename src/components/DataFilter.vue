<template>
  <div class="">
        <div class="dropdown">
            <!-- <select name="" id="" class="form-control" v-on:change="filter" v-model="selectedVal" required>
                <option >{{ 'filter by ' + this.title }}</option>
                <option v-for="name in companies" v-bind:value="name.name" v-bind:key="name.id">{{ name.name }}</option>
            </select> -->
            <h4>{{ title }}</h4>
            <div class="form-check">
                <div class="m-0" v-for="name in companies" v-bind:key="name.id">
                    <input class="form-check-input"  type="radio" v-bind:value="name.name" v-on:click="filterTable(name.name)" v-bind:name="'filter' + title" v-bind:id=" title + name.id"><label v-bind:for="title + name.id">{{name.name}}</label>
                </div>

            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'DataFilter',
    props: {
        title: String,
        companies: Array,
        filteredCompanies: Array
    },
    data() {
        return {
          selectedVal: "filter by " + this.title
        }
    },
    methods: {
        filterTable(name){
            this.selectedVal = name;
            this.filter();
        },
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