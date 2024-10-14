<template>
  <header>
    <div class="header-container">
      <div class="logo">
        <a href="">
          <img alt="main logo" src="@/assets/images/logo.jpeg" height="90" />
        </a>
      </div>
      <nav class="navigation">
        <ul>
          <li>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">Product</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">Operation Strength</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">Investor Information</RouterLink>
          </li>
          <li>
            <RouterLink to="/" class="nav-link">Production Facility</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: rgb(198, 218, 218);

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
          height: 90px;
        }
      }
    }

    nav.navigation {
      ul {
        list-style: none;
        display: flex;

        li {
          padding-left: 15px;

          &:not(:last-child) {
            border-right: 2px solid var(--color-text);
            padding-right: 15px;
          }

          .nav-link {
            position: relative;
            display: inline-block;
            text-decoration: none;
            color: var(--color-text);
            font-weight: 500;
            transition: all 0.3s;

            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 2px;
              border-radius: 100px;
              background-color: var(--color-text);
              transition: all 0.4s;
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
  }
}
</style>
