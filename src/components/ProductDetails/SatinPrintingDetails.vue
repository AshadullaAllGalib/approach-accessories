<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Satin Printing Labels</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Satin Printing Labels</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Speed Printing Machines - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Precision Cutting - Smooth Edge Satin Label Requirements.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Speed Printing Machines - Reduced Lead Time/Booking.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Soft and Luxurious Satin Material for Premium Labels.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Advanced Technology for Sharp, Crisp Print Quality.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Designs, Sizes, and Finishes.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly Inks and Sustainable Satin Fabrics.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Innovative Label Solutions Tailored to Your Brand Needs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Durable Labels with a Soft, Non-Irritating Texture.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Strict Quality Control Measures for Consistent Results.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/satin-label.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited specializes in high-quality satin printing labels, providing
          a premium solution for branding and product identification. Our satin labels offer a
          luxurious feel and a smooth finish, making them ideal for high-end fashion, accessories,
          and specialty products.
        </p>
        <br />
        <p>
          Utilizing advanced printing technology and eco-friendly inks, we create vibrant,
          long-lasting prints on soft satin fabric that maintain clarity and color vibrancy over
          time. We offer customizable options for sizes, shapes, and finishes, including satin with
          matte, glossy, or embossed effects. With precision printing and strict quality control
          measures, our satin labels provide a high-quality, durable solution that adds a touch of
          elegance to any product. Whether you need small or large batches, we ensure fast
          production and reliable delivery.
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
