<script lang="ts" setup>
import { ref } from "vue";
const isOpen = ref(false);
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}
</script>

<template>
  <div v-click-outside="closeDropdown" class="relative dropdown">
    <button
      class="flex items-center"
      :aria-expanded="isOpen"
      @click="toggleDropdown"
    >
      <slot v-if="isOpen" name="dropdown-open" />
      <slot v-else name="dropdown-closed" />
    </button>
    <div
      v-if="isOpen"
      class="mt-2 border-gray-800 border bg-darcula-500 absolute z-50 shadow flex whitespace-nowrap p-2"
    >
      <slot name="dropdown-content" />
    </div>
  </div>
</template>
