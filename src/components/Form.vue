<template>
    <Registration>
        <div id="right_content">
            <h2>{{$t('title')}}</h2>
            <span class="invalid" v-if="error_message">{{$t('msg.invalid_message')}}</span>
            <span class="invalid success_massage" v-if="success_message">{{$t('msg.success_message')}}</span>
            <form class="block_pole_registr" @submit.prevent="submit">
                <div class="pole_registr">
                    <label for="input_name" class="text">{{$t('header1')}}</label>
                    <span class="pole_registr_flex">
                            <input type="text" id="input_name" :placeholder="$t('placeholder1')" v-model="form.name"
                                   @blur="$v.form.name.$touch()">
                            <div class="invalid" v-if="$v.form.name.$error">
                                <template v-if="!$v.form.name.required">{{$t('msg.null_message')}}</template>
                                <template v-else-if="!$v.form.name.alpha">
                                    {{$t('msg.type_message')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <label for="input_username" class="text">{{$t('header2')}}</label>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" id="input_username" :placeholder="$t('placeholder2')"
                                   v-model="form.username"
                                   @blur="$v.form.username.$touch()">
                            <div class="invalid" v-if="$v.form.username.$error">
                                <template v-if="!$v.form.username.required">{{$t('msg.null_message')}}</template>
                                <template v-else-if="!$v.form.username.alpha">{{$t('msg.type_message')}}</template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <label for='input_email' class="text">{{$t('header3')}}</label>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" id="input_email" :placeholder="$t('placeholder3')" v-model="form.email"
                                   @blur="$v.form.email.$touch()">
                            <div class="invalid" v-if="$v.form.email.$error">
                                <template v-if="!$v.form.email.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.form.email.email">
                                     {{$t('msg.email_message')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <label for="input_password" class="text">{{$t('header4')}}</label>
                    <span class="pole_registr_flex mistakes">
                            <input id="input_password" type="password" placeholder="******" v-model="form.password"
                                   @blur="$v.form.password.$touch()">
                            <div class="invalid" v-if="$v.form.password.$error">
                                <template v-if="!$v.form.password.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.form.password.minLength">
                                    {{$t('msg.length_message1') + $v.form.password.$params.minLength.min + $t('msg.length_message2')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <label for="input_secpassword" class="text">{{$t('header5')}}</label>
                    <span class="pole_registr_flex mistakes">
                            <input id="input_secpassword" type="password" placeholder="******"
                                   v-model="form.second_password"
                                   @blur="$v.form.second_password.$touch()">
                             <div class="invalid" v-if="$v.form.second_password.$error">
                                <template v-if="!$v.form.second_password.required">
                                    {{$t('msg.null_message')}}
                                </template>
                                <template v-else-if="!$v.form.second_password.sameAs">
                                     {{$t('msg.password_message')}}
                                </template>
                            </div>
                        </span>
                </div>
                <div class="footer mistakes">
                    <label>
                        <input class="checkbox" type="checkbox" name="checkbox-test" v-model="form.checkbox"
                               @change="$v.form.checkbox.$touch()">

                        <span class="checkbox-custom"></span>
                        <span> {{$t('accept1')}}<span id="green_text">{{$t('accept2')}}</span></span>
                    </label>
                    <div class="invalid" v-if="$v.form.checkbox.$error">
                        <template v-if="!$v.form.checkbox.sameAs">{{$t('msg.accept_message')}}</template>
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
                form: {
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    second_password: '',
                    checkbox: false
                },
                show: false,
                success_message: false,
                error_message: false
            }
        },
        validations() {
            return {
                form: {
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
            }
        },
        methods: {
            async submit() {
                this.$v.$touch();
                setTimeout(() => {
                    this.show = false
                }, 500);
                if (!this.$v.$error) {
                    try {
                        var response = await axios.post("https://trainee.smartru.com/api/application",
                            {
                                "full_name": this.form.name,
                                "username": this.form.username,
                                "email": this.form.email,
                                "password": this.form.password,
                                "password_confirmation": this.form.second_password
                            }
                        )
                        this.success_message = true;
                        this.$store.commit('ADD_ITEMS', response.data);
                        setTimeout(() => {
                            //this.success_message = false;
                            Object.assign( ...this.data.form, this.$options.data.call(this));
                            //Object.assign(this.$data, this.$options.data.call(this));
                            //Object.assign(текущее значение,начальное );
                            //this.name=null, this.username=null, this.email=null, this.password=null, this.second_password=null,this.checkbox=null
                            this.$v.$reset();
                        }, 500)
                    } catch (e) {
                        this.error_message = true;
                    }


                }
            }
        }
    }
</script>