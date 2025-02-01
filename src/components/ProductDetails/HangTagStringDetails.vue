<script setup>
import OurProducts from '../Products/OurProducts.vue';
import OutSourcingProducts from '../Products/OutSourcingProducts.vue';
</script>

<template>
  <section class="product-details">
    <div class="title">
      <h2>Hang Tag Strings</h2>
    </div>
    <div class="details">
      <div class="details-left">
        <div class="left-title">
          <h3>We weave your dreams on our fine Hang Tag Strings</h3>
        </div>
        <ul>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Premium Quality Strings for Hang Tags.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Customizable Lengths, Colors, and Styles.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Eco-Friendly and Sustainable Materials.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Wide Range of Options: Cotton, Polyester, Jute, and Elastic Strings.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Metallic and Plastic Seal Ends for Secure Attachment.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Highly Durable and Tear-Resistant Designs.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Fast and Reliable Production with Reduced Lead Time.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Suitable for Various Industries: Fashion, Accessories, and More.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Enhance Your Hang Tags with Stylish and Functional Strings.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/hang-tag-string.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories Limited offers premium-quality hang tag strings, designed to enhance
          the presentation and functionality of your products. Our hang tag strings come in various
          materials, including cotton, polyester, jute, and elastic, with customizable lengths,
          colors, and finishes to suit your brand’s needs.
        </p>
        <br />
        <p>
          Crafted for durability and style, our hang tag strings are ideal for use in fashion,
          retail, and accessories packaging. They are designed to securely attach tags to your
          products while providing a professional, high-end look. With options for metal or plastic
          seal ends, our hang tag strings offer strength and reliability. Whether you need bulk
          orders or custom designs, we ensure fast production, high-quality materials, and
          consistent performance for every product.
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
