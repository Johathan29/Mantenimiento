<template>
     <Breadcrum :name="breadCrumUrl"></Breadcrum>
    <div class="py-[4rem] bg-[#0798ca30]">
    <div class="max-w-screen-xl md:mx-auto px-[3rem] ">
        <h1 class=" md:flex block items-center gap-[3rem] text-left text-[2rem] text-[#18489b] font-[emoji]">
            Register

        
        </h1>
        
      </div>
      
    </div>
<div class="max-w-screen-xl md:mx-auto p-[3rem] bg-gray-50 my-[1rem] rounded-lg">
   
    <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2 text-left ">
            <div class="">
                <label for="first_name" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">First name<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="text" id="first_name" name="first_name" @input="event => first_name = event.target.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Last name<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="text" id="last_name" name="last_name" @input="event => last_name = event.target.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
            </div>  
           
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2 text-left"> 
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Phone number<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="tel" id="phone" @input="event => phone = event.target.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Email address<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="email" id="email" name="email" @input="event => email = event.target.value" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2 text-left"> 
            <div>
                <label for="Gender" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Gender <sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <div class="flex gap-2 items-center">
                        <input type="radio" name="gender" id="one" value="F" v-model="picked" />
                        <label for="one">One</label>

                        <input type="radio" name="gender" id="two" value="Two" v-model="picked" />
                        <label for="two">Two</label>

                </div>
            </div>
            <div>
                
                <label for="email" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Age<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="Number"  min="0" v-model="age" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2 text-left">
            <div>
                <label for="password" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Password<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="password" id="password" name="password" @input="event => password = event.target.value" 
                :class="[confirm_password!==false ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ':'bg-gray-50 border border-red-500 text-red-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ']" placeholder="•••••••••" required />
            </div> 
            <div >
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-[#0f49c5] dark:text-white">Confirm password<sup class="top-[0px] text-sm font-medium text-red-500 dark:text-white">*</sup></label>
                <input type="password" id="confirm_password" name="confirm_password" @input="event => confirm_password = event.target.value" 
                :class="[confirm_password!==false ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ':'bg-gray-50 border border-red-500 text-red-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ']" placeholder="•••••••••" required />
            </div> 
        </div>
        <div class="flex items-start mb-2">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox"  name="check_confirm" @click="confirmaRegistred(check_confirm)" @input="event => check_confirm = event.target.checked" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <router-link to="/terminos" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</router-link>.</label>
           
        </div>
        <div class="flex items-start mb-6">
            <label class="text-sm font-medium text-gray-900">Los campos que poseen <strong class="text-red-500">*</strong> son campos obligatorios</label>
        </div>
        <button type="button" @click="SendDataUser(first_name,last_name,email,phone,password,confirm_password)" :disabled="confirm==true ? '' : disabled"  class="text-white bg-[#1f2937d6] hover:bg-[#0a1729] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</div>
</template>
<script>
import Breadcrum from '../components/Breadcrum.vue';
//import  sha256  from  'crypto-js/sha256' ; 
//import hmacSHA512  from  'crypto-js/hmac-sha512' ; 
//import  Base64  from  'crypto-js/enc-base64' ;

 
import { 
  initAccordions, 
  initCarousels, 
  initCollapses, 
  initDials, 
  initDismisses, 
  initDrawers, 
  initDropdowns, 
  initModals, 
  initPopovers, 
  initTabs, 
  initTooltips } from 'flowbite'
 // import crypto from 'crypto';
export default{
    name:'Registrar',
    data(){
         return{
            getData:'',
            setData:[],
            confirm:true,
            confirm_password:'',
            algorithm : 'aes-256-cbc',
            breadCrumUrl:'',
            fetch:[],
            titulo:'registrar'
            
            }
    },
    
    methods:{
        confirmaRegistred(confirm){
            this.confirm=confirm;
        },
    
     async  SendDataUser(first_name,last_name,email,phone,password,confirm_password){
          this.setData= await fetch('https://dummyjson.com/users/add',{
                method: 'POST',
                body: JSON.stringify({
                    firstName: first_name,
                    lastName: last_name,
                    age: 28,
                    gender: "female",
                    email: email,
                    phone: phone,
                    username: first_name,
                    password:confirm_password
                    
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json()).then((json) => this.setData=json);
            this.getData.push(this.setData);
            console.log(this.getData);
            this.confirm_password=password==confirm_password ? true : false;
            
               if(this.confirm_password==true){
               /* const clave_privada=''
                const  hashDigest  =  sha256 (this.confirm_password) ; 
                const  hmacDigest  =  Base64.stringify ( hmacSHA512 (hashDigest , clave_privada ) ) ;
                console.log(hmacDigest);*/
               }
            else{
                console.log('incorrect password');
            }
            
            
       },
       async encrypt_data() {
       
         this.fetch = await fetch('https://dummyjson.com/users');
this.fetch=  this.fetch.json();
           
         
      },
        async getDataUser()
            {
                const response = await fetch('https://dummyjson.com/users');
        const users = await response.json();
        this.getData=users.users;

            },
            updateUrl(){
                const  mensaje="mensaje desde el servidor"
const nonce='' 
const ruta='' 
const clave_privada='' ;  // ... 

const url=window.location;
this.breadCrumUrl=url.hash.split("/");
console.log(this.breadCrumUrl);
return this.breadCrumUrl;
},
    
    },
    components:{
        Breadcrum
    },
    mounted(){
        this.updateUrl();
        this.encrypt_data();
       this.getDataUser()
       initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
        
    }
}

</script>