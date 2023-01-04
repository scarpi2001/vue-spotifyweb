<script>
export default {
    name: "SideNav",
    data() {
        return {
            menu: [
                {
                    img: '../../../src/assets/images/home.svg',
                    text: "Home",
                },
                {
                    img: '../../../src/assets/images/search.svg',
                    text: "Cerca",
                },
                {
                    img: '../../../src/assets/images/libreria.svg',
                    text: "La tua libreria",
                },
            ]

        }
    }
}
</script>

<template>

    <nav id="sidebar_nav">
        <ul>
            <li v-for="(menuVoice, index) in menu" :key="index">
                <img :src="menuVoice.img" :alt="menuVoice.text">
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
        margin-bottom: 10px;

        img {
            width: 25px;
            margin-right: 5px;
            filter: brightness(50%);
        }

        &:hover img {
            filter: brightness(100%);
        }
    }

}
</style>