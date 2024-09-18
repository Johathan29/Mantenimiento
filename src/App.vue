<script setup>
import Header from './components/Header.vue';
import Footer from './components/footer.vue';
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>
<template>
  <Header />

  <main>
    <router-view></router-view>
  </main>
  <Footer/>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
main{

    min-height: 34rem;
    bottom: 0px;
    display: block;
    margin-bottom: 0rem;

}
</style>
