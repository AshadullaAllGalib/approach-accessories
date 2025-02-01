<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Screen Print Label</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Screen Print Label</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Precision Screen Printing - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Smooth, Durable Finish for High-Quality Screen Print Labels.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Highly Skilled Technicians & Product Development Team.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Exceptional Color Accuracy with Long-Lasting Inks.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Designs, Sizes, and Textures.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly Adhesives & Sustainable Materials.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Advanced Technology for Sharp and Clear Printing.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Soft and Flexible Labels with a Premium Feel.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable, Fade-Resistant Prints for Long-Term Use.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Creative Sticker Solutions Tailored to Your Branding Needs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/screen-label.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited specializes in high-quality screen print labels, perfect for
          a wide range of products and industries. Our screen printing process ensures sharp,
          vibrant prints that provide exceptional visibility and branding impact on various
          materials, including fabric, garments, packaging, and more.
        </p>
        <br />
        <p>
          Using advanced printing techniques and eco-friendly inks, we offer durable, fade-resistant
          screen print labels that maintain their quality over time. We provide customizable options
          for sizes, colors, and finishes, ensuring a perfect match for your branding needs. With
          our precision printing technology and strict quality control standards, we guarantee
          consistent results, fast production, and reliable delivery. Our labels are ideal for
          businesses looking for cost-effective, high-quality solutions for branding and product
          identification.
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
        width: 440px;
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
