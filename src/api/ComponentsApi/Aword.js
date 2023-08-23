import request from '@/api/request';

export function RandomWord(){
  return request({
    url:`https://v1.hitokoto.cn/`,
    method:'get',
    params:{
      c:'f',
      encode:'text'
    }
  })
}