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
    // 状態の変更をcommitする
    commit('ADD_TASK')
    commit('CLEAR_NEW_TASK')
  },
  removeTask ({ commit }) {
    // 配列の数が減っていくので添字の大きい方からdoneタスクのチェックをする
    for (let i = state.tasks.length - 1; i >= 0; i--) {
      if (state.tasks[i].done) {
        commit('REMOVE_TASK', i)
      }
    }
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
  // state.newTaskを追加する
  ADD_TASK (state) {
    state.tasks.push({
      text: state.newTask,
      done: false
    })
  },
  // state.task[i]を削除する
  REMOVE_TASK (state, index) {
    state.tasks.splice(index, 1)
  },
  // state.newTaskを初期化する
  CLEAR_NEW_TASK (state) {
    state.newTask = ''
  },
  // state.newTaskを更新する
  // <input v-model: で紐付けるstateは
  // このようなmutationを定義する
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
