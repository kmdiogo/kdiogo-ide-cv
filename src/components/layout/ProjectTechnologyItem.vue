<script lang="ts" setup vapor>
export type TechnologyItemProps = {
  name: string
  description: string
  imgSrc: string
}

defineProps<TechnologyItemProps>()
</script>

<template>
  <div class="bg-darcula-600 flex items-center gap-2 rounded px-2 py-1">
    <div class="h-12 w-12 shrink-0 grow-0 p-2">
      <img class="h-full w-full" :src="imgSrc" />
    </div>
    <div class="flex flex-col">
      <span class="text-sm">{{ name }}</span>
      <span class="text-darcula-300 text-xs">{{ description }}</span>
    </div>
  </div>
</template>
