<script lang="ts" setup>
export type TechnologyItemProps = {
  name: string;
  description: string;
  imgSrc: string;
};

defineProps<TechnologyItemProps>();
</script>

<template>
  <div class="bg-darcula-600 flex px-2 py-1 gap-2 rounded items-center">
    <div class="w-12 h-12 p-2 grow-0 shrink-0">
      <img class="w-full h-full" :src="imgSrc" />
    </div>
    <div class="flex flex-col">
      <span class="text-sm">{{ name }}</span>
      <span class="text-xs text-darcula-300">{{ description }}</span>
    </div>
  </div>
</template>
