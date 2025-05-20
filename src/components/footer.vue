<script setup >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function obtenerFechaHoy()
{
  var  data = new Date();
  return data.getFullYear();
}
</script>
<template>
 <footer class="h-48">
    <section class="bg-gray-800   border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl md:mx-auto px-5">
        <div class="md:flex lg:flex sm:block items-center md:h-48 sm:h-auto">
          <div class="flex md:w-1/2 sm:w-full flex-wrap md:justify-between mx-auto p-4">
            <a href="/" class="flex  flex-wrap space-x-3 rtl:space-x-reverse">
              <img src="../assets/logo.png" class="w-20" alt=""/>
              <span
                class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
                SOLUTION SUPPORTS
              </span>
            </a>
          </div>
          <nav class="md:w-1/2 sm:w-full text-left ">
            <ul class="font-medium block flex-col p-4 md:p-0 mt-4 ">
                <li>
                  <router-link class="flex gap-2 items-center px-3 py-2 text-sm font-medium text-gray-300  hover:text-white" aria-current="page" to="/">
                    <FontAwesomeIcon :icon="faHouse" class="mb-0"/> Home
                  </router-link>
                </li>
                <li>
                  <router-link class=" px-3 py-2 text-sm font-medium text-gray-300  hover:text-white" aria-current="page" to="/users">
                  <FontAwesomeIcon :icon="faUser" class="mb-0"/> Users
                  </router-link>
                </li>
                <li>
                  <router-link class=" px-3 py-2 text-sm font-medium text-gray-300  hover:text-white" aria-current="page" to="/mascotas">
                  <FontAwesomeIcon :icon="faPaw" class="mb-0"/> Mascotas
                  </router-link>
                </li>
            </ul>
          </nav>
        </div>
         <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <div class="sm:flex sm:items-center sm:justify-between py-2">
          <span class="text-sm text-white sm:text-center dark:text-gray-400">
            ©{{  obtenerFechaHoy() }}, All Rights Reserved.
          </span>
        </div>
      </div>

    </section>  
  
       
  </footer>
 
</template>

<style>
footer a.router-link-active.router-link-exact-active{
    color: white;
    text-decoration: underline;
    background: none;
   
}
</style>