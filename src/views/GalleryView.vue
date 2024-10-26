<script setup>
</script>

<template>
  <div class="banner">
    <img src="../assets/images/banner.jpeg" alt="Banner">
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding-top: 80px;
  width: 100%;

  img {
    height: 150px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .banner {
    padding-top: 70px;
  }
}
</style>
