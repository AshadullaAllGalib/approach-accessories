<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<template>
  <div class="directors" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
    <div class="title">
      <h2>Board Of Directors</h2>
      <p>
        Approach Accessories Ltd. thrives under the ownership and leadership of a distinguished
        Board of Directors, whose professional expertise and years of experience in the Labels &
        Accessories industry drive the company’s vision and success.
      </p>
    </div>
    <div class="cards">
      <div class="cards-details">
        <h2>Md.Atinur Rahman Marshal</h2>
        <h3>Managing Director</h3>
        <p>
          At Approach Accessories Limited, we prioritize quality and customer satisfaction, driving
          innovation in every product we offer. Our commitment to excellence sets us apart in the
          industry.
        </p>
      </div>
      <div class="cards-details">
        <h2>Babul Biswas</h2>
        <h3>Director</h3>
        <p>
          As a Director at Approach Accessories Limited, I am focused on driving innovation and
          delivering exceptional products. Our commitment to quality and customer satisfaction
          continues to set us apart in the industry.
        </p>
      </div>
      <div class="cards-details">
        <h2>Md. Rabiul Awal Sarkar</h2>
        <h3>Director</h3>
        <p>
          As a Director at Approach Accessories Limited, I’m dedicated to driving innovation and
          shaping the future. We create products that challenge conventions and inspire new
          possibilities for our customers.
        </p>
      </div>
      <div class="cards-details">
        <h2>Milon Kumar Ghosh</h2>
        <h3>Director</h3>
        <p>
          As a Director at Approach Accessories Limited, I’m driven by innovation and the pursuit
          of creative solutions. We’re redefining industry standards with products that push
          boundaries and inspire our customers.
        </p>
      </div>
      <div class="cards-details">
        <h2>Md.Aminur Rahman Captin</h2>
        <h3>Director</h3>
        <p>
          As a Director at Approach Accessories Limited, I’m focused on delivering innovative
          solutions that lead the industry. Our products challenge the ordinary and open up exciting
          new possibilities for our customers.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.directors {

  .title {
    text-align: center;
    padding-bottom: 30px;

    p {
      width: 70%;
      margin: 0 auto;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;

    &-details {
      flex-basis: calc((100% - 60px) / 2);
      background-color: #b5d3c9;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0.377) 0px 5px 10px 2px;

      h2 {
        margin: 0;
        font-size: 24px;

      }

      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    }

  }
}

@media only screen and (max-width: 600px) {
  .directors {

    .title {
      p {
        width: auto;
      }
    }

    .cards {
      &-details {
        flex-basis: auto;
        padding: 10px;
      }
    }
  }
}
</style>
