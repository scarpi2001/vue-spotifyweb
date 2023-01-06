<script>
import { store } from '../../../store';

export default {
    name: "ContentTop",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

    <!-- barra di ricerca chat -->
    <div id="search_bar" v-show="store.active === 1">

        <div id="magnifyng_glass" for="search_bar">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <input class="user_input" type="text" placeholder="Cosa vuoi ascoltare?" v-model="store.newSearch">

    </div>

    <!-- pulsante upgrade -->
    <a class="btn link" href="#">
        EFFETTUA L'UPGRADE
    </a>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

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
