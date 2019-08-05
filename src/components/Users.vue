<template>
    <Table>
        <div class="table">
            <h1>Registered users</h1>
            <b-table striped hover :fields="fields" :items="items"></b-table>
        </div>
    </Table>
</template>

<script>
    import axios from 'axios';
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
                items: [
                    {email: 40, username: 'Dickerson', name: 'Macdonald'},
                    {email: 21, username: 'Larsen', name: 'Shaw'},
                    {email: 89, username: 'Geneva', name: 'Wilson'},
                    {email: 38, username: 'Jami', name: 'Carney'}
                ]
            }
        },
        methods: {
            async loadusers() {
                try {
                   this.items = (await axios.get("https://trainee.smartru.com/api/application")).data

                } catch (e) {

                }
            }
        },
        created() {
            this.loadusers()
        }

    }
</script>

<style scoped></style>