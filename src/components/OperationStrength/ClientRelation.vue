<script setup></script>
<template>
  <div class="text-image-content our-profile">
    <div class="images">
      <!-- <img src="@/assets/images/products/hang-tag.png" alt="">
      <img src="@/assets/images/products/screen-label.png" alt="">
      <img src="@/assets/images/products/hang-tag-string.png" alt=""> -->
      <img src="../../assets/images/products/woven-label.png" alt="">
      <img src="../../assets/images/products/screen-label.png" alt="">
      <img src="../../assets/images/products/gum-tape.png" alt="">
    </div>

    <div class="text">
      <div class="title">
        <p>
          At Approach Accessories Limited, we focus on understanding client needs through open
          communication and tailored solutions. Our process ensures we align with their vision,
          maintain transparency, and deliver innovative, high-quality results on time.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          We prioritize long-term relationships by offering continuous post-delivery support and
          staying flexible to adapt to evolving requirements. By fostering trust and collaboration,
          we help our clients achieve their goals seamlessly and effectively.
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.text-image-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  .text {
    flex-basis: calc(60% - 15px);

    .seperator {
      margin: 25px 0;
      height: 5px;
      width: 100px;
      background-color: var(--color-primary);
    }
  }

  .images {
    flex-basis: calc(40% - 15px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
