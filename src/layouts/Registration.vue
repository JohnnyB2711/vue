<template>
    <div id="osnov">
        <div id="left">
            <Menu></Menu>
        </div>
        <div id="right">
            <slot></slot>
        </div>
    </div>

</template>
<script>
    import Menu from "../components/Menu";
    export default {
        name: 'Registration',
        components: {Menu}
    }
</script>