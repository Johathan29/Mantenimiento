
<template>
  <nav class=" p-2 bg-[#77889930] " aria-label="Breadcrumb" style="background: #77889930;"  v-if="updateUrl()=='user'">
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
        <router-link aria-current="page" to="/user" class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{updateUrl()}}</router-link>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{name}}</span>
      </div>
    </li>
  </ol>
  </div>
</nav>
   <div class="relative ">
  <div class="">
    <div class="lg:container md:mx-auto px-5">
      <h2 class=" p-5 text-[2rem] text-teal-600 font-bold">Listado de usuarios</h2>
    </div>
  </div>
  </div>
   <div class="lg:container md:mx-auto  mt-[0px]">
      <div class="w-full flex justify-center overflow-x-auto ">
        <table class="text-sm w-full   text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-teal-600 w-full ">
            <tr>
                
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Action
                </th>
            </tr>
          </thead>
          <tbody>
            <todo-item
              v-for="todo in visibleTodos"
              v-bind:visibleTodos="visibleTodos"
              v-bind:currentPage="currentPage"
              v-bind:todo="todo"
              v-on:todo:remove="removeTodo"
              :key="todo.id">
            </todo-item>
          </tbody>
        </table>
        
      </div>
      <div v-if="updateUrl()=='user'">
        <pagination 
          v-bind:todos="todos"
          v-on:page:update="updatePage"
          v-bind:currentPage="currentPage"
          v-bind:pageSize="pageSize">
        </pagination>
      </div>
      <div v-else class="p-5">
        <router-link to="/user" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ver Mas</router-link>
</div>
    </div>
    {{messager}}
</template>

<script src="./paginateAbout.js"></script>
