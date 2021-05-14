<template>
  <div class="home">
   
  </div>
</template>

<script>

// axios实例
// 后端接口地址多个，并且超时时长不一样



import axios from 'axios'
export default {
  name: 'axios3-2',
  components: {
   
  },
  created(){ 
    /*
      常用请求配置
    */
    axios = axios.create({
        baseURL: 'http://localhost:8080',   //请求的域名，基本地址
        timeout: 1000,   //请求超时时长（ms）
        url: '/data.json',   //请求路径
        method: 'get,post,put,patch,delete',  //请求方法
        headers:{                             //设置请求头
            token: ''
        },
        params:{
                                            //请求参数拼接在url上
        },
        data:{
                                            请求参数放在请求体里面
        }
    })
    // 实际请求地址为http://localhost:8080/data.json
    axios.get('/data.json',{
        params:{}
    }).then(res=>{
      console.log(res)
    })
    /*
        请求配置方法：优先级1<2<3
    */

    // 1.axios 全局配置
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'
    // 2.实例配置
    let instance = axios.create({
        //使用默认配置
    })
    instance.defaults.timeout  = 3000 //修改默认配置
    // 3.axios请求配置
    instance.get('/data.json',{
      timeout: 5000
    })

    /*
      实际开发
    */

    //假设两种接口：http://localhost:8080, http://localhost:9090

    let instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout:1000
    })
    let instance1 = axios.create({
        baseURL: 'http://localhost:9090',
        timeout:3000
    })
    // baseUrl,timeout,methods,url,params
    instance.get('/constanList',{
        params:{}
    }).then(res=>{
        console.log(res)
    })
    // baseUrl, methods, timeout:5000, url
    instance1.get('/orderList',{
        timeout: 6000
    }).then(res=>{
      console.log(res)
    })

  }
}
</script>
