
export const LAYOUT=()=>import('../layout/index.vue')


//创建单层路由
export function createLayoutWrapper(raw,defaultChild='index'){
    const children=[].concat(raw.children);
    const redirect=children.length===1?children[0].path:defaultChild;
    return{
        ...raw,
        redirect:raw.path+"/"+redirect,
        component:LAYOUT,
        children,
    }
}