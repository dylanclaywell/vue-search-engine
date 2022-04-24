<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  label: string
  variant: 'gray' | 'blue'
}

const props = defineProps<Props>()
</script>

<template>
  <button
    class="submit-button"
    :class="{
      'submit-button--blue': props.variant === 'blue',
      'submit-button--gray': props.variant === 'gray',
    }"
  >
    {{ props.label }}
  </button>
</template>

<style scoped>
.submit-button {
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-family: arial;
}

.submit-button:hover {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.submit-button--blue {
  background-color: var(--blue-200);
  color: white;
}

.submit-button--blue:hover {
  background-color: var(--blue-300);
}

.submit-button--blue:focus {
  background-color: var(--blue-400);
}

.submit-button--gray {
  color: #3c4043;
  background-color: var(--gray-500);
}

.submit-button--gray:hover {
  border: 1px solid var(--border-gray);
}
</style>
