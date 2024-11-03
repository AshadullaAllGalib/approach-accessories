<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>
<template>
  <section class="production" data-aos="fade-down" data-aos-easing="linear"
    data-aos-duration="1000">
    <div class="title">
      <h2>Corporate Office & Factory</h2>
    </div>

    <div class="factory">
      <div class="factory-image">
        <img src="../../assets/images/factory-img.png" alt="Factory_image">
      </div>
      <div class="text">
        <h4>Corporate Office & Factory:</h4>
        <p>
          Plot # 160, Uttar Meitka, Shyampur Bazar,
          Hemayetpur, Savar, Dhaka-1348.
        </p>
        <h4>Branch Office:</h4>
        <p>
          52/A, Arambagh, Motijheel, Dhaka-1000.
        </p>
      </div>
    </div>

  </section>
</template>



<style lang="scss" scoped>
.production {
  width: 80%;
  margin: 0 auto;
  padding: 110px 0 30px 0;

  .title {
    text-align: center;

    h2 {
      margin-bottom: 40px;
    }
  }


  .factory {
    display: flex;
    justify-content: space-between;


    &-image {
      width: 60%;

      img {
        width: 100%;
      }
    }

    .text {
      width: 40%;
      padding-left: 30px;
      color: #343434;

      h4 {
        font-size: 20px;
        font-weight: 600;
        // padding-bottom: 10px;
      }

      p {
        font-size: 14px;
        padding-bottom: 10px;
      }

    }
  }
}

@media (max-width: 768px) {
  .production {
    padding: 100px 0 20px 0;

    .title {
      h2 {
        margin-bottom: 20px;
      }
    }


    .factory {
      flex-direction: column;
      align-items: center;


      &-image {
        width: 100%;

        img {
          padding-bottom: 15px;
        }
      }

      .text {
        width: 100%;
        padding-left: 0;
      }
    }
  }
}
</style>
