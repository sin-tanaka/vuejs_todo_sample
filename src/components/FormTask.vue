<template>
  <form>
  <!--form-task-->
    <p>
      task:
      <input type="text" v-model="task">
      <button @click=addTaskEvent()>ADD</button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    'task': String
  },
  data: function () {
    return {
    }
  },
  methods: {
    addTaskEvent: function () {
      this.$emit('add-event', this.task)
    }
  }
}
</script>

<style lang="scss">
</style>
