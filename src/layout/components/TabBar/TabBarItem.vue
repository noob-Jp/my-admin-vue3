<template>
    <el-tag @click="tagClick" style="margin-right: 10px;" @close="delTabBarItem" :effect="effect" closable>
        {{ TabItem.title }}
    </el-tag>
</template>
    
<script setup >
import { toRefs, computed } from 'vue';
import { useRouter,useRoute } from 'vue-router'
import { useLayoutStore } from '../../../store/layout';

const {visitedViews}=toRefs(useLayoutStore());
//获取父组件传过来的数据
const props = defineProps({
    TabItem: {
        type: Object,
    },
})
const route = useRoute();
const router=useRouter();
// console.log(route.fullPath,9999);

//计算当前路由是否跟传过来item的路由相同，如果相同的话就返回dark蓝色模式，
let effect = computed(() => {
    // console.log(props.TabItem.fullPath,11111);
    if(props.TabItem.fullPath==route.fullPath){
        return "dark";
    }else{
        return "plain";
    }
})
//点击之后跳转路由
const tagClick=()=>{
    router.push(props.TabItem.fullPath);
}
// console.log(effect);

//删除tab栏中visitedViews数组的数据
const delTabBarItem = () => {
    let arr=visitedViews.value;
    console.log(arr);
    for(let i=0,len=arr.length;i<len;i++){
        let item=arr[i];
        // console.log(item);
        if(item.timeStamp===props.TabItem.timeStamp)
        if(props.TabItem.fullPath===item.fullPath){
            arr.splice(i,1);
            const nearTab=arr[i-1]||arr[i];
            nearTab?router.push(nearTab.fullPath):router.push("?");
            break;
        }
    }
}
</script>
    
<style>

</style>