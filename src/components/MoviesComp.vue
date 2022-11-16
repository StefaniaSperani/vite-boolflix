<template>
    <div class="container">
        <div class="row d-flex align-items-center justify-content-center gap-3">
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
    props: [
        'movies'
    ],
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped>

</style>