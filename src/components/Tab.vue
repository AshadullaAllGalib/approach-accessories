<template>
  <div class="tabs">
    <h2>Tabs</h2>
    <p>
      Click on the x button in the top right corner to close the current tab:
    </p>
    <div class="tab">
      <button
        class="tablinks"
        v-for="tabItem in tabItems"
        @click="activeTab = tabItem"
        :class="[activeTab == tabItem ? 'active' : '']"
      >
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
      <div class="members">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>

    <div class="tabcontent" v-if="activeTab == tabItems[2]">
      <div class="members">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
    <div class="tabcontent" v-if="activeTab == tabItems[3]">
      <h3>Vision & Values</h3>
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
import MemberCard from '@/components/MemberCard.vue'
const isMenuOpen = ref(false)
let tabItems = [
  'Our Profile',
  'Board of Directors',
  'Management Tam',
  'Vision & Values',
  'Recognition',
  'Publications',
  'Sustainability Report',
  'CSR',
]
const isActiveLink = routePath => {
  const route = useRoute()
  return route.path === routePath
}

const activeTab = ref(tabItems[0])
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
    padding: 30px 12px;
    animation: tabContentAnimation 1s ease-in-out forwards;

    .members {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .tabs {
    width: 90%;

    .tab {
      gap: 5px;
      padding-bottom: 10px;
      justify-content: flex-start;
      width: 100%;
      overflow-x: scroll;

      &::after {
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        border-radius: 100px;
        background-color: #cccccc83;
      }

      button {
        padding: 5px 15px;
        font-size: 14px;
        border-radius: 25px;

        &:hover {
          background-color: #ddd;
        }

        &.active {
          background-color: var(--color-primary);
          color: #fff;

          &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 6px;
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
    }
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
