<template>
  <div class="text-image-content our-profile" data-aos="fade-up" data-aos-easing="linear"
    data-aos-duration="800">
    <div class="text">
      <div class="title">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor
          amet consequuntur provident enim reprehenderit at architecto hic ipsa
          ducimus, id asperiores laborum optio sit nisi corrupti error numquam
          eveniet odit voluptatibus totam porro perspiciatis. Delectus impedit
          voluptatum, officia voluptate sunt illo quas sit itaque enim, ab odio
          earum obcaecati.
        </p>
      </div>
      <div class="seperator"></div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolor
          amet consequuntur provident enim reprehenderit at architecto hic ipsa
          ducimus, id asperiores laborum optio sit nisi corrupti error numquam
          eveniet odit voluptatibus totam porro perspiciatis. Delectus impedit
          voluptatum, officia voluptate sunt illo quas sit itaque enim, ab odio
          earum obcaecati.
        </p>
      </div>
    </div>
    <div class="images">
      <img src="@/assets/images/products/screen-label.png" alt="">
      <img src="@/assets/images/products/screen-label.png" alt="">
      <img src="@/assets/images/products/screen-label.png" alt="">
    </div>
    <div class="note">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo amet
        deserunt laboriosam quisquam dolore explicabo illum veritatis.
        Explicabo, quaerat! Commodi.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
})
</script>

<style lang="scss" scoped>
.text-image-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  .text {
    flex-basis: calc(50% - 15px);

    .seperator {
      margin: 25px 0;
      height: 5px;
      width: 100px;
      background-color: var(--color-primary);
    }
  }

  .images {
    flex-basis: calc(50% - 15px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 10px;

    img {
      width: 100%;
      border: 1px solid #33333342;

      &:nth-child(1) {
        grid-column: 1 / 5;
        grid-row: 1 / 5;
      }
    }
  }

  .note {
    flex-basis: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .text-image-content {
    gap: 15px;
    flex-direction: column;
  }
}
</style>
