<template>
    <div class="container">
        <h1>{{ titolo }}</h1>
        <div class="d-flex justify-content-center py-5">
            <video controls autoplay muted>
                <source src="public\videos\Nuvole - 64759.mp4" type="video/mp4">
                <source src="public\videos\Nuvole - 64759.mp4" type="video/ogg">
                Your browser does not support HTML video.
            </video>
        </div>

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
    padding: 3.7em 0;

    video {
        height: 800px;
    }
}
</style>