<template>
  <div class="home">
  
  </div>
</template>

<script>

/**
 * 拦截器 ：在请求或响应被处理前拦截它们
 * 请求拦截器
 * 响应拦截器
 * 
 */


import axios from 'axios'
export default {
  name: 'axios3-3',
  components: {
   
  },
  created(){
    //请求拦截器
    axios.interceptors.request.use(config=>{
        //在发送请求前做些什么
        return config
    },err=>{
        // 请求错误 ：接口未到后端
        return Promise.reject(err)
    })
    //响应拦截器
    axios.interceptors.response.use(res=>{
        //请求成功对响应数据做处理
        return res
    },err=>{
        // 响应错误做些什么：接口到后端返回500等
        return Promise.reject(err)
    })

    // 实际开发例子 登录状态评论需要 token:''

    let instance = axios.create({})
    instance.interceptors.request.use(config=>{
        config.headers.token = ''
        return config
    })
    // 实际开发例子 不登录状态可查看不需要 token:''
    let newinstance = axios.create({})
   
    // 移动端开发例子 需要加载
    let instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config=>{
        //$('#loading').show()
        return config
    })
    instance_phone.interceptors.response.use(response=>{
        //$('#loading').hide()
        return response
    })

  }
}
</script>
