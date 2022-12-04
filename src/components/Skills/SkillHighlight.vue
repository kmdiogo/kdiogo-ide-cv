<script lang="ts" setup>
export type SkillHighlightProps = {
  imgSrc: string;
  name: string;
  details: string;
};

const props = defineProps<SkillHighlightProps>();
</script>

<template>
  <div class="flex flex-col items-center leading-tight text-center">
    <img
      :src="props.imgSrc"
      class="h-28 rounded-lg"
      alt="Logo for this skill."
    />
    <span class="font-bold text-2xl mt-2">{{ props.name }}</span>
    <span class="text-darcula-300">
      {{ props.details }}
    </span>
  </div>
</template>
