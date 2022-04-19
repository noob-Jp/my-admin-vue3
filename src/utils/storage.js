import Cookies from "js-cookie";

const KEY_PREFIX = "ZJP-";
const KEY_TOKEN = "ADMIN-TOKEN";
const invalids = [undefined, null, "undefined", "null"];

//获取token
export function getToken() {
  return Cookies.get(KEY_TOKEN);
}
//设置token
export function setToken(token) {
  Cookies.set(KEY_TOKEN, token);
}
//移除token
export function removeToken() {
  return Cookies.remove(KEY_TOKEN);
}
//获取本地存储中的设置信息
export function getSetting(key,defVal=undefined){
  let item=localStorage.getItem(KEY_PREFIX+key);
  if(invalids.includes(item)){
    return defVal;
  }else{
    return JSON.parse(item);
  }
}



