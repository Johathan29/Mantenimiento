<script setup>
import Header from './components/Header.vue';
import Footer from './components/footer.vue';
</script>
<template>
  <Header />

  <div>
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
export default {
  name: 'App',
};
</script>
