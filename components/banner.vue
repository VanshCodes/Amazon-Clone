<template>
  <div>
    <VueSlickCarousel :settings="settings">
      <img class="w-10 object-contain" :key="i" v-for="i in Array(4)" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" alt="">
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { settings } from "@/assets/details";
export default {
  components: { VueSlickCarousel },
  data() {
    return { settings };
  },
};
</script> 

