<script setup>
import HelloWorld from './components/Header.vue';
import data from './Data';

import { ref, computed } from 'vue';
const url=window.location;

const counter = ref(0);
const classes = ref('card  d-none');
const valorId = ref([]);
const animalNames = ref();
const dataupdate = ref([]);
const letra = 'siete';
const favoritoAnimales = ref([]);
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
<nav class="flex p-2 bg-[#77889930] " aria-label="Breadcrumb" style="background: #77889930;">
    <div class="max-w-screen-xl md:mx-28 px-5">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
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
        <router-link aria-current="page" to="/user" class="ms-1 capitalize text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{ruta}}</router-link>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{breadcrum}}</span>
      </div>
    </li>
  </ol>
  </div>
</nav>

  <section class="bg-[#2675d914]">
    <div class="max-w-screen-xl md:mx-28">
      <div class="flex flex-wrap p-5 ">
        <div v-for="items in animalNames" class="hover:shadow-2xl max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg " v-bind:src="items.Imagen" alt="" />
          </a>
        <div class="p-5 ">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ items.Nombre }}</h5>
          </a>
          <span class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{ items.Tipo }}</span>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Observacion: {{ items.Observacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Ubicacion: {{ items.Ubicacion }}</p>
                <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Rasgos: {{ items.Rasgos }}</p>
          <p class="text-left mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
    <div class="container row">
      <h3>My favorite</h3>

      <template v-for="(item, index) in favoritoAnimales" :key="item.Id">
        <div class="card" style="width: 18rem">
          <img v-bind:src="item.Imagen" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.Nombre }} {{ item.Id }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ item.Tipo }}
            </p>
            <div class="d-flex" style="justify-content: space-around">
              <a @click="Delete(index)" class="btn btn-danger">Eliminar</a>
              <a @click="Update(item.Id)" class="btn btn-warning">Modificar</a>
            </div>
          </div>
         
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div  v-for="(item, index) in favoritoAnimales">
            <img class="h-auto max-w-full rounded-lg" v-bind:src="item.Imagen" alt="">
          </div>
        </div>
        <hr />
      </template>
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
  border-bottom: 3px solid #2b2f345e;
}
</style>
