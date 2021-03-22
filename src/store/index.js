import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const url = 'https://my-json-server.typicode.com/Vespand/crmm-tasks/users'

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS_TO_STATE: (state, users) => {
      state.users = users
    }
  },
  actions: {
    GET_USERS_FROM_API ({ commit }) {
      return axios(url, {
        method: 'GET'
      })
        .then((users) => {
          commit('SET_USERS_TO_STATE', users.data)
          users.data = users.data.sort((a, b) => a.rating < b.rating ? 1 : -1)
          return users
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  },
  getters: {
    USERS (state) {
      return state.users
    }
  }
})
