<template>
    <div class="container">
        <h1 v-if="!store.isLoading">{{ titolo }}</h1>
        <div class="row d-flex align-items-center justify-content-center gap-4">
            <CardComp :movie="movie" v-for="(movie, index) in movies" :key="index" />
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import CardComp from './CardComp.vue';
export default {
    name: 'MoviesComp',
    components: {
        CardComp
    },
    props: {
        movies: Array,
        titolo: String
    },
    data() {
        return {
            store,
        }
    },
    // created() {
    //     store.discover()
    // },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 3.7em 0;
}
</style>