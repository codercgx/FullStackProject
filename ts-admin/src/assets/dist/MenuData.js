"use strict";
exports.__esModule = true;
// interface Imenu {
//   [str: string]: any[];
// }
var MenuData = [
    { name: "首页", path: "/index", children: [] },
    {
        name: "博客管理",
        path: "/blog/management",
        children: [
            {
                name: "博客列表",
                path: "/blog/list",
                children: []
            },
            {
                name: "新建博客",
                path: "/blog/create",
                children: []
            },
        ]
    },
    { name: "信息列表", path: "/info/list", children: [] },
    { name: "信息管理", path: "/inf/management", children: [] },
    { name: "用户列表", path: "/user/list", children: [] },
];
exports["default"] = MenuData;
