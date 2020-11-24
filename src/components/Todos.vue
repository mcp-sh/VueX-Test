<template>
  <div class="todos">
    <div v-for="todo in allTodos" :key="todo.id" class="todo" :class="{isComplete: todo.completed}">
        {{ todo.title }}
        <strong class="btn" @click="removeTodo(todo.id)">X</strong>
        <strong class="btn2" @click="completeTodo(todo.id)">O</strong>

    </div>
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
        ...mapActions(['getTodos','removeTodo','completeTodo'])
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
        padding: 1.5rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
    }
    .isComplete {
        background: steelblue;
    }
    .btn {
        display: block;
        position: absolute;
        cursor: pointer;
        bottom:10px;
        right: 10px;
        color: #eee;
    }
    .btn2 {
        display: block;
        position: absolute;
        cursor: pointer;
        bottom:10px;
        left: 10px;
        color: #eee;
    }

</style>