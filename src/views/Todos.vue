<template>
  <div class="main container">
    <h1>Rockstar ToDos</h1>
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/Todos";
import AddTodo from "@/components/AddTodo"

export default {
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>
  .container {
    padding: 0 15px;
    margin: 0 auto;
  }
</style>
