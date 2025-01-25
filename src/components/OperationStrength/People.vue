<template>
  <div class="text-image-content our-profile">
    <div class="images">
      <img src="../../assets/images/machines/machine19.jpg" alt="">
      <img src="../../assets/images/machines/machine17.jpg" alt="">
      <img src="../../assets/images/machines/machine18.jpg" alt="">
    </div>

    <div class="text">
      <div class="title">
        <p>
          Our people are our greatest asset. We are committed to fostering a supportive, inclusive,
          and growth-oriented workplace where every individual is valued and empowered to excel.
          Through collaboration, innovation, and mutual respect, we cultivate a dynamic team that
          drives our success.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          At Approach Accessories Limited, people love what they do! When you’re truly passionate
          about your work, it naturally reflects in everything you do. Our production,
          consolidation, financial, and business professionals share this passion, driving
          innovation and excellence every day. They continuously develop new ideas and provide
          dynamic, need-oriented services to delight our customers and exceed expectations.
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
