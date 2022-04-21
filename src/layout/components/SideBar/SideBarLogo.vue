<template>
    <div style="text-align: center;" v-show="isCollapse">
        <router-link
        :to="toPath"
        >
            <img src="~@/assets/mylogo2.png" style="height:40px;" alt="logo">
            <img src="~@/assets/mylogo1.png" style="height:40px;" alt="logo" v-show="unfoldSidebar">  
        </router-link>
    </div>
</template>
    
<script setup>
import {toRefs} from "vue";
import { useLayoutStore } from "../../../store/layout"
const  {unfoldSidebar} =toRefs(useLayoutStore())
defineProps({
    toPath:{default:"/"},
    isCollapse:{default:true},
    textColor:{default:"#dcdcdc"},
    title:{default:"Noob-Jp-Admin"},
    backgroundColor:{default:"#2f343d"}
})
</script>
    
<style lang="scss" scoped>

</style>