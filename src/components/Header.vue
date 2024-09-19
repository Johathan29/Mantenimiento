<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
</script>
<template>
 <header class="">
    <nav class="bg-gray-800 border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../assets/logo.png" class="w-20" alt=""/>
          <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            SOLUTION SUPPORTS
          </span>
        </a>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link class="  px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" to="/">
            <FontAwesomeIcon :icon="faHouse" class="mb-0"/> Home
          </router-link>
        </li>
        <li>
          <router-link class=" px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" to="/mascotas">
           <FontAwesomeIcon :icon="faPaw" class="mb-0"/> Mascotas
          </router-link>
        </li>
        <li>
          <router-link class=" px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" to="/mascotas">
           <FontAwesomeIcon :icon="faPaw" class="mb-0"/> Mascotas
          </router-link>
        </li>
        <li>
          <router-link class=" px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" to="/mascotas">
           <FontAwesomeIcon :icon="faPaw" class="mb-0"/> Mascotas
          </router-link>
        </li>
        <li>
         <router-link class=" px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page" to="/mascotas">
           <FontAwesomeIcon :icon="faPaw" class="mb-0"/> Mascotas
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
           
       
  </header>
 
</template>
<style>
a.router-link-active.router-link-exact-active{
    border-radius: 0.375rem;
    background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}
</style>