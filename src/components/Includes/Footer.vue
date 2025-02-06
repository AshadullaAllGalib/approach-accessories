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
            <div class="phone-email">
              <a href="tel:+880 1715 411616"><i class="pi pi-phone"></i>+880 1715 411616</a>
              <a href="tel:+880 1714 338707"><i class="pi pi-phone"></i>+880 1714 338707</a><br>
              <a href="tel:+880 1718 094002"><i class="pi pi-phone"></i>+880 1718 094002</a>
              <a href="tel:+880 1716 009940"><i class="pi pi-phone"></i>+880 1716 009940</a><br>
              <a href="tel:+880 1914 004335"><i class="pi pi-phone"></i>+880 1914 004335</a>
              <a href="tel:+880 1977 094002"><i class="pi pi-phone"></i>+880 1977 094002</a>
            </div>
            <h3>E-mail:</h3>
            <div class="phone-email">
              <a href="mailto:info@approach-bd.com">
                <i class="pi pi-envelope"></i>approach@dhaka.net
              </a><br>
              <a href="mailto:approach@dhaka.net">
                <i class="pi pi-envelope"></i>info@approach-bd.com
              </a>
            </div>
          </div>
          <!-- <div class="right-item left-item">
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
          </div> -->
          <div class="approach-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1230.1744275936899!2d90.25271364566922!3d23.7816128861017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755eb1c0fa2961b%3A0x63aa09ed4a14fceb!2sApproach%20Accessories%20Limited!5e0!3m2!1sen!2sbd!4v1738821440646!5m2!1sen!2sbd"
              width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="social-links">
          <div class="copy-right">
            <img src="@/assets/images/logo.jpeg" alt="" />
            <h3>© 2025. Approach Accessories Ltd. All rights reserved.</h3>
          </div>
          <a href="#">
            <img src="@/assets/images/social/facebook.png" alt="Facebook" />
          </a>
          <a href="#">
            <img src="@/assets/images/social/linkdin.png" alt="Linkdin" />
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
      padding: 15px 0 10px 0;
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

      .middle-item {
        .phone-email {
          a {

            font-size: 14px;
            line-height: 20px;
            color: var(--vt-c-white);
            text-decoration: none;
            padding-right: 10px;

            i {
              margin-right: 5px;
            }
          }

        }
      }

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

      .approach-map {
        iframe {
          border-radius: 10px;
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

        .left-item {
          h3 {
            font-size: 16px;
          }

          p {
            font-size: 11px;
          }
        }

        .middle-item {
          .phone-email {
            a {

              font-size: 11px;
              padding-right: 7px;

              i {
                margin-right: 3px;
              }
            }

          }
        }

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

        .approach-map {
          padding: 20px 0;

          iframe {
            width: 100%;
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
            font-size: 10px;
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
