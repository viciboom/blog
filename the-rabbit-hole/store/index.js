import Vue from 'vue';
import Vuex from 'vuex';

import {SCREEN_CHANGE, SHOW_RIGHT_NAV} from './mutation.js';

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        screen: {
            width: 0,
            height: 0
        },
        showRightNav: false

    },
    mutations: {
        [SCREEN_CHANGE] (state, data) {
            state.screen = data
        },
        [SHOW_RIGHT_NAV] (state, data) {
            state.showRightNav = data
        }
    },
    getters: {
        screen (state) {
            return state.screen
        },
        showRightNav (state) {
            return state.showRightNav
        }
    },
    action: {
        setShowRightNav (store, show) {
            store.state.showRightNav = show
        }
    }
})

export default store