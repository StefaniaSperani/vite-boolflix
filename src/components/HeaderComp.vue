<template>
    <div class="container-fluid d-flex flex-row justify-content-between align-items-center">
        <div>
            <img src="public\images\Netflix_2015_logo.svg.png" alt="Logo">
        </div>
        <SearchbarComp />
    </div>
</template>

<script>
import SearchbarComp from './SearchbarComp.vue';

export default {
    name: "HeaderComp",
    components: { SearchbarComp }
}
</script>

<style lang="scss" scoped>
div {
    height: 90px;
    background-image: linear-gradient(black, grey);
    color: #fff;

    img {
        width: 160px;
        margin: 0.8em;
    }
}
</style>