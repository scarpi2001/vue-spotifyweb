<script>
import MainSide from './main_components/MainSide.vue';
import MainContent from './main_components/MainContent.vue';

export default {
    name: "AppMain",
    components: {
        MainSide,
        MainContent,
    }
}
</script>

<template>

    <!-- sidebar -->
    <section id="main_side">
        <MainSide />
    </section>

    <!-- contenuto principale -->
    <section id="main_content">
        <MainContent />
    </section>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/general.scss" as*;

#main_side {
    background-color: black;
    min-width: 200px;
    padding: 0 15px;
}

#main_content {
    flex-grow: 1;
    padding: 15px;
    overflow-y: auto;
    background-color: rgb(20, 25, 34);
}
</style>
