/**
 * 全局组件注册
 */


export function globalRegister(app,components,opts){
    const compsArr=Array.isArray(components)
        ?components
        :Object.values(components);
    const {prefix,replace}=opts;

    compsArr.forEach((component)=>{
        let name=component.name;
        if(replace&&replace.has(name)){
            if(!replace.get(name))return;
            name=replace.get(name)
        }
        if(prefix){
            name=prefix+name;
        }
        app.component(name,component);
    })
}