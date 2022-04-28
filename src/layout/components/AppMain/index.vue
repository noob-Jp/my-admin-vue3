<template>
    <div class="app-main">
        <transition name="main-transiton" mode="out-in">

            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>

        </transition>
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

.main-transiton-enter-from {
	transform: translateX( -20px);
	opacity: 0;
}
 
.main-transiton-enter-to {
	transform: translateX(0px);
}
 
.main-transiton-leave-from {
	transform: translateX(0);
}
 
.main-transiton-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
 
.main-transiton-enter-active,
.main-transiton-leave-active {
	transition: all 0.5s;
}
</style>