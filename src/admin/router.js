import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from "./components/About";
import Work from "./components/Work";
import Reviews from "./components/Reviews";

const routers = [
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
];

export default new VueRouter({routers});