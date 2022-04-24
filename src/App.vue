<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: arial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

:root {
  --rounded-sm: 4px;
  --rounded-md: 8px;
  --rounded-lg: 12px;
  --rounded-full: 9999px;

  --purple: #609;
  --blue: #1a0dab;
  --light-blue: #1a73e8;
  --border-gray: #dfe1e5;
  --gray-100: #f8f9fa;
  --gray-200: #ebebeb;
  --gray-300: #656565;
}
</style>
