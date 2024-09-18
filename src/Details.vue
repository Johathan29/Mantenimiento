<script setup>
import { ref, computed, onMounted} from 'vue';
const users = ref(null);
const url=window.location;
const id=ref(0);
const breadcrum=ref();
id.value=url.pathname[6];
const ruta=ref()
ruta.value=url.pathname[1]+url.pathname[2]+url.pathname[3]+url.pathname[4];
console.log(id.value)

  //https://jsonplaceholder.typicode.com/users
onMounted(async () => 
{
    const response = await fetch('https://dummyjson.com/users');
    users.value = await response.json();
    users.value=users.value.users;
    breadcrum.value= users.value.find(item=>item.id===parseInt(id.value)).firstName;
}
);
const datails =computed( 
    {
        get()
        {
        users.value.find(item=>item.id===id.value);
        }
    });
   const detailsUser=(index)=>
    {
        alert(users.value.find(item=>item.id===index).firstName)
    }
</script>

<template>
<nav class=" p-2 bg-[#77889930] " aria-label="Breadcrumb" style="background: #77889930;">
    <div class="max-w-screen-xl md:mx-auto px-5">
  <ol class="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="/" class="inline-flex capitalize items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <router-link aria-current="page" to="/user" class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ruta}}</router-link>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{breadcrum}}</span>
      </div>
    </li>
  </ol>
  </div>
</nav>
<section>
    <div class="max-w-screen-xl md:mx-auto px-5 my-3">
        <div v-for="items in users" >
            <div v-if="items.id ==id" class="w-full h-56 p-5 max-h-[29rem] rounded-lg border-2 bg-[#1f2937]" v-bind:style="['background:linear-gradient(0deg, rgb(31 41 55) 0%, rgb(31 41 55 / 75%) 0%), url('+items.image +') no-repeat center / cover;    background-size: 16rem;']">
               <div class="flex justify-center  items-baseline">
                  <h1 class="text-white text-[1.5rem] mr-2" > {{items.firstName}} {{ items.lastName }}</h1>
                  <p class="text-sm text-white"> Edad: {{ items.age }}</p>
                </div>
                
                <p class="text-sm text-white"> Email: {{ items.email }}</p>
                <p class="text-sm text-white"> Phone: {{ items.phone }}</p>
               <!--<img v-bind:src="items.image" class="w-72 opacity-[.08]"/>-->
            </div>
            
        </div>
    </div>
</section>


</template>
<style>
th {
    width: 135px!important;
}
td.alert.alert-primary {
  float: inline-start;
  margin-left: -17rem;
  background: aliceblue;
  height: 104px;
}
.title {
  color: #fff;
  background: #195062;
  font-family: ui-monospace;
  font-weight: 600;
  width: 100%;
}
.btn-info {
  color: #0a262f !important;
  font-family: system-ui;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
  font-size: small;
  font-weight: 700;
  text-transform: capitalize;
}
</style>
