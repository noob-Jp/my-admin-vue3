<template>
    <i v-bind="$attrs" style="display: inline-flex;">
        <el-icon v-if="iconType==='ElIcon'" v-bind="iconProp">
            <component :is="iconName"/>
        </el-icon>
        <svg v-else v-bind="iconProp">
            <use :xlink:href.attr="iconName"></use>
        </svg>
    </i>        
</template>
<!-- 处理图标的全局组件 -->
<script >

import { ElIcon } from 'element-plus';

export default{
    name:"AppIcon",
    components:{ElIcon},
    props:{
        icon:{type:String,require:true},
        color:{type:String},
        size:{default:16}
    },
    setup(props) {
        const {icon,color,size}=props;
        let iconType,iconName,iconProp;
        if(icon.startsWith("el-icon-")||icon.startsWith("elIcon")){
            iconType="ElIcon";
            iconName=icon;
            iconProp={color,size:Number(size)}
        }else{
            iconType="Custom";
            iconName="#icon-"+icon;
            const sizePx=size+"px";
            const style={width:sizePx,height:sizePx};
            if(color){
                style.color=color;
                style.fill="currentColor"
            }
            iconProp={style};

        }
        return {
            iconType,iconName,iconProp
        }
    },
}
</script>
    
<style>
    
</style>