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
            High Speed Airjet Looms - Reduced Lead Time/Booking
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Ultrasonic Slitting - Soft Edge Woven Requirements.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Skilled Technicians & Product Development Team
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Color Accuracy through spectrophotometer measuring
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Speed Airjet Looms - Reduced Lead Time/Booking
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Ultrasonic Slitting - Soft Edge Woven Requirements.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Skilled Technicians & Product Development Team
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            High Color Accuracy through spectrophotometer measuring
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Oeko-Tex® Standard 100 Certified.
          </li>
          <li>
            <i class="pi pi-spin pi-cog"></i>
            Ultrasonic Slitting - Soft Edge Woven Requirements.
          </li>
        </ul>
      </div>
      <div class="details-right">
        <img src="../../assets/images/products/silica-gel.png" alt="">
      </div>
      <div class="description">
        <p>
          Approach Accessories has state of the art Infrastructure woven and
          printed fabric label production facilities with a dedicated production
          plant..
        </p>
        <br />
        <p>
          Our woven label production unit equipped with the advanced CAD
          capabilities and latest technology machines ranging from air jets, to
          needle looms, ultrasonic slit, and cut-fold machines. Approach
          Accessories specialize in high quality damask labels, taffeta, and
          satin labels of all kinds utilizing high performance German and
          Italian weaving looms. We create clothing which are designed to have
          exquisite quality like high definition micro filament, polyester and
          satin broad loom soft woven labels, satin needle loom woven edge
          labels, and the super fine woven label with 50 denier yarns.
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
