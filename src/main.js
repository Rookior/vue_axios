import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http'
Vue.config.productionTip = false
// 把Http挂载到Vue实例上
Vue.prototype.$Http = Http
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
