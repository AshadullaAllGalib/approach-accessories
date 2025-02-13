<script setup>
import { ref, onMounted } from 'vue';
import Aos from 'aos';
onMounted(() => {
  Aos.init();
})

import Machine1 from '@/assets/images/machines/machine1.jpg';
import Machine2 from '@/assets/images/machines/machine2.jpg';
import Machine3 from '@/assets/images/machines/machine3.jpg';
import Machine4 from '@/assets/images/machines/machine4.jpg';
import Machine5 from '@/assets/images/machines/machine5.jpg';
import Machine6 from '@/assets/images/machines/machine6.jpg';
import Machine7 from '@/assets/images/machines/machine7.jpg';
import Machine8 from '@/assets/images/machines/machine8.jpg';
import Machine9 from '@/assets/images/machines/machine9.jpg';
import Machine10 from '@/assets/images/machines/machine10.jpg';
import Machine11 from '@/assets/images/machines/machine11.jpg';
import Machine12 from '@/assets/images/machines/machine12.jpg';
import Machine13 from '@/assets/images/machines/machine13.jpg';
import Machine14 from '@/assets/images/machines/machine14.jpg';
import Machine15 from '@/assets/images/machines/machine15.jpg';

const images = ref([
  { src: Machine1 },
  { src: Machine2 },
  { src: Machine3 },
  { src: Machine4 },
  { src: Machine5 },
  { src: Machine6 },
  { src: Machine7 },
  { src: Machine8 },
  { src: Machine9 },
  { src: Machine10 },
  { src: Machine11 },
  { src: Machine12 },
  { src: Machine13 },
  { src: Machine14 },
  { src: Machine15 }
]);

const overlays = ref(Array(images.value.length).fill(false));

const lightbox = ref({
  isOpen: false,
  currentImage: 0
});

const openLightbox = (index) => {
  lightbox.value.isOpen = true;
  lightbox.value.currentImage = index;
};

const closeLightbox = () => {
  lightbox.value.isOpen = false;
};

const nextImage = () => {
  lightbox.value.currentImage = (lightbox.value.currentImage + 1) % images.value.length;
};

const prevImage = () => {
  lightbox.value.currentImage =
    (lightbox.value.currentImage - 1 + images.value.length) % images.value.length;
};
</script>

<template>
  <section id="gallery">
    <div class="gallery">
      <h2>Factory Machines Photo</h2>
    </div>
    <div class="container" data-aos="fade-up" data-aos-duration="800">
      <div id="image-gallery" class="image-gallery">
        <div v-for="(image, index) in images" :key="index" class="image"
          @mouseover="overlays[index] = true" @mouseleave="overlays[index] = false">
          <div class="img-wrapper" @click="openLightbox(index)">
            <img :src="image.src" alt="Image" />
            <div class="img-overlay" v-if="overlays[index]">
              <i class="pi pi-plus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="lightbox.isOpen" id="overlay" @click="closeLightbox">
      <img :src="images[lightbox.currentImage].src" alt="Lightbox Image" />
      <div id="prevButton" @click.stop="prevImage">
        <i class="pi pi-arrow-circle-left"></i>
      </div>
      <div id="nextButton" @click.stop="nextImage">
        <i class="pi pi-arrow-circle-right"></i>
      </div>
      <div id="exitButton" @click.stop="closeLightbox">
        <i class="pi pi-times-circle"></i>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
#gallery {
  width: 80%;
  margin: 0 auto;
  padding: 0 0 40px 0;

  .gallery {
    text-align: center;

    h2 {
      margin-bottom: 0;
    }
  }



  .container {
    padding-top: 30px;

    .image-gallery {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .image {
        width: 33%;
        flex-basis: calc(33% - 17px);
        // background: #ffffff;
        border-radius: 5px;
        // box-shadow: 0 0 3px;
        cursor: pointer;

        .img-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: scale(1.05);
          }

          img {
            // width: 90%;
            height: 220px;
            border-radius: 5px;
          }

          .img-overlay {
            background: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.6s;

            i {
              color: #fff;
              font-size: 3em;
            }
          }
        }
      }
    }
  }
}

#overlay {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 7%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: all 2s ease-in-out;

  img {
    background: #fff;
    border-radius: 5px;
    width: 50%;
    height: 500px;
    object-fit: contain;
    padding: 2.5%;

  }
}

#nextButton,
#prevButton,
#exitButton {
  color: #123852;
  font-size: 30px;
  position: absolute;
  transition: opacity 0.8s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

#nextButton {
  right: 5%;
  color: #fff;
}

#prevButton {
  left: 5%;
  color: #fff;
}

#exitButton {
  top: 12%;
  right: 26%;
}

@media (max-width: 1024px) {
  #gallery {
    width: 80%;
    margin: 0 auto;
    padding: 0 0 40px 0;

    .container {
      padding-top: 30px;

      .image-gallery {
        flex-direction: column;
        gap: 10px;

        .image {
          width: 100%;

          .img-wrapper {
            .img-overlay {

              i {
                color: #fff;
                font-size: 3em;
              }
            }
          }
        }
      }
    }
  }

  #overlay {
    top: 5%;

    img {
      width: 80%;
      height: 300px;
    }
  }

  #nextButton,
  #prevButton,
  #exitButton {
    font-size: 24px;
  }

  #nextButton {
    right: 2%;
  }

  #prevButton {
    left: 2%;
  }

  #exitButton {
    top: 30%;
    right: 11%;
  }
}
</style>
