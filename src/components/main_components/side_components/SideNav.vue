<script>
import { store } from '../../../store';

export default {
    name: "SideNav",
    data() {
        return {
            store,
            menu: [
                {
                    icon:"fa-solid fa-house",
                    img: '/home.svg',
                    text: "Home",
                },
                {
                    icon:"fa-solid fa-magnifying-glass",
                    img: '/search.svg',
                    text: "Cerca",
                },
                {
                    icon:"fa-solid fa-bookmark",
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
            <li v-for="(menuVoice, index) in menu" :key="index" @click="currentVoice(index)" :class="{ selected: store.active === index }">
                <div>
                    <font-awesome-icon :icon="menuVoice.icon" />
                </div>
                
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

        div {
            font-size: 18px;
            margin-right: 10px;
            filter: brightness(50%);
            transition: all 0.3s;
        }

        &:hover div {
            filter: brightness(100%);
            scale: 1.2;
        }
    }

    .selected {
        color: #fff;

        div {
            filter: brightness(100%);
            scale: 1.2;
        }
    }

}

// smartphone version
@media screen and (max-width: 600px) {
    
    #sidebar_nav {
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        span {
            display: none;
        }
    }
    
}
</style>