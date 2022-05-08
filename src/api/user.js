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
    url: 'http://127.0.0.1/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
