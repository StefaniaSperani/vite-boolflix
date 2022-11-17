<template>
    <form @submit.prevent="store.getMovies">
        <div class="d-flex p-3">
            <input type="text" id="" placeholder="Cerca il film o serie TV" v-model.trim="store.query">
            <button type="submit" class="btn btn-danger mx-2">Cerca</button>
        </div>
    </form>
</template>

<script>
import { store } from '../store';
export default {
    name: 'SearchbarComp',
    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>