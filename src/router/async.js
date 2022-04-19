
import  {LAYOUT} from './constant'

/**
 * 异步路由表，结合用户的roles过滤后添加到router中
 */

export const asyncRoutes=[
    {
        path:'/test',
        redirect:"/test/test1",
        component:LAYOUT,
        hidden:true,
        children:[
            {
                path:"test1",
                name:"Test1",
                component:()=>import("../views/test/test1.vue"),
                meta:{title:"测试-1"}
            }
        ]
    },
    {
        path:"/permission",
        redirect:"/permission/page",
        component:LAYOUT,
        meta:{title:"权限页面",roles:["admin","editor","test"]},
        children:[
            {
                path:"page",
                component:()=>import("../views/demo/permission/page.vue"),
                name:"PagePermission",
                meta:{title:"权限-页面",icon: "el-icon-house"}
            },
            {
                path:"admin",
                component:()=>import("../views/demo/permission/admin.vue"),
                name:"AdminPermission",
                meta:{title:"权限-管理员",roles: ['admin']}
            },
            {
                path:"test",
                component:()=>import("../views/demo/permission/test.vue"),
                name:"TestPermission",
                meta:{title:"权限-测试", roles: ['test']}
            }
        ]
    },
    {
        path: '/:catchAll(.*)*',
        name: 'NotFound',
        hidden: true,
        component: () => import('../views/sys/error-page/404.vue'),
    },
]