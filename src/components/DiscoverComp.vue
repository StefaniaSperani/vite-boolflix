<template>
    <div class="container position-relative">
        <h1>{{ titolo }}</h1>
    </div>
    <div class="d-flex justify-content-center">
        <video controls autoplay muted>
            <source src="public\videos\Nuvole - 64759.mp4" type="video/mp4">
            <source src="public\videos\Nuvole - 64759.mp4" type="video/ogg">
            Your browser does not support HTML video.
        </video>
        <!-- <iframe src="https://www.youtube.com/embed/BafapW78jmM" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe> -->
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'DiscoverComp',
    props: {
        titolo: String
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding-top: 3.7rem;
    bottom: -80px;
    z-index: 10;
}

video {
    width: 100%;
    position: relative;

}
</style>