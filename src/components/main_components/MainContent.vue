<script>
import ContentTop from './content_components/ContentTop.vue'
import Home from './content_components/Home.vue'
import Search from './content_components/Search.vue'

import { store } from '../../store';

export default {
    name: "MainContent",
    components: {
        ContentTop,
        Home,
        Search,
    },
    data() {
        return {
            store,
            // components: [Home, Search]
        }
    },
}
</script>

<template>
    <div id="top_bar">
        <ContentTop />
    </div>

    <!-- <div id="content">
        <component :is="components[store.active]" />
    </div> -->

    <div class="content" v-show="store.active === 0">
        <Home/>
    </div>

    <div class="content" v-show="store.active === 1">
        <Search />
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

.content {
    margin-top: 90px;
}

@media screen and (max-width: 600px) {

#top_bar {
    width: calc(100% - 60px);
}

}
</style>
