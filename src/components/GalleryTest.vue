<script setup>
import { ref } from 'vue';


import wovenImage from '../assets/images/woven.png';
// import dummyImage from '../assets/images/dummy-pro.png';

const images = ref([
  { src: wovenImage },
  // { src: dummyImage },
  { src: wovenImage },
  // { src: dummyImage },
  { src: wovenImage },
  // { src: dummyImage },
  { src: wovenImage },
  { src: wovenImage },
  { src: wovenImage },
  { src: wovenImage },
  { src: wovenImage },
  { src: wovenImage },
  { src: wovenImage },
  // { src: dummyImage },
  { src: wovenImage },
  // { src: dummyImage },
  { src: wovenImage }
  // { src: dummyImage }
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
      <h2>Approach Accessories Photo Gallery</h2>
    </div>
    <div class="container">
      <div id="image-gallery" class="image-gallery">
        <div v-for="(image, index) in images" :key="index" class="image"
          @mouseover="overlays[index] = true" @mouseleave="overlays[index] = false">
          <div class="img-wrapper" @click="openLightbox(index)">
            <img :src="image.src" alt="Gallery Image" />
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
  padding: 40px 0;

  .gallery {
    text-align: center;

  }

  h1 {
    text-align: center;
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
        min-height: 300px;
        flex-basis: calc(33% - 30px);
        background: #ffffff;
        border-radius: 5px;
        box-shadow: 0 0 3px;
        cursor: pointer;

        .img-wrapper {
          position: relative;
          margin-top: 15px;

          img {
            width: 100%;
            height: 100%;
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
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transition: all 2s ease-in-out;

  img {
    background: #fff;
    border-radius: 5px;
    width: 40%;
    height: auto;
    object-fit: contain;
    padding: 5%;

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
  top: 20%;
  right: 32%;
}
</style>
