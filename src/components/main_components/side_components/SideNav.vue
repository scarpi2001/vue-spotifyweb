<script>
import { store } from '../../../store';

export default {
    name: "SideNav",
    data() {
        return {
            store,
            menu: [
                {
                    icon:"['fas', 'house']",
                    img: '/home.svg',
                    text: "Home",
                },
                {
                    icon:"['fas', 'magnifying-glass']",
                    img: '/search.svg',
                    text: "Cerca",
                },
                {
                    icon:"['fas', 'bookmark']",
                    img: '/libreria.svg',
                    text: "La tua libreria",
                },
            ]
        }
    },

    methods: {
        currentVoice(index) {
            this.store.active = index;
        },
    }
}
</script>

<template>

    <nav id="sidebar_nav">
        <ul>
            <li v-for="(menuVoice, index) in menu" :key="index" @click="currentVoice(index)"
                :class="{ selected: store.active === index }">
                <!-- <img :src="menuVoice.img" :alt="menuVoice.text"> -->
                <span>
                    {{ menuVoice.text }}
                </span>
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

#sidebar_nav {
    margin-bottom: 20px;

    li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        img {
            width: 25px;
            margin-right: 5px;
            filter: brightness(50%);
            transition: all 0.3s;
        }

        &:hover img {
            filter: brightness(100%);
            scale: 1.2;
        }
    }

    .selected {
        color: #fff;

        img {
            filter: brightness(100%);
            scale: 1.2;
        }
    }

}

// smartphone version
@media screen and (max-width: 600px) {
    
    #sidebar_nav {
        span {
            display: none;
        }
    }
    
}
</style>