

<template>
  
  <Splide :options="options" aria-label="My Favorite Images">
   
    <SplideSlide v-for="item in options.list.slice(0,5)" >
     
        <img v-bind:src="item.Imagen" alt="Sample 1" class="w-full object-cover h-[100%]">
      <div class="container absolute bottom-14">
        <h2 class=" text-white "  :style="{ 'font-size': fontSize + 'rem' }">{{item.Nombre}}</h2>
    
     </div>
    </SplideSlide>
  
  </Splide>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent,ref } from 'vue';
import data from '../Data';

//import SplideTrack from '@splidejs/vue-splide/src/js/components/SplideTrack/SplideTrack.vue';
export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
    
  },

  setup() {
    const datos=data.value;
    console.log(datos);
 
    const options = {
      type:'loop',
      autoplay:'playing',
      rewind: true,
      gap   : '1rem',
      list:data.value,
    };

    return { options };
    
  },
} );
</script>