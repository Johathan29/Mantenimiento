
<template>
<BreadCrum :name="breadCrumUrl"></BreadCrum>
<div class="py-[4rem] bg-[#0798ca30]">
    <div class="max-w-screen-xl md:mx-auto px-5 ">
        <h1 class=" md:flex block items-center gap-[3rem] text-left text-[2rem] text-[#18489b] font-[emoji]">
          <span class="md:w-[25%] w-full border-r-[1px] border-[#dcd9d9]">
            Listado de usuarios
          </span> 
          <div class="relative z-0  mb-5 group md:w-[75%] w-full " v-if="breadCrumUrl[1]!==''">
                <input type="search" name="search_users" v-model="search_users" @keyup="search(search_users)" @input="event => search_users = event.target.value"  id="search_users" class="block pt-[3px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="search_users" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search</label>
        </div>
        </h1>
      </div>
    </div>
   <div class="max-w-screen-xl md:mx-auto  mt-[2rem]">
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
              v-for="(todo,index) in visibleTodos"
              v-bind:visibleTodos="visibleTodos"
              v-bind:currentPage="currentPage"
              v-bind:todo="todo"
              v-on:todo:remove="removeTodo"
              :key="todo.id" >
            </todo-item>
          </tbody>
        </table>
        
      </div>
      <div v-if="breadCrumUrl[1]=='users'">
        <pagination 
          v-bind:todos="todos"
          v-on:page:update="updatePage"
          v-bind:currentPage="currentPage"
          v-bind:pageSize="pageSize">
        </pagination>
      </div>
      <div v-else class="p-5">
        <router-link to="/users" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Ver más
        </router-link>
        
      </div>
    </div>
</template>

<script src="./paginateAbout.js"></script>
