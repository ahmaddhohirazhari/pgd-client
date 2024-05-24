<template>
  <NavbarMenu />
  <SidebarMenu />
  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <!-- <router-view class="mt-[150px]" /> -->
    <div class="pe-11">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div class="grid grid-cols-3 gap-4 mb-4">
          <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">Total User</p>
          </div>
          <div class="flex items-center justify-center h-24 rounded bg-white-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
          </div>
          <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">Total Product</p>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">100 Member</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">............</p>
          </div>
          <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">100 Product</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from '../components/SidebarMenu.vue'
import NavbarMenu from '../components/NavbarMenu.vue'
</script>
