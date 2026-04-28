<script lang="ts" setup vapor>
export type TimelineEntryProps = {
  title: string
  description: string
  date: string
  spiceLevel: 1 | 2 | 3
}

const props = defineProps<{ entry: TimelineEntryProps }>()
</script>

<template>
  <div class="relative box-border flex">
    <div class="hidden text-right md:block">
      <div class="w-full text-lg font-semibold">
        {{ props.entry.date }}
      </div>
    </div>
    <div class="relative mr-5 ml-2 shrink-0">
      <!-- White bar -->
      <div
        class="bg-darcula-200 absolute -top-6 right-0 left-0 mr-auto ml-auto w-1 rounded"
        style="height: 160%"
      />
    </div>

    <div class="relative -top-1 flex-1">
      <div class="bg-darcula-600 flex w-full flex-col rounded px-4 py-2">
        <span class="text-md leading-tight font-semibold">{{ props.entry.title }}</span>
        <span class="text-darcula-300 mb-4 block text-sm md:hidden">{{ props.entry.date }}</span>
        <span>
          {{ props.entry.description }}
        </span>
      </div>
      <span class="arrow-left block md:hidden" />
      <span class="arrow-left hidden md:block" />
    </div>
  </div>
</template>

<style scoped>
@reference "../../styles/index.css";

.arrow-right {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid var(--color-darcula-600);
  @apply absolute top-2 -right-2;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--color-darcula-600);
  @apply absolute top-2 -left-2;
}
</style>
