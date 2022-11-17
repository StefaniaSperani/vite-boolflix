<template>
    <div class="mycard text-center">
        <div class="image-wrapper">
            <img :src="basePosterPath + movie.poster_path" :alt="movie.title" class="">
        </div>
        <h4>{{ movie.title ? movie.title : movie.name }}</h4>
        <h3>{{ movie.original_title ? movie.original_title : movie.original_name }}</h3>
        <div v-if="availableFlags.includes(movie.original_language)">
            <img :src="'/public/images/' + movie.original_language + '.svg'" :alt="movie.original_language + 'Flag'"
                class="flag">
        </div>
        <h3>{{ movie.original_language }}</h3>
        <span v-for="s in 5" class="fa-star" :class="(s <= stars) ? 'fa-solid' : 'fa-regular'"></span>
        <div>{{ movie.vote_average }}</div>
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
            availableFlags: [
                'de',
                'es',
                'en',
                'it',
            ],
        }
    },
    computed: {
        stars() {
            return Math.ceil(this.movie.vote_average / 2)
        }
    }
}
</script>

<style lang="scss" scoped>
.fa-star {
    color: rgb(172, 20, 20);
}



.mycard {
    color: black;
    background-color: grey;
    width: 240px;
    height: 580px;
    overflow-y: auto;

    .image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 190px;
        height: 300px;
    }

    .flag {
        height: 20px;
        width: 30px;
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