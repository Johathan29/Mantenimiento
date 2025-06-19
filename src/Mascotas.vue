<script setup lang="ts">

import data from './Data';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { onMounted } from 'vue'
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

// initialize components based on data attribute selectors
onMounted(() => {
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
})

import { ref, computed } from 'vue';
const counter = ref(0);
const classes = ref('card  d-none');
const valorId = ref([]);
const animalNames = ref({});
const dataupdate = ref([]);
const letra = 'siete';
const favoritoAnimales = ref([]);
const url=window.location;
const id=ref(0);
const breadcrum=ref();
id.value=url.hash.split('/');
console.log(id.value);
const ruta=ref()
ruta.value=url.pathname[1]+url.pathname[2]+url.pathname[3]+url.pathname[4]+url.pathname[5]+url.pathname[6]+url.pathname[7]+url.pathname[8];
let convertir = ref([]);
const contador = () => {
  letra;
  counter.value++;
};
animalNames.value = data.value;
const animales = () => {
  let nombre = '';
  let tipo = '';
};
const add = (id) => {
  const idmascosta = ref();
  const nombre = ref();
  const tipo = ref();
  const imagen = ref();
  const rasgos = ref();
  const mascota = ref([]);
  valorId.value.push(animalNames.value.find((animal) => animal.id === id).id);
  idmascosta.value = animalNames.value.find((animal) => animal.id === id).id;
  nombre.value = animalNames.value.find((animal) => animal.id === id).Nombre;
  tipo.value = animalNames.value.find((animal) => animal.id === id).Tipo;
  imagen.value = animalNames.value.find((animal) => animal.id === id).Imagen;
  rasgos.value=animalNames.value.find((animal) => animal.id === id).Rasgos;
  mascota.value = {
    Id: idmascosta.value,
    Nombre: nombre.value,
    Tipo: tipo.value,
    Imagen: imagen.value,
    Rasgos: rasgos.value,
  };

  return favoritoAnimales.value.push(mascota.value);
};
const Delete = (index) => {
  if (index === 0) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        favoritoAnimales.value.shift();
        valorId.value.shift();
      }
    });
  } else {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        favoritoAnimales.value.splice(index,1);
    valorId.value.splice(index);
      }
    });
   
  }
};
const Update = (index) => {
  dataupdate.value = favoritoAnimales.value.find((item) => item.Id === index);
};
const auto = (id) => {
  const valorVerificar = valorId.value.find((item) => item === id);
  return valorVerificar ? true : false;
};
</script>

