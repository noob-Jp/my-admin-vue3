
import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router';
import {basicRoutes} from "./basic"
import {constRoutes} from "./const"
import {useUserStore} from '../store/user'
import {getToken} from '../utils/storage'
import { useLayoutStore } from '../store/layout';

//从.env文件中读取配置基本路径
const base=import.meta.env.BASE_URL
const mode=import.meta.env.VITE_ROUTER_HISTORY
// 从.env文件中读取配置判断是否hash模式还是history模式
const historyMode=mode==='hash'?createWebHashHistory(base):createWebHistory(base)
//从.env文件中读取配置默认标题
const pageTitle=import.meta.env.VITE_DEFAULT_TITLE
//定义一个公共路径集合，任何用户及匿名者都能访问的到
export const PUBLIC_PATH=new Set()
basicRoutes.forEach((item)=>PUBLIC_PATH.add(item.path))


const router=createRouter({
    history:historyMode,
    routes:constRoutes,
    strict:true,//禁止尾随斜杠
})

router.beforeEach(async (to) => {
    // 根据是否有 token 判断用户是否登录
    const token = getToken()
    // 如果[未登录]且要访问[不在]公共路径集合里的路径时，跳转到登录页面并记录之前的页面用于重新访问
    if (!token && !PUBLIC_PATH.has(to.path))
      return { path: '/login', query: { redirect: to.fullPath } }
    const userStore = useUserStore()
    // 如果已登录但因为刷新后导致保存在内存中的数据(登录信息，动态添加的路由等)丢失，
    // 需要再次发起请求重新获取用户信息，并动态添加路由
    if (!userStore['hasUserInfo']) {
      await userStore['getUserInfo']()
      // 要添加个catch处理错误
      return to
    }
  })

router.afterEach((to)=>{
  document.title=to.meta.title||pageTitle;
  useLayoutStore()['accessRecord'](to)
})

export default router;

