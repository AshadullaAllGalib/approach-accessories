<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})

const management = [
  {
    name: 'Md. Enamuddin', title: 'GM', description: 'At Approach Accessories Ltd., We are redefining garment accessories with innovation, quality, and sustainability. Our commitment to excellence ensures that every detail we create adds value to global fashion brands'
  },
  {
    name: 'Md. Mizanur Rahman', title: 'DGM', description: 'At Approach Accessories Ltd., We focus on precision, efficiency, and innovation to meet the evolving demands of the fashion industry. Our dedication to quality and sustainability drives our success in garment accessories'
  },
  {
    name: 'Md. Abdur Rouf', title: 'Sr. Manager', description: 'At Approach Accessories Ltd., We focus on precision, quality, and craftsmanship, ensuring every product meets the highest standards to drive innovation, reliability, and customer satisfaction.'
  },
  {
    name: 'Md. Zahidul Islam', title: 'Sr. Manager', description: 'At Approach Accessories Ltd., We blend craftsmanship with innovation to deliver high-quality garment accessories. Our focus on efficiency and sustainability ensures we stay ahead in a dynamic fashion industry.'
  },
  {
    name: 'Md. Rafiqul Islam', title: 'Manager', description: 'Quality and precision define our work at Approach Accessories Ltd. We are committed to delivering the best garment accessories that enhance brand identity and meet global standards.'
  },
  {
    name: 'Md. Omar Faruk', title: 'Manager', description: 'At Approach Accessories Ltd., We prioritize innovation and reliability in every accessory we produce. Our commitment to excellence ensures that we consistently exceed industry expectations.'
  },
  {
    name: 'Md. Golam Forhad', title: 'Manager', description: 'Delivering premium garment accessories requires a blend of skill, technology, and dedication. At Approach Accessories Ltd., we take pride in crafting products that add value to global fashion brands.'
  },
  {
    name: 'Md. Abdul Khaleq', title: 'Manager', description: 'At Approach Accessories Ltd., We believe that even the smallest details make a big impact. Our focus on quality, efficiency, and customer satisfaction drives everything we do.'
  },
  {
    name: 'Md. Amir Ali Molla', title: 'Manager', description: 'Every accessory we create at Approach Accessories Ltd. reflects our commitment to quality and innovation. We strive to provide solutions that enhance fashion brands worldwide.'
  },
  {
    name: 'Mohammad Hafizur Rahaman', title: 'Asst.Manager', description: 'At Approach Accessories Ltd., We focus on precision and efficiency to deliver top-quality garment accessories. Our dedication to excellence helps brands stand out in a competitive market.'
  },
  {
    name: 'Md. Rakibuzzaman', title: 'Asst.Manager', description: 'At Approach Accessories Ltd., We work relentlessly to ensure that every accessory meets the highest standards of quality and craftsmanship. Our commitment is to support brands with innovative solutions that make a difference.'
  },
  {
    name: 'Md. Abdullah-Al-Masud Rana', title: 'Asst.Manager', description: 'At Approach Accessories Ltd., We are driven by the pursuit of excellence. By combining innovation with attention to detail, we provide accessory solutions that elevate fashion brands globally.'
  },

];
</script>

<template>
  <div class="directors" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
    <div class="title">
      <h2>Management Team</h2>
      <p>
        At the helm of Approach Accessories Ltd. is a visionary Management Team, blending industry
        expertise with innovative strategies. Their commitment to excellence and forward-thinking
        approach propel the company toward sustained growth and customer satisfaction.
      </p>
    </div>
    <div class="cards">
      <div v-for="(management, index) in management.slice(0, limit || management.length)"
        :key="index" class="cards-details">
        <h2>{{ management.name }}</h2>
        <h3>{{ management.title }}</h3>
        <p>{{ management.description }}</p>
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
