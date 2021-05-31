<template>
  <div class="flex bg-amazon_blue p-1 flex-grow py-2">
    <div id="logo" class="mt-2 flex items-center flex-grow sm:flex-grow-0">
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
        <p>Account and Lists</p>
      </div>
      <div class="link order">Returns & Orders</div>
      <div class="link cart">
        <ShoppingCartIcon class="w-10" />
        Cart
      </div>
    </div>
  </div>
</template>

<script>
import { Header } from "@/assets/details";
import { SearchIcon, ShoppingCartIcon } from "@vue-hero-icons/outline";

export default {
  components: { SearchIcon, ShoppingCartIcon },
  data() {
    let logo = Header.logo;
    return { ...logo };
  },
};
</script>

<style>
</style>