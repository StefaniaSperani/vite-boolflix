<template>
    <nav class="container-fluid d-flex flex-row justify-content-between align-items-center">
        <div>
            <img src="public\images\Netflix_2015_logo.svg.png" alt="Logo">
        </div>
        <SearchbarComp />
    </nav>
</template>

<script>
import SearchbarComp from './SearchbarComp.vue';

export default {
    name: "HeaderComp",
    components: { SearchbarComp }
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    z-index: 30;
    height: 70px;
    background-image: linear-gradient(black, grey);
    color: #fff;

    img {
        width: 160px;
        margin: 0.8em;
    }
}
</style>