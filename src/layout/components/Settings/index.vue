<template>
    <div>
        <el-drawer
        v-model="showSettings"
        title="项目配置"
        size="20%"
        >
        <slot>
            <div >
                <el-divider>界面显示</el-divider>
                <div class="page-show">
                    <span>侧边栏Logo</span>
                    <el-switch
                        v-model="showLogo"
                        class="ml-2"
                        @change="changeShowLogo"
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
const {showSettings,showLogo,changeShowLogo}=toRefs(useLayoutStore());

</script>
    
<style lang="scss" scoped>
.page-show{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}
</style>