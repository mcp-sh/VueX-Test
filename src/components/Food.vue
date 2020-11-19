<template>
    <div class="wrapper">
        <h2>Good Food</h2>
        <div class="food" v-for="food in highlyRated" :key="food.id">
            <p>{{food.name}} is rated {{food.rating}}</p>
        </div>
        <h2>All Food</h2>
        <div class="food" v-for="food in allFood" :key="food.id">
            <p>{{food.name}} is rated {{food.rating}}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
name: "Food", 
computed: {
    ...mapGetters(['highlyRated', 'allFood'])
}
}
</script>

<style scoped>

</style>