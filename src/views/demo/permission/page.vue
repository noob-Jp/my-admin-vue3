<template>
    <div>
        permisson-page
        <el-button type="primary" @click="changeRole('test')">切换</el-button>
         <el-button type="primary" @click="changeRole('admin')">切换</el-button>
    </div>
</template>
    
<script setup>
import { ref, toRefs } from "vue";
import { useUserStore } from "../../../store/user";
const userStore = useUserStore()
const changeRole = (role) => {
    console.log(roles.value);
    console.log(roles.value.includes("admin"));
    
    userStore.changeRoles([role])

}

const { roles } = toRefs(useUserStore());


</script>
    
<style>
</style>