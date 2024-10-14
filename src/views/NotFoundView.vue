<template>
  <section class="not-found">
    <div class="not-found-info">
      <span>❌</span>
      <h1>404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <RouterLink to="/" class="back">Go Back
      </RouterLink>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.not-found {
  background: #2f57a0f5;

  .not-found-info {
    width: 80%;
    height: 50vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: #fff;


    span {
      font-size: 40px;
    }

    h1 {
      font-size: 30px;
      line-height: 40px;
    }

    p {
      font-size: 16px;
      padding-bottom: 15px;
    }

    .back {
      text-decoration: none;
      font-size: 16px;
      background: #10597a;
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      transition: all ease-in-out .3s;

      &:hover {
        transform: scale(1.08);
      }
    }
  }
}
</style>
