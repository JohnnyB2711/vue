<template>
    <Table>
        <div class="table">
            <h1>Registered users</h1>
            <b-table striped :fields="fields" :items="$store.state.items"></b-table>
        </div>
    </Table>
</template>

<script>
    import Table from "../layouts/Table";

    export default {
        name: "users",
        components: {Table},
        data() {
            return {
                fields: [
                    {
                        key: 'name',
                        label: 'Name'
                    },
                    {
                        key: 'username',
                        label: 'Username'
                    },
                    {
                        key: 'email',
                        label: 'Email'
                    }
                ],
                item: ''
            }
        }

    }
</script>

<style scoped></style>