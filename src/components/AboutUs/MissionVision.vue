<template>
  <div class="text-image-content our-profile" data-aos="fade-up" data-aos-easing="linear"
    data-aos-duration="800">
    <div class="text">
      <div class="title">
        <h5>Our Vision</h5>
        <p>
          To be a leader in the Bangladeshi and Global Labels and Accessories industry by increasing
          customer base and be ranked amongst the top Labels and Accessories manufacturers in the
          world in terms of quality, service standards, and ultimate customer satisfaction.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <h5>Our Mission</h5>
        <p>
          To earn buyer's loyalty by understanding and satisfying their diversified demands we
          believe in an inspiration that us to stretch ourselves, to challenge the limits and
          overcome them. Our focus is on quality, operating efficiency, continued dedication to
          customer care, cost-effectiveness, innovation, and conformance to our values.
        </p>
      </div>
    </div>
    <div class="images">
      <img src="@/assets/images/earth.png" alt="">
      <img src="@/assets/images/earth1.png" alt="">
      <img src="@/assets/images/earth2.jpeg" alt="">
    </div>
    <!-- <div class="note">
      <p>
        CSR of Approach Accessories Ltd – A Commitment to Community

        Since its inception, Approach Accessories Ltd has been dedicated to uplifting the
        communities around us. Social responsibility is woven into the fabric of our brand,
        reflecting our belief in creating a meaningful impact. Guided by a philosophy of
        sustainability and compassion, we actively support initiatives that drive positive change in
        areas like poverty alleviation, education, women’s empowerment, and environmental
        preservation.

        Our 2024 CSR focus is on Safe Drinking Water, addressing the critical need for clean,
        arsenic-free water in underserved communities. Through this initiative, we aim to provide
        clean drinking water to over 50,000 individuals, reaffirming our commitment to a healthier,
        greener, and more equitable tomorrow. At Approach Accessories, we believe that supporting
        those in need is not just a responsibility—it’s a privilege.
      </p>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss" scoped>
.text-image-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  .text {
    flex-basis: calc(50% - 15px);

    h5 {
      font-size: 22px;
      font-weight: 600;
    }

    .seperator {
      margin: 25px 0;
      height: 5px;
      width: 100px;
      background-color: var(--color-primary);
    }
  }

  .images {
    flex-basis: calc(50% - 15px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px;

    img {
      width: 100%;
      border: 1px solid #33333342;

      &:nth-child(1) {
        grid-column: 1 / 5;
        grid-row: 1 / 5;
      }
    }
  }

  .note {
    flex-basis: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .text-image-content {
    gap: 15px;
    flex-direction: column;
  }
}
</style>
