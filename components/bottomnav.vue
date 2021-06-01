<template>
  <div
    class="flex bg-amazon_blue-light text-white items-center space-x-3 p-2 pl-6 text-sm"
  >
    <p class="flex link items-center text-white text-sm">
      <MenuIcon class="" />
      All
    </p>
    <p
      :key="index"
      v-for="(item, index) in navItems"
      class="link hidden lg:inline-flex"
    >
      {{ item }}
    </p>
  </div>
</template>

<script>
import { MenuIcon } from "@vue-hero-icons/outline";
import { bottomnav } from "~/assets/details";
export default {
  components: { MenuIcon },
  data() {
    const navItems = bottomnav.navItems;
    return { navItems };
  },
};
</script>

<style>
</style>