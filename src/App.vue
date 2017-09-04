<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <form-task></form-task>
    <hr />
    <div class="task-list-operator">
      <button @click=removeTask()>Delete finished tasks</button>
    </div>
    <list-task :tasks="remainTasks"></list-task>
    <list-task :tasks="doneTasks" v-show="true"></list-task>
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
      'addTask'
    ]),
    removeTask: function () {
      for (var i = this.tasks.length - 1; i >= 0; i--) {
        console.log(i)
        if (this.tasks[i].isChecked) {
          this.tasks.splice(i, 1)
        }
        console.log(this.tasks)
      }
    }
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
