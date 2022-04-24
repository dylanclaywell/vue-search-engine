<script setup lang="ts">
import SearchField from '@/components/SearchField/SearchField.vue'
import SubmitButton from '@/components/SubmitButton/SubmitButton.vue'

import type { Suggestion } from '@/components/components.interface'

const suggestions: Suggestion[] = [
  {
    text: 'pixel to rem',
    type: 'historical',
  },
  {
    text: 'vue event listener',
    type: 'historical',
  },
  {
    text: 'vue conditional rendering',
    type: 'historical',
  },
]
</script>

<template>
  <main class="home-main">
    <div class="home-main__container">
      <div class="home-main__logo-container">
        <img class="home-main__logo" alt="Not Google Logo" src="logo.svg" />
      </div>
      <SearchField :suggestions="suggestions" icon="search" />
      <div class="home-main__button-container">
        <SubmitButton label="Google Search" variant="gray" />
        <SubmitButton label="I'm Feeling Lucky" variant="gray" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-main {
  text-align: center;
  max-width: 36rem;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 1rem;
}

.home-main__container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.home-main__logo-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  max-height: 18.125rem;
}

.home-main__logo {
  max-width: 17rem;
  margin: auto;
  margin-bottom: 1.5rem;
}

.home-main__heading {
  letter-spacing: 2px;
  font-size: 96px;
}

.home-main__button-container {
  display: flex;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
  justify-content: center;
  flex-grow: 2;
}

.home-main__button-container > .submit-button {
  height: fit-content;
}

.home-main__button-container > .submit-button:not(:last-child) {
  margin-right: 0.75rem;
}
</style>
