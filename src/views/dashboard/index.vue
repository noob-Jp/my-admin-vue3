
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :xs="18" :lg="8">
        <h3>快捷导航</h3>
        <QuickNav :navList="navList"></QuickNav>
      </el-col>

      <el-col :xs="24" :lg="6">
      <h3>待定</h3>
        <div class="">         
        </div>
      </el-col>
      <el-col :xs="24" :lg="8">
      <h3>我的项目</h3>
        <div class="my-project">
          <MyProject></MyProject>
        </div>
      </el-col>
    </el-row>
  </div>

</template>
    
<script setup>
import QuickNav from '../../components/QuickNav/index.vue'
import navList from '../../views/dashboard/options/navList.js'
import MyProject from '../../components/MyProject/index.vue'
</script>
<style lang="scss" scoped>
</style>