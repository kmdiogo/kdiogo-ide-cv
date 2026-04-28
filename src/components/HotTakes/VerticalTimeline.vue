<script lang="ts" setup vapor>
import TimelineEntry, { type TimelineEntryProps } from './TimelineEntry.vue'

defineProps<{ timelineData: TimelineEntryProps[] }>()
</script>

<template>
  <div class="flex flex-col space-y-10">
    <TimelineEntry v-for="(entry, i) in timelineData" :key="i" :entry="entry"> </TimelineEntry>
  </div>
</template>
