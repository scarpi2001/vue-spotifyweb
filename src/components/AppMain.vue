<script>
export default {
    name: "AppMain",
    components: {
        MainSide,
        MainContent,
    }
}
</script>

<template>
    <MainSide />
    <MainContent />
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/general.scss" as*;
</style>
