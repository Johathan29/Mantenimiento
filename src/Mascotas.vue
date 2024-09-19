<script setup>
import HelloWorld from './components/Header.vue';
import data from './Data';
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
const animalNames = ref();
const dataupdate = ref([]);
const letra = 'siete';
const favoritoAnimales = ref([]);
const url=window.location;
const id=ref(0);
const breadcrum=ref();
id.value=url.pathname[6];
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
  const mascota = ref([]);
  valorId.value.push(animalNames.value.find((animal) => animal.id === id).id);
  idmascosta.value = animalNames.value.find((animal) => animal.id === id).id;
  nombre.value = animalNames.value.find((animal) => animal.id === id).Nombre;
  tipo.value = animalNames.value.find((animal) => animal.id === id).Tipo;
  imagen.value = animalNames.value.find((animal) => animal.id === id).Imagen;
  mascota.value = {
    Id: idmascosta.value,
    Nombre: nombre.value,
    Tipo: tipo.value,
    Imagen: imagen.value,
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
    <nav class=" p-2 bg-[#77889930] " aria-label="Breadcrumb" style="background: #77889930;" >
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
        <router-link aria-current="page" to="" class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ ruta }}</router-link>
      </div>
    </li>
    
  </ol>
  </div>
</nav>
    <div class=" bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 mb-3 text-white">
    <div class="lg:container md:mx-auto px-5">
      <h2 class=" p-5 text-[2rem]">Listado de Mascotas</h2>
    </div>
  </div>
    <div class="max-w-screen-xl md:mx-auto px-5">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <figure v-for="items in animalNames" class="h-auto max-w-full rounded-lg border">
                <figcaption class="flex items-center justify-center ">
                      <img class="rounded-full w-36 h-36" v-bind:src="items.Imagen" alt="profile picture">
                      <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                          <div>{{ items.Nombre }}</div>
                          <div class="text-sm text-gray-500 dark:text-gray-400 ">{{ items.Tipo }}</div>
                      </div>
                  </figcaption>      
                <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400 leading-[0.8rem]">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white"></h3>
                      <p class="my-4">If you care for your time, I hands down would go with this."</p>
                      <span> </span>
                    <p class="my-4">Observacion: {{ items.Observacion }}</p>
                    <p class="my-4">Ubicacion: {{ items.Ubicacion }}</p>
                    <p class="my-4">Rasgos: {{ items.Rasgos }}</p>
                </blockquote>
                <button
                      @click="add(items.id)"
                      :disabled="auto(items.id)"
                      :class="['text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800']"
                    >
                      Favorito
                    </button>
            </figure>
        </div>
    </div>
  </section>
  <section>
    <div class="max-w-screen-xl md:mx-auto px-5">
      <h3>My favorite</h3>

      <template v-for="(item, index) in favoritoAnimales" :key="item.Id">
        <div class="card" style="width: 18rem">
          <img v-bind:src="item.Imagen" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.Nombre }} {{ item.Id }}</h5>
            <p class="my-4">
              {{ item.Tipo }}
            </p>
            <div class="d-flex" style="justify-content: space-around">
              <a @click="Delete(index)" class="btn btn-danger">Eliminar</a>
              <a @click="Update(item.Id)" class="btn btn-warning">Modificar</a>
            </div>
          </div>
          
        </div>

        <hr />
      </template>
      <ul class="max-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <li class="p-4" v-for="(item, index) in favoritoAnimales" :key="item.Id">
            <div class="flex items-center space-x-4 rtl:space-x-reverse">
              <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" v-bind:src="item.Imagen"  alt="Neil image">
              </div>
              <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {{ item.Nombre }}
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    {{ item.Tipo }}
                  </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
              </div>
              <div class="d-flex" style="justify-content: space-around">
                <a @click="Delete(index)" class="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</a>
                <a @click="Update(item.Id)" class="focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Modificar</a>
              </div>
              
            </div>
            
        </li>
      </ul>
    </div>
  </section>
</template>

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
