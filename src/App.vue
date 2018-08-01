<template>
  <div id="app">
    <div class='columns is-centered'>
        <todos />
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos';
import store from './store';

export default {
  name: 'app',
  store,
  components: {
    Todos
  }
};
</script>

<style>
@import './../node_modules/bulma/css/bulma.min.css';
</style>
