<script setup>
import TwentyOne from '@/assets/images/clients-logo/217.png';
import Admiral from '@/assets/images/clients-logo/admiral.png';
import Amisu from '@/assets/images/clients-logo/amisu.png';
import Chaps from '@/assets/images/clients-logo/chaps3.png';
import Cheek from '@/assets/images/clients-logo/cheek.png';
import Clique from '@/assets/images/clients-logo/clique.png';
import Cocorita from '@/assets/images/clients-logo/cocorita.png';
import Cottover from '@/assets/images/clients-logo/cottover.png';
import Dollyribbon from '@/assets/images/clients-logo/dollyribbon.png';
import Fbsister from '@/assets/images/clients-logo/fbsister.png';
import Givova from '@/assets/images/clients-logo/givova.png';
import Husqvarna from '@/assets/images/clients-logo/husqvarna.png';
import Initialattraction from '@/assets/images/clients-logo/initialattraction.png';
import Jamesharvest from '@/assets/images/clients-logo/jamesharvest.png';
import Joymary from '@/assets/images/clients-logo/joymary.png';
import Kayoba from '@/assets/images/clients-logo/kayoba.png';
import Landsend from '@/assets/images/clients-logo/landsend.png';
import Lovepowers from '@/assets/images/clients-logo/lovepowers.png';
import Mauisons from '@/assets/images/clients-logo/mauisons.png';
import Max from '@/assets/images/clients-logo/max.png';
import Michikolondon from '@/assets/images/clients-logo/michikolondon.png';
import Mountaintrekking from '@/assets/images/clients-logo/mountaintrekking.png';
import Mountzero from '@/assets/images/clients-logo/mountzero.png';
import Mrvan from '@/assets/images/clients-logo/mrvan.png';
import Oneills from '@/assets/images/clients-logo/oneills.png';
import Oscarjones from '@/assets/images/clients-logo/oscarjones.png';
import Paulmiller from '@/assets/images/clients-logo/paulmiller.png';
import Printer from '@/assets/images/clients-logo/printer.png';
import Projob from '@/assets/images/clients-logo/projob.png';
import Reebok from '@/assets/images/clients-logo/reebok.png';
import Resultor from '@/assets/images/clients-logo/resultor.png';
import Richmix from '@/assets/images/clients-logo/richmix.png';
import Roemgirls from '@/assets/images/clients-logo/roemgirls.png';
import Socool from '@/assets/images/clients-logo/socool.png';
import Starter from '@/assets/images/clients-logo/starter.png';
import Strova from '@/assets/images/clients-logo/strova.png';
import Tchibo from '@/assets/images/clients-logo/tchibo.png';
import Thedaygirls from '@/assets/images/clients-logo/thedaygirls.png';
import Topten from '@/assets/images/clients-logo/topten.png';
import Truenorth from '@/assets/images/clients-logo/truenorth.png';
import Umbdo from '@/assets/images/clients-logo/umbdo.png';
import Usall from '@/assets/images/clients-logo/usall.png';
import Vapiti from '@/assets/images/clients-logo/vapiti.png';
import Vega from '@/assets/images/clients-logo/vega.png';
import Yato from '@/assets/images/clients-logo/yato.png';
import Zudio from '@/assets/images/clients-logo/zudio.png';

const achieve = [
  { img: TwentyOne },
  { img: Admiral },
  { img: Amisu },
  { img: Chaps },
  { img: Cheek },
  { img: Clique },
  { img: Cocorita },
  { img: Cottover },
  { img: Dollyribbon },
  { img: Fbsister },
  { img: Givova },
  { img: Husqvarna },
  { img: Initialattraction },
  { img: Jamesharvest },
  { img: Joymary },
  { img: Kayoba },
  { img: Landsend },
  { img: Lovepowers },
  { img: Mauisons },
  { img: Max },
  { img: Michikolondon },
  { img: Mountaintrekking },
  { img: Mountzero },
  { img: Mrvan },
  { img: Oneills },
  { img: Oscarjones },
  { img: Paulmiller },
  { img: Printer },
  { img: Projob },
  { img: Reebok },
  { img: Resultor },
  { img: Richmix },
  { img: Roemgirls },
  { img: Socool },
  { img: Starter },
  { img: Strova },
  { img: Tchibo },
  { img: Thedaygirls },
  { img: Topten },
  { img: Truenorth },
  { img: Umbdo },
  { img: Usall },
  { img: Vapiti },
  { img: Vega },
  { img: Yato },
  { img: Zudio },
];
</script>

<template>
  <div class="achievement">
    <h2>Our Happy Clients</h2>
    <div class="slider">
      <div class="slide-track">
        <div v-for="(achieve, index) in achieve.slice(0, limit || achieve.length)" :key="index"
          class="slide">
          <img :src="achieve.img" alt="">
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
