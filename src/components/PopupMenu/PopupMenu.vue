<script setup lang="ts"></script>

<template>
  <div class="popup-menu">
    <slot />
  </div>
</template>

<style scoped>
.popup-menu {
  position: absolute;
  background-color: white;
  box-shadow: var(--menu-shadow);
  border-radius: 0.5rem;
  max-height: calc(100vh - 3.5rem);
  overflow-y: auto;
}
</style>
