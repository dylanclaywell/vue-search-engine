<script setup lang="ts">
interface Props {
  name?: string
  isSymbol?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button class="icon-button">
    <span
      :class="{
        'material-icons': !props.isSymbol,
        'material-symbols-outlined': props.isSymbol,
      }"
    >
      {{ props.name }}
    </span>
    <slot />
  </button>
</template>

<style scoped>
.icon-button {
  color: rgb(71, 71, 71);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--rounded-full);
  cursor: pointer;
  background: none;
  border: none;
}

.icon-button:hover,
.icon-button:focus {
  outline: none;
  text-decoration: none;
}

.icon-button:hover {
  background-color: var(--gray-400);
}

.icon-button:focus {
  background-color: var(--gray-300);
}
</style>
