<template>
  <div class="carousel">
    <VSlickCarousel v-bind="settings">
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/woven-label.png" alt="Woven-label" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/cotton-printed-label.png" alt="label" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/sticker.png" alt="stickers" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/satin-label.png" alt="label" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/screen-label.png" alt="label" />
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br />With
            Approach Accessories Limited.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br />Labels are printed or manufactured by world
            renowned printing machines.
          </p>

          <RouterLink to="/product">View More</RouterLink>
        </div>

        <div class="slider-img">
          <img src="@/assets/images/products/hang-tag.png" alt="Hang-Tag" />
        </div>
      </div>

    </VSlickCarousel>
  </div>
</template>

<script setup>
import 'v-slick-carousel/style.css'
import { VSlickCarousel } from 'v-slick-carousel'
import { RouterLink } from 'vue-router'

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
              line-height: 23px;
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
