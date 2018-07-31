<template>
    
    <li v-bind:class="{ barre : todo.completed}" class="is-capitalized is-size-5">{{todo.name}} <input type='checkbox' v-model='todo.completed'/>
      <a v-if="todo.completed" class="button is-danger is-small" v-on:click="deleteTodo()">
        <i class="fas fa-minus-circle"></i>
      </a>
    </li>
</template>

<script>
/* eslint-disable */
export default {
  name: 'todo',
  props: ['todo'],
  methods : {
    deleteTodo : function(){
      console.log('Todo id ', this.todo.id);
      this.$emit('deleteTodo', this.todo.id);
    }    
  }
};
</script>

<style>
.barre {
  text-decoration: line-through;
}
</style>
