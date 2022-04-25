import eleLogo from '../../../assets/element-logo.svg'
import vueLogo from '../../../assets/logo.png'
import pureLogo from '../../../assets/pure-logo.ico'
import undrawLogo from '../../../assets/undraw-logo.svg'
import motionLogo from '../../../assets/motion-logo.svg'
// 如需使用src/assets中图片可以使用es6的导入功能 👆

const navList = [
  {
    link: 'https://element-plus.gitee.io/#/zh-CN/',
    img: eleLogo,
    title: 'Element Plus官网',
    desc: 'Vue 3的桌面端组件库',
  },
  {
    link: 'https://v3.cn.vuejs.org/',
    img: vueLogo,
    title: 'Vue.js3中文文档',
    desc: '渐进式 JavaScript 框架',
  },
  {
    link: 'https://pinia.vuejs.org/',
    img: 'https://d33wubrfki0l68.cloudfront.net/ddd72aa8248a5c2f77429b9496e6e3e4da2a4e26/8afc0/logo.svg',
    title: 'Pinia官方文档',
    desc: 'Vuex的替代者，采用模块化设计',
  },
  {
    link: 'https://vueuse.org/',
    img: 'https://d33wubrfki0l68.cloudfront.net/a5780e53fee68ddd1cd73a00484151d2d052cb4d/b7469/logo-vertical.png',
    title: 'vueuse',
    desc: 'VueUse 是一组基于Composition API的实用函数',
  },
  {
    link: 'https://cn.vitejs.dev/',
    img: 'https://cn.vitejs.dev/logo.svg',
    title: 'Vite 官方中文文档',
    desc: '下一代前端开发与构建工具',
  },
  {
    link: 'https://vvbin.cn/next/',
    img: 'https://vvbin.cn/next/assets/logo.63028018.png',
    title: 'VbenAdmin',
    desc: '我见过很优秀的免费的管理系统模板',
  },
  {
    link: 'https://vue-pure-admin.vercel.app/#/welcome',
    img: pureLogo,
    title: 'PureAdmin',
    desc: '优秀的vue3+typescript后台管理系统',
  },
  {
    link: 'https://undraw.co/illustrations',
    img: undrawLogo,
    title: 'undraw',
    desc: '免费好看的插画网站',
  },
  {
    link: 'https://motion.vueuse.org/',
    img: motionLogo,
    title: '@vueuse/motion',
    desc: '声明式动画，让你的组件动起来',
  },
]

export default navList
