<script>
export default {
    name: "SideLogo",
}
</script>

<template>

    <figure id="sidebar_logo">
        <img class="logo" src="../../../assets/images/logo.svg" alt="Logo">
        <img class="mini-logo" src="../../../assets/images/logo-small.svg" alt="Logo">
    </figure>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

#sidebar_logo {
    padding: 20px 0;

    img {
        max-width: 70%;
    }

    .mini-logo {
        display: none;
    }
}
</style>