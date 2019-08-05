<template>
    <div>
        <Menu></Menu>
        <slot></slot>
    </div>
</template>

<script>
    import Menu from "../components/Menu";
    export default {
        name: "Table",
        components: {Menu}
    }
</script>

<style scoped>

</style>