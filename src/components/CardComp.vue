<template>
    <div class="mycard text-center">
        <div class="image-wrapper">
            <img :src="basePosterPath + movie.poster_path" :alt="movie.title" class="">
        </div>
        <h4>{{ movie.title ? movie.title : movie.name }}</h4>
        <h3>{{ movie.original_title ? movie.original_title : movie.original_name }}</h3>
        <h3>{{ movie.original_language }}</h3>
        <!-- <div>{{ movies.overview }}</div> -->
    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: [
        'movie'
    ],
    data() {
        return {
            basePosterPath: 'https://image.tmdb.org/t/p/w500',

        }
    },
}
</script>

<style lang="scss" scoped>
.mycard {
    color: black;
    padding: 1em;
    background-color: grey;
    width: 220px;
    height: 500px;

    .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 190px;
        height: 300px;
    }

    img {
        width: 218px;
        height: 310px;
        object-fit: cover;
    }

    h4 {
        color: #fff;
        padding: 0.5em;
        font-weight: 700;
        text-transform: uppercase;
    }

    h3 {
        color: #fff;
    }
}
</style>