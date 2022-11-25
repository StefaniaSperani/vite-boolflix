<template>
    <div class="container">
        <h1>{{ titolo }}</h1>
    </div>
    <div class="d-flex justify-content-center">
        <video controls loop autoplay muted>
            <source src="/public/videos/Piovere.mp4" type="video/mp4">
            <source src="/public/videos/Piovere.mp4" type="video/ogg">
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
}

h1 {
    position: absolute;
    top: 120px;
    z-index: 10;
}

video {
    width: 100%;
    position: relative;
    padding-top: 45px;

}
</style>