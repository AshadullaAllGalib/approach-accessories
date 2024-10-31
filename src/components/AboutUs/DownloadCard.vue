<template>
  <div class="download-card">
    <div class="card-body">
      <div class="icon">
        <img src="@/assets/images/file-icon.png" alt="file icon" />
      </div>
      <p class="name">Directors’ Report to the Shareholders</p>
    </div>
    <a class="download-link" href="#"
      ><span>Download PDF File</span
      ><img src="@/assets/images/download-icon.png" alt=""
    /></a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.download-card {
  background-color: #f2f2f2;
  border-radius: 10px;
  overflow: hidden;
  flex-basis: calc((100% - 90px) / 4);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 15px;

    .icon {
      background-color: var(--vt-c-white);
      border-radius: 100px;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 50px;
      }
    }
    .name {
      text-align: center;
    }
  }
  .download-link {
    background-color: var(--color-primary);
    color: var(--vt-c-white);
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    transition: all 0.4s;

    img {
      filter: invert(1);
      width: 20px;
    }

    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
}
</style>
