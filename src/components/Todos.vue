
<template>
      <div class="column is-half narrow">
        <div class="content">
          <h1 class="title">Todos</h1>
          <div class="field">
            <div class="control">
              <input class="input is-hovered" v-bind:class="{'is-danger' : isDirty}" type="text" placeholder="Entrer votre ToDo" @keypress="addTodo($event)">
            </div>
          </div>        
          <ol>
            <todo v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" v-on:deleteTodo='deleteTodo'/>      
          </ol>
        </div>
      </div>      
</template>

<script>
/* eslint-disable */
import Todo from './Todo';

export default {
  name: 'todos',
  data: function() {
    return {
      isDirty: false,
      counter: 0,
      todos: []
    };
  },
  components: { Todo },
  methods: {
    deleteTodo: function(todoId) {
      console.log(todoId);
      const foundIndex = this.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      this.todos = [
        ...this.todos.slice(0, foundIndex),
        ...this.todos.slice(foundIndex + 1)
      ];
    },
    addTodo: function(event) {
      this.isDirty = false;
      if (event.keyCode === 13) {
        this.isDirty = event.target.value === '';
        if (!this.isDirty) {
          this.todos.push({ id: this.next(), name: event.target.value });
          event.target.value = '';
        }
      }
    },
    next: function() {
      this.counter = this.counter + 1;
      return this.counter;
    }
  }
};
</script>
