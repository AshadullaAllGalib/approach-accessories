<script setup>
import { ref, onMounted } from 'vue'
import AOS from "aos";

onMounted(() => {
  AOS.init();
})

import oeko from '@/assets/images/certificate/oeko.jpg'
import Scs from '@/assets/images/certificate/scs.jpg'

const images = ref([
  { src: oeko },
  { src: Scs }
])

const overlays = ref(Array(images.value.length).fill(false))

const lightbox = ref({
  isOpen: false,
  currentImage: 0,
})

const openLightbox = index => {
  lightbox.value.isOpen = true
  lightbox.value.currentImage = index
}

const closeLightbox = () => {
  lightbox.value.isOpen = false
}

const nextImage = () => {
  lightbox.value.currentImage =
    (lightbox.value.currentImage + 1) % images.value.length
}

const prevImage = () => {
  lightbox.value.currentImage =
    (lightbox.value.currentImage - 1 + images.value.length) %
    images.value.length
}
</script>

<template>
  <section id="gallery">
    <div class="container" data-aos="fade-up" data-aos-duration="800">
      <div id="image-gallery" class="image-gallery">
        <div v-for="(image, index) in images" :key="index" class="image"
          @mouseover="overlays[index] = true" @mouseleave="overlays[index] = false">
          <div class="img-wrapper" @click="openLightbox(index)">
            <img :src="image.src" alt="Gallery Image" />
            <h4 class="title">Approach Accessories Limited.</h4>
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
  .container {
    .image-gallery {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 30px;

      .image {
        flex-basis: calc(33% - 30px);
        background: #ffffff;
        cursor: pointer;

        .img-wrapper {
          position: relative;
          transition: all ease-in-out 0.3s;

          &:hover {
            transform: scale(1.03);
          }

          .title {
            font-size: 14px;
            line-height: 16px;
          }

          img {
            width: 100%;
            height: 100%;
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
  width: 100vw;
  height: 100vh;
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
    width: 30%;
    height: 79%;
    object-fit: contain;
    padding: 2%;
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
  top: 10%;
  right: 36%;
}

@media (max-width: 1024px) {
  #gallery {
    .container {
      .image-gallery {
        gap: 40px;
        flex-direction: column;

        .image {
          // flex-basis: calc(50% - 15px);

          .img-wrapper {
            .title {
              font-size: 12px;
              line-height: 13px;
            }

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
    top: 3%;

    img {
      width: 80%;
      height: 60%;
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
    top: 20%;
    right: 11%;
  }
}
</style>
