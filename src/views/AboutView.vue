<script setup>
import About from '@/components/AboutUs/About.vue';
import AboutTab from '@/components/AboutUs/AboutTab.vue'
</script>

<template>
  <div class="about-banner">
    <div class="banner">
      <div class="text">
        <h2>About Approach Accessories Ltd.</h2>
      </div>
    </div>
  </div>
  <About />
  <AboutTab />
</template>

<style lang="scss" scoped>
.about-banner {
  width: 100%;
  margin-top: 80px;

  .banner {
    background-image: url(../assets/images/banner/about-banner.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .text {
      text-align: center;
      padding: 150px 0;
      background-color: var(--vt-c-neviblue-blur);

      h2 {
        font-size: 32px;
        font-weight: 600;
        // color: var(--vt-c-dark-green);
        color: var(--vt-c-white);
      }
    }
  }
}

@media (max-width: 768px) {
  .about-banner {
    margin-top: 70px;
  }
}
</style>
