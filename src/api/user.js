import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/api/login',
    method: 'get',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: {  }
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
