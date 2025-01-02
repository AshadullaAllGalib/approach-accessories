<template>
  <div class="carousel product-slider">
    <VSlickCarousel v-bind="settings">
      <div class="slider">
        <div class="slider-img">
          <img src="@/assets/images/slide.jpg" alt="" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-img">
          <img src="@/assets/images/slide2.png" alt="" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-img">
          <img src="@/assets/images/slide.jpg" alt="" />
        </div>
      </div>
    </VSlickCarousel>
  </div>
</template>

<script setup>
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'

const settings = {
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
}
</script>

<style lang="scss" scoped>
.carousel {
  background: #e8ecf0;
  margin-top: 80px;

  .v-slick-carousel {
    width: 100%;

    .v-slick-slider {
      .slider {
        &-img {
          img {
            width: 100%;
            height: 300px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .carousel {
    margin-top: 70px;

    .v-slick-carousel {
      .v-slick-slider {
        .slider {
          &-img {
            img {}
          }
        }
      }
    }
  }
}
</style>
