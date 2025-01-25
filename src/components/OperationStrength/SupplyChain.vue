<script setup></script>
<template>
  <div class="text-image-content our-profile">
    <div class="images">
      <img src="@/assets/images/products/hang-tag.png" alt="">
      <img src="@/assets/images/products/hang-tag-string.png" alt="">
      <img src="@/assets/images/products/satin-label.png" alt="">
    </div>

    <div class="text">
      <div class="title">
        <p>
          Our supply chain management ensures efficient, reliable, and sustainable operations. From
          procurement to distribution, we optimize processes to reduce lead times, control costs,
          and maintain consistent quality. By integrating advanced planning tools, we streamline
          operations to meet client demands with precision.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          We prioritize strong partnerships with suppliers, fostering transparency and
          accountability while adhering to ethical and sustainable sourcing practices. Continuously
          adapting to market trends, we ensure flexibility and responsiveness, delivering
          exceptional service and products that align with client goals.
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
