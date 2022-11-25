<template>
    <nav class="container-fluid d-flex flex-row justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-4">
            <a href="http://localhost:5173/">
                <img src="/public/images/Netflix_2015_logo.svg.png" alt="Logo">
            </a>
            <!-- <select class="form-select">
                @change="store.changeGenre($event)"
                <option selected disabled>Generi</option>
                <option :value="genre.id" v-for="(genre, index) in store.genres" :key="index">{{ genre.name }}</option>
            </select> -->
        </div>
        <SearchbarComp />
    </nav>
</template>

<script>
import SearchbarComp from './SearchbarComp.vue';
import { store } from '../store'

export default {
    name: "HeaderComp",
    components: { SearchbarComp },
    data() {
        return {
            store
        }
    },
    mounted() {
        // store.getGenres()
    },
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 30;
    height: 70px;
    background-image: linear-gradient(rgb(61, 53, 53), #141414);
    color: #fff;

    img {
        width: 160px;
        margin: 0.8em;
    }
}
</style>