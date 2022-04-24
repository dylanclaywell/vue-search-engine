<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: String,
})
</script>

<template>
  <button class="submit-button">{{ props.label }}</button>
</template>

<style scoped>
.submit-button {
  background: var(--gray-100);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: #3c4043;
  font-family: arial;
}

.submit-button:hover {
  border: 1px solid var(--border-gray);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
