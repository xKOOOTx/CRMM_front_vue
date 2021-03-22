import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
