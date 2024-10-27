<template>
  <div class="tabs">
    <h2>Tabs</h2>
    <p>
      Click on the x button in the top right corner to close the current tab:
    </p>
    <div class="tab">
      <button class="tablinks" v-for="tabItem in tabItems" @click="activeTab = tabItem"
        :class="[activeTab == tabItem ? 'active' : '']">
        {{ tabItem }}
      </button>
    </div>

    <div class="tabcontent" v-if="activeTab == tabItems[0]">
      <h3>Tab-01 Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        dicta nobis placeat odit tempore neque quibusdam asperiores earum culpa
        mollitia excepturi atque, optio dolorum iste velit sit minima nemo? Hic.
      </p>
    </div>

    <div class="tabcontent" v-if="activeTab == tabItems[1]">
      <h3>Tab-02 Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        dicta nobis placeat odit tempore neque quibusdam asperiores earum culpa
        mollitia excepturi atque, optio dolorum iste velit sit minima nemo? Hic.
      </p>
    </div>

    <div class="tabcontent" v-if="activeTab == tabItems[2]">
      <h3>Tab-03 Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        dicta nobis placeat odit tempore neque quibusdam asperiores earum culpa
        mollitia excepturi atque, optio dolorum iste velit sit minima nemo? Hic.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
let tabItems = ['Tab1', 'Tab2', 'Tab3']
const isActiveLink = routePath => {
  const route = useRoute()
  return route.path === routePath
}

const activeTab = ref('Tab1')
</script>

<style lang="scss" scoped>
.tabs {
  width: 80%;
  margin: 30px auto;

  .tab {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 20px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      border-radius: 100px;
      background-color: #cccccc83;
    }

    button {
      position: relative;
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
      font-size: 17px;
      border-radius: 100px;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: var(--color-primary);
        color: #fff;

        &::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 7px;
          border-radius: 100px;
          background-color: var(--color-primary);
          z-index: 1;
        }
      }
    }
  }

  .tabcontent {
    position: relative;
    padding: 6px 12px;
    animation: tabContentAnimation 1s ease-in-out forwards;
  }
}

@keyframes tabContentAnimation {
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Style the tab content */
</style>
