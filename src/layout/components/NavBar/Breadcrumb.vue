<template>
    <div>
        <el-breadcrumb class="app-breadcrumb" separator="/">
            <el-breadcrumb-item v-for="item in list" :to="{name:item.name}">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
    
<script  setup>
defineProps({
  list:{
    type:Array,
    required:true
  }
})
</script>
    
<style scoped>
.app-breadcrumb {}
</style>