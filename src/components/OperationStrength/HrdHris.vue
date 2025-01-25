<template>
  <div class="text-image-content our-profile">
    <div class="images">
      <img src="@/assets/images/factory-img.jpg" alt="">
      <img src="@/assets/images/products/hang-tag.png" alt="">
      <img src="@/assets/images/products/hang-tag-string.png" alt="">
    </div>

    <div class="text">
      <div class="title">
        <p>
          Human Resource Development (HRD) focuses on empowering our workforce through continuous
          learning, skill enhancement, and leadership development. By offering training programs,
          performance appraisals, and career advancement opportunities, we cultivate a motivated and
          capable team that drives organizational success.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          Our Human Resource Information System (HRIS) streamlines HR processes by integrating
          technology into employee management. From recruitment and onboarding to payroll and
          performance tracking, our HRIS ensures accuracy, efficiency, and data-driven
          decision-making. Together, HRD and HRIS enable us to foster a thriving workplace that
          aligns employee growth with company objectives.
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
