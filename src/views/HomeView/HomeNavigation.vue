<script setup lang="ts">
import IconLink from '@/components/IconLink.vue'
</script>

<template>
  <header class="home-header">
    <nav class="home-header__navigation">
      <div class="home-header__link-container">
        <RouterLink class="home-header__link" to="/">About</RouterLink>
        <RouterLink class="home-header__link" to="/">Store</RouterLink>
      </div>
      <div class="home-header__link-container">
        <RouterLink class="home-header__link" to="/">Gmail</RouterLink>
        <RouterLink class="home-header__link" to="/">Images</RouterLink>
        <IconLink name="apps" isSymbol />
        <RouterLink class="home-header__link" to="/"></RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.home-header {
  padding: 0.5rem 1rem;
}

.home-header__navigation {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.home-header__link-container {
  display: flex;
  align-items: center;
}

.home-header__link {
  margin: 0.75rem;
  font-size: 0.875rem;
}
</style>
