<script setup>
import OurProducts from '../Products/OurProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Stickers</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Stickers</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Speed Sticker Printing Machines - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Precision Cutting - Clean Edge Sticker Requirements.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Highly Skilled Technicians & Product Development Team.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Exceptional Color Accuracy through Advanced Spectrophotometer Measuring.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Fast and Flexible Order Fulfillment.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly Adhesives & Sustainable Materials.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Advanced Technology for Sharp, Crisp Print Quality.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Sticker Sizes, Shapes, and Finishes.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable, Waterproof, and Scratch-Resistant Stickers.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Creative Sticker Solutions Tailored to Your Branding Needs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control Measures for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/sticker.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers premium quality stickers, designed to meet diverse
          branding and packaging needs. Our stickers come in a variety of sizes, shapes, and
          finishes, making them perfect for a wide range of applications, from product labeling to
          promotional use.
        </p>
        <br />
        <p>
          Our sticker production process is powered by cutting-edge printing technology that ensures
          vibrant colors, sharp details, and long-lasting adhesion. We offer eco-friendly materials
          and sustainable printing options to meet the growing demand for environmentally conscious
          products. With options like matte, glossy, transparent, and embossed finishes, our
          stickers provide a professional, high-quality solution for your branding needs. Whether
          you need custom designs, bulk orders, or quick turnaround times, our team ensures
          consistent results and exceptional customer satisfaction.
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
