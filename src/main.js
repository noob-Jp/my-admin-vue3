import { createApp, h } from 'vue'
import App from './App.vue'
import {RouterView} from 'vue-router'
import router from './router/index'
import store from './store'

//引入Element Plus和Element icons
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons'


//引入自己的css，js和component
import AppLink from '../src/components/AppLink/index.vue'
import AppIcon from '../src/components/AppIcon/index.vue'
import './styles/common.scss'
import { globalRegister } from './utils/compRegister'


const app=createApp({render:()=>h(RouterView)})

//全局注册
globalRegister(app,ElIcons,{prefix:"elIcon"})



app.use(ElementPlus).use(router).use(store)

app.component('app-link', AppLink)
app.component('app-icon', AppIcon)
app.mount('#app');
