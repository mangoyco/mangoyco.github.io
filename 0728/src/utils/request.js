import axios from 'axios'

const server = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    timeout:5000
})

server.interceptors.request.use(config=>{
    config.headers['token'] = 'this is test token'
    return config
},err=>{
    console.log(err)
    Promise.reject(err)
})

export default server