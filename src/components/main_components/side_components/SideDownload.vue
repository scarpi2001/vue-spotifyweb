<script>
export default {
    name: "SideDownload",
}
</script>

<template>

    <div id="sidebar_download">
        <div id="download">
            <img src="../../../assets/images/download.svg" alt="scarica">
            <a class="link" href="#">Installa app</a>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

#sidebar_download {
    padding: 30px 0;

    #download {
        display: flex;
        align-items: center;

        img {
            width: 30px;
            margin-right: 5px;
        }
    }
}
</style>