<script lang="ts" setup >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
</script>
<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
               
                <td  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" v-bind:src="todo.image" v-bind:alt="todo.firstName">
                    <div class="ps-3">
                        <div class="text-base font-semibold">{{ todo.firstName }} {{ todo.lastName }}</div>
                        <div class="font-normal text-gray-500">{{ todo.email }}</div>
                    </div>  
                </td>
                <td class="px-6 py-4">
                    {{ todo.company.title }}
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div :class="['h-2.5 w-2.5 rounded-full', todo.role=='admin'?'bg-green-500' : 'bg-red-500','me-2']"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4 flex justify-around items-center gap-2">
                    <router-link  title=" " v-bind:to="'user/'+todo.id" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <FontAwesomeIcon :icon="faEye" class="mb-0"/>
                        <span class="tooltiptext">Ver detalle</span>
                    </router-link>
                    <a  v-on:click="removeTodo()" class="font-medium text-blue-600  hover:cursor-pointer"  title="">
                        <FontAwesomeIcon :icon="faDeleteLeft" class="mb-0"/>
                        <span class="tooltiptextDelete">Eliminar usuario </span>
                    
                    </a>
                </td>
            </tr>
           
       
           
      
</template>

<script  lang="ts">
export default {
  name: 'todoitem',
  props: ['todo'],

  methods: {
    removeTodo() {
      this.$emit('todo:remove', this.todo.id);
    },
    
  
}

}

</script>
<style src="./todoItem.css"></style>
