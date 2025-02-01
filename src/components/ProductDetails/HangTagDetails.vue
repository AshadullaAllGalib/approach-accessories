<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Hang Tag</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Hang Tag</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Quality Printing - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Highly Skilled Technicians & Product Development Team.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Exceptional Color Accuracy through Advanced Printing Technology.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly and Recyclable Materials.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Wide Range of Finishes: Matte, Glossy, Embossed, and Foiled.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable and Tear-Resistant Tags.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Custom Shapes, Sizes, and Die-Cut Options.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Elegant and Eye-Catching Designs for Premium Branding.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control for Consistent and Professional Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/hang-tag.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers high-quality hang tags, designed to provide an elegant
          and professional touch to your products. Our hang tags come in a variety of shapes, sizes,
          and finishes, making them ideal for industries such as fashion, retail, and luxury goods.
        </p>
        <br />
        <p>
          Made from premium materials, our hang tags are durable, tear-resistant, and can be fully
          customized to feature your brand’s logo, product details, or promotional messaging. We
          offer different finishes, including matte, glossy, embossed, and foil stamping, allowing
          you to create a distinctive look for your brand. With fast production times and strict
          quality control, our hang tags ensure consistent results, offering a perfect combination
          of style and functionality to elevate your product packaging.
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
      padding: 10px;

      img {
        width: 500px;
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
