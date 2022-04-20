<template>
    <div class="tabBar">
        <el-scrollbar>
            <div class="item-list" v-for="item in visitedViews" :key="item.timeStamp">
                <TabBarItem  :TabItem="item"></TabBarItem>
            </div>
        </el-scrollbar>
    </div>
</template>
    
<script setup>
import { toRefs, computed } from 'vue';
import { useLayoutStore } from '../../../store/layout';
import TabBarItem from '../TabBar/TabBarItem.vue'

const { visitedViews, sUnfoldWidth } = toRefs(useLayoutStore());
</script>
    
<style lang="scss"  scoped>
.tabBar {
    width: calc(100vw - v-bind("sUnfoldWidth"));
    height: $tabBar-height;
    padding-right: 30px;
    padding-left: 10px;
    line-height: 30px;
}

.item-list {
    display: inline;
}
</style>