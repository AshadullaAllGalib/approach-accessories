<script setup>
import OurProducts from '../Products/OurProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Poly Bag</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Poly Bag</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Quality Poly Bags for Secure Packaging.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Sizes, Thicknesses, and Designs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly and Recyclable Materials Available.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable and Tear-Resistant for Reliable Protection.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Clear, Printed, or Opaque Options for Various Needs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Perfect for Apparel, Accessories, and Retail Packaging.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Waterproof and Dustproof for Maximum Protection.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Heat-Sealed Edges for Extra Durability.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/poly-bag.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers high-quality poly bags, designed to provide secure and
          protective packaging for a wide range of products. Our poly bags come in various sizes,
          thicknesses, and finishes, making them suitable for industries such as retail, e-commerce,
          apparel, and more.
        </p>
        <br />
        <p>
          Crafted from durable, tear-resistant materials, our poly bags offer reliable protection
          against dirt, moisture, and other environmental factors. We provide customizable options
          for branding, including clear or printed poly bags, to enhance your product’s
          presentation. With eco-friendly options available, our poly bags are also recyclable and
          meet industry standards for sustainability. Whether you need a standard size or a custom
          solution, we ensure fast production, high-quality materials, and consistent performance in
          every order.
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
        width: 370px;
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
