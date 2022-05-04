<template>
    <div>
        <el-card>
            <template #header>
                数字动画
            </template>
           <count-up 
           class="count-up"
           :end-val="2000"
           :options="options"
           @init="onInit"
           @finished="onFinished"
           >
           </count-up>
        </el-card>
    </div>
</template>
    
<script setup >
//https://www.npmjs.com/package/vue-countup-v3
import CountUp from 'vue-countup-v3'
import { reactive } from 'vue';

const options=reactive({
    decimalPlaces:2
})
//数字动画初始化触发
const onInit=(ctx)=>{
    console.log(ctx);
}
//数字动画结束后调用
const onFinished=()=>{
    console.log("finished");
}
</script>
    
<style lang="scss" scoped>
.count-up{
    color: rgb(255, 0, 174);
    font-size: 40px;
    font-weight: bold;
}
</style>