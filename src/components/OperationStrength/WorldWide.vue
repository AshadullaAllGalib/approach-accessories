<template>
  <div class="text-image-content our-profile">
    <div class="images">
      <img src="@/assets/images/earth.png" alt="">
      <img src="@/assets/images/earth1.png" alt="">
      <img src="@/assets/images/earth2.jpeg" alt="">
    </div>

    <div class="text">
      <div class="title">
        <p>
          Approach Accessories Ltd. Operates on a global scale, ensuring seamless services and
          solutions across diverse markets. With a robust network and efficient logistics, we
          deliver high-quality products and services to clients worldwide, adhering to local and
          international standards.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          Our commitment to innovation, adaptability, and excellence enables us to navigate the
          complexities of global operations while fostering strong partnerships. We leverage
          advanced technologies to optimize logistics, ensure transparency, and promote
          sustainability. By embracing cultural diversity and adhering to regional regulations, we
          build strong relationships with stakeholders worldwide. This dedication to innovation and
          excellence ensures exceptional service and value for our clients across the globe
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
