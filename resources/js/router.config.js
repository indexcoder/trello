import Vue from 'vue';
import VueRouter from 'vue-router';

import Board from "./pages/Board.vue";
import Login from "./pages/auth/Login.vue";

Vue.use(VueRouter);



const routes = [
    {path: '/',      name: 'Board', component: Board},
    {path: '/login', name: 'login', component: Login}
];

export default new VueRouter({
    routes,
    mode: "history",
    linkExactActiveClass: 'active',
})
