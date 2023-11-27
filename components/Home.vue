<script setup>
import data from '../Data';
import { ref } from 'vue';
const valores = ref([]);
console.log(data.value);
const activeclass = ref('active carousel-item');
valores.value = data.value;
console.log(valores.value.map((item) => item));
</script>
<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(item, index) in valores"
        :key="index"
        :class="[index == 0 ? activeclass : 'carousel-item']"
        data-bs-interval="10000"
      >
        <img v-bind:src="item.Imagen" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.Nombre }}</h5>
          <p></p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
