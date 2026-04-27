<script lang="ts" setup vapor>
import { useLayoutStore } from '@/stores/layout'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="flex items-center p-2">
    <button class="hover:bg-darcula-600 p-2" @click="layoutStore.toggleTerminalOpen()">
      <FontAwesomeIcon :icon="faTerminal" />
      Terminal
    </button>
  </div>
</template>

<style scoped></style>
