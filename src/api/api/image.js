import request from '../request.js'

export function image(){
    return request({
        url:'https://api.paugram.com/wallpaper/',
        method:'get',
    })
}
