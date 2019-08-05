<template>
    <Registration>
        <div id="right_content">
            <h2>Sign Up</h2>
            <span class="invalid" v-if="success_message">>
            <template v-if="success_message">You have been successfully registered</template>
            <template v-if="error_message">Something went wrong.Please,try again</template>
        </span>
            <form class="block_pole_registr" @submit.prevent="submit">
                <div class="pole_registr">
                    <span class="text">Full name</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" placeholder="Name..." v-model="name"
                                   @blur="$v.name.$touch()">
                            <div class="invalid" v-if="$v.name.$error">
                                <template v-if="!$v.name.required">
                                    Заполните поле!
                                </template>
                                <template v-else-if="!$v.name.alpha">
                                    Только буквы!
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">Username</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" placeholder="Username..." v-model="username"
                                   @blur="$v.username.$touch()">
                            <div class="invalid" v-if="$v.username.$error">
                                <template v-if="!$v.username.required">
                                    Заполните поле!
                                </template>
                                <template v-else-if="!$v.username.alpha">
                                    Только буквы!
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">Email</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="text" placeholder="Email address..." v-model="email"
                                   @blur="$v.email.$touch()">
                            <div class="invalid" v-if="$v.email.$error">
                                <template v-if="!$v.email.required">
                                    Заполните email!
                                </template>
                                <template v-else-if="!$v.email.email">
                                    Только буквы!
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">Password</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="password" placeholder="******" v-model="password"
                                   @blur="$v.password.$touch()">
                            <div class="invalid" v-if="$v.password.$error">
                                <template v-if="!$v.password.required">
                                    Заполните пароль!
                                </template>
                                <template v-else-if="!$v.password.minLength">
                                    Не меньше {{ $v.password.$params.minLength.min }} символов!
                                </template>
                            </div>
                        </span>
                </div>
                <div class="pole_registr">
                    <span class="text">Password Confirmation</span>
                    <span class="pole_registr_flex mistakes">
                            <input type="password" placeholder="******" v-model="second_password"
                                   @blur="$v.second_password.$touch()">
                             <div class="invalid" v-if="$v.second_password.$error">
                                <template v-if="!$v.second_password.required">
                                    Заполните пароль!
                                </template>
                                <template v-else-if="!$v.second_password.sameAs">
                                    Пароли не совпадают!
                                </template>
                            </div>
                        </span>
                </div>

                <div class="footer mistakes">
                    <label>
                        <input class="checkbox" type="checkbox" name="checkbox-test" v-model="checkbox"
                               @change="$v.checkbox.$touch()">

                        <span class="checkbox-custom"></span>
                        <span>I accept <span id="green_text"> Terms amd Condition</span></span>
                    </label>
                    <div class="invalid" v-if="$v.checkbox.$error">
                        <template v-if="!$v.checkbox.sameAs">
                            You mast accept terms and conditions
                        </template>
                    </div>
                    <input type="submit" value="Sign Up" v-on:click="show = !show">
                    <transition v-if="show">
                        <span class="message">Thank you!</span>
                    </transition>
                </div>
            </form>
        </div>
    </Registration>

</template>

<script>
    import {required, minLength, sameAs, alpha, email} from 'vuelidate/lib/validators';
    import axios from 'axios';
    import Registration from "../layouts/Registration";

    export default {
        components: {Registration},
        data()
        {
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
            async submit() {
                this.$v.$touch();
                setTimeout(() => {
                    this.show = false
                }, 500);
                if (!this.$v.$error) {
                    try {
                        await axios.post("https://trainee.smartru.com/api/application",
                            {
                                "full_name": this.name,
                                "username": this.username,
                                "email": this.email,
                                "password": this.password,
                                "password_confirmation": this.second_password
                            }
                        )
                        this.success_message = true;
                    } catch (e) {
                        this.error_message = true;
                    }

                    /*.then(() => {
                        this.success_message=true;

                    })
                    .catch(() => {
                        this.error_message=true;
                    });*/

                }
            }
        }
    }
</script>