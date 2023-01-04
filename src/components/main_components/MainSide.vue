<script>
export default {
    name: "MainSide",
    components: {

    }
}
</script>

<template>
    <!-- side-bar logo -->
    <figure id="main_side_bar_logo">
        <img class="logo" src="img/logo.svg" alt="Logo">
        <img class="mini-logo" src="img/logo-small.svg" alt="Logo">
    </figure>

    <!-- side-bar nav -->
    <nav id="side_bar_nav">
        <ul>
            <li>
                <a class="link white-text" href="#">
                    <img src="img/home.svg" alt="home">
                    <span>
                        Home
                    </span>
                </a>
            </li>
        </ul>
    </nav>

    <!-- side-bar playlist -->
    <div id="side_bar_playlist">
        <h3 class="white-text">PLAYLIST</h3>
        <div id="add">
            <span id="add_btn"><i class="fa-solid fa-plus"></i></span>
            <span class="create grey-text">
                <h3>Crea Playlist</h3>
            </span>
        </div>
    </div>

    <!-- lista playlist -->
    <div id="playlist_list">
        <ul>
            <li><a class="link grey-text" href="#">Nome Playlist</a></li>
        </ul>
    </div>

    <!-- side-bar download -->
    <div id="side_bar_download">
        <figure id="download">
            <img src="img/download.svg" alt="scarica">
            <a class="link grey-text" href="#">Installa app</a>
        </figure>
    </div>

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as*;
@use "../../styles/general.scss" as*;
</style>
