<template>
  <v-container>
    <h3>Add Todo</h3>
    <v-form class="add">
      <form @submit="onSubmit">
        <v-text-field type="text" v-model="title" placeholder="Add Title" />
        <v-btn color="primary" type="submit">Submit</v-btn>
      </form>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      if (!this.title) {
        alert("please fill up the field");
      } else {
        this.addTodo(this.title);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>