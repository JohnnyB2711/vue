<template>
    <div id="osnov">
        <div id="left">
            <header><img src="@/assets/img/logo.png"></header>
        </div>
        <div id="right">
                <!--подключить Form.vue-->
                <Form></Form>
        </div>
    </div>
</template>
<script>
    import Form from './Form.vue'
    export default {
        components: {
            Form
        }
    }
</script>
<style lang="scss">@import "@/assets/styles/style.scss";</style>