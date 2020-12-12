<template>
  <div id="app">
    <AddTodo />
    <FilterTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "../src/components/Todos";
import AddTodo from "../src/components/AddTodo";
import FilterTodo from "../src/components/FilterTodo";

export default {
  name: "App",
  components: {
    AddTodo,
    FilterTodo,
    Todos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
