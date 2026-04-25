<script lang="ts">
import type { Skill } from './TimelineEntry.vue'

export type TimelineEntryProps = {
  id: string
  date: string
  company: string
  jobTitle: string
  description: string
  skills: Skill[]
}
</script>

<script lang="ts" setup vapor>
import TimelineEntry from './TimelineEntry.vue'
import type { PropType } from 'vue'

defineProps({
  timelineData: {
    type: Array as PropType<TimelineEntryProps[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col space-y-10">
    <TimelineEntry
      v-for="(entry, i) in timelineData"
      :key="i"
      :date="entry.date"
      :job-title="entry.jobTitle"
      :company="entry.company"
      :skills="entry.skills"
      :description="entry.description"
      :direction="i % 2 === 0 ? 'left' : 'right'"
    >
      <template #icon>
        <slot :name="`${entry.id}-icon`" />
      </template>
    </TimelineEntry>
  </div>
</template>
