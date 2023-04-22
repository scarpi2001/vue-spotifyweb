<script>
import axios from "axios";

export default {
    name: "ContentBottom",
    data() {
        return {
            tracks: []
        }
    }, 
    methods: {
        getTracks() {
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/charts/track',
                params: {locale: 'it-IT', pageSize: '20', startFrom: '2'},
                headers: {
                    'X-RapidAPI-Key': '32f80897a9mshcb5e742b2350969p1add7djsna46cfe3c851b',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            axios.request(options).then((res) => {
                this.tracks = res.data.tracks;
            }).catch((err) => {
                console.error(err);
            });
        }
    },
    mounted() {
        this.getTracks();
    }
}    
</script>

<template>
    <h1>
        Top 20 Tracks
    </h1>

    <div class="cards_box">
        <div class="card" v-for="track in tracks">
            <img :src="track.images.coverart" :alt="track.title">
            <h3 class="title">
                {{ track.title }}
            </h3>
            <h4 class="artist">
                {{ track.subtitle }}
            </h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

h1 {
    color: #fff;
    font-size: 40px;
    padding: 40px 0;
}

</style>
