<template>
    <div class="app-wrapper">
        <SideBar></SideBar>
        <div 
        class="mask-zIndex99"
        v-if="isMobile&&unfoldSidebar"
        @click.self.stop="toggleSideBar(false)"
        ></div>
        <!-- ↑ 移动端模式下展开侧边栏所出现的遮罩层 ↑  -->
        <div class="main-container">
            <header>
                <NavBar></NavBar>
                <TabBar></TabBar>
            </header>
            <AppMain></AppMain>
            <!-- ↑ 内容主体展示区域 ↑  -->
        </div>
        <Settings></Settings>
        <!-- ↑ 默认隐藏在右边的设置面板 ↑  -->
    </div>
</template>
    
<script setup>
import SideBar from './components/SideBar/index.vue'
import NavBar from './components/NavBar/index.vue'
import AppMain from './components/AppMain/index.vue'
import TabBar from './components/TabBar/index.vue'
import Settings from './components/Settings/index.vue'
import { useLayoutStore } from '../store/layout';

import {toRefs} from 'vue'
const {mainPaddingLeft,isMobile,unfoldSidebar,toggleSideBar} =toRefs(useLayoutStore())

</script>
    
<style lang="scss" scoped>
.app-wrapper {
    height: 100vh;
    position: relative;
    overflow: auto;
    display: flex;
}

.main-container {
    position: relative;
    flex-grow: 1; // 撑满页面右边的主体区域
    padding-left: v-bind('mainPaddingLeft');
}



@media screen and (max-width:$sm-width){
    
}
</style>