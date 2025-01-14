<script setup>
import HomeSlider from '@/components/Home/HomeSlider.vue';
import About from '@/components/AboutUs/About.vue';
import AboutQualityText from '@/components/Home/AboutQualityText.vue';
import Achievement from '@/components/Home/Achievement.vue';
import Sustainability from '@/components/Home/Sustainability.vue';
// import SortVideo from '@/components/Includes/SortVideo.vue'
import OurProducts from '@/components/Products/OurProducts.vue';
</script>

<template>
  <HomeSlider />
  <About />
  <AboutQualityText />
  <Achievement />
  <Sustainability />
  <!-- <SortVideo /> -->
  <OurProducts :limit="6" showButton="true" />
</template>

<style lang="scss" scoped></style>
