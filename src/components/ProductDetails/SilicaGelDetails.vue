<script setup>
import OurProducts from '../Products/OurProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Silica Gel</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Silica Gel</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Quality Silica Gel for Moisture Absorption.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Protects Products from Humidity and Mold.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Available in Various Sizes and Packaging Options.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Non-Toxic, Eco-Friendly, and Safe for Use.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Perfect for Electronics, Garments, Leather Goods, and Food Packaging.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Packets for Specific Applications.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Long-Lasting Absorption Capacity.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Meets Industry Standards for Quality and Safety.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Compact and Lightweight for Convenient Use.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/silica-gel.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers high-quality silica gel packets designed to protect
          products from moisture, mold, and humidity. Our silica gel is available in a variety of
          sizes and packaging options, making it ideal for use in a wide range of industries,
          including electronics, apparel, leather goods, and food packaging.
        </p>
        <br />
        <p>
          Our silica gel products are non-toxic, eco-friendly, and safe for use, ensuring the
          protection of your valuable items while maintaining environmental responsibility. With
          excellent moisture absorption capacity, our silica gel packets help extend the shelf life
          of products by maintaining optimal humidity levels. Whether you need customized packaging
          or bulk orders, our silica gel is carefully manufactured to meet the highest quality
          standards, providing effective and reliable moisture control solutions.
        </p>
      </div>
    </div>
  </section>
  <OurProducts :limit="6" showButton="true" />
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
        width: 470px;
        height: 390px;
      }
    }

    .description {
      padding-top: 30px;

      p {
        font-size: 15px;
        color: #343434;
      }
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
