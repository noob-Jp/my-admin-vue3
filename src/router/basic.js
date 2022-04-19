import { LAYOUT } from "./constant";
import Redirect from "../views/sys/redirect/index.vue";
import Login from "../views/sys/login/index.vue";

//不需要权限就能访问到的路由
export const basicRoutes = [
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
];
