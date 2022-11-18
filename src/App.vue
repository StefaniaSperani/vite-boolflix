<template>
  <header>
    <HeaderComp />
  </header>

  <body>
    <DiscoverComp titolo="Our newest Trailer" />
    <MoviesComp :movies="store.popular" titolo="Popular" />
    <div ref="scrolla">
      <MoviesComp :movies="store.movies" titolo="Movies" />
      <MoviesComp :movies="store.series" titolo="Series" />
    </div>
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
      const el = this.$refs.scrolla;
      this.$nextTick(() => {
        el.scrollIntoView({ behavior: "smooth" });
      })

    }
  },
  mounted() {
    store.getPopular()
  },

}
</script>

<style lang="scss" scoped>

</style>