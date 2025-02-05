<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Carton</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>This carton carries the quality that we weave into your dreams.</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Speed Airjet Looms – Fast Production
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Ultrasonic Slitting – Soft, Clean Edges.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Skilled Technicians & Product Development Team.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistency.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Certified – Eco-Friendly & Safe.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Advanced Weaving – Crisp & Detailed Designs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Precise and Clean Edges with Ultrasonic Slitting.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable, Premium Quality.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistent Results.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Fast and Efficient Production Process.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/carton.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited provides high-quality cartons designed for secure packaging
          and reliable shipping. Understanding the importance of protecting valuable goods, they
          utilize durable materials and expert construction techniques to create cartons that
          withstand the rigors of transit and storage. Their cartons are engineered to provide
          superior crush resistance and impact protection, ensuring that products arrive at their
          destination in pristine condition. Approach Accessories Limited offers a range of carton
          sizes and styles to meet diverse packaging needs, from individual product boxes to bulk
          shipping containers.
        </p>
      </div>
    </div>
  </section>
  <OurProducts :limit="3" showButton="true" />
  <OutSourcingProducts :limit="3" showButton="true" />
</template>

<style lang="scss" scoped>
.product-details {
  width: 80%;
  margin: 0 auto;
  padding: 120px 0 20px 0;

  .title {
    text-align: center;
  }

  .details {
    padding-top: 25px;
    position: relative;

    &-left {
      width: 80%;
      background-image: linear-gradient(to right,
          #00854d 0%,
          #275769 0%,
          #b8cbb8 0%,
          #0262a1 30%,
          #135031 64%,
          #065346 100%);
      padding: 20px 40px 40px 40px;

      .left-title {
        background: var(--vt-c-indigo);
        padding: 15px;
        text-align: center;
        box-shadow: 0 0 10px;

        h3 {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
        }
      }

      ul {
        padding: 40px 0 0 0;
        list-style: none;

        li {
          font-size: 15px;
          padding-bottom: 10px;
          color: #fcfcfc;

          i {
            margin-right: 10px;
          }
        }
      }
    }

    &-right {
      position: absolute;
      top: 18%;
      right: 0;
      background-color: #ffffff;
      box-shadow: 0 0 10px;
      border-radius: 5px;

      img {
        width: 380px;
        padding: 30px;
      }
    }

    .description {
      padding-top: 30px;
    }
  }
}

@media (max-width: 1024px) {
  .product-details {
    padding: 100px 0 40px 0;

    .details {
      padding-top: 15px;

      &-left {
        width: auto;
        padding: 10px;

        .left-title {
          background: rgb(9, 77, 133);
          padding: 10px;
          text-align: center;

          h3 {
            font-size: 16px;
          }
        }

        ul {
          padding: 20px 0 0 0;

          li {
            font-size: 12px;

            i {}
          }
        }
      }

      &-right {
        display: none;

        img {}
      }

      .description {
        padding-top: 20px;

        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
