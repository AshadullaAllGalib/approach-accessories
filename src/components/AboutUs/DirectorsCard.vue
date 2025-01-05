<script setup></script>

<template>
  <div class="directors">
    <div class="title">
      <h2>Board Of Directors</h2>
      <p>
        Approach Accessories Ltd. thrives under the ownership and leadership of a distinguished
        Board of Directors, whose professional expertise and years of experience in the Labels &
        Accessories industry drive the company’s vision and success.
      </p>
    </div>
    <div class="cards">
      <div class="cards-details">
        <h2>Md.Atinur Rahman Marshal</h2>
        <h3>Managing Director</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Babul Biswas</h2>
        <h3>Director</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Md. Rabiul Awal Sarkar</h2>
        <h3>Director</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Milon Kumar Ghosh</h2>
        <h3>Director</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
      <div class="cards-details">
        <h2>Md.Aminur Rahman Captin</h2>
        <h3>Director</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta quos, minima
          tenetur id adipisci consequatur ullam. Nostrum, voluptates mollitia.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.directors {

  .title {
    text-align: center;
    padding-bottom: 30px;

    p {
      width: 70%;
      margin: 0 auto;
    }
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;

    &-details {
      flex-basis: calc((100% - 60px) / 2);
      background-color: #b5d3c9;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      box-shadow: rgba(0, 0, 0, 0.377) 0px 5px 10px 2px;

      h2 {
        margin: 0;
        font-size: 26px;

      }

      h3 {
        font-size: 22px;
        font-weight: 500;
      }
    }

  }
}
</style>
