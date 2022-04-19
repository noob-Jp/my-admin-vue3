<template>
<div>views/sys/redirect/index.vue</div>
</template>

<script>
//https://v3.cn.vuejs.org/guide/render-function.html  渲染函数h
import { h } from 'vue'
import { useRouter } from 'vue-router'
    export default{
        name:'Redirect',
        setup() {
            const {currentRoute,replace}=useRouter()
            const {params:{path},query}=currentRoute.value
            const _path='/'+(Array.isArray(path)?path.join('/'):path)
            replace({path:_path,query})
            return ()=>{
                h('div')
            }
        },
    }
</script>

<style></style>
