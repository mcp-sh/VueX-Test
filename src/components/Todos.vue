<template>
  <div class="todos">
      <div v-for="todo in openTodos" :key="todo.id" class="todo">{{ todo.title }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: "Todos", 
    computed: {
        ...mapGetters(['allTodos', 'openTodos'])
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        margin-top: 2rem;
    }
    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }

</style>