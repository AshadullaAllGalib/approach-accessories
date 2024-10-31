<script setup>
import Navbar from './components/Includes/Navbar.vue'
import Footer from './components/Includes/Footer.vue'
import BackToTop from './components/Includes/BackToTop.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <Navbar />
  <RouterView />
  <Footer />
  <BackToTop />
</template>
