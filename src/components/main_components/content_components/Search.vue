<script>
import { store } from '../../../store';

export default {
    name: "ContentBottom",
    data() {
        return {
            store,
        }
    }, 
}    
</script>

<template>
    <div class="cards_box">
        <div class="card" v-for="result in store.results">
            <img :src="result.track.images.coverart" :alt="result.track.title">
            <h3 class="title">
                {{ result.track.title }}
            </h3>
            <h4 class="artist">
                {{ result.track.subtitle }}
            </h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;
</style>
