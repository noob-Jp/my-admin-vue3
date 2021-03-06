//menu的格式
export const menu_interface = {
 name: String,
  path: String,
  icon: [String, null],
  children: 'menu_interface',

  disabled: [Boolean, null],
  orderNo: [Number, null],
  roles: [String, null],
  meta: [Object, null],
  hideMenu: [Boolean, null],
};

//menu的创建
//1.从 useStore中的AddRoutes创建
export function createMenuFromAddRoutes(routes) {
  const rr = [];

  //方法1 剥离被Layout包裹的路由
  function strippingLayoutRoute(route) {
    //如果一个路由没有meta，而且只有一个子元素，则直接返回这个子元素
    if (!route.meta && route.children && route.children.length === 1) {
      let c = route.children[0];
      if (c.meta && c.meta.title) {
        if (c.path[0] !== "/") c.path = route.path + "/" + c.path
        return c;
      }
    }
    return null;
  }
  //方法2 快速创建Menu对象从route对象
  function createMenuFromRoute(route) {
    return {
      title: route.meta.title,
      icon: route.meta.icon,
      path: route.path,
      name: route.name,
    };
  }
  //	递归;
  function recursion(arr) {
    let result = [];
    for (const item of arr) {
      if (!item.hidden) {
        // 如果是外链形式的路由,拿出children
        if (item.path === "/ex-link") {
          result.push(createMenuFromRoute(item.children[0]));
        }
        // 如果有子路由则递归处理子路由
        else if (item.children && item.children.length > 0) {
          let child = recursion(item.children);
          let obj = createMenuFromRoute(item);
          if (child.length > 0) obj.children = child;
          result.push(obj);
        } else {
          result.push(createMenuFromRoute(item));
        }
      }
    }
    return result;
  }

  // 第一层路由处理
  for (const item of routes) {
    if (!item.hidden) {
      if (item.path === "/ex-link") {
        rr.push(item.children[0]);
        continue;
      }
      let r = strippingLayoutRoute(item);
      if (r) {
        rr.push(r);
        continue;
      }
      if (!r && item.meta && item.meta.title) rr.push(item);
    }
  }

  return recursion(rr);
}
