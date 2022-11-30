<script lang="ts" setup>
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="flex flex-col items-center leading-tight text-center">
    <img :src="props.imgSrc" class="h-36" alt="Logo for this skill." />
    <span class="font-bold text-2xl mt-2">{{ props.name }}</span>
    <span class="text-darcula-300">
      {{ props.details }}
    </span>
  </div>
</template>
