<template>
    <div class="my-project" v-for="item in projectList ">
        <el-card shadow="hover">
            <el-tooltip :content="item.title" placement="top-start">
                <a :href="item.url" target="_blank" style="display: block;text-align: center;">
                    <img :src="item.img" />
                </a>
            </el-tooltip>
        </el-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import sgblog from '../../assets/sgblog.png'
import admin from '../../assets/admin.png'
const projectList = reactive([
    { img: sgblog, title: "vue2博客前台系统", url: "http://123.57.209.6:8138/articleList", username: "sg", password: "1234" },
    { img: admin, title: "vue2后台管理系统", url: "http://123.57.209.6:8137/home", username: "zjp", password: "1234" },
]);
</script>
    
<style lang="scss" scoped>
.my-project {
    width: 100%;
    img {
        width: 90%;
    }
    margin-bottom: 50px;
}


</style>