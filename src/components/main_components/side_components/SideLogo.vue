<script>
export default {
    name: "SideLogo",
}
</script>

<template>

    <figure class="sidebar_logo">
        <img class="logo" src="logo.svg" alt="Logo">
        <img class="mini_logo" src="logo-small.svg" alt="Logo">
    </figure>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

.sidebar_logo {
    padding: 20px 0;

    img {
        max-width: 70%;
    }

    .mini_logo {
        display: none;
    }
}

// smartphone version
@media screen and (max-width: 600px) {

    .sidebar_logo {

        img {
            max-width: 100%;
        }
        .logo {
            display: none;
        }

        .mini_logo {
            display: block;
        }
    }
    
}
</style>