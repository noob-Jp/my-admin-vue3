<template>
  <div class="navbar">
    <HamburgerVue :unfold="unfoldSidebar" @toggleClick="toggleSideBar"></HamburgerVue>
    <Breadcrumb :list="BreadcrumbList"></Breadcrumb>
    <div class="right-menu-area">
      <AvatarMenu :avatar="DioAvatar" :nickname="'管理员'" :items="dropdownItems"></AvatarMenu>
    </div>
  </div>
</template>
<!-- 顶部横栏：左侧控制侧边栏收缩的按钮，右侧的头像下拉框 -->
<script setup>
import { readonly, toRefs } from 'vue'
// 右侧头像的引入
import DioAvatar from '../../../assets/tx.jpg'
//右侧头像及下拉框菜单组件的引入
import AvatarMenu from './AvatarMenu.vue'
//左侧控制侧边栏收缩的按钮组件的引入，
import HamburgerVue from './Hamburger.vue';
//引入面包屑组件
import Breadcrumb from './Breadcrumb.vue'
//layout仓库的引入
import { useLayoutStore } from '../../../store/layout';
//移除token工具的引入
import  {removeToken}  from '../../../utils/storage.js';
//从layout仓库中导出控制是否展开侧边菜单栏的数据，以及侧边栏是否展开事件的
const {unfoldSidebar,toggleSideBar,breadcrumbList}=toRefs(useLayoutStore());

const BreadcrumbList=breadcrumbList.value;
console.log(BreadcrumbList);
// TEMP:头像下拉菜单项
const dropdownItems = readonly([
  { title: '个人中心', path: '/profile' },
  { title: '测试页面', path: '/test' },
  {
    title: '项目地址',
    path: 'https://github.com/noob-Jp/my-admin-vue3',
  },
  { title: '不可点击', path: '/', disabled: true },
  {
    title: '退出登录',
    // divided: true,
    handle: () => {
      alert('您选择了登出')
      removeToken()
      location.reload()
    },
  },
])
</script>
    
<style lang="scss"  scoped>


.navbar {
  position: relative;
  display: flex;
  align-items: center;
  height: $navbar-height;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 4px #00000114;
}

.right-menu-area {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>