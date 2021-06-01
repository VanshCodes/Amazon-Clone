<template>
  <div class="flex flex-col">
    <div class="flex bg-amazon_blue p-1 flex-grow py-2">
      <div
        id="logo"
        class="mt-2 m-2 flex items-center flex-grow sm:flex-grow-0"
      >
        <img
          width="150"
          height="40"
          class="object-contain cursor-pointer"
          :src="src"
          :alt="alt"
        />
      </div>

      <div
        id="search"
        class="hidden sm:flex h-8 mx-2 bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer"
      >
        <input
          class="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          type="text"
        />
        <SearchIcon width="34px" class="text-black my-1" />
      </div>
      <div id="rightnav" class="flex text-white items-center space-x-6 mx-6">
        <div class="link user">
          <h1>Hello VB</h1>
          <p class="font-extrabold">Account and Lists</p>
        </div>
        <div class="link order">
          Returns
          <p class="font-extrabold">& Orders</p>
        </div>
        <div class="link cart relative flex items-center">
          <span
            class="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full md:right-9 text-sm"
            >4</span
          >

          <ShoppingCartIcon class="w-10" />
          <p class="font-extrabold md:inline hidden">Cart</p>
        </div>
      </div>
    </div>
    <BottomNavigation />
  </div>
</template>

<script>
import { Header } from "@/assets/details";
import { SearchIcon, ShoppingCartIcon } from "@vue-hero-icons/outline";
import BottomNavigation from "./bottomnav.vue";
export default {
  components: { SearchIcon, ShoppingCartIcon, BottomNavigation },
  data() {
    let logo = Header.logo;
    return { ...logo };
  },
};
</script>

<style>
</style>