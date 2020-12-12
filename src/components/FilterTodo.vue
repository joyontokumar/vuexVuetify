<template>
  <v-container>
    <h1>Filter Todo :</h1>
    <select name="" id="" @change="filterTodo($event)">
      <option value="200">2</option>
      <option value="200">5</option>
      <option value="100">12</option>
      <option value="50">7</option>
      <option value="11">9</option>
      <option value="33">11</option>
    </select>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodo",
  methods: mapActions(["filterTodo"]),
};
</script>

<style lang="scss" scoped>
select {
  width: 400px;
  margin: auto;
  border: 1px solid #3a3a3a;
  font-size: 20px;
  padding: 10px;
}
</style>