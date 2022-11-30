<template>
  <div class="flex">
    <div class="flex flex-col items-center" style="min-width: 125px">
      <h3 class="text-2xl font-bold">{{ year }}</h3>
      <slot name="logos" class="flex flex-col justify-center"></slot>
    </div>
    <div class="border-l-2 border-gray-300 flex-grow p-2">
      <h2 class="m-0 text-2xl font-bold">{{ jobTitle }}</h2>
      <h3 class="m-0 text-xl">
        <i>{{ company }}</i>
      </h3>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperienceItem",
  props: {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    logos: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped></style>
