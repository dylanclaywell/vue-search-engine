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

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

#app {
  font-family: arial;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

:root {
  --rounded-sm: 4px;
  --rounded-md: 8px;
  --rounded-lg: 12px;
  --rounded-full: 9999px;

  --menu-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);

  --purple: #609;
  --blue-100: #1a0dab;
  --blue-200: #1a73e8;
  --blue-300: #2b7de9;
  --blue-400: #5094ed;
  --border-gray: #dfe1e5;
  --gray-100: #656565;
  --gray-200: #9f9f9f;
  --gray-300: #d6d6d6;
  --gray-400: #f2f2f2;
  --gray-500: #f8f9fa;
}
</style>
