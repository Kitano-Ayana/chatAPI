import { createStore } from 'vuex';
import auth from './auth';

const store = createStore({
    state: {
        isAuthenticated: false
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        }
    },
    actions: {
        login({ commit }) {
            commit('setAuthentication', true);
        },
        logout({ commit }) {
            commit('setAuthentication', false);
        }
    },
    modules: {
        auth
    }
});





export default store;
