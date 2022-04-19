
import request from '../utils/request.js'
//登录的mock接口
export function login(data) {
  return request.post('/user/login', data)
}
//获取用户信息的mock接口
export function getInfo(data) {
  return request.get('/user/info', data)
}
