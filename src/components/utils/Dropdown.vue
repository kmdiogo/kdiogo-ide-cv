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
  <div class="relative dropdown" v-click-outside="closeDropdown">
    <button
      class="flex items-center"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
    >
      <slot v-if="isOpen" name="dropdown-open"></slot>
      <slot v-else name="dropdown-closed"></slot>
    </button>
    <div
      class="mt-2 border-gray-800 border bg-darcula-500 absolute z-50 shadow flex whitespace-nowrap p-2"
      v-if="isOpen"
    >
      <slot name="dropdown-content"></slot>
    </div>
  </div>
</template>
