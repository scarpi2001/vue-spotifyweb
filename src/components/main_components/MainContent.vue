<script>
import ContentTop from './content_components/ContentTop.vue'
export default {
    name: "MainContent",
    components: {
        ContentTop,
    }
}
</script>

<template>
    <div id="top_bar">
        <ContentTop />
    </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;
@use "../../styles/general.scss" as*;

#top_bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 90px;
    width: calc(100% - 200px);
    background-color: rgba(0, 0, 5, 0.5);
    padding: 0px 30px;
    z-index: 999;
}
</style>
