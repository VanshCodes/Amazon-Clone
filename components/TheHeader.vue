<template>
  <div class="flex bg-amazon_blue p-1 flex-grow py-2">
    <div class="mt-2 flex items-center flex-grow sm:flex-grow-0">
      <img
        width="150"
        height="40"
        class="object-contain cursor-pointer"
        :src="src"
        :alt="alt"
      />
    </div>
    <div class="flex h-8">
      <input type="text" />
      <SearchIcon class="h-4 p-4 text-white" />
    </div>
  </div>
</template>

<script>
import { Header } from "@/assets/details";
import { SearchIcon } from "@vue-hero-icons/outline";

export default {
  components: { SearchIcon },
  data() {
    let logo = Header.logo;
    return { ...logo };
  },
};
</script>

<style>
</style>