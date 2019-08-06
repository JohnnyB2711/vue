import Vue from 'vue'
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        items: []
    },
    mutations: {
        SET_ITEMS: (state, payload) => {
            state.items = payload;
        },
        ADD_ITEMS: (state, payload) => {
            state.items.push(payload);
        }
    },
    actions: {
        get_items: async ({commit}) => {
            let {data} = await Axios.get('https://trainee.smartru.com/api/application');
            commit('SET_ITEMS', data);
        }
    }
})