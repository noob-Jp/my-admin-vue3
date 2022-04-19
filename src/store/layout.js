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
    }
  },
});
