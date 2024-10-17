<template>
  <div class="carousel">
    <VSlickCarousel v-bind="settings">
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br>With Approach Accessories.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br>Labels
            are printed or manufactured by world renowned printing machines.
          </p>

          <a href="#">View More</a>

        </div>

        <div class="slider-img">
          <img src="../assets/images/woven.png" alt="">
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br>With Approach Accessories.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br>Labels
            are printed or manufactured by world renowned printing machines.
          </p>

          <a href="#">View More</a>

        </div>

        <div class="slider-img">
          <img src="../assets/images/woven.png" alt="">
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br>With Approach Accessories.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br>Labels
            are printed or manufactured by world renowned printing machines.
          </p>

          <a href="#">View More</a>

        </div>

        <div class="slider-img">
          <img src="../assets/images/woven.png" alt="">
        </div>
      </div>
      <div class="slider">
        <div class="slider-text">
          <h3>
            <Span>Finishing Your Garments Professionally</Span> <br>With Approach Accessories.
          </h3>

          <p>
            Approach Accessories is leading in both printed and woven labels
            manufacturing.<br>Labels
            are printed or manufactured by world renowned printing machines.
          </p>

          <a href="#">View More</a>

        </div>

        <div class="slider-img">
          <img src="../assets/images/woven.png" alt="">
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
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
}
</script>

<style lang="scss" scoped>
.carousel {
  background: #e8ecf0;

  .v-slick-carousel {
    width: 90%;
    margin: 0 auto;

    .v-slick-slider {
      .slider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;

        &-text {
          h3 {
            font-size: 40px;
            line-height: 43px;
            color: #343434;
            padding-bottom: 15px;

            span {
              color: rgb(33, 81, 145);
            }
          }

          p {
            font-size: 16px;
            line-height: 22px;
            color: #343434;
            padding-bottom: 25px;
          }

          a {
            background: rgb(74, 134, 190);
            padding: 12px 22px;
            border-radius: 5px;
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            transition: all ease-in-out .3s;

            &:hover {
              // transform: scale(1.5);
              background: rgb(22, 83, 139);
            }
          }
        }

        &-img {
          img {
            width: 550px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .carousel {

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
              padding: 0 15px 15px 15px;
            }
          }
        }
      }
    }
  }
}
</style>
