<template>
  <footer>
    <div class="footer">
      <div class="footer-top">
        <div class="footer-top_item">
          <div class="left-item">
            <h3>Corporate Office & Factory:</h3>
            <p>
              Plot # 160, Uttar Meitka, Shyampur Bazar,<br />
              Hemayetpur, Savar, Dhaka-1348.
            </p>
            <h3>Branch Office:</h3>
            <p>52/A, Arambagh, Motijheel, Dhaka-1000.</p>
          </div>
          <div class="middle-item left-item">
            <h3>Phone:</h3>
            <p>
              +880 1974 338707, +880 1975 411616,<br />
              +880 1718 094002, +880 1716 009940
            </p>
            <h3>E-mail:</h3>
            <p>approach@dhaka.net , info@approach-bd.com</p>
          </div>
          <div class="right-item left-item">
            <h3>Information</h3>
            <div class="right-item_link">
              <ul>
                <li>
                  <RouterLink to="/" class="nav-link">Home</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about" class="nav-link">About Us</RouterLink>
                </li>
                <li>
                  <RouterLink to="/product" class="nav-link">Product</RouterLink>
                </li>
                <li>
                  <RouterLink to="/operation-strength" class="nav-link">Operation Strength
                  </RouterLink>
                </li>
              </ul>
              <ul>
                <li>
                  <RouterLink to="/gallery" class="nav-link">Gallery</RouterLink>
                </li>
                <li>
                  <RouterLink to="/production-facility" class="nav-link">Production Facility
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact-us" class="nav-link">Contact Us</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="social-links">
          <div class="copy-right">
            <img src="../assets/images/logo.jpeg" alt="" />
            <h3>© 2024. Approach Accessories Limited. All rights reserved.</h3>
          </div>
          <a href="#">
            <img src="../assets/images/social/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="../assets/images/social/linkdin.png" alt="Linkdin" />
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.footer {
  // position: fixed;
  bottom: 0;
  width: 100%;

  .footer-top {
    background: var(--color-primary);

    &_item {
      width: 80%;
      margin: 0 auto;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-item {
        color: var(--vt-c-white);

        h3 {
          font-size: 18px;
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
          font-size: 14px;
          line-height: 20px;
          color: var(--vt-c-white);
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
                font-size: 14px;
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
    background: var(--color-primary-dark);
    width: 100%;
    padding: 12px 0;

    .social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 90%;
      margin: 0 auto;

      .copy-right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        h3 {
          color: #fff;
          font-size: 15px;
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
        transition: all ease-in-out 0.3s;

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

@media (max-width: 768px) {
  .footer {
    .footer-top {
      &_item {
        align-items: flex-start;
        flex-direction: column;
        padding-left: 20px;

        .left-item {
          h3 {
            font-size: 16px;
          }

          p {
            font-size: 13px;
          }
        }

        .middle-item {}

        .right-item {
          &_link {
            ul {
              li {
                a {
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }

    .footer-bottom {
      .social-links {
        gap: 5px;

        .copy-right {
          align-items: flex-start;
          gap: 5px;
          flex-direction: column;

          h3 {
            font-size: 11px;
          }

          img {
            width: 20px;
            border-radius: 10%;
            display: none;
          }
        }

        a {
          img {
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
