<template>
  <RouterLink to="/about" class="member-card" data-aos="fade-up" data-aos-easing="linear"
    data-aos-duration="800">
    <div class="image">
      <img alt="main logo" src="@/assets/images/dummy-member.jpg" />
    </div>
    <div class="caption">
      <h5 class="name">John Doe</h5>
      <p class="designation">Chairman</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss" scoped>
.member-card {
  flex-basis: calc((100% - 90px) / 4);
  background-color: aquamarine;
  position: relative;
  overflow: hidden;

  &:hover {
    .image {
      transform: scale(1.1);
    }
  }

  .image {
    width: 100%;
    transition: all 0.5s;

    img {
      display: block;
      width: 100%;
    }
  }

  .caption {
    background: rgba(16, 89, 122, 0.8);
    color: var(--vt-c-white);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    text-align: center;

    .name {
      color: inherit;
      font-size: 18px;
      font-weight: 500;
    }

    .designation {
      color: inherit;
      font-size: 14px;
      font-weight: 300;
    }
  }
}
</style>
