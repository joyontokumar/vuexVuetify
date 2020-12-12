<template>
  <v-container>
    <h2>Todos</h2>
    <v-row>
      <v-col
        cols="4"
        sm="4"
        md="4"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todos"
      >
        <v-card class="py-1" tile>
          {{ todo.id }}
          {{ todo.title }}
          <i
            class="fa fa-trash"
            @click="deleteTodo(todo.id)"
            aria-hidden="true"
          ></i>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>
