<template>
            <router-view></router-view>
</template>
<script>
    export default {
        created() {
            this.$store.dispatch('get_items');
        }

    }
</script>
<style lang="scss">@import "@/assets/styles/style.scss";</style>