<script setup>
import Header from './components/Header.vue';
import Footer from './components/footer.vue';
import FormUsers from './components/FormUsers.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
<template>
  <Header />
  <section class="absolute z-50 right-[4rem]" >
<FormUsers  @emitter="captureData" />

<img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="w-10 h-10 rounded-full cursor-pointer" :src="messager.image" alt="User dropdown">

<!-- Dropdown menu -->
<div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <span class="font-[ui-serif] text-[19px] text-[#575353]">{{messager.firstName}}</span>
      <div class="font-medium truncate">{{messager.email}}</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>
</section>
  <div>
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<script>
export default {
  name: 'App',
  data(){
return{
userId:1,
messager:'',
  }
},
methods:{
captureData(mess)
{


this.messager=mess;

  }
},
components:{
FormUsers
}
};
</script>
