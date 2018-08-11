import Vue from 'vue';
import Vuex from 'vuex';

import {SCREEN_CHANGE} from './mutation.js';

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        screen: {
            width: 0,
            height: 0
        }

    },
    mutations: {
        [SCREEN_CHANGE] (state, data) {
            state.screen = data
        }
    },
    getters: {
        screen (state) {
            return state.screen
        }
    }
})

export default store