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
    <AppMain />
    <AppBottom />
</template>

<style lang="scss">
@use "./styles/partials/variables" as*;
@use "./styles/general.scss" as*;
</style>
