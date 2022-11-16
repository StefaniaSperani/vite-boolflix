<script>
import HeaderComp from './components/HeaderComp.vue';
import MoviesComp from './components/MoviesComp.vue';
import SearchbarComp from './components/SearchbarComp.vue';

export default {
  components: {
    HeaderComp,
    SearchbarComp,
    MoviesComp
  }
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