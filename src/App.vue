<script setup>
import HelloWorld from './components/HelloWorld.vue';
import { ref } from 'vue';
const counter = ref(0);
const recorrer = ref();
const letra = 'siete';
const favoritoAnimales = ref([]);
let convertir = ref([]);
const contador = () => {
  letra;
  counter.value++;
};

var animalNames = [
  {
    id: 1,
    Tipo: 'Perro',
    Nombre: 'Pascual',
    Observacion: 'Esta mal',
    Ubicacion: 'Se encuentra en robledo cerca a la quintana',
    Rasgos: 'Tiene el pelo cafe  , ademas tiene una patica mala',
    Imagen:
      'https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg',
  },
  {
    id: 4,
    Tipo: 'Gato',
    Nombre: 'Icaro',
    Observacion: 'Es un gatico cachorro que esta en la calle',
    Ubicacion: 'Esta en belen  por los lados de  la udem',
    Rasgos: 'Es pequeño  y el pelo lo tiene negro',
    Imagen:
      'http://static.consumer.es/www/imgs/2013/07/adoptar-gatos-cachorros-felinos-animales-mascotas-adopcion-acogida-art.jpg',
  },
  {
    id: 3,
    Tipo: 'Caballo',
    Nombre: 'Oreo',
    Observacion: 'Esta denutrido',
    Ubicacion: 'en un lote por la autipista medellin bogota',
    Rasgos: 'Es blanco y  esta  muy delgado',
    Imagen:
      'http://www.pulso-digital.com/wp-content/uploads/2014/07/CABALLOS-ENFERMOS-PARA-SACRIFICAR.jpg',
  },
  {
    id: 2,
    Tipo: 'Perro',
    Nombre: 'Sacha',
    Observacion: 'Tiene un ojo  herido',
    Ubicacion: 'Esta en aranjuez por el parque',
    Rasgos: 'Es un perro criollo y tiene un ojo spr herido',
    Imagen:
      'http://www.cuidadosdemascotas.com/wp-content/uploads/2015/06/perro_herido_cuidados_mascotas-300x225.jpg',
  },
  {
    id: 5,
    Tipo: 'Gato',
    Nombre: 'Nica',
    Observacion: 'Es una gatica que acabo de dar a luz',
    Ubicacion: 'Parque del poblado',
    Rasgos: 'Es una gata blanca y tiene 6 gaticos cachorros',
    Imagen:
      'https://lh4.googleusercontent.com/-PKoAqrneSVg/TyPbkz9VqDI/AAAAAAAAAZg/QycSgXbOPUM/s800/Familia%2520de%2520gatos%2520Korat%2520%2528Gato%2520de%2520la%2520suerte%252C%2520Gat%2520Korat%252C%2520Si-sawaat%252C%2520Gat%2520de%2520la%2520Sort%252C%2520Korat-Katze%252C%2520Gatto%2520Korat%2529.jpg',
  },
  {
    id: 6,
    Tipo: 'Pajaro',
    Nombre: 'Cantor',
    Observacion: 'Tiene una ala aproriada',
    Ubicacion: 'Esta en prometeo',
    Rasgos: 'Es un pechi rojo',
    Imagen:
      'https://www.euroresidentes.com/hogar/mascotas/wp-content/uploads/sites/5/2014/07/como-curar-pajaro-herido-euroresidentes.jpg',
  },
  {
    id: 7,
    Tipo: 'Perro',
    Nombre: 'scott',
    Observacion: 'Esta muy herido',
    Ubicacion: 'Esta en belen cerca a la udem',
    Rasgos: 'Tes un labrador  viejito colo cafe ',
    Imagen:
      'http://www.perrosdebusqueda.es/wp-content/uploads/2015/11/Zarpas-herido.jpg',
  },
  {
    id: 8,
    Tipo: 'Perro',
    Nombre: 'Toby',
    Observacion: 'Para adopcion',
    Ubicacion: 'Esta en belen cerca a la udem',
    Rasgos: 'Tiene el pelo cafe  , ademas tiene una patica mala',
    Imagen:
      'http://blog.feebbo.com/wp-content/uploads/2015/10/Im%C3%A1genes-para-WhatsApp-de-Animales-2.jpg',
  },
  {
    id: 9,
    Tipo: 'Gato',
    Nombre: 'Sas',
    Observacion: ' para dar en adopcion',
    Ubicacion: 'Esta en el barrio los colores',
    Rasgos: 'Tiene el cabello gris con blanco ',
    Imagen:
      'http://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg',
  },
  {
    id: 10,
    Tipo: 'Gato',
    Nombre: 'NN',
    Observacion: 'Esta mal',
    Ubicacion: 'lo vi por la canalizacion del estadio',
    Rasgos: 'Tiene el pelo cafe  con blanco , ademas tiene una patica mala',
    Imagen:
      'http://mascotas-static.hola.com/gatos/files/2012/10/stray-cat-169113_1280.jpg',
  },
  {
    id: 11,
    Tipo: 'Perro',
    Nombre: 'Boxer',
    Observacion: 'Se ve que tiene dueño esta muy bien ',
    Ubicacion: 'Lo vi el jardin botanico por el lago',
    Rasgos: 'Es cafe con blanco',
    Imagen:
      'http://3.bp.blogspot.com/-XtqcDS3NACY/TyeEFEwPvKI/AAAAAAAAFA0/CPl8ilSKwCI/s200/Boxer+1.JPG',
  },
  {
    id: 12,
    Tipo: 'Perro',
    Nombre: 'NN',
    Observacion: 'Lo dejaron en una caja , con  dos piernas rotas',
    Ubicacion: 'Esta en la estacion del metro floresta',
    Rasgos: 'Tiene el pelo cafe con negro y ya esta algo  viejito',
    Imagen: 'http://cde.elcomercio.pe/66/ima/0/0/6/7/0/670997.jpg',
  },
  {
    id: 13,
    Tipo: 'Perro',
    Nombre: 'Toby',
    Observacion: 'Parece que tiene dueño por que esta muy bien ',
    Ubicacion: 'lo vi  por el exito de robledo',
    Rasgos: 'Es un perro criollo de color cafe de raza media',
    Imagen:
      'http://img.informador.com.mx/biblioteca/imagen/370x277/852/851252.jpg',
  },
  {
    id: 14,
    Tipo: 'Gato',
    Nombre: 'Tobias',
    Observacion: 'Para adopcion',
    Ubicacion: 'en la perla',
    Rasgos: 'Es un cachorro',
    Imagen:
      'http://g.cdn.ecn.cl/fenomenos-paranormales/files/2015/07/gatos-adivinos.jpg',
  },
  {
    id: 15,
    Tipo: 'Gato',
    Nombre: 'sin nombre',
    Observacion: 'Para dar en adopcion',
    Ubicacion: 'Esta en belen cerca al parque',
    Rasgos: 'Tiene apenas un mes de nacido',
    Imagen:
      'http://ecoosfera.com/wp-content/imagenes/0012-O-miado-dos-gatos-1-1024x480.jpg',
  },
  {
    id: 16,
    Tipo: 'Perro',
    Nombre: 'Kiko',
    Observacion: 'en adopcion',
    Ubicacion: 'Estoy en bello',
    Rasgos: 'Perro pitbull',
    Imagen: 'http://i58.photobucket.com/albums/g254/big-T1/pitbull_pup11.jpg',
  },
];
const animales = () => {
  let nombre = '';
  let tipo = '';
};
console.log(animalNames);
const add = (id) => {
  var nombre = ref();
  var tipo = ref();
  var imagen = ref();
  var mascota = ref([]);
  nombre.value = animalNames.find((animal) => animal.id === id).Nombre;
  tipo.value = animalNames.find((animal) => animal.id === id).Tipo;
  imagen.value = animalNames.find((animal) => animal.id === id).Imagen;
  mascota.value = {
    Nombre: nombre.value,
    Tipo: tipo.value,
    Imagen: imagen.value,
  };
  favoritoAnimales.value.push(mascota.value);
  console.log(favoritoAnimales.value);
  console.log(mascota.value);
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <h2 v-if="counter < 7" style="color: red">{{ counter }}</h2>
  <h2 v-else-if="counter === 7" style="color: blue">{{ letra }}</h2>
  <h2 v-else style="color: yellow">{{ counter }}</h2>
  id: 16, Tipo: 'Perro', Nombre: 'Kiko', Observacion: 'en adopcion', Ubicacion:
  'Estoy en bello', Rasgos: 'Perro pitbull', Imagen
  <button @click="contador">Contador</button>
  <ul class="row row-cols-1 row-cols-md-2 g-4">
    <li class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" v-for="items in animalNames">
      <div class="card p-0">
        <img v-bind:src="items.Imagen" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ items.Nombre }}</h5>
          <span> {{ items.Tipo }}</span>
          <p class="card-text">Observacion: {{ items.Observacion }}</p>
          <p class="card-text">Ubicacion: {{ items.Ubicacion }}</p>
          <p class="card-text">Rasgos: {{ items.Rasgos }}</p>
        </div>
        <div class="card-footer">
          <button
            @click="add(items.id)"
            class="btn btn btn-success"
          >
            Favorito
          </button>
        </div>
      </div>
    </li>
  </ul>
  <h3>My favorite</h3>
  <template v-for="item in favoritoAnimales">
    <div class="card" style="width: 18rem">
      <img v-bind:src="item.Imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.Nombre }}</h5>
        <p class="card-text">
          {{ item.Tipo }}
        </p>
        <div class="d-flex" style="justify-content: space-around">
          <a href="#" class="btn btn-danger">Eliminar</a>
          <a href="#" class="btn btn-warning">Modificar</a>
        </div>
      </div>
    </div>

    <hr />
  </template>
</template>
<section>
</section>

<style scoped>
  .col-md-6 {
    height: 33rem;
    list-style: none;
}
  .card {
    height: 32rem;
    max-height: 34rem;
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
</style>
