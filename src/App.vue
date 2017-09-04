<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <form-task></form-task>
    <hr />
    <div class="task-list-operator">
      <button @click=removeTask()>Delete finished tasks</button>
    </div>
    <list-task :tasks="remainTasks"></list-task>
    <list-task :tasks="doneTasks"></list-task>
  </div>
</template>

<script>
import FormTask from './components/FormTask.vue'
import ListTask from './components/ListTask.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    FormTask,
    ListTask
  },
  computed: {
    ...mapGetters([
      'remainTasks',
      'doneTasks'
    ])
  },
  methods: {
    ...mapActions([
      'addTask', 'removeTask'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
