<template>
  <aside class="sidebar-container" :style="{ width: sidebarWidth }">
    <SideBarLogo></SideBarLogo>
    <el-menu 
    :collapse-transition="false"
    active-text-color="#35A7FF" 
    background-color="transparent" 
    :collapse="!unfoldSidebar"
    :default-active="$route.path"
    text-color="#dcdcdc" 
    :unique-opened="uniqueOpen"
   >
      <SideBarItem v-for="item in menus" :key="menus.path" :item="item"></SideBarItem>
    </el-menu>
  </aside>
</template>

<script setup>
import { reactive, ref, toRefs, watch } from 'vue'
//引入Logo组件
import SideBarLogo from './SideBarLogo.vue';
//引入侧边栏内容组件
import SideBarItem from './SideBarItem.vue'
//引入user仓库
import { useUserStore } from "../../../store/user"
//引入layout仓库
import { useLayoutStore } from "../../../store/layout"
//引入根据路由创建的菜单数据
import { createMenuFromAddRoutes } from "./useMenu"
//从user仓库中获取到过滤后的路由信息
const { addRoutes } = toRefs(useUserStore());
//初始化菜单数组menus
const menus = reactive([]);
menus.push(...createMenuFromAddRoutes(addRoutes.value))

//从仓库中导出控制侧边栏是否展开的数据、以及控制侧边栏宽度的数据
const { unfoldSidebar,sidebarWidth,uniqueOpen,isMobile} = toRefs(useLayoutStore())
//监听生成的路由的变化
watch(addRoutes, (newRoutes) => {
  menus.length = 0
  menus.push(...createMenuFromAddRoutes(newRoutes))
})

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
//当为移动端时，将左侧菜单栏设置为折叠
if(isMobile.value){
  unfoldSidebar.value=false
}
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: fixed;
  z-index: 100;
  height: 100%;
  background-image: linear-gradient(rgb(10, 30, 60) 0%, rgb(80, 120, 150) 100%);
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  transition: background 0.4s;
  .el-menu {
    flex-grow: 1;
    user-select: none;
    border-right: none;
  }

  .el-sub-menu {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .el-menu-item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .el-sub-menu .el-menu-item {
    min-width: 160px;
  }

}

</style>