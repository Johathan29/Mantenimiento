<template>
<BreadCrum :name="breadCrumUrl" ></BreadCrum>

<div class="py-[4rem] bg-[#0798ca30]">
    <div class="max-w-screen-xl md:mx-auto px-5 ">
        <h1 class=" md:flex block items-center gap-[3rem] text-left text-[2rem] text-[#18489b] font-[emoji]">
          <span :class="[breadCrumUrl[1]!==''?'md:w-[25%] w-full border-r-[2px] border-gray-300':'md:w-[25%] w-full ']">
            User List
          </span> 
          <div class="relative z-0  mb-2 group md:w-[75%] w-full " v-if="breadCrumUrl[1]!==''">
                <input type="search" name="search_users" v-model="search_users" @keyup="search(search_users)" @input="event => search_users = event.target.value"  id="search_users" class="block pt-[3px] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="search_users" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search</label>
        </div>
        </h1>
        
      </div>
      
    </div>
    
   <div class="max-w-screen-xl md:mx-auto  mt-[2rem]">
      <div :class="[breadCrumUrl[1]==='users'?'border-b-[1px] border-[#d1d5db] my-[2rem]':'hidden']" >
                      <!-- Modal toggle -->
            <a data-modal-target="crud-modal" data-modal-toggle="crud-modal" :class="[useradmin.role=='admin'?'block w-max text-blue-700 hover:text-blue-800 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800':'hidden']" type="button">
              <FontAwesomeIcon :icon="delete" class="mb-0"/>
              <span class="tooltiptextCreate">Create new User </span>
            </a>
            <!-- Main modal -->
            <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-[57rem] max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow-sm ">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                            <h3 class="text-lg font-semibold text-[#18489b] ">
                              Create new User
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form class="md:p-4 p-5">
                          <div class="relative z-0 w-full mb-5 group">
                              <input type="email" name="floating_email" id="floating_email"  v-model="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                          </div>
                          <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" v-model="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="repeat_password" id="floating_repeat_password" v-model="repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                            </div>
                          </div>
                          <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" v-model="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_last_name" id="floating_last_name" v-model="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                          </div>
                          <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" v-model="floating_phone" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_company" id="floating_company" v-model="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                            </div>
                          </div>
                          <button type="submit" @click="addTodo(email,floating_password,repeat_password,floating_first_name,floating_last_name,floating_phone)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div> 
      </div>
      <div class="text-xs text-[#646161] flex gap-4 items-center bg-[#0798ca30] p-4 w-full text-left">
            <label class="text-[14px] font-bold w-auto ">filter category:</label>
            <select name="" id="" v-model="selected" @change="endPoint(selected)" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 ">
              <option value="" selected disabled >Order by</option>
              <option value="asc" >A-z</option>
              <option value="desc" >Z-a</option>
            </select>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" :class="[breadCrumUrl[1]!=='' ? 'inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 ':'hidden']" type="button">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
              Position
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200 overflow-auto h-[12rem]" aria-labelledby="dropdownRadioButton">
                    <li v-for="item in categoryTitle">
                        <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="asc" @click="searchcategoryTitle(item)" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">{{item}}</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input  id="filter-radio-example-2" type="radio" value="desc" @click="endPoint('desc')" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-2" class="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Z-a</label>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
      <div class="w-full flex justify-center overflow-x-auto ">
        <table class="text-sm w-full   text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#646161] uppercase bg-[#0798ca30] w-full ">
            
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
    <div class="max-w-screen-xl md:mx-auto ">
 <div style="width:100%;" class="py-[4rem]"><canvas id="acquisitions" class="bg-[#f8f8ff] p-[3rem] rounded-lg"></canvas></div>
    </div>
   
</template>
<script src="./paginateAbout.js"></script>
<style>
a.block.text-blue-700.focus\:ring-4.focus\:outline-none.focus\:ring-blue-300.font-medium.rounded-lg.text-sm.px-5.py-2\.5.text-center:hover .tooltiptextCreate {
    visibility: visible;
}
.tooltiptextCreate {
  visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    margin-left: -4.2rem;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    margin-top: -2rem;
}
.tooltiptextCreate::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
</style>