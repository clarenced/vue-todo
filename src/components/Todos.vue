
<template>
      <div class="column is-half narrow">
        <div class="content">
          <h1 class="title">Todos</h1>
          <div class="field">
            <div class="control">
              <input class="input is-hovered" v-bind:class="{'is-danger' : isDirty}" type="text" placeholder="Entrer votre ToDo" @keypress="addTodoToStore($event)">
            </div>
          </div>        
          <ol>
            <todo v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo"/>      
          </ol>
        </div>
      </div>      
</template>

<script>
/* eslint-disable */
import Todo from './Todo';
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'todos',
  components: {
    Todo
  },
  computed: {
    ...mapState(['todos', 'counter', 'isDirty'])
  },
  methods: {
    ...mapMutations(['addTodo', 'deleteTodo', 'increment', 'setDirty']),
    addTodoToStore(event) {
      this.setDirty(false);
      if (event.keyCode === 13) {
        this.setDirty(event.target.value === '');
        if (!this.isDirty) {
          this.increment();
          this.addTodo({ id: this.counter, name: event.target.value });
          event.target.value = '';
        }
      }
    }
  }
};
</script>
