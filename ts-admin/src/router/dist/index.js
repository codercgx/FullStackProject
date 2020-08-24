"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("@/views/Home.vue");
var BlogList_vue_1 = require("@/views/BlogList.vue");
var BlogCreate_vue_1 = require("@/views/BlogCreate.vue");
vue_1["default"].use(vue_router_1["default"]);
var routes = [
    {
        path: "/",
        name: "Home",
        component: Home_vue_1["default"],
        children: [
            {
                path: "blog/list",
                component: BlogList_vue_1["default"]
            },
            {
                path: "blog/create",
                component: BlogCreate_vue_1["default"]
            }
        ]
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
];
var router = new vue_router_1["default"]({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes
});
exports["default"] = router;
