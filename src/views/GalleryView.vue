<script setup>
// import Gallery from '@/components/Gallery.vue';
import GalleryImage from '@/components/Gallery/GalleryImage.vue'
</script>

<template>
  <div class="banner">
    <img src="@/assets/images/banner/gallery-banner.jpg" alt="">
  </div>
  <!-- <Gallery /> -->

  <GalleryImage />
</template>

<style lang="scss" scoped>
.banner {
  padding-top: 80px;
  width: 100%;

  img {
    height: 300px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .banner {
    padding-top: 70px;
  }
}
</style>
