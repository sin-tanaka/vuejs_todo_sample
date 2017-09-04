<template>
  <form>
  <!--form-task-->
    <p>
      task:
      <input type="text" v-model="newTask">
      <button @click=addTask>ADD</button>
    </p>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    newTask: {
      get () {
        return this.$store.state.newTask
      },
      set (value) {
        this.$store.commit('UPDATE_NEW_TASK', value)
      }
    }
  },
  methods: {
    ...mapActions([
      'addTask'
    ])
  }
}
</script>

<style lang="scss">
</style>
