<script>
import SideLogo from './side_components/SideLogo.vue'
import SideNav from './side_components/SideNav.vue'
import SidePlayList from './side_components/SidePlayList.vue'
import SideDownload from './side_components/SideDownload.vue'

export default {
    name: "MainSide",
    components: {
        SideLogo,
        SideNav,
        SidePlayList,
        SideDownload,
    }
}
</script>

<template>

    <!-- side-bar logo -->
    <SideLogo />

    <!-- side-bar nav -->
    <SideNav />

    <!-- side-bar playlist -->
    <SidePlayList />

    <!-- side-bar download -->
    <SideDownload />

</template>

<style lang="scss">
@use "../../styles/partials/variables" as*;
@use "../../styles/general.scss" as*;

li {
    color: rgb(127, 129, 134);

    &:hover {
        color: #fff;
        cursor: pointer;
    }
}
</style>
