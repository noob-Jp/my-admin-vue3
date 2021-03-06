
import axios from 'axios'
import {getToken} from './storage.js'
import { ElMessage } from 'element-plus'
//导入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const BASEURL=String(import.meta.env.VITE_BASE_URL);

axios.defaults.timeout=5000 //响应超时时间
axios.defaults.baseURL=BASEURL //请求的根路径

//配置请求拦截器
axios.interceptors.request.use((request)=>{
    NProgress.start();
    const token=getToken();
    if(token)request.headers.token=token
    return request;
})
//配置响应拦截器
axios.interceptors.response.use(
    //响应200
    (response)=>{
        NProgress.done();
        return Promise.resolve(response.data)
    },
    //响应4xx,5xx
    (error)=>{
        NProgress.done();
        ElMessage({
            message:error.response?.data?.msg||'undefined'
        })
        return Promise.reject(error.response)
    }
)

export default axios
