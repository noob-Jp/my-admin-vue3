<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="12" :xl="12">
                <div>
                    <el-card class="card-top" shadow="hover" >
                        <div class="profile_tx">
                            <img src="~@/assets/tx.jpg" />
                            <h4>赵俊鹏</h4>
                        </div>
                        <div class="profile_information">
                            <div v-for="item in myInformation" >
                                <img :src="item.i" class="customIcon"/>
                            
                                {{item.t}}
                            </div>
                        </div>
                        <el-divider >标签</el-divider>
                        <div class="profile_label">
                            <el-tag v-for="item in myLabel" type="success" style="margin: 5px;">{{item}}</el-tag>
                        </div>
                        <el-divider >技能</el-divider>
                        <div>
                            <ul>
                                <li v-for="item in myIntroduce">{{item}}</li>
                            </ul>
                        </div>
                    </el-card>
                     
                </div>
            </el-col>
            <el-col :xs="12" :xl="12" style="margin-top:10px;height:600px">
                <el-card shadow="hover"> 
                    <el-tabs type="border-card">
                        <el-tab-pane label="博客">
                            <ul class="profile_blog">
                                <a v-for="item in myBlog" :href="item.link" target="_blank">
                                <li>
                                    <img :src="item.logo"/>
                                    <div>
                                        <h3>{{item.title}}</h3>
                                        <div>{{item.desc}}述</div>
                                    </div>
                                </li>
                                </a>
                            </ul>   
                        </el-tab-pane>
                        <el-tab-pane label="仓库">
                            <ul class="profile_store">
                                <a v-for="item in myStore" :href="item.link" target="_blank">
                                <li>
                                    <img :src="item.logo"/>
                                    <h3>{{item.title}}</h3>
                                </li>
                                </a>
                            </ul>   
                        </el-tab-pane>
                        <el-tab-pane label="项目">
                            <ul class="profile_project">
                                <a v-for="item in myProject" :href="item.link" target="_blank">
                                <li>
                                    <img :src="item.logo"/>
                                    <h3>{{item.title}}</h3>
                                </li>
                                </a>
                            </ul>   
                        </el-tab-pane>
                       <el-tab-pane label="其他">其他</el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
    
<script setup>
import {ref,reactive} from 'vue'
import addrIcon from '../../../icons/addr-icon.svg'
import emailIcon from '../../../icons/email-icon.svg'
import schoolIcon from '../../../icons/school-icon.svg'

import csdnLogo from '../../../assets/csdn-logo.png'
import jueJinLogo from '../../../assets/juejin-logo.svg'
import niuKeLogo from '../../../assets/niuKe-logo.svg'

import githubIcon from '../../../icons/github-icon.svg'
import giteeIcon from '../../../icons/gitee-icon.svg'
const myInformation=reactive([
    {i:schoolIcon,t:"大三在读"},
    {i:addrIcon,t:"河北邯郸"},
    {i:emailIcon,t:"896823121@qq.com"}
]);

const myLabel=reactive([
    "新时代农民工",
    "23届应届生",
    "不爱改bug",
]);

const myIntroduce=reactive([
    "熟练掌握Html，Css，JavaScript",
    "熟练掌握vue2、vue3",
    "熟练掌握springBoot,Node.js",
    "熟悉Webpack、Vite，以及了解Git，Nginx",
    "熟悉常见的数据结构与算法"
])

const myBlog=reactive([
    {
        link:"https://blog.csdn.net/zjp567?spm=1000.2115.3001.5343",
        logo:csdnLogo,
        title:"CSDN-1w+访问量",
        desc:"平常偶尔记录一些笔记，各种方向，有点杂"
    },
    {
        link:"https://juejin.cn/user/75205773100439",
        logo:jueJinLogo,
        title:"稀土掘金-优质的干货",
        desc:"文章质量高，能学到知识"
    },
    {
        link:"https://www.nowcoder.com/profile/447773421",
        logo:niuKeLogo,
        title:"牛客-刷题，学习",
        desc:"里面有大量的面试题库"
    }
])

const myStore=reactive([
    {
        link:"https://github.com/noob-Jp",
        logo:githubIcon,
        title:"GitHub"
    },
     {
        link:"https://gitee.com/zjp666777",
        logo:giteeIcon,
        title:"Gitee"
    }
])

const myProject=reactive([
    {
        link:"https://github.com/noob-Jp/my-admin-vue3",
        logo:githubIcon,
        title:"vue3+element-plus后台管理系统",
        desc:""
    },
    {
        link:"https://github.com/noob-Jp/my-blog-vue2",
        logo:githubIcon,
        title:"vue2全家桶写的博客前台系统",
        desc:""
    },
    {
        link:"https://gitee.com/zjp666777/vue2_health",
        logo:giteeIcon,
        title:"vue2全家桶+element-ui后台管理系统",
        desc:""
    },
    {
        link:"https://gitee.com/zjp666777/wx_treehole",
        logo:giteeIcon,
        title:"微信原生+egg.js后台写的树洞小程序",
        desc:""
    },

])
</script>
    
<style lang="scss" scoped>
.card-top{
    display: flex;
    justify-content: center;
}

.profile_tx {
    text-align: center;
    img {
        height: 100px;
        border-radius: 50%;
    }
}
.customIcon{
    height: 16px;
    margin-right: 10px;
}

.profile_blog{
    li{
        display:flex;
        flex-direction:row;
        border-bottom:1px solid var(--el-border-color);
        padding-bottom:5px;
        img{
            width:160px;
            height:80px;
            margin-right:30px;
        }
    }
}
.profile_store{
    li{
        display:flex;
        flex-direction:row;
        margin-top:20px;
        align-items:center;
         border-bottom:1px solid var(--el-border-color);
        img{
            width:30px;
            height:30px;
            margin-right:30px;
        }
    }
}
.profile_project{
     li{
        display:flex;
        flex-direction:row;
        margin-top:20px;
        align-items:center;
        border-bottom:1px solid var(--el-border-color);
        img{
            width:30px;
            height:30px;
            margin-right:30px;
        }
    }
}

</style>