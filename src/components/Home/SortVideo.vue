<template>
  <div class="short-video">
    <h2>Small Steps, Big Impact</h2>
    <div class="videoWrapper">
      <iframe width="853" height="480" src="https://www.youtube.com/embed/D0UnqGm_miA"
        frameborder="0" allowfullscreen></iframe>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.short-video {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 15px 0 35px 0;

  .videoWrapper {
    position: relative;
    height: 400px;
    border: 5px solid var(--vt-c-neviblue-dark);
    border-radius: 10px;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}
</style>
