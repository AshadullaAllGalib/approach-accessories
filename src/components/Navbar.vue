<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/">
          <img alt="main logo" src="@/assets/images/logo.jpeg" height="90" />
        </RouterLink>
      </div>
      <nav class="navigation">
        <ul class="nav-menu" :class="{ 'active': isMenuOpen }"
          @click.prevent="isMenuOpen = !isMenuOpen">
          <li>
            <RouterLink to="/" :class="[isActiveLink('/') ? 'active' : 'nav-link']">Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" :class="[isActiveLink('/about') ? 'active' : 'nav-link']">About
              Us
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/product" :class="[isActiveLink('/product') ? 'active' : 'nav-link']">
              Product</RouterLink>
          </li>
          <li>
            <RouterLink to="/operation-strength"
              :class="[isActiveLink('/operation-strength') ? 'active' : 'nav-link']">Operation
              Strength
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery" :class="[isActiveLink('/gallery') ? 'active' : 'nav-link']">
              Gallery
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/production-facility"
              :class="[isActiveLink('/production-facility') ? 'active' : 'nav-link']">Production
              Facility
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact-us"
              :class="[isActiveLink('/contact-us') ? 'active' : 'nav-link']">Contact Us
            </RouterLink>
          </li>
        </ul>
      </nav>
      <div class="hamburger" :class="{ 'active': isMenuOpen }"
        @click.prevent="isMenuOpen = !isMenuOpen">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';
const isMenuOpen = ref(false);
const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<style lang="scss" scoped>
header {
  height: 100px;
  background: #10597a;

  .header-container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      a {
        text-decoration: none;
        display: inline-block;

        img {
          height: 80px;
        }
      }
    }

    nav.navigation {
      .nav-menu {
        list-style: none;
        display: flex;

        li {
          padding-left: 10px;

          &:not(:last-child) {
            border-right: 2px solid var(--vt-c-white);
            padding-right: 10px;
          }

          .nav-link,
          .active {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: var(--vt-c-white);
            font-weight: 500;
            font-size: 15px;
            transition: all 0.3s;

            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              border-radius: 100px;
              background-color: var(--vt-c-white);
              transition: all 0.4s;
            }

            &.active {
              &::after {
                width: 100%;
              }
            }

            &:hover {
              transform: scale(1.1);

              &::after {
                width: 100%;
              }
            }
          }
        }
      }
    }

    .hamburger {
      display: none;
      cursor: pointer;

      .bar {
        display: block;
        width: 30px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  header {
    height: 70px;

    .header-container {
      .logo {
        padding-top: 5px;

        a {
          img {
            height: 50px;
          }
        }
      }

      nav.navigation {
        .nav-menu {
          position: fixed;
          top: 0;
          bottom: 0;
          right: -100%;
          gap: 20px;
          justify-content: flex-start;
          flex-direction: column;
          background-color: rgba(27, 81, 112, 0.966);
          width: 100%;
          text-align: center;
          transition: 0.3s;
          padding: 100px 0px 0px 15px;
          z-index: 100;

          &.active {
            right: 0;
          }

          li {
            padding-left: 0;
            padding-right: 15px;

            &:not(:last-child) {
              border-right: none;
            }

            .nav-link {
              border-bottom: 1px solid #fff;
              width: 100%;

            }
          }
        }
      }

      .hamburger {
        display: block;
        z-index: 1000;
      }

      .hamburger.active .bar:nth-child(2) {
        opacity: 0;
      }

      .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}
</style>
