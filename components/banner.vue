<template>
  <div>
    <VueSlickCarousel :settings="settings">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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

