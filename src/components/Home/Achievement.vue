<script setup>
// import TwentyOne from '@/assets/images/clients-logo/217.png';
</script>

<template>
  <div class="achievement">
    <h2>Our Happy Clients</h2>

    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/images/clients-logo/217.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/admiral.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/amisu.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/chaps3.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/cheek.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/clique.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/cocorita.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/cottover.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/dollyribbon.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/fbsister.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/givova.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/husqvarna.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/initialattraction.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/jamesharvest.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/joymary.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/kayoba.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/landsend.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/lovepowers.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/mauisons.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/max.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/michikolondon.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/mountaintrekking.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/mountzero.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/mrvan.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/oneills.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/oscarjones.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/paulmiller.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/printer.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/projob.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/reebok.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/resultor.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/richmix.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/roemgirls.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/socool.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/starter.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/strova.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/tchibo.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/thedaygirls.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/topten.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/truenorth.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/umbdo.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/usall.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/vapiti.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/vega.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/yato.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/images/clients-logo/zudio.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.achievement {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 5px 0 25px 0;

  .slider {
    // background-color: rgb(240, 229, 229);

    .slide-track {
      width: 100%;
      display: flex;
      gap: 2.5em;
      overflow: hidden;
      padding: 10px;

      .slide {
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px;
        animation: scroll 130s linear infinite;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;

        img {
          width: 100px;
        }
      }
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translatex(-5100%)
    }
  }
}
</style>
