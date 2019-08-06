<template>
    <div>
        <Menu></Menu>
        <LanguageButton></LanguageButton>
        <slot></slot>
    </div>
</template>

<script>
    import Menu from "../components/Menu";
    import LanguageButton from "../components/LanguageButton";
    export default {
        name: "Table",
        components: {LanguageButton, Menu}
    }
</script>

<style scoped>

</style>