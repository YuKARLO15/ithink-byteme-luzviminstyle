<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
//import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header></header>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
