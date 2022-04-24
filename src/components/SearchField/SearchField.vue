<script setup lang="ts">
import { ref } from 'vue'
import SubmitButton from '@/components/SubmitButton/SubmitButton.vue'
import Suggestion from '@/components/SearchField/SearchSuggestion.vue'
import type { SuggestionType } from '@/components/components.interface'

const props = defineProps<{ icon: string; suggestions: SuggestionType[] }>()

const value = ref('')
const isExpanded = ref(false)
const input = ref<HTMLInputElement | null>(null)

function onClick() {
  isExpanded.value = true

  if (input.value) {
    input.value.focus()
  }
}

/**
 * For some reason Google makes the search icon click different
 * from the input click - on input click, the search box is
 * expanded with suggestions; on search icon click, the input
 * is just focused and the box is not expanded.
 */
function onSearchIconClick(event: MouseEvent) {
  event.stopPropagation()

  if (input.value) {
    input.value.focus()
  }
}

function onInputBlur() {
  isExpanded.value = false
}
</script>

<template>
  <div class="search-field">
    <div
      class="search-field__container"
      :class="{ 'search-field__container--expanded': isExpanded }"
      @click="onClick"
    >
      <div
        class="search-field__control-container"
        :class="{ 'search-field__control-container--expanded': isExpanded }"
      >
        <span
          v-if="Boolean(props.icon)"
          class="material-icons search-field__search-icon"
          @click="onSearchIconClick"
        >
          {{ props.icon }}
        </span>
        <input
          ref="input"
          v-model="value"
          class="search-field__control"
          @blur="onInputBlur"
        />
      </div>
      <div v-if="isExpanded" class="search-field__divider" />
      <div v-if="isExpanded">
        <div v-for="suggestion in props.suggestions" :key="suggestion.text">
          <Suggestion :text="suggestion.text" :type="suggestion.type" />
        </div>
        <div class="search-field__dropdown-button-container">
          <SubmitButton label="Google Search" variant="gray" />
          <SubmitButton label="I'm Feeling Lucky" variant="gray" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-field {
  position: relative;
  width: 100%;
  height: 3rem;
}

.search-field__container {
  background: white;
  z-index: 1;
  width: 100%;
  position: absolute;
  border: none;
  border: 1px solid var(--border-gray);
  display: flex;
  border-radius: var(--rounded-full);
  flex-direction: column;
}

.search-field__container--expanded {
  border-radius: 1.5rem;
}

.search-field__container:hover,
.search-field__container--expanded {
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
}

.search-field__control-container {
  display: flex;
  /* padding: 0.75rem; */
}

.search-field__control-container--expanded {
  padding-bottom: 0;
}

.search-field__divider {
  /* margin-top: 0.75rem; */
  margin-bottom: 0.3rem;
  margin-left: auto;
  margin-right: auto;
  width: 94%;
  height: 1px;
  border-top: 1px solid var(--border-gray);
}

.search-field__search-icon {
  padding-left: 0.75rem;
  color: var(--gray-200);
  font-size: 1.25rem;
  user-select: none;
  display: flex;
  align-items: center;
}

.search-field__control {
  border: none;
  width: 100%;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: var(--rounded-full);
}

.search-field__control:focus {
  outline: none;
}

.search-field__dropdown-button-container {
  padding-top: 1.25rem;
  padding-bottom: 1.5rem;
}

.search-field__dropdown-button-container > .submit-button:not(:last-child) {
  margin-right: 0.75rem;
}
</style>
