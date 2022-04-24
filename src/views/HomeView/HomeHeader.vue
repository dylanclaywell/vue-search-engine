<script setup lang="ts">
import { ref } from 'vue'

import SubmitButton from '@/components/SubmitButton/SubmitButton.vue'
import IconButton from '@/components/IconButton/IconButton.vue'
import AppMenu from '@/views/HomeView/AppMenu.vue'

const isLoggedIn = ref(false)
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
        <IconButton name="apps" isSymbol />
        <IconButton v-if="isLoggedIn" class="home-header__link">
          <div class="settings-icon">D</div>
        </IconButton>
        <SubmitButton
          v-else
          label="Sign in"
          variant="blue"
          class="home-header__sign-in-button"
        />
      </div>
    </nav>
    <AppMenu />
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

.home-header__sign-in-button {
  margin-left: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.settings-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--rounded-full);
  background-color: lightskyblue;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}
</style>
