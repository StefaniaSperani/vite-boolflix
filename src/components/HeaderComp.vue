<template>
    <div class="container-fluid d-flex flex-row justify-content-between">
        <div>
            <img src="public\images\Netflix_2015_logo.svg.png" alt="Logo">
        </div>
        <div class="d-flex p-3">
            <input type="text" id="" placeholder="Cerca il film o serie TV">
            <button type="submit" class="btn btn-danger mx-2">Cerca</button>
        </div>


    </div>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>
div {
    height: 70px;
    background-image: linear-gradient(black, grey);
    color: #fff;

    img {
        width: 160px;
        margin: 0.6em;
    }
}
</style>