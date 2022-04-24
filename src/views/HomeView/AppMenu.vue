<script setup lang="ts">
import PopupMenu from '@/components/PopupMenu/PopupMenu.vue'

interface App {
  name: string
  // This is the position of the image from Google's static asset. It should be set to the value of the background-position property
  imagePosition?: string
}

const apps: App[] = [
  {
    name: 'Account',
  },
  {
    name: 'Search',
    imagePosition: '0 -1794px',
  },
  {
    name: 'Maps',
    imagePosition: '0 -483px',
  },
  {
    name: 'YouTube',
    imagePosition: '0 -2622px',
  },
  {
    name: 'Play',
    imagePosition: '0 -207px',
  },
  {
    name: 'News',
    imagePosition: '0 -1311px',
  },
]
</script>

<template>
  <PopupMenu class="popup-menu">
    <div class="content">
      <div class="content__app" v-for="app in apps" :key="app.name">
        <span
          class="content__app-image"
          v-if="app.imagePosition"
          :style="{ 'background-position': app.imagePosition }"
        />
        <span class="content__app-name">{{ app.name }}</span>
      </div>
    </div>
  </PopupMenu>
</template>

<style scoped>
.popup-menu {
  top: 4rem;
  right: 1rem;
}

.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  gap: 0.5rem;
}

.content__app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.1rem 0.65rem;
  border-radius: 0.5rem;
}

.content__app:hover {
  background-color: #d8e7f0;
}

.content__app-image {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-image: url('https://ssl.gstatic.com/gb/images/p1_4d827a84.png');
  background-size: 64px 3100px;
}

.content__app-name {
  font-size: 0.9rem;
}
</style>
