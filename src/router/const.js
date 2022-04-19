import { LAYOUT, createLayoutWrapper } from "./constant";
import { basicRoutes } from "./basic";

import Redirect from "../views/sys/redirect/index.vue";
/**
 * 通用路由，不需要动态获取的默认路由
 *
 */
export const constRoutes = [
  // ...basicRoutes,     //加上之后报错“ Cannot access 'basicRoutes' before initialization”，
  {
    path: "/redirect",
    component: LAYOUT,
    redirect: "/",
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: Redirect,
        meta: { noCache: true },
      },
    ],
  },
  {
    path: "/login",
    hidden: true,
    component: () => import("../views/sys/login/index.vue"),
    meta: { noCache: true, title: "登录页" },
  },
  {
    path: "/401",
    component: () => import("../views/sys/error-page/401.vue"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("../views/sys/error-page/404.vue"),
    hidden: true,
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: LAYOUT,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/dashboard/index.vue"),
        meta: { title: "首页", icon: "el-icon-house" },
      },
    ],
  },
  createLayoutWrapper({
    path: "/profile",
    children: {
      path: "index",
      name: "Profile",
      component: () => import("../views/demo/profile/index.vue"),
      meta: { title: "个人中心" },
    },
  }),
  
];
