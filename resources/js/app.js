import('./bootstrap');
import Vue from 'vue';
import Board from './pages/Board';
import apolloProvider from './apollo.config';

import router from './router.config';
import store from './store';

window.Vue = Vue;

Vue.component('Board', Board);

new Vue({
    el: '#app',
    apolloProvider,
    router,
    store,
    beforeCreate() {
        store.dispatch('setLoggedIn', localStorage.getItem('isLoggedIn') === 'true');
        store.dispatch('fetchCurrentUser');
    }
});
