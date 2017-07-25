<template>
  <div id="app">
    <h1>Vue Todo App</h1>
    <form>
      <p>
        task:
        <input type="text" v-model="newTask">
        <button @click=addTask()>ADD</button>
      </p>
    </form>
    <hr />
    <div class="task-list-operator">
      <button class="task-list-operator__btn" @click=removeTask()>Delete finished tasks</button>
    </div>
    <div class="task-list">
      <label class="task-list__item"
             v-for="task in tasks"
             v-bind:class="{ 'task-list__item--checked': task.isChecked }">
        <input type="checkbox" v-model="task.isChecked">
        {{ task.isChecked }}:{{ task.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
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
    addTask: function () {
      var text = this.newTask && this.newTask.trim()
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
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
