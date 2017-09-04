<template>
  <!--v-forなどの繰り返しにtransitionを当てたい場合transition-groupを使う-->
  <!--https://jp.vuejs.org/v2/guide/transitions.html#リストトランジション-->
  <transition-group name="list" tag="div" class="task-list">
    <!--中の要素は、v-bind:key属性必須！！-->
    <label class="task-list__item"
           v-for="task in tasks"
           v-bind:key="task"
           v-bind:class="{ 'task-list__item--checked': task.done }">
      <input type="checkbox" v-model="task.done">
      {{ task.text }}
    </label>
  </transition-group>
</template>

<script>
export default {
  props: {
    tasks: Array
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

.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;

  &__item {
    transition: all 0.5s;
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
/* transition-groupのname + "-item, -enter, -to,...のようなクラスが付与される"*/
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translate(2px);
}
.list-leave-active {
  position: absolute;
}
</style>
