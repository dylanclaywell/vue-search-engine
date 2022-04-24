<script setup lang="ts">
import { defineProps } from 'vue'
import type { SuggestionType } from '@/components/components.interface'

type Props = {
  text: string
  type: SuggestionType
}

const props = defineProps<Props>()
</script>

<template>
  <div class="suggestion">
    <div class="suggestion__label">
      <span class="material-icons suggestion__icon"> schedule </span>
      <span
        class="suggestion__text"
        :class="{
          'suggestion__text--historical': props.type === 'historical',
        }"
      >
        {{ props.text }}
      </span>
    </div>
    <button class="suggestion__remove-button">Remove</button>
  </div>
</template>

<style scoped>
.suggestion {
  padding: 0.35rem 1rem;
  user-select: none;
  display: flex;
  justify-content: space-between;
}

.suggestion:hover {
  background-color: var(--gray-200);
}

.suggestion__label {
  display: flex;
  align-items: center;
}

.suggestion__text--historical {
  color: var(--purple);
}

.suggestion__icon {
  font-size: 1rem;
  color: gray;
  margin-left: 0.15rem;
  margin-right: 0.75rem;
}

.suggestion__remove-button {
  background: none;
  border: 0;
  color: gray;
  cursor: pointer;
}

.suggestion__remove-button:hover {
  text-decoration: underline;
  color: var(--light-blue);
}
</style>
