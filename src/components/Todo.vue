<template>    
    <li v-bind:class="{ barre : todo.completed}" class="is-capitalized is-size-5">{{todo.name}} <input type='checkbox' v-model='todo.completed'/>
      <a v-if="todo.completed" class="button is-danger is-small" v-on:click="deleteTodoFromStore()">
        <i class="fas fa-minus-circle"></i>
      </a>
    </li>
</template>

<script>
/* eslint-disable */
import {mapMutations} from 'vuex';



export default {
  name: 'todo',
  props: ['todo'],
  methods : {
    ...mapMutations(['deleteTodo']),
    
    deleteTodoFromStore : function(){
      this.deleteTodo(this.todo.id);
    }    
  }
  
};
</script>

<style>
.barre {
  text-decoration: line-through;
}
</style>
