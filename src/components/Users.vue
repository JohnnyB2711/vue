<template>
    <Table>
        <div class="table">
            <h1>Registered users</h1>
        </div>
    </Table>
</template>

<script>
    import Table from "../layouts/Table";
    export default {
        name: "users",
        components: {Table},
        data(){
            return{
                title:'Registered users'
            }
        }
    }
</script>

<style scoped> </style>