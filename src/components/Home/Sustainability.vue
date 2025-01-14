<template>
  <div class="sustainability">
    <div class="sustainable">
      <h2>Human sustainability</h2>

      <div class="sustain-img">
        <img src="../../assets/images/sustainable.jpg" alt="">
      </div>

      <div class="sustain-text">
        <p>
          <span>Approach Accessories Ltd.</span> leads the garment accessories industry with a focus
          on
          sustainability and innovation. We use eco-friendly materials like recycled and
          biodegradable
          inputs and optimize our production processes to reduce environmental impact while
          maintaining top quality.

          Our investment in advanced machinery enhances efficiency, reduces energy use, and
          minimizes
          waste, enabling us to deliver sustainable accessories that are precise, durable, and
          stylish.

          Committed to a greener future, we collaborate with clients and partners to provide
          eco-friendly solutions that align with global sustainability goals and meet the
          expectations
          of conscious brands and consumers.
        </p>
      </div>

    </div>
  </div>

</template>

<script setup>

</script>

<style lang="scss" scoped>
.sustainability {
  background-color: var(--vt-c-soft-green);
  width: 100%;

  .sustainable {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 15px 0 25px 0;


    .sustain-img {
      padding: 5px 0 10px 0;

      img {
        width: 100%;
        height: 440px;
        border-radius: 10px;
      }
    }

    p {
      text-align: justify;
      padding-bottom: 10px;

      span {
        font-weight: 700;
      }
    }
  }
}



@media (max-width: 768px) {
  .sustainability {

    .sustainable {

      .sustain-img {
        padding: 5px 0 10px 0;

        img {
          height: auto;
        }
      }

    }
  }

}
</style>
