import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from "./components/About";
import Work from "./components/Work";
import Reviews from "./components/Reviews";
import Login from "./components/reg"

const routes = [
    {
        path: '/',
        component: About
    },
    {
        path: '/Work',
        component: Work
    },
    {
        path: '/Reviews',
        component: Reviews
    },
    {
        path: '/Login',
        component: Login
    },
];

export default new VueRouter({routes});