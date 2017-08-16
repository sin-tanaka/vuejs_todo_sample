<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <form-task :task="newTask" @add-event="addTask"></form-task>
    <hr />
    <div class="task-list-operator">
      <button class="npm install -g cordova ionictask-list-operator__btn" @click=removeTask()>Delete finished tasks</button>
    </div>
    <list-task :tasks="tasks"></list-task>
  </div>
</template>

<script>
import FormTask from './components/FormTask.vue'
import ListTask from './components/ListTask.vue'

export default {
  components: {
    FormTask,
    ListTask
  },
  data: function () {
    return {
      tasks: [
        {text: 'test hogehoge.', isChecked: false},
        {text: 'buy books.', isChecked: false},
        {text: 'run 2km in the park.', isChecked: false}
      ],
      newTask: ''
    }
  },
  methods: {
    addTask: function (taskStr) {
      let text = taskStr && taskStr.trim()
      if (!text) {
        return
      }
      this.tasks.push({
        text: text,
        isChecked: false
      })
      this.newTask = ''
    },
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
