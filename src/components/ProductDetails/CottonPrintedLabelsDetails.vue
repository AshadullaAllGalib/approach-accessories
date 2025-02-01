<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Cotton Printing Labels</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Cotton Printing Labels</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Speed Printing Machines - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Precision Cutting - Clean Edge Cotton Label Requirements.
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
            High-Speed Printing Machines - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly Inks and Sustainable Cotton Fabrics.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Advanced Technology for Sharp, Crisp Print Quality.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customization Options for Different Label Sizes & Designs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Fast and Flexible Order Fulfillment.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Innovative Label Solutions Tailored to Your Brand Needs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control Measures for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/cotton-printed-label.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited specializes in high-quality cotton printing labels, designed
          for a wide range of products in the fashion, apparel, and accessories industries. Our
          cotton labels offer a natural, soft feel, making them the perfect choice for brands
          seeking a premium, eco-friendly solution.
        </p>
        <br />
        <p>
          Using advanced printing techniques, we ensure vibrant, long-lasting designs that maintain
          their quality even after multiple washes. Our cotton printing labels are available in
          various sizes and shapes, with options for custom branding, logos, and care instructions.
          With eco-friendly ink options and a focus on sustainability, our cotton labels not only
          provide a durable solution but also align with environmentally conscious practices.
          Whether you need small or large orders, we ensure consistent quality, fast production, and
          reliable delivery.
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
      background-color: #f8fcfa;
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
