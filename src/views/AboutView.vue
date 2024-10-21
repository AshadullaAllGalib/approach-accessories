<script setup>
import Tab from '@/components/Tab.vue';
</script>

<template>
  <div class="about-banner">
    <div class="text">
      <h2>About Approach Accessories Ltd.</h2>
    </div>
  </div>
  <tab />
</template>

<style lang="scss" scoped>
.about-banner {
  width: 100%;
  background: var(--color-primary-dark);
  margin-top: 80px;

  .text {
    text-align: center;
    padding: 60px 0;

    h2 {
      font-size: 32px;
      font-weight: 600;
      color: #fff;
    }
  }
}

@media (max-width:768px) {
  .about-banner {
    margin-top: 70px;
  }
}
</style>
