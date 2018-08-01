import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    counter: 0,
    todos: [],
    isDirty: false
  },
  getters: {
    complete: state => {
      return state.todos.filter(todo => todo.complete);
    }
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, todoId) {
      const foundIndex = state.todos.findIndex(todo => {
        return todo.id === todoId;
      });
      state.todos = [
        ...state.todos.slice(0, foundIndex),
        ...state.todos.slice(foundIndex + 1)
      ];
    },
    setDirty(state, dirty) {
      state.isDirty = dirty;
    }
  }
});
