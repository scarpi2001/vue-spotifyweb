<script>
import { store } from '../../../store';

import axios from "axios";

export default {
    name: "ContentTop",
    data() {
        return {
            store,
        }
    },
    methods: {
        getResults() {
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/search',
                params: {term: this.store.newSearch, locale: 'en-US', offset: '0', limit: '5'},
                headers: {
                    'X-RapidAPI-Key': '32f80897a9mshcb5e742b2350969p1add7djsna46cfe3c851b',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            };

            axios.request(options).then((res) => {
                this.store.results = res.data.tracks.hits;
                console.log(this.results);
            }).catch((err) => {
                console.error(err);
            });
        }
    },
}
</script>

<template>

    <!-- barra di ricerca chat -->
    <div id="search_bar" v-show="store.active === 1">

        <div id="magnifiyng_glass" for="search_bar" @click="getResults()">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </div>

        <input class="user_input" type="text" placeholder="Cosa vuoi ascoltare?" v-model="store.newSearch" @keyup.enter="getResults()">

    </div>

    <!-- pulsante upgrade -->
    <a class="btn link" href="#" v-show="store.active === 0">
        EFFETTUA L'UPGRADE
    </a>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

#search_bar {
    display: flex;
    width: 300px;
    height: 45px;

    #magnifiyng_glass {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: rgb(250, 250, 250);
        color: rgb(185, 185, 185);

        &:hover {
            cursor: pointer;
            background-color: rgb(126, 126, 126);
        }
    }

    .user_input {
        width: 80%;
        border: 1px solid rgb(225, 225, 225);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-left: 10px;
    }
}
.btn {
    margin-left: auto;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px 30px;
    color: white;
    transition: all 0.5s;

    &:hover {
        scale: 1.2;
    }

    .link {
        color: #fff;
    }
}
</style>
