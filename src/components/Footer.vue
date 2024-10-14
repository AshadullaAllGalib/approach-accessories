<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top_item">
        <div class="left-item">
          <h3>Corporate Office & Factory:</h3>
          <p>
            Plot # 160, Uttar Meitka, Shyampur Bazar,<br> Hemayetpur, Savar, Dhaka-1348.
          </p>
          <h3>Branch Office: </h3>
          <p>
            52/A, Arambagh, Motijheel, Dhaka-1000.
          </p>
        </div>
        <div class="middle-item left-item">
          <h3>Phone: </h3>
          <p>+880 1974 338707, +880 1975 411616,<br> +880 1718 094002, +880 1716
            009940
          </p>
          <h3>E-mail:</h3>
          <p>
            approach@dhaka.net , info@approach-bd.com
          </p>
        </div>
        <div class="right-item left-item">
          <h3>Information</h3>
          <div class="right-item_link">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Operation Strength</a></li>

            </ul>
            <ul>
              <li><a href="#">Production Facility</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

        </div>
      </div>

    </div>
    <div class="footer-bottom">
      <div class="social-links">
        <div class="copy-right">
          <img src="../assets/images/logo.jpeg" alt="">
          <h3>© 2024. Approach Accessories Limited. All rights reserved.</h3>
        </div>
        <a href="#">
          <img src="../assets/images/social/facebook.png" alt="Facebook">
        </a>
        <a href="#">
          <img src="../assets/images/social/linkdin.png" alt="Linkdin">
        </a>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;

  .footer-top {
    background: #4c8fec;

    &_item {
      width: 90%;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-item {
        color: var(--vt-c-white);

        h3 {
          font-size: 20px;
          font-weight: 700;
          padding: 5px 0;
          position: relative;
          display: inline-block;

          &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--vt-c-white);
          }
        }

        p {
          font-size: 16px;
          line-height: 20px;
        }
      }

      .middle-item {}

      .right-item {
        color: var(--vt-c-white);

        &_link {
          display: flex;

          ul {
            padding-left: 20px;

            li {
              a {
                text-decoration: none;
                font-size: 16px;
                color: #fff;
                position: relative;
                display: inline-block;

                &::after {
                  content: '';
                  position: absolute;
                  bottom: 2px;
                  left: 0;
                  width: 0;
                  height: 2px;
                  background-color: var(--vt-c-white);
                  transition: all 0.3s;
                }

                &:hover {
                  transform: scale(1.03);

                  &::after {
                    width: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    background: #367fe6;
    width: 100%;
    padding: 12px 0;

    .social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      .copy-right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        h3 {
          color: #fff;
          font-size: 16px;
        }

        img {
          width: 30px;
          border-radius: 10%;
        }
      }

      a {
        padding: 6px 6px 0px 6px;
        background: #ffffffb9;
        border-radius: 100%;
        transition: all ease-in-out .3s;

        img {
          width: 25px;
        }

        &:hover {
          transform: scale(1.07);
        }
      }
    }
  }
}
</style>
