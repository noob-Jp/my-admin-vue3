<template>
    <div>
        <el-drawer
        v-model="showSettings"
        title="项目配置"
        size="20%"
        >
        <slot>
            <div >
                <el-divider><span style="color: #303133;font-size: 16px;font-weight: bold;">界面显示</span></el-divider>
                <div class="page-show">
                    <span>侧边栏Logo</span>
                    <el-switch
                        v-model="showLogo"
                        class="ml-2"
                        @change="changeShowLogo"
                    />
                </div>
                <div class="page-show">
                    <span>菜单手风琴模式</span>
                    <el-switch
                        v-model="uniqueOpen"
                        class="ml-2"
                        @change="changeUniqueOpen"
                    />
                </div>
                <div class="page-show">
                    <span>展示标签栏</span>
                    <el-switch
                        v-model="showTabBar"
                        class="ml-2"
                        @change="changeShowTabBar"
                    />
                </div>
            </div>
            
        </slot>
        </el-drawer>
    </div>
</template>
    
<script setup>
import { toRefs } from 'vue';
import { useLayoutStore } from '../../../store/layout';
const {showSettings,showLogo,changeShowLogo,uniqueOpen,changeUniqueOpen,showTabBar,changeShowTabBar}=toRefs(useLayoutStore());

</script>
    
<style lang="scss" scoped>
.page-show{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 32px;
    padding: 25px;
}

</style>