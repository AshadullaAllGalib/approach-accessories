<script setup>
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue';

const settings = {
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
}
defineProps({
  showButton: {
    type: Boolean,
    default: false,
  },
});

// Import images explicitly
import wovenLabel from '@/assets/images/products/woven-label.png';
import printedLabel from '@/assets/images/products/cotton-printed-label.png';
import sticker from '@/assets/images/products/sticker.png';
import satinLabel from '@/assets/images/products/satin-label.png';
import screenLabel from '@/assets/images/products/screen-label.png';
import hangTag from '@/assets/images/products/hang-tag.png';
import hangTagStringImage from '@/assets/images/products/hang-tag-string.png';
import sewingThread from '@/assets/images/products/sewing-threads.png';
import polyBag from '@/assets/images/products/poly-bag.png';
import gumTape from '@/assets/images/products/gum-tape.png';
import silicaGel from '@/assets/images/products/silica-gel.png';

// slider data
const sliders = [
  {
    title: 'Approach Accessories Limited is leading in both printed and woven labels  manufacturing.Labels are printed or manufactured by world renowned printing machines.', img: wovenLabel
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of cotton printed labels.Our labels are produced using world- renowned printing machines, ensuring superior quality and precision.', img: printedLabel
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of high-quality stickers. Our stickers are produced using world-renowned printing machines, ensuring exceptional quality and precision.', img: sticker
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of satin labels. Our labels are crafted using world-renowned printing machines, ensuring exceptional quality and precision.', img: satinLabel

  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of screen-printed labels. Our labels are produced using advanced printing technology, ensuring outstanding quality and precision.', img: screenLabel
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of premium hang tags. Our hang tags are crafted using world-renowned printing machines, ensuring exceptional quality and attention to detail.', img: hangTag
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of high-quality hang tag strings. Our strings are designed with precision and crafted to complement our premium hang tags, ensuring durability and elegance.', img: hangTagStringImage
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of high-quality sewing threads. Our threads are crafted with precision and durability, meeting the highest standards for all your stitching needs.', img: sewingThread
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of high-quality poly bags. Our poly bags are designed with precision and durability, ensuring reliable packaging solutions for a variety of needs.', img: polyBag
  },
  {
    title: 'Approach Accessories Limited is a leader in the manufacturing of high-quality gum tapes. Our gum tapes are crafted with superior adhesion and durability, providing reliable solutions for all your packaging needs.', img: gumTape
  },
  {
    title: 'Approach Accessories is a leader in the manufacturing of premium silica gel. Our silica gel is produced to the highest standards, ensuring effective moisture control and protection for a wide range of products.', img: silicaGel

  },
];
</script>

<template>
  <div class="carousel">
    <VSlickCarousel v-bind="settings">
      <div v-for="(slider, index) in sliders.slice(0, limit || sliders.length)" :key="index"
        class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>
          <p>
            {{ slider.title }}
          </p>
          <RouterLink v-if="showButton" to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img :src="slider.img" alt="Images" />
        </div>
      </div>
    </VSlickCarousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  background: #e8ecf0;
  margin-top: 80px;

  .v-slick-carousel {
    width: 80%;
    margin: 0 auto;

    .v-slick-slider {
      .slider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;

        &-text {
          h3 {
            font-size: 36px;
            line-height: 43px;
            color: var(--vt-c-dark-green);
            padding-bottom: 15px;

            span {
              color: var(--vt-c-light-green);
            }
          }

          p {
            font-size: 16px;
            line-height: 22px;
            color: var(--vt-c-black);
            padding-bottom: 25px;
          }

          a {
            background: var(--vt-c-light-green);
            padding: 12px 22px;
            border-radius: 5px;
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            transition: all ease-in-out 0.3s;

            &:hover {
              // transform: scale(1.5);
              background: var(--vt-c-dark-green);
            }
          }
        }

        &-img {
          img {
            width: 410px;
            height: 400px;
            padding-top: 15px;
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
      padding-top: 30px;

      .v-slick-slider {
        .slider {
          flex-direction: column;

          &-text {
            h3 {
              font-size: 24px;
              line-height: 28px;
              padding-bottom: 10px;
            }

            p {
              font-size: 14px;
              line-height: 17px;
              padding-bottom: 20px;
            }

            a {
              padding: 10px 20px;
              font-size: 14px;
            }
          }

          &-img {
            img {
              width: 350px;
              height: 350px;
              padding: 0 15px 15px 15px;
            }
          }
        }
      }
    }
  }
}
</style>
