<script>
export default {
    name: "ContentTop",
}
</script>

<template>

    <a class="btn link" href="#">
        EFFETTUA L'UPGRADE
    </a>

</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as*;
@use "../../../styles/general.scss" as*;

.btn {
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
