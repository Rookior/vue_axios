<template>
  <div class="home">
    
  </div>
</template>

<script>

/**
 * 错误处理： 请求错误时的处理
 * 
 */

import axios from 'axios'
export default {
  name: 'axios3-4',
  components: {
    HelloWorld
  },
  created(){
    axios.interceptors.request.use(config=>{
        return config
    },err=>{
        return Promise.reject(err)
    })
    axios.interceptors.response.use(res=>{
        return res
    },err=>{
        return Promise.reject(err)
    })
    axios.get('./data.json').then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
    //实际开发中一般都需要添加一个统一的错误处理
    let instance = axios.create({})
    instance.interceptors.request.use(config=>{
        return config
    },err=>{
        //请求错误一般http状态401超时 404没找到
        $('#modal').show()
        setTimeout(()=>{
            $('#modal').hide()
        },2000)
        return Promise.reject(err)
    })
    instance.interceptors.response.use(res=>{
        return res
    },err=>{
        //响应错误 500系统错误 502系统重启
        $('#modal').show()
        setTimeout(()=>{
            $('#modal').hide()
        },2000)
        return Promise.reject(err)
    })

    // 示例请求除了统一弹窗外，还可以增加一个自定义的catch
    instance.get('/data.json').then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
  }
}
</script>
