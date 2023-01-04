<script>
export default {
    name: "SideNav",
}
</script>

<template>

    <nav id="sidebar_nav">
        <ul>
            <li>
                <a class="link" href="#">
                    <img src="img/home.svg" alt="home">
                    <span>
                        Home
                    </span>
                </a>
            </li>
        </ul>
    </nav>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

#sidebar_nav {
    margin-bottom: 20px;

    img {
        margin-right: 5px;
    }
}
</style>