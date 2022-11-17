<template>
  <header>
    <HeaderComp />
  </header>

  <body>
    <DiscoverComp titolo="Our new Trailer" />
    <MoviesComp :movies="store.movies" titolo="Movies" />
    <MoviesComp :movies="store.series" titolo="Series" />
  </body>

</template>

<script>
import DiscoverComp from './components/DiscoverComp.vue';
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
    MoviesComp,
    DiscoverComp
  },
  data() {
    return {
      store,
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>