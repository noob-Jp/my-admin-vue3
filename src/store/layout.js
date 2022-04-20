import { defineStore } from "pinia";
import { getSetting } from "../utils/storage";

const noRecordViewPath = ["/login"];

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    //侧边菜单栏展开的默认宽度
    sUnfoldWidth: getSetting("sUnfoldWidth", 190),
    // 是否展开侧边菜单栏
    unfoldSidebar: getSetting('unfoldSidebar', true),
    // 是否为移动端（小屏）
    isMobile: document.body.clientWidth < 768,
    // 是否展开侧边菜单栏
    unfoldSidebar: getSetting("unfoldSidebar", true),
    // 侧边菜单栏折叠后宽度
    sCollapseWidth: 64,
    //面包屑 数据数组
    breadcrumbList:[],
    //记录访问过的页面数组
    visitedViews:[]
  }),
  getters: {
    // 响应式：如果是移动端，则不显示折叠后的sidebar
    sidebarWidth: (state) =>
      state.unfoldSidebar === true
        ? state.sUnfoldWidth + "px"
        : (state.isMobile ? 0 : state.sCollapseWidth) + "px",
    // 内容区域的左边距,避免覆盖sidebar
    mainPaddingLeft(state) {
      return state.isMobile ? 0 : this.sidebarWidth;
    },
  },
  actions: {
    // 注册于src/layout/index.vue 监听页面resize
    checkIsMobile() {
      this.isMobile = document.body.clientWidth < 768;
    },
    //侧边栏切换
    toggleSideBar(bool){
      if(bool!==undefined){
        this.unfoldSideBar=bool;
      }else{
        this.unfoldSidebar=!this.unfoldSidebar;
      }
    },
    //记录每次访问的页面
    accessRecord(to){
      const matched=to.matched.filter((item)=>item.meta&&item.meta.title);
      this.breadcrumbList.length=0;
      this.breadcrumbList.push(...matched);
      this.addVisitedView(to);
    },
    //记录访问过的页面，用来生成tab-bar
    addVisitedView(view){
      if(
        view.meta.title &&
        !this.visitedViews.some((v)=>v.path===view.path)&&
        !noRecordViewPath.some((v)=>view.path.includes(v))
      ){
        this.visitedViews.push({
          name:view.name,
          path:view.path,
          query:view.query,
          title:view.meta.title,
          fullPath:view.fullPath,
          timeStamp:Date.now()
        })
      }
    }
  },
});
