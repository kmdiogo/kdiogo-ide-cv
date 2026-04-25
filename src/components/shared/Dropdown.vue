<script lang="ts" setup vapor>
import { useClickOutside } from '@/composables/useClickOutside'
import { ref, useTemplateRef } from 'vue'

const dropdownEl = useTemplateRef('dropdownElement')
const isOpen = ref(false)
function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}

useClickOutside(dropdownEl, closeDropdown)
</script>

<template>
  <div class="dropdown relative" ref="dropdownElement">
    <button class="flex items-center" :aria-expanded="isOpen" @click="toggleDropdown">
      <slot v-if="isOpen" name="dropdown-open" />
      <slot v-else name="dropdown-closed" />
    </button>
    <div
      v-if="isOpen"
      class="bg-darcula-500 absolute z-50 mt-2 flex border border-gray-800 p-2 whitespace-nowrap shadow"
    >
      <slot name="dropdown-content" />
    </div>
  </div>
</template>
