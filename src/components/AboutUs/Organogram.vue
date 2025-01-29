<script setup></script>
<template>
  <div class="main">
    <div class="main-top">
      <div class="connector centre"></div>
      <span>Managing Director</span>
    </div>
    <div class="main-top">
      <div class="connector centre"></div>
      <span>Directors</span>
    </div>
    <div class="main-top">
      <div class="connector centre"></div>
      <span>Factory Manager</span>
    </div>

    <div class="top-line"></div>
    <div>
      <div class="design">
        <div class="connector centre"></div>
        <span>Designer</span>
      </div>

      <div class="design design2 ">
        <span>Asst.Designer</span>
      </div>
    </div>

    <div class="connectorlong right"></div>

    <div class="top-line top-line2"></div>

    <div>
      <div class="design design3">
        <span>Operator</span>
      </div>
      <div class="design design3 design4">
        <div class="connector1 centre"></div>
        <span>Operator</span>
      </div>
      <div class="design design3 design5">
        <div class="connector1 centre"></div>
        <span>Operator</span>
      </div>
      <div class="design design3 design6">
        <div class="connector1 centre"></div>
        <span>Operator</span>
      </div>
    </div>

    <div>
      <div class="design design7 design3">
        <div class="connector1 centre"></div>
        <span>Asst.Operator</span>
      </div>
      <div class="design design7 design4">
        <div class="connector1 centre"></div>
        <span>Asst.Operator</span>
      </div>
      <div class="design design7 design5">
        <div class="connector1 centre"></div>
        <span>Asst.Operator</span>
      </div>
      <div class="design design7 design6">
        <div class="connector1 centre"></div>
        <span>Asst.Operator</span>
      </div>
    </div>
    <div class="connectorlong right2"></div>
    <div class="top-line top-line2 top-line3"></div>
    <div>
      <div class="design design8">
        <span>QC</span>
      </div>
    </div>
    <div>
      <div class="design design9">
        <div class="connector1 centre"></div>
        <span>Asst.QC</span>
      </div>
      <div class="design design10">
        <div class="connector1 centre"></div>
        <span>Asst.QC</span>
      </div>
      <div class="design design11">
        <div class="connector1 centre"></div>
        <span>Asst.QC</span>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;

  .main-top {
    position: relative;
    width: 250px;
    height: 40px;
    line-height: 40px;
    background-color: #014231;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    span {
      font-size: 18px;
      color: #ffffff;
    }
  }

  .top-line {
    position: relative;
    width: 47.4%;
    height: 20px;
    border: 2px solid #000;
    border-bottom: none;
    margin-left: auto;
    margin-right: auto;
  }

  .top-line2 {
    position: absolute;
    top: 53%;
    right: 26.77%;
  }

  .top-line3 {
    top: 76%;
    border-left: none;
    border-right: none;
  }

  .connector {
    bottom: -20px;
    height: 20px;
    border-left: 2px solid #000;
  }

  .connector1 {
    top: -20px;
    height: 20px;
    border-left: 2px solid #000;
  }

  .connectorlong {
    height: 150px;
    border-left: 2px solid #000;
  }

  .centre {
    position: absolute;
    left: 50%;
  }

  .right {
    position: absolute;
    right: 26.77%;
    top: 32%;
  }

  .right2 {
    position: absolute;
    right: 26.77%;
    top: 54.5%;
  }

  .offset {
    margin-top: 90px;
    margin-left: 50px;
  }

  .design {
    position: absolute;
    width: 11.5%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 50px;
    text-align: center;
    left: 22.5%;
    border-radius: 5px;
    background-color: #1c6450;
    color: #ffffff;
  }

  .design2 {
    top: 41%;
    background-color: #6c9489;
  }

  .design3 {
    bottom: 31%;
  }

  .design4 {
    left: 35%;

  }

  .design5 {
    left: 47%;
  }

  .design6 {
    left: 59%;
  }

  .design7 {
    bottom: 22.5%;
    background-color: #6c9489;
  }

  .design8 {
    left: 25.7%;
    width: 38%;
    height: 40px;
    bottom: 10.7%;
    border-top: none;
  }

  .design9 {
    background-color: #6c9489;
    left: 25.7%;
    bottom: 2.4%;
  }

  .design10 {
    background-color: #6c9489;
    left: 39%;
    bottom: 2.4%;
  }

  .design11 {
    background-color: #6c9489;
    left: 52%;
    bottom: 2.4%;
  }
}


@media only screen and (max-width: 1024px) {
  .main {

    .main-top {
      span {
        font-size: 12px;
      }
    }

    .top-line {
      width: 100%;
    }

    .top-line2 {
      width: 95%;
      top: 43.9%;
      right: 3.5%;
    }

    .top-line3 {
      width: 95%;
      top: 62%;
    }

    .connector {}

    .connector1 {}

    .connectorlong {
      height: 120px;
    }

    .centre {}

    .right {
      right: 3.5%;
      top: 28%;
    }

    .right2 {
      right: 3.5%;
      top: 46%;
    }

    .offset {}

    .design {
      width: 20%;
      height: 40px;
      left: 0%;
    }

    .design2 {
      width: 30%;
      top: 35%;
    }

    .design3 {
      bottom: 41.7%;
    }

    .design4 {
      left: 23.5%;

    }

    .design5 {
      left: 47%;
    }

    .design6 {
      left: 71%;
    }

    .design7 {
      bottom: 34%;
      width: 22.5%;

      span {
        font-size: 11px;
      }
    }

    .design8 {
      left: 0%;
      width: 95%;
      height: 40px;
      bottom: 26%;
      border-top: none;
    }

    .design9 {
      left: 5%;
      bottom: 18.5%;
    }

    .design10 {
      left: 36%;
      bottom: 18.5%;
    }

    .design11 {
      left: 65%;
      bottom: 18.5%;
    }
  }
}
</style>
