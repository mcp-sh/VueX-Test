<template>
  <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">{{ todo.title }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Todos", 
    computed: {
        ...mapGetters(['allTodos'])
    },
    methods: {
        ...mapActions(['getTodos'])
    },
    created() {
        this.getTodos()
    }
}
</script>

<style scoped>
    .todos {
        width: 80%;
        margin: auto;
    }
    .todo {
        padding: 10px 20px;
        margin: 0.5rem 2rem;
    }

</style>