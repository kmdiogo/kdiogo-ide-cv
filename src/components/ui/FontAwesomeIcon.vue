<script lang="ts" setup vapor>
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { computed } from 'vue'

const props = defineProps<{ icon: IconDefinition }>()

const iconData = computed(() => {
  const [width, height, , , pathData] = props.icon.icon
  return {
    viewBox: `0 0 ${width} ${height}`,
    path: Array.isArray(pathData) ? pathData[0] : pathData,
  }
})
</script>

<style scoped>
.fa-icon {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  box-sizing: content-box;
}
</style>

<template>
  <svg :viewBox="iconData.viewBox" fill="currentColor" class="fa-icon">
    <path
      v-for="(d, index) in Array.isArray(iconData.path) ? iconData.path : [iconData.path]"
      :key="index"
      :d="d"
    />
  </svg>
</template>
