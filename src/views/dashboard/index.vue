
<template>
    <div class="quickNav">
        <h3>快捷导航</h3>
        <el-row :gutter="10">
          <el-col :xs="18" :lg="3">
            <QuickNav :navList="navList"></QuickNav>
          </el-col>          
        </el-row>
    </div> 
       
</template>
    
<script setup>
import QuickNav from '../../components/QuickNav/index.vue'
import navList from '../../views/dashboard/options/navList.js'

</script>

<style lang="scss" scoped>

</style>