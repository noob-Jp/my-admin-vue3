import router from "../router";
import { defineStore } from "pinia";
import { getToken, setToken } from "../utils/storage";
import { login as _login, getInfo as _getInfo } from "../api/user.js";
import {asyncRoutes} from '../router/async'
import { constRoutes } from "../router/const";


export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    name: "",
    avator: "",
    roles: [],
    addRoutes: [],//使用addRoute得到的最后的路由信息
  }),
  getters: {
    hasUserInfo: (state) => state.roles && state.roles.length > 0,//判断是否有用户信息
  },
  actions: {
    //登录
    async login({ username, password }) {
      const res = await _login({ username, password });
      console.log(res);
      setToken(res.data.token);
      this.token = res.data.token;
      this.roles.push(...res.data.roles);
      this.name = res.data.name || "ZJP";
      this.addRoutes = this.generateRoutes();
    },
    //获取用户信息
    async getUserInfo() {
      const res = await _getInfo();
      console.log(res);
      this.roles.push(...res.data.roles);
      this.addRoutes = this.generateRoutes();
    },
    //使用addRoute 生成动态路由
    generateRoutes(){
      
      const accessedRoutes=this.roles.includes("admin")
        ?asyncRoutes||[]
        :filterAsyncRoutes(asyncRoutes,this.roles);
        // console.log(accessedRoutes);
      //将动态生成的可以访问的路由加入 到 vue-router中
      accessedRoutes.forEach((route)=>router.addRoute(route));
      //
      return constRoutes.concat(accessedRoutes);
    },
    //切换权限
    changeRoles(roles) {
      this.roles.length = 0
      this.roles.push(...roles)
      this.addRoutes = this.generateRoutes()
    },
  },
});
//递归 根据已登录用户的roles数组来过滤异步路由表来生成所属的路由表
function filterAsyncRoutes(routes,roles){
  const res=[]

  routes.forEach((route)=>{
    const tmp={...route};
    if(hasPermission(roles,tmp)){
      if(tmp.children){
        tmp.children=filterAsyncRoutes(tmp.children,roles);
      }
      res.push(tmp);
    }

  })
  return res;
}
//比较当前roles和路由需要的role是否有交集
function hasPermission(roles,route){
  return route.meta&&route.meta.roles
    ?roles.some((role)=>route.meta.roles.includes(role))
    :true;
}
