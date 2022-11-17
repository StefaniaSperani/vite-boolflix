<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="movie.poster_path ? basePosterPath + movie.poster_path : 'public/images/no-image.png'"
                    :alt="movie.title">
            </div>
            <div class="flip-card-back">
                <h1>{{ movie.title ? movie.title : movie.name }}</h1>
                <p>{{ movie.original_title ? movie.original_title : movie.original_name }}</p>
                <span>
                    <!-- v-if="availableFlags.includes(movie.original_language)" -->
                    <img :src="availableFlags ? '/public/images/' + movie.original_language + '.svg' : '/public/images/no_flag.svg'"
                        :alt="movie.original_language + 'Flag'" class="flag">
                </span>
                <span>{{ movie.original_language }}</span>
                <div>Voto: {{ movie.vote_average }}</div>
                <span v-for="s in 5" class="fa-star" :class="(s <= stars) ? 'fa-solid' : 'fa-regular'"></span>
                <p>{{ movie.overview }}</p>
            </div>
        </div>
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

img {
    width: 300px;
    height: 400px;
}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 400px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 300px;
    height: 400px;
    text-align: start;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.5);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background-color: #bbb;
    color: black;
}

.flip-card-back {
    background-color: #000000;
    color: white;
    padding: 1em;
    overflow-y: auto;
    transform: rotateY(180deg);
}

.flag {
    height: 20px;
    width: 30px;
    padding-right: 0.3em;
}
</style>