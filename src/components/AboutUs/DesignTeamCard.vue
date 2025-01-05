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
      <h2>Design Team</h2>
      <p>
        At the core of Approach Accessories Ltd. is a creative and innovative Design Team, bringing
        concepts to life with unmatched expertise and a keen eye for detail. Their passion for
        excellence and forward-thinking approach drive the development of unique and impactful
        designs, setting the company apart in the Labels & Accessories industry.
      </p>
    </div>
    <div class="cards">
      <div class="cards-details">
        <h2>Employee Name</h2>
        <h3>designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Employee Name</h2>
        <h3>designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Employee Name</h2>
        <h3>designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Employee Name</h2>
        <h3>designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Employee Name</h2>
        <h3>designation</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
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
