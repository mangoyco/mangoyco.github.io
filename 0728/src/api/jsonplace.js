import request from '@/utils/request'

export function testApi(){
    return request({
        url:'http://img1.maka.im/user/9670293/event/32MF65V4W9670293/32MF65V4W9670293_v114.json?v=2',
        method:'get',
    })
}
