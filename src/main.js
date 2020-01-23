import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueNoty from 'vuejs-noty'
import App from './App.vue'
import router from  './router'
import store from  './store'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight'
})
Vue.prototype.$http = axios
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
import 'vuejs-noty/dist/vuejs-noty.css'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
