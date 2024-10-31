<script setup></script>

<template>
  <div class="gallery">
    <h2>Approach Accessories Photo Gallery</h2>
  </div>
  <div class="box">
    <a class="button" href="#popup1">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup2">
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </a>
    <a class="button" href="#popup3">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup4">
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </a>
    <a class="button" href="#popup5">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup6">
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </a>
    <a class="button" href="#popup7">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup8">
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </a>
    <a class="button" href="#popup9">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup10">
      <img src="@/assets/images/woven.png" alt="" />
    </a>
    <a class="button" href="#popup11">
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </a>
  </div>

  <!-- popup Image here start-->
  <div id="popup1" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <div id="popup2" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </div>
  </div>
  <div id="popup3" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <div id="popup4" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </div>
  </div>
  <div id="popup5" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <div id="popup6" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </div>
  </div>
  <div id="popup7" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <div id="popup8" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </div>
  </div>
  <div id="popup9" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <div id="popup10" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/dummy-pro.png" alt="" />
    </div>
  </div>
  <div id="popup11" class="overlay">
    <div class="popup">
      <a class="close" href="#">&times;</a>
      <img src="@/assets/images/woven.png" alt="" />
    </div>
  </div>
  <!-- popup Image here end-->
</template>

<style lang="scss" scoped>
.gallery {
  width: 80%;
  padding-top: 40px;
  margin: 0 auto;
  text-align: center;
}

.box {
  width: 80%;
  margin: 0 auto;
  padding: 35px 0 60px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  .button {
    width: 33%;
    flex-basis: calc(34% - 30px);
    border: 2px solid var(--vt-c-neviblue);
    border-radius: 5px;
    background: var(--vt-c-white);
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.02);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(7, 72, 109, 0.7);
  transition: all 1s ease-in-out;
  visibility: hidden;
  opacity: 0;
  z-index: 10;

  &:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 70px auto;
    // padding: 20px;
    background: #fffffff3;
    border-radius: 5px;
    width: 50%;
    height: 70%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -52%);
    transition: all 2s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      margin: 0;
    }

    .close {
      position: absolute;
      top: 20px;
      right: 30px;
      transition: all 200ms;
      font-size: 30px;
      font-weight: bold;
      text-decoration: none;
      color: #333;

      &:hover {
        color: #02569b;
      }
    }
  }
}

@media screen and (max-width: 700px) {
  .box {
    width: 70%;
  }

  .popup {
    width: 70%;
  }
}
</style>
