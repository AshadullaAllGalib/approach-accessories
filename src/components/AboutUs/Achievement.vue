<template>
  <div class="achievement">
    <h2>Our Clients</h2>

    <div class="slider">
      <div class="slide-track">
        <!-- <div class="slide">
          <img src="../../assets/images/social/facebook.png" alt="LOGO">
        </div>
        <div class="slide">
          <img src="../../assets/images/social/linkdin.png" alt="LOGO">
        </div> -->
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
            alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png"
            alt="">
        </div>
        <div class="slide">
          <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png" alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png"
            alt="">
        </div>
        <div class="slide">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png"
            alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>

<style lang="scss" scoped>
.achievement {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0 40px 0;

  .slider {
    // background-color: rgb(255, 250, 250);

    .slide-track {
      width: 100%;
      display: flex;
      gap: 3em;
      overflow: hidden;
      padding: 20px 0;

      .slide {
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        animation: scroll 40s linear infinite;

        img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translatex(-1000%)
    }
  }
}
</style>