<template>
  <section>
    <BreadCrum :name="breadCrumUrl" ></BreadCrum>
    <div class="py-[4rem] bg-[#0798ca30]">
      <div class="max-w-screen-xl md:mx-auto px-5 ">
          <h1 class="text-left text-[2rem] text-[#18489b] font-[emoji]">List of animals</h1>
        </div>
  </div>
  </section>
   <section class="bg-[#2675d914]">
    <div class="max-w-screen-xl md:mx-auto">
      <div class="flex flex-wrap p-5 ">
        <div v-for="items in animalNames" :class="['hover:shadow-2xl md:w-[48%] w-full md:flex block bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',items.Tipo=='Gato'?'bg-sky-100':'' || items.Tipo=='Perro'?'bg`-blue-400':'']">
          <div href="#">
          <div :class="['md:rounded-l-[10px] md:rounded-r-[50%] rounded-t-lg bg-cover bg-center p-4  md:h-full h-[14rem] md:w-[14rem]']" :style="['background-image:url('+items.Imagen+')']">
             
            </div>
          </div>
        <div class="p-5 ">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ items.Nombre }}</h5>
          </a>
          <span class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ items.Tipo }}</span>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Observacion: {{ items.Observacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicacion: {{ items.Ubicacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Rasgos: {{ items.Rasgos }}</p>
          <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button @click="add(items.id)"
                   :disabled="auto(items.id)"
                   :class="['inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#068896cc] rounded-lg hover:bg-[#068896] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',auto(items.id)?'cursor-not-allowed opacity-[0.3]': '']">
                                Favorito
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
           </button>
        </div>
      </div>
    </div>
  </div>
</section>
  <section>
    <div class="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-3 text-white">
        <div class="lg:container md:mx-auto px-5">
         <h3 class="p-5 text-[1.6rem]">Mis favoritos</h3>
        </div>
      </div>
    <div class="max-w-screen-xl md:mx-auto px-5">
     <ul class="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <li class="p-4" v-for="(item, index) in favoritoAnimales" :key="item.Id">
            <div class="flex items-center  w-full  rtl:space-x-reverse">
              <div class="flex-shrink-0 z-40">
                  <img class="w-36 h-36 rounded-full" v-bind:src="item.Imagen"  alt="Neil image">
              </div>
              <div :class="['h-[7rem] gap-16  rounded-r-[12px] flex flex-1 min-w-0 m-[-2rem] z-30 w-full', item.Tipo=='Gato'?'bg-sky-100':'' || item.Tipo=='Perro'?'bg-blue-400':''] ">
                  <p class="inline-flex m-[3rem] items-center  text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ item.Nombre }}
                  </p>
                  <p class="inline-flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ item.Tipo }}
                  </p>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {{ item.Rasgos }}
              </div>
              <div class="inline-flex items-center " >
               <a @click="Delete(index)" class="z-50 focus:outline-none cursor-pointer text-red-600  hover:text-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-[14px] px-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><FontAwesomeIcon :icon="faTrashAlt" class="mb-0"/></a>
              <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  class="block focus:outline-none cursor-pointer text-yellow-400  hover:text-yellow-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-[14px]  px-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><FontAwesomeIcon :icon="faSquarePen" class="mb-0"/></button>
                <a @click="Update(item.Id)" class="focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Modificar</a>
              </div>
              </div>
              
              
            </div>
            
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" >
import BreadCrum from './components/Breadcrum.vue'
export default{
name:'Datails',
props:{
  


},
data()
{
    return{
      breadCrumUrl:'',
      clearUrl:'',
      User:'',
      userjson:'',
      userId:0,
      datos:[],
      userregistered:{}
        };
},  
async mounted() {

},
methods:
{ 
  updateUrl(){
    const url=window.location;
    this.userjson=localStorage.getItem('usuario');
    this.User=JSON.parse(this.userjson);
    this.breadCrumUrl=url.hash.split("/");
    console.log(this.User)
     return this.breadCrumUrl;
    },
    /*breadCrumUrl(){
      
      const url=window.location;
      return url.hash[4]
     
    }*/
   
  },
  mounted(){
    this.updateUrl();

  },
  components:{
    BreadCrum
  }
}
</script>
<style scoped>
.col-md-6 {
  height: 33rem;
  list-style: none;
}
.card {
  height: 32rem;
  max-height: 34rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.card-img,
.card-img-bottom,
.card-img-top {
  width: 100%;
  height: 258px;
}
.col-md-6 {
  flex: 0 0 auto;
  width: 33%;
  line-height: 0.9;
}
.card {
  height: 32rem;

  max-height: 34rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
  border-bottom: 3px solid #74aaff5e;
}
</style>

<!--<script setup lang="ts">

import data from './Data';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { onMounted } from 'vue'
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

// initialize components based on data attribute selectors
onMounted(() => {
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
})

import { ref, computed } from 'vue';
const counter = ref(0);
const classes = ref('card  d-none');
const valorId = ref([]);
const animalNames = ref({});
const dataupdate = ref([]);
const letra = 'siete';
const favoritoAnimales = ref([]);
const url=window.location;
const id=ref(0);
const breadcrum=ref();
id.value=url.hash.split('/');
console.log(id.value);
const ruta=ref()
ruta.value=url.pathname[1]+url.pathname[2]+url.pathname[3]+url.pathname[4]+url.pathname[5]+url.pathname[6]+url.pathname[7]+url.pathname[8];
let convertir = ref([]);
const contador = () => {
  letra;
  counter.value++;
};
animalNames.value = data.value;
const animales = () => {
  let nombre = '';
  let tipo = '';
};
const add = (id) => {
  const idmascosta = ref();
  const nombre = ref();
  const tipo = ref();
  const imagen = ref();
  const rasgos = ref();
  const mascota = ref([]);
  valorId.value.push(animalNames.value.find((animal) => animal.id === id).id);
  idmascosta.value = animalNames.value.find((animal) => animal.id === id).id;
  nombre.value = animalNames.value.find((animal) => animal.id === id).Nombre;
  tipo.value = animalNames.value.find((animal) => animal.id === id).Tipo;
  imagen.value = animalNames.value.find((animal) => animal.id === id).Imagen;
  rasgos.value=animalNames.value.find((animal) => animal.id === id).Rasgos;
  mascota.value = {
    Id: idmascosta.value,
    Nombre: nombre.value,
    Tipo: tipo.value,
    Imagen: imagen.value,
    Rasgos: rasgos.value,
  };

  return favoritoAnimales.value.push(mascota.value);
};
const Delete = (index) => {
  if (index === 0) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        favoritoAnimales.value.shift();
        valorId.value.shift();
      }
    });
  } else {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
        favoritoAnimales.value.splice(index,1);
    valorId.value.splice(index);
      }
    });
   
  }
};
const Update = (index) => {
  dataupdate.value = favoritoAnimales.value.find((item) => item.Id === index);
};
const auto = (id) => {
  const valorVerificar = valorId.value.find((item) => item === id);
  return valorVerificar ? true : false;
};
</script>

