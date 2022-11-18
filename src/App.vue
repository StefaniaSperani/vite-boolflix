<template>
  <header>
    <HeaderComp />
  </header>

  <body>
    <DiscoverComp titolo="Our newest Trailer" />
    <div ref="scrolla">
      <MoviesComp :movies="store.movies" titolo="Movies" />
      <MoviesComp :movies="store.series" titolo="Series" />
    </div>

    <!-- <MoviesComp v-if="store.discover" :discover="store.discover" :titolo="store.genreName.name" /> -->
  </body>

</template>

<script>
import DiscoverComp from './components/DiscoverComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import MoviesComp from './components/MoviesComp.vue';
import { store } from './store';


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
  watch: {
    'store.movies'(newVal, OldVal) { // newVal e oldVal sono facoltativi, ma meglio metterli
      console.log(this.$refs.scrolla);
      const el = this.$refs.scrolla;
      this.$nextTick(() => {
        el.scrollIntoView({ behavior: "smooth" });
      })

    }
  },
  created() {

  },

}
</script>

<style lang="scss" scoped>

</style>