<script setup>
import OurProducts from '../Products/OurProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Gum Tape</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Gum Tape</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Quality Gum Tape for Secure Packaging.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strong Adhesive for Reliable Sealing.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly and Recyclable Materials.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Widths, Lengths, and Branding Options.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable and Tear-Resistant for Heavy-Duty Applications.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Water-Activated Adhesive for Enhanced Bond Strength.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Perfect for Corrugated Boxes, Cartons, and E-Commerce Packaging.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Printed Gum Tapes for Professional Branding.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Sustainable, Cost-Effective Packaging Solution.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/gum-tape.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers high-quality gum tape, designed to provide a secure
          and reliable solution for packaging and sealing. Our gum tape is available in various
          sizes and thicknesses, making it ideal for use in industries such as e-commerce,
          logistics, and retail packaging.
        </p>
        <br />
        <p>
          Crafted with a strong, water-activated adhesive, our gum tape ensures a tight seal that
          holds up under various conditions. It is perfect for sealing corrugated boxes, cartons,
          and other packaging materials. With eco-friendly and recyclable options, our gum tape
          supports sustainable packaging practices. We also offer customizable printed gum tape,
          allowing you to enhance your brand’s visibility while securing your packages. With fast
          production and strict quality control, our gum tape provides a durable, professional, and
          cost-effective packaging solution.
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
      padding: 20px;

      img {
        width: 400px;
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
