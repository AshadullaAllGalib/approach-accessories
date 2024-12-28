<template>
  <div class="products" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
    <div class="products-category">
      <div class="title">
        <h2>Our Products</h2>
        <p>We Provide and Supplies a wide range of garments accessories.</p>
        <OurProductsCard />
      </div>
    </div>

  </div>
</template>

<script setup>
import OurProductsCard from './OurProductsCard.vue'
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})

</script>

<style lang="scss" scoped>
.products {
  background: var(--vt-c-soft-green);
  padding: 20px 0 30px 0;

  &-category {
    width: 80%;
    margin: 0 auto;

    .title {
      text-align: center;
    }
  }


}
</style>
