<template>
  <div class="people" v-for="person in allPeople" :key="person.id">
      <div :class="`person ${person.gender}`">{{ person.name}} - {{ person.age }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "People",
    computed: {
        ...mapGetters(['menInFamily', 'allPeople'])
    }
}
</script>

<style scoped>
    .person {
        padding: 10px 5px;
        width: 50%;
        margin: 10px auto;
        border: 1px solid slategray;
    }
    .female {
        border-left: 4px solid plum;
    }
    .male {
        border-left: 4px solid steelblue;
    }
</style>