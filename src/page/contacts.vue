<script setup lang="ts">
</script>
<template>
  <BreadCrum :name="breadCrumUrl" ></BreadCrum>
  <div class="py-[4rem] bg-[#0798ca30]">
      <div class="max-w-screen-xl md:mx-auto px-5 ">
          <h1 class="text-left text-[2rem] text-[#18489b] font-[emoji]">Contact Form</h1>
        </div>
  </div>
  <section class="py-[4rem] h-full">
      <div class="max-w-screen-xl md:mx-auto px-[3rem]">
          <div  class="flex  items-center justify-between">
              <div class="md:w-1/2 w-full bg-[#3a383838] p-[6rem] rounded-l-lg rounded-bl-none">
                  <h1>Formulario de Contactarnos</h1>
                  <span>Por este medio podemos tardar un tiempo en responder</span>
                  <p class="text-gray-500 text-[16px]">Teléfono: <span class="font-bold text-[16px]"> 809-555-5555.</span></p>
                  <p class="text-gray-500 text-[16px]">Estamos ubicados en <span class="font-bold text-[16px]">Av. Florencio de Leon 97, Bajos de Haina 91000.</span></p>
              </div>

              <form method="post" action="" class=" md:w-1/2 p-[0.8rem] w-full rounded-r-lg rounded-br-none border-[1px]">
              <div class="relative z-0 w-full mb-5 group">
                  <input type="email" name="floating_email" @input="event => floating_email = event.target.value" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div class="">
                  <div class="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_first_name"  @input="event => floating_first_name = event.target.value" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                  </div>
                  <div class="relative z-0 w-full mb-5 group">
                      <input type="text" name="floating_last_name" id="floating_last_name"  @input="event => floating_last_name = event.target.value"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                      <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                  </div>
              </div>
              <div class="">
                  <div class="relative z-0 w-full mb-5 group">
                      <textarea v-model="floating_message"  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" ></textarea>
                      
                      <label for="floating_messenger" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                  </div>
              </div>
              <button type="button" @click="SendData(floating_message,floating_last_name,floating_first_name, floating_email)" class="text-white bg-[#056080db] hover:bg-[#056080] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </form>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.955914076865!2d-70.0325902!3d18.440310699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56065fe5282dd%3A0x66bc51bc6439409b!2sAv.%20Florencio%20de%20Leon%2097%2C%20Bajos%20de%20Haina%2091000!5e0!3m2!1ses!2sdo!4v1746623768469!5m2!1ses!2sdo" width="100%" height="450" style="border:0;" class="rounded-b-lg border-[4px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      
    </section>
</template>

<script lang="ts" >
import BreadCrum from '../components/Breadcrum.vue'
import {fileURLToPath} from 'url';
//import { promises as fs } from 'fs';
export default{
name:'Datails',
props:{
  floating_first_name:String


},
data()
{
    return{
      breadCrumUrl:'',
     floating_first_name:'',
     data:[]
        };
},  
methods:
{ 

  SendData(floating_messenger,floating_last_name,floating_first_name, floating_email){
    console.log(floating_messenger,floating_last_name,floating_first_name, floating_email);
  },
  updateUrl(){
    const url=window.location;
    this.userjson=localStorage.getItem('usuario');
    this.User=JSON.parse(this.userjson);
    this.breadCrumUrl=url.hash.split("/");

     return this.breadCrumUrl;
    },
 
    
  },
  mounted(){
    this.updateUrl();
    this.main();
  },
  components:{
    BreadCrum
  }
}
</script>