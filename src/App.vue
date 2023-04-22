<script>
import AppMain from './components/AppMain.vue';
import AppBottom from './components/AppBottom.vue';

export default {
    name: "App",
    components: {
        AppMain,
        AppBottom,
    }
}
</script>

<template>

    <div id="wrapper">

        <section id="main">
            <AppMain />   
        </section>

        <!-- <section id="bottom">
            <AppBottom />
        </section> -->

    </div>

</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general.scss" as*;

#wrapper {
    height: 100vh;

    #main {
        display: flex;
        overflow: hidden;
        height: 100%;
    }

    #bottom {
        display: flex;
        justify-content: space-between;
        height: 80px;
        background-color: rgb(40, 40, 40);
        color: white;
        padding: 20px 10px;
    }
}
</style>
