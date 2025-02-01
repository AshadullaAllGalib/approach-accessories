<script setup>
import OurProducts from '../Products/OurProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Sewing Thread</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Sewing Thread</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High-Quality Sewing Threads for Professional Results.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Wide Range of Colors, Thicknesses, and Finishes.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Exceptional Strength and Durability for All Fabrics.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Smooth and Tangle-Free Performance.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly Materials and Manufacturing Processes.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Thread Options for Various Applications.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Suitable for Hand Sewing, Machine Sewing, and Industrial Use.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Heat, Shrink, and Fade Resistant for Long-Term Use.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Perfect for Fashion, Upholstery, and Specialized Applications.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/sewing-threads.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers high-quality sewing threads designed to deliver
          professional results across a wide range of applications. Our sewing threads come in
          various colors, thicknesses, and finishes, ensuring the perfect match for every project,
          from fashion apparel to upholstery and industrial use.
        </p>
        <br />
        <p>
          Our sewing threads are known for their exceptional strength, durability, and smooth
          performance. Manufactured using premium materials, they provide a tangle-free experience,
          ensuring seamless stitching even in high-speed machines. Available in cotton, polyester,
          nylon, and other specialty fibers, our threads are suitable for both hand and machine
          sewing. With eco-friendly options and strict quality control, our sewing threads meet the
          highest industry standards, providing reliability, consistency, and long-lasting results.
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
