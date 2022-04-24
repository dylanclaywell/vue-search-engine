<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  name?: string
  isSymbol?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <RouterLink to="" class="icon-link">
    <span
      :class="{
        'material-icons': !props.isSymbol,
        'material-symbols-outlined': props.isSymbol,
      }"
    >
      {{ props.name }}
    </span>
  </RouterLink>
</template>

<style scoped>
.icon-link {
  color: rgb(71, 71, 71);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
}

.icon-link:hover,
.icon-link:focus {
  outline: none;
  text-decoration: none;
  background-color: rgb(239, 239, 239);
}
</style>
