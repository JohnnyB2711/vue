<template>
    <div id="osnov">
        <div id="left">
            <header><img src="@/assets/img/logo.png"></header>
            <router-link to="/users">Registered users </router-link>
            <router-link to="/">Registration</router-link>
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
        name:"registration",
        components: {
            Form
        }
    }
</script>
<style lang="scss">@import "@/assets/styles/style.scss";</style>