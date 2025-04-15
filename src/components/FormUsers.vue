<script setup>
import { ref, computed, onMounted} from 'vue';
const users=ref([]);
const active=ref('');
active.value=false;
onMounted(async () => 
{
  const response = await fetch('https://dummyjson.com/users');
  users.value = await response.json();
  users.value=users.value;

}
);
const seanding=(email,password)=>
{
  //  email='emily.johnson@x.dummyjson.com',password='emilyspass';
  const confirmarUser=users.value.users.find(item=> item.email===email && item.password===password ? item : '');
  if(confirmarUser==null){
  console.log("usuario no encontrado")
  }else{
  confirmarUser;
  //active.value=true;
  }
}
</script>

<template>
<div >
<form class="max-w-sm mx-auto" >

  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email"   name="email" @input="event => email = event.target.value"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
    <span :class="[email===''? 'hidden' : 'show']">No se encontro usuario</span>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" name="password" @input="event => password = event.target.value"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="button" @click="SendToParent(email,password)" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
<div >
</div>
<h1>{{userId}}</h1>

</template>

<script  >

export default{
props:{
name:'FormUsers',

userId: Number,
send:String,


},
data()
{
    return{
        send:'buscando errores',
        login:[''],
        getData:[''],
        
        };
},  
async mounted() {

},
methods:
{
 async getDataUser()
    {
        const response = await fetch('https://dummyjson.com/users');
        const users = await response.json();
        this.getData=users.users;

    },
 SendToParent(email,password)
    {
            this.login=this.getData.find(item=> item.email===email && item.password===password ? item : '')
            this.$emit('emitter', this.login);
           
    },
  
},
mounted()
    {
        this.getDataUser();
        this.SendToParent();
    }
}
</script>
