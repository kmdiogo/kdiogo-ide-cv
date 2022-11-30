<script lang="ts" setup>
import TimelineEntry from "./TimelineEntry.vue";
import { PropType } from "vue";

export interface TimelineEntryProps {
  id: string;
  company: string;
  jobTitle: string;
  description?: string;
  skills: string[];
  date: string;
}

defineProps({
  timelineData: {
    type: Array as PropType<TimelineEntryProps[]>,
    required: true,
  },
});
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
      <template v-slot:icon>
        <slot :name="`${entry.id}-icon`"></slot>
      </template>
    </TimelineEntry>
  </div>
</template>

<style scoped lang="postcss"></style>
