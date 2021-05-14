<template>
  <div class="home">
    
  </div>
</template>

<script>

/**
 * 取消请求：取消正在进行的http请求
 */
import axios from 'axios'
export default {
  name: 'axios3-5',
  components: {
    HelloWorld
  },
  created(){
    let source = axios.CancelToken.source()
    axios.get('/data.json',{
        cancelToken:source.token        
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
    // 取消请求(message可选) ：例如商城查询之后未响应，重新查询别的数据时，前面的请求就无效了，使用取消
    source.cancel('cancle http')
  }
}
</script>
