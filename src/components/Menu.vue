<template>
    <header><img src="@/assets/img/logo.png">
        <nav class="menu">
            <router-link class="col" class-active="active" to="/users">Users</router-link>
            <router-link class="col" class-active="active" to="/">Registration</router-link>
        </nav>

    </header>
</template>
<script>
    export default {
        name: "Menu"
    }
</script>
<style scoped></style>