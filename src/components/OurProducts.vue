<template>
  <div class="product">
    <div class="product-category">
      <div class="title">
        <h2>Our Products</h2>
        <p>We Provide and Supplies a wide range of accessories</p>
      </div>

      <div class="products">
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>
        <div class="products-cards">
          <a class="products-cards_link" href="#">
            <h3>Woven Labels</h3>
            <img class="products-img" src="../assets/images/woven.png" alt="">
            <span>
              <p>Find More</p>
              <img class="arrow" src="../assets/images/right-arrow.png" alt="">
            </span>
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.product {
  background: #e8ecf0;
  padding: 30px 0 60px 0;

  &-category {
    width: 80%;
    margin: 0 auto;

    .title {
      text-align: center;
      padding-bottom: 20px;
    }

    .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding-top: 20px;

      &-cards {
        background: var(--vt-c-white);
        width: 34%;
        flex-basis: calc(34% - 30px);
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
            transition: all ease-in-out .3s;

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
