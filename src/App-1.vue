<template>
  <NavbarMenu />
  <SidebarMenu
    :class="{
      hidden:
        $route.path === '/user/' + $route.params.id ||
        $route.path === '/customer/' + $route.params.id ||
        $route.path === '/customer/create' ||
        $route.path === '/user/create'
    }"
  />

  <div class="flex justify-between flex-col gap-[130px] p-4 sm:ml-64">
    <router-view class="mt-[150px]" />
  </div>
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue'
import NavbarMenu from './components/NavbarMenu.vue'
</script>
