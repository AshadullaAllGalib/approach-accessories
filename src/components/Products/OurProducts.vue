<script setup>
// import OurProductsCard from './OurProductsCard.vue'
import { RouterLink } from 'vue-router';
import { onMounted, defineProps } from 'vue';
import AOS from "aos";

// Import images explicitly
import wovenLabel from '@/assets/images/products/woven-label.png';
import printedLabel from '@/assets/images/products/cotton-printed-label.png';
import sticker from '@/assets/images/products/sticker.png';
import satinLabel from '@/assets/images/products/satin-label.png';


import printedImage from '@/assets/images/printed-label.png';
import hangTagImage from '@/assets/images/hang-tag.png';
import hangTagStringImage from '@/assets/images/hang-tag-string.png';

// Prop to limit the number of cards
defineProps({
  limit: {
    type: Number,
    default: null, // Default is no limit
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  AOS.init();
})

// Cards data
const cards = [
  { path: '/product/woven-labels', title: 'Woven Labels', img: wovenLabel },
  { path: '/product/cotton-printing-labels', title: 'Cotton Printing Labels', img: printedLabel },
  { path: '/product/Stickers', title: 'Stickers', img: sticker },
  { path: '/product/garment-tape', title: 'Satin Printing Labels', img: satinLabel },

  { path: '/product/leather-patch', title: 'Leather Patch', img: wovenLabel },
  { path: '/product/hang-tag-string', title: 'Hang Tag Strings', img: hangTagStringImage },
  { path: '/product/thermal-sticker', title: 'Thermal Sticker', img: printedImage },
  { path: '/product/woven-patch', title: 'Woven Patch', img: wovenLabel },
  { path: '/product/photo-inlay', title: 'Photo Inlay', img: hangTagStringImage },
  { path: '/product/brand-roll', title: 'Brand Roll', img: printedImage },
  { path: '/product/draw-string', title: 'Draw String', img: hangTagImage },
];

</script>
<template>
  <div class="products" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
    <div class="products-category">
      <div class="title">
        <h2>Our Products</h2>
        <p>We Provide and Supplies a wide range of garments accessories.</p>
        <!-- <OurProductsCard /> -->
      </div>

      <div class="product" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
        <div class="product-category">
          <div class="products">
            <div v-for="(card, index) in cards.slice(0, limit || cards.length)" :key="index"
              class="products-cards">
              <RouterLink :to="{ path: card.path }" class="products-cards_link">
                <h3>{{ card.title }}</h3>
                <img class="products-img" :src="card.img" alt="" />
                <span>
                  <p>Find More</p>
                  <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <RouterLink v-if="showButton" to="/product" class="show-button">
      <h3>View More</h3>
    </RouterLink>

  </div>
</template>



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

    .product {
      padding: 20px 0 5px 0;

      &-category {
        margin: 0 auto;

        .products {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 30px;
          padding-top: 20px;

          &-cards {
            background: var(--vt-c-white);
            width: 33%;
            flex-basis: calc(33% - 20px);
            height: 350px;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px;
            position: relative;

            &_link {
              text-decoration: none;

              h3 {
                font-size: 22px;
                color: var(--vt-c-neviblue-dark);
                position: absolute;
              }

              .products-img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 300px;
                transition: all ease-in-out 0.3s;

                &:hover {
                  width: 310px;
                }
              }

              span {
                position: absolute;
                right: 20px;
                bottom: 20px;
                display: flex;
                align-items: center;
                gap: 5px;

                p {
                  font-size: 16px;
                  color: var(--vt-c-neviblue-dark);
                }
              }

              &:hover {
                span {
                  .arrow {
                    animation: arrow 1s ease-in-out infinite;
                  }
                }
              }
            }
          }
        }
      }
    }

  }

  .show-button {
    display: block;
    text-decoration: none;
    background-color: var(--vt-c-light-green);
    width: 155px;
    margin: 0 auto;
    padding: 5px 0;
    border-radius: 10px;
    transition: all ease-in-out .3s;

    h3 {
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: var(--vt-c-white);
    }
  }

  &:hover {
    .show-button {
      background-color: var(--vt-c-neviblue-dark);
      transform: scale(1.05);
    }
  }
}

@media (max-width: 1024px) {
  .products {
    &-category {
      .product {
        &-category {
          .products {
            flex-direction: column;

            &-cards {
              width: 100%;
              flex-basis: auto;
            }
          }
        }
      }
    }
  }
}

@keyframes arrow {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}
</style>
