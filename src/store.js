import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  tasks: [
    {text: 'test hogehoge.', done: false},
    {text: 'buy books.', done: false},
    {text: 'run 2km in the park.', done: false}
  ],
  newTask: ''
}
const actions = {
  addTask ({ commit }) {
    let text = state.newTask && state.newTask.trim()
    if (!text) {
      return
    }
    // 状態の変更
    commit('ADD_TASK')
    commit('CLEAR_NEW_TASK')
  }
}
const getters = {
  doneTasks: state => {
    return state.tasks.filter(task => task.done)
  },
  remainTasks: state => {
    return state.tasks.filter(task => !task.done)
  }
}
const mutations = {
  ADD_TASK (state) {
    state.tasks.push({
      text: state.newTask,
      done: false
    })
  },
  CLEAR_NEW_TASK (state) {
    state.newTask = ''
  },
  UPDATE_NEW_TASK (state, task) {
    state.newTask = task
  }
}

export default new Vuex.Store({
  state: state,
  actions: actions,
  getters: getters,
  mutations: mutations
})
