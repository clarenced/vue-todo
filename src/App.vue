<template>
  <div id="app">
    <div class='columns is-centered'>
        <todos />
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos';

export default {
  name: 'app',
  components: {
    Todos
  }
};
</script>

<style>
@import './../node_modules/bulma/css/bulma.min.css';
</style>
