<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="product">
    <div class="product-category">
      <div class="products">
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Woven Labels</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Printed Labels</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Hang Tags</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Garment Tape</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Leather Patch</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Hang Tag Strings</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Thermal Sticker</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Woven Patch</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Photo Inlay</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Brand Roll</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
        <div class="products-cards">
          <RouterLink :to="{ path: `/product/woven-details` }" class="products-cards_link">
            <h3>Draw String</h3>
            <img class="products-img" src="@/assets/images/woven.png" alt="" />
            <span>
              <p>Find More</p>
              <img class="arrow" src="@/assets/images/right-arrow.png" alt="" />
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 20px 0 40px 0;

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

            .arrow {}
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

@media (max-width: 1024px) {
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
