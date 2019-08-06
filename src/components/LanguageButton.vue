<template>
    <div>
        <button v-for="entry in languages" :key="entry.title" @click.prevent="changeLocale(entry.language)">
            <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </button></div>
</template>

<script>
    export default {
        name: "LanguageButton",
        data() {
            return {
                languages: [
                    {
                        flag: 'us',
                        language: 'en',
                        title: 'English'
                    }, {
                        flag: 'ru',
                        language: 'ru',
                        title: 'Russia'
                    }]
            };
        },
        methods: {
            changeLocale(locale) {
                this.$i18n.locale = locale;
            }
        }
    }
</script>
<style scoped>
    button {
        font-size: 10px;
        margin-left: 10px;
        background: white;
    }
</style>