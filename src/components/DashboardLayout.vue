<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
</script>

<template>
  <div class="flex h-screen bg-[#F4F7FE] font-roboto">
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-[#F4F7FE]">
        <div class="container mx-auto px-4 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
