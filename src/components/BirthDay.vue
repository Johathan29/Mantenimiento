<template>
   <li class="mb-10 ms-6" v-for="todo in todos.slice()"> 
              <!--<div v-if="todo.role==='admin' && todo.birthDate.slice(4,7)==='-'+monthNumber+'-'">-->
                <div v-if="todo.birthDate.slice(4,7)==='-5-'" >
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img class="rounded-full shadow-lg" :src="todo.image" alt="Bonnie image"/>
                  </span>
                  <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-xs sm:flex dark:bg-gray-700 dark:border-gray-600">
                      <time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">{{year }}{{todo.birthDate.slice(4,19)}}</time>
                      <div class="text-sm font-normal text-gray-500 dark:text-gray-300">Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300">Funny Group</span></div>
                </div>
              </div>             
            </li>
</template>

<script  lang="ts">
export default {
name: 'birthday',
props: ['todo',],
data(){
return{
    wordToword:'',
    counters:0,
    usuario:[],
    validation:[]
    }
},
methods: {
removeTodo() {
  this.$emit('todo:remove', this.todo.id);
},

},
mounted(){
    this.counterWord();
    }
    
}

</script>
<style src="./todoItem.css"></style>
