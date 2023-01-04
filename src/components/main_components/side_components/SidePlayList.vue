<script>
export default {
    name: "SidePlayList",
}
</script>

<template>

    <h3>PLAYLIST</h3>

    <!-- pulsante add -->
    <div id="add">
        <span id="add_btn">
            <font-awesome-icon icon="fa-solid fa-plus" />
        </span>
        <h3>Crea Playlist</h3>
    </div>

    <!-- lista playlist -->
    <div id="playlist_list">
        <ul>
            <li>Nome Playlist</li>
        </ul>

    </div>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

h3 {
    color: #fff;
}

#add {
    display: flex;
    align-items: center;
    margin: 15px 0;

    h3 {
        color: rgb(127, 129, 134);
    }

    #add_btn {
        padding: 5px 8px;
        margin-right: 10px;
        background-color: rgb(163, 163, 163);
        font-size: 20px;

        &:hover {
            background-color: white;
            cursor: pointer;
        }
    }

}


#playlist_list {
    flex-grow: 1;
    overflow-y: auto;
}
</style>