<template>
  <section>
    <BreadCrum :name="breadCrumUrl" ></BreadCrum>
    <div class="py-[4rem] bg-[#0798ca30]">
      <div class="max-w-screen-xl md:mx-auto px-5 ">
          <h1 class="text-left text-[2rem] text-[#18489b] font-[emoji]">List of animals</h1>
        </div>
  </div>
  </section>
   <section class="bg-[#2675d914]">
    <div class="max-w-screen-xl md:mx-auto">
      <div class="flex flex-wrap p-5 ">
        <div v-for="items in animalNames" :class="['hover:shadow-2xl md:w-[48%] w-full md:flex block bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',items.Tipo=='Gato'?'bg-sky-100':'' || items.Tipo=='Perro'?'bg`-blue-400':'']">
          <div href="#">
          <div :class="['md:rounded-l-[10px] md:rounded-r-[50%] rounded-t-lg bg-cover bg-center p-4  md:h-full h-[14rem] md:w-[14rem]']" :style="['background-image:url('+items.Imagen+')']">
             
            </div>
          </div>
        <div class="p-5 ">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ items.Nombre }}</h5>
          </a>
          <span class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ items.Tipo }}</span>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Observacion: {{ items.Observacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicacion: {{ items.Ubicacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Rasgos: {{ items.Rasgos }}</p>
          <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button @click="add(items.id)"
                   :disabled="auto(items.id)"
                   :class="['inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#068896cc] rounded-lg hover:bg-[#068896] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',auto(items.id)?'cursor-not-allowed opacity-[0.3]': '']">
                                Favorito
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
           </button>
        </div>
      </div>
    </div>
  </div>
</section>
  <section>
    <div class="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-3 text-white">
        <div class="lg:container md:mx-auto px-5">
         <h3 class="p-5 text-[1.6rem]">Mis favoritos</h3>
        </div>
      </div>
    <div class="max-w-screen-xl md:mx-auto px-5">
     <ul class="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <li class="p-4" v-for="(item, index) in favoritoAnimales" :key="item.Id">
            <div class="flex items-center  w-full  rtl:space-x-reverse">
              <div class="flex-shrink-0 z-40">
                  <img class="w-36 h-36 rounded-full" v-bind:src="item.Imagen"  alt="Neil image">
              </div>
              <div :class="['h-[7rem] gap-16  rounded-r-[12px] flex flex-1 min-w-0 m-[-2rem] z-30 w-full', item.Tipo=='Gato'?'bg-sky-100':'' || item.Tipo=='Perro'?'bg-blue-400':''] ">
                  <p class="inline-flex m-[3rem] items-center  text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ item.Nombre }}
                  </p>
                  <p class="inline-flex items-center text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ item.Tipo }}
                  </p>
                  <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {{ item.Rasgos }}
              </div>
              <div class="inline-flex items-center " >
               <a @click="Delete(index)" class="z-50 focus:outline-none cursor-pointer text-red-600  hover:text-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-[14px] px-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><FontAwesomeIcon :icon="faTrashAlt" class="mb-0"/></a>
              <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"  class="block focus:outline-none cursor-pointer text-yellow-400  hover:text-yellow-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-[14px]  px-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><FontAwesomeIcon :icon="faSquarePen" class="mb-0"/></button>
                <a @click="Update(item.Id)" class="focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Modificar</a>
              </div>
              </div>
              
              
            </div>
            
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" >
import BreadCrum from './components/Breadcrum.vue'
export default{
name:'Datails',
props:{
  


},
data()
{
    return{
      breadCrumUrl:'',
      clearUrl:'',
      User:'',
      userjson:'',
      userId:0,
      datos:[],
      userregistered:{}
        };
},  
async mounted() {

},
methods:
{ 
  updateUrl(){
    const url=window.location;
    this.userjson=localStorage.getItem('usuario');
    this.User=JSON.parse(this.userjson);
    this.breadCrumUrl=url.hash.split("/");
    console.log(this.User)
     return this.breadCrumUrl;
    },
    /*breadCrumUrl(){
      
      const url=window.location;
      return url.hash[4]
     
    }*/
   
  },
  mounted(){
    this.updateUrl();

  },
  components:{
    BreadCrum
  }
}
</script>
<style scoped>
.col-md-6 {
  height: 33rem;
  list-style: none;
}
.card {
  height: 32rem;
  max-height: 34rem;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.card-img,
.card-img-bottom,
.card-img-top {
  width: 100%;
  height: 258px;
}
.col-md-6 {
  flex: 0 0 auto;
  width: 33%;
  line-height: 0.9;
}
.card {
  height: 32rem;

  max-height: 34rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  padding: 0px;
  border-bottom: 3px solid #74aaff5e;
}
</style>
-->