<script setup>

</script>

<template>
  <div class="category">
    <div class="category-detail">
      <div class="cards">
        <div class="support">
          <i class="pi pi-thumbs-up-fill"></i>
        </div>
        <div class="text">
          <h4>Quick Support</h4>
          <p>We are always available to provide quick support because we have a strong workforce to
            serve you at all times.</p>
        </div>
      </div>
      <div class="cards">
        <div class="support">
          <i class="pi pi-thumbs-up-fill"></i>
        </div>
        <div class="text">
          <h4>Speedy Service</h4>
          <p>You will always receive a prompt response from us at any time. We are always striving
            to provide you with better service.</p>
        </div>
      </div>
      <div class="cards">
        <div class="support">
          <i class="pi pi-thumbs-up-fill"></i>
        </div>
        <div class="text">
          <h4>Best Quality</h4>
          <p>We always excel in the quality department. We conduct various quality checks during and
            after production.</p>
        </div>
      </div>
      <div class="cards">
        <div class="support">
          <i class="pi pi-thumbs-up-fill"></i>
        </div>
        <div class="text">
          <h4>Live-Perfect Vision</h4>
          <p>We are always ready to serve you in any condition. We always maintain the best service
            quality and uphold our commitment</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 15px 0 25px 0;

  &-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border: 2px solid var(--vt-c-light-green);
    padding: 20px;
    border-radius: 10px;

    .cards {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 30px;

      .support {
        background-color: var(--vt-c-neviblue-dark);
        height: 140px;
        width: 140px;
        box-shadow: 0 20px 50px rgba(59, 43, 91, 0.7);
        border-radius: 50%;
        transition: all 0.5s ease;
        -webkit-transition: all 0.5s ease;
        position: relative;

        i {
          background-color: rgb(175, 166, 166);
          width: 100px;
          height: 100px;
          border-radius: 100%;
          font-size: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s ease;
        }

        &:hover {
          background-color: var(--vt-c-dark-green);

          i {
            color: var(--vt-c-dark-green);
            font-size: 51px;
          }
        }
      }

      .text {
        h4 {
          font-size: 24px;
          font-weight: 600;
        }

        p {
          font-size: 15px;
          line-height: 17px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .category {

    &-detail {
      gap: 20px;
      padding: 20px 10px;
      flex-direction: column;

      .cards {
        gap: 20px;

        .support {

          i {}
        }

      }
    }
  }
}
</style>
