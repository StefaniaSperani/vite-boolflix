<script>
import HeaderComp from './components/HeaderComp.vue';
import MoviesComp from './components/MoviesComp.vue';
import { store } from './store';


/*
"id": 550,
"poster_path"
"title": "Fight Club",
"original_title": "Fight Club",
"original_language": "en",
"vote_average": 8.428,
"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",

*/
export default {
  components: {
    HeaderComp,
    MoviesComp
  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
  created() {
    store.getMovies()
  }
}
</script>

<template>
  <header>
    <HeaderComp />
  </header>

  <body>
    <MoviesComp :movies="store.movies" />
    <MoviesComp :movies="store.series" />
  </body>

</template>



<style lang="scss" scoped>

</style>