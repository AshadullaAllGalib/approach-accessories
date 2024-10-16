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

    <div id="London" class="tabcontent" v-if="activeTab == 'Tab1'">
      <h3>Tab-01 Content</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent" v-if="activeTab == 'Tab2'">
      <h3>Tab-02 Content</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" class="tabcontent" v-if="activeTab == 'Tab3'">
      <h3>Tab-03 Content</h3>
      <p>Tokyo is the capital of Japan.</p>
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
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}

/* Style the close button */
.topright {
  float: right;
  cursor: pointer;
  font-size: 28px;
}

.topright:hover {
  color: red;
}
</style>
