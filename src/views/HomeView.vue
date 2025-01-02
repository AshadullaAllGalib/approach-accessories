<script setup>
import HomeSlider from '@/components/HomeSlider.vue';
import About from '@/components/AboutUs/About.vue';
import Achievement from '@/components/AboutUs/Achievement.vue';
import Sustainability from '@/components/AboutUs/Sustainability.vue';
import SortVideo from '@/components/Includes/SortVideo.vue'
import OurProducts from '@/components/Products/OurProducts.vue';
</script>

<template>
  <HomeSlider />
  <About />
  <Achievement />
  <Sustainability />
  <SortVideo />
  <OurProducts :limit="3" />
</template>

<style lang="scss" scoped></style>
