<template>
    <Registration>
        <div id="right_content">
            <h2>{{$t('title')}}</h2>
            <span class="invalid" v-if="error_message">{{$t('msg.invalid_message')}}</span>
            <span class="invalid success_massage" v-if="success_message">{{$t('msg.success_message')}}</span>


            <form class="block_pole_registr" id="form" @submit.prevent="submit">
                <div class="pole_registr">
                    <span class="text">{{$t('header1')}}</span>
                    <span class="pole_registr_flex">
                            <input type="text" :placeholder="$t('placeholder1')" v-model="name"
                                   @blur="$v.name.$touch()">
                            <div class="invalid" v-if="$v.name.$error">
                                <template v-if="!$v.name.required">{{$t('msg.null_message')}}</template>
                                <template v-else-if="!$v.name.alpha">
                                    {{$t('msg.type_message')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">{{$t('header2')}}</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" :placeholder="$t('placeholder2')" v-model="username"
                                   @blur="$v.username.$touch()">
                            <div class="invalid" v-if="$v.username.$error">
                                <template v-if="!$v.username.required">{{$t('msg.null_message')}}</template>
                                <template v-else-if="!$v.username.alpha">{{$t('msg.type_message')}}</template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">{{$t('header3')}}</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" :placeholder="$t('placeholder3')" v-model="email"
                                   @blur="$v.email.$touch()">
                            <div class="invalid" v-if="$v.email.$error">
                                <template v-if="!$v.email.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.email.email">
                                     {{$t('msg.email_message')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">{{$t('header4')}}</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="password" placeholder="******" v-model="password"
                                   @blur="$v.password.$touch()">
                            <div class="invalid" v-if="$v.password.$error">
                                <template v-if="!$v.password.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.password.minLength">
                                    {{$t('msg.length_message1') + $v.password.$params.minLength.min + $t('msg.length_message2')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">{{$t('header5')}}</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="password" placeholder="******" v-model="second_password"
                                   @blur="$v.second_password.$touch()">
                             <div class="invalid" v-if="$v.second_password.$error">
                                <template v-if="!$v.second_password.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.second_password.sameAs">
                                     {{$t('msg.password_message')}}
                                </template>
                            </div>
                        </span>
                </div>

                <div class="footer mistakes">
                    <label>
                        <input class="checkbox" type="checkbox" name="checkbox-test" v-model="checkbox"
                               @change="$v.checkbox.$touch()">

                        <span class="checkbox-custom"></span>
                        <span> {{$t('accept1')}}<span id="green_text">{{$t('accept2')}}</span></span>
                    </label>
                    <div class="invalid" v-if="$v.checkbox.$error">
                        <template v-if="!$v.checkbox.sameAs">{{$t('msg.accept_message')}}</template>
                    </div>
                    <input type="submit" :value="$t('button')" v-on:click="show = !show">
                    <transition v-if="show">
                        <span class="message">{{$t('msg.thank_message')}}</span>
                    </transition>
                    <LanguageButton></LanguageButton>
                </div>
            </form>
        </div>
    </Registration>
</template>
<script>
    import {required, minLength, sameAs, alpha, email} from 'vuelidate/lib/validators';
    import axios from 'axios';
    import Registration from "../layouts/Registration";
    import LanguageButton from "./LanguageButton";
    export default {
        components: {LanguageButton, Registration},
        data() {
            return {
                name: null,
                username: null,
                email: null,
                password: null,
                second_password: null,
                checkbox: null,
                show: false,
                success_message: false,
                error_message: false
            }
        },
        validations() {
            return {
                name: {
                    required,
                    alpha
                },
                username: {
                    required,
                    alpha
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(8)
                },
                second_password: {
                    required,
                    sameAs: sameAs('password')
                },
                checkbox: {
                    sameAs: sameAs(() => true)
                }
            }
        },
        methods: {
            async submit(event) {
                this.$v.$touch();
                setTimeout(() => {
                    this.show = false
                }, 500);
                if (!this.$v.$error) {
                    try {
                        var response = await axios.post("https://trainee.smartru.com/api/application",
                        {
                            "full_name": this.name,
                            "username": this.username,
                            "email": this.email,
                            "password": this.password,
                            "password_confirmation": this.second_password
                        }
                    )
            //this.$v.reset();
                        //event.target.clear()
                        event.target.reset();
                        this.success_message = true;
                        this.$store.commit('ADD_ITEMS', response.data);
                    } catch (e) {
                        this.error_message = true;
                    }
                }
            }
        }
    }
</script>