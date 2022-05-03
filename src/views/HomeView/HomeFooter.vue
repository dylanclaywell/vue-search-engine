<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="home-footer">
    <div class="home-footer__link-container">
      <RouterLink class="home-footer__link" to="/">Advertising</RouterLink>
      <RouterLink class="home-footer__link" to="/">Business</RouterLink>
      <RouterLink class="home-footer__link" to="/">How Search Works</RouterLink>
    </div>
    <div class="home-footer__link-container">
      <RouterLink class="home-footer__link" to="/">Privacy</RouterLink>
      <RouterLink class="home-footer__link" to="/">Terms</RouterLink>
      <RouterLink class="home-footer__link" to="/">Settings</RouterLink>
    </div>
  </footer>
</template>

<style scoped>
.home-footer {
  padding: 0.25rem 1rem;
  background-color: var(--gray-400);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
}

.home-footer__link-container {
  padding: 0.75rem;
}

.home-footer__link {
  color: var(--gray-100);
  font-size: 0.87rem;
  padding: 1rem;
}

@media screen and (max-width: 1200px) {
  .home-footer {
    justify-content: space-evenly;
  }
}
</style>
