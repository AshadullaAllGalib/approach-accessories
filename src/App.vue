<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import { RouterView } from 'vue-router';
</script>
<template>
  <Navbar />
  <RouterView />
  <Footer />
  <BackToTop />
</template>
