<template>
    <div class="app-main">
        <router-view v-slot="{ Component }">
            <component :is="Component" />
        </router-view>
    </div>
</template>
<!-- 页面主体内容部分 -->
<script setup >
import { toRef } from 'vue'

</script>
    
<style lang="scss" scoped>
.app-main {
    position: relative;
    width: 100%;
    min-height: calc(100vh - #{$navbar-height + $tabBar-height});
    padding: 15px;
    background-color: #f1f2f3;
}
</style>