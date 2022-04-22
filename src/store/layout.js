import { defineStore } from "pinia";
import { getSetting } from "../utils/storage";

const noRecordViewPath = ["/login"];

export const useLayoutStore = defineStore("layout", {
  state: () => ({
    //侧边菜单栏展开的默认宽度
    sUnfoldWidth: getSetting("sUnfoldWidth", 190),
    // 是否展开侧边菜单栏
    unfoldSidebar: getSetting("unfoldSidebar", true),
    // 是否为移动端（小屏）
    isMobile: document.body.clientWidth < 768,
    // 是否展示标签栏
    showTabBar: getSetting("showTabBar", true),
    // 侧边菜单栏折叠后宽度
    sCollapseWidth: 64,
    //面包屑 数据数组
    breadcrumbList: [],
    //记录访问过的页面数组
    visitedViews: [],
    //控制设置面板显示与隐藏
    showSettings: false,
    //是否显示左侧菜单栏logo
    showLogo: getSetting("showLogo", true),
    //菜单手风琴效果，一个子菜单的展开
    uniqueOpen: getSetting("uniqueOpen", false),
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
    toggleSideBar(bool) {
      if (bool !== undefined) {
        this.unfoldSideBar = bool;
      } else {
        this.unfoldSidebar = !this.unfoldSidebar;
      }
    },
    //记录每次访问的页面
    accessRecord(to) {
      const matched = to.matched.filter((item) => item.meta && item.meta.title);
      this.breadcrumbList.length = 0;
      this.breadcrumbList.push(...matched);
      this.addVisitedView(to);
    },
    //记录访问过的页面，用来生成tab-bar
    addVisitedView(view) {
      if (
        view.meta.title &&
        !this.visitedViews.some((v) => v.path === view.path) &&
        !noRecordViewPath.some((v) => view.path.includes(v))
      ) {
        this.visitedViews.push({
          name: view.name,
          path: view.path,
          query: view.query,
          title: view.meta.title,
          fullPath: view.fullPath,
          timeStamp: Date.now(),
        });
      }
    },
    //设置面板隐藏显示切换
    toggleSettings(bool) {
      if (bool !== undefined) {
        this.showSettings = bool;
      } else {
        this.showSettings = !this.showSettings;
      }
    },
    //设置左侧Logo隐藏显示的切换
    changeShowLogo(bool) {
      if (bool !== undefined) {
        this.showLogo = bool;
      } else {
        this.showLogo = !this.showLogo;
      }
    },
    //切换手风琴效果
    changeUniqueOpen(bool) {
      if (bool !== undefined) {
        this.uniqueOpen = bool;
      } else {
        this.uniqueOpen = !this.uniqueOpen;
      }
    },
    //切换标签栏的显示与隐藏
    changeShowTabBar(bool){
      if (bool !== undefined) {
        this.showTabBar = bool;
      } else {
        this.showTabBar = !this.showTabBar;
      }
    }
  },
});
