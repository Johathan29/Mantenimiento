<script setup>
import Header from './components/Header.vue';
</script>
<template>
  <Header />

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
