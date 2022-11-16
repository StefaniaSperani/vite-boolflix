<script>
import HeaderComp from './components/HeaderComp.vue';
import MoviesComp from './components/MoviesComp.vue';
import SearchbarComp from './components/SearchbarComp.vue';
import axios from 'axios';

export default {
  components: {
    HeaderComp,
    SearchbarComp,
    MoviesComp
  },
  data() {
    return {
      apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=601d4016fd1331c271a26b9a77dd6c45',
    }
  },
  methods: {

  },
}
</script>

<template>
  <header>
    <HeaderComp />
    <SearchbarComp />
  </header>

  <body>
    <MoviesComp />
  </body>

</template>



<style lang="scss" scoped>

</style>