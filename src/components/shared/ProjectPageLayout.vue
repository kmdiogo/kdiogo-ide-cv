<script lang="ts" setup>
import { PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array as PropType<string[]>,
    required: true,
  },
  githubLink: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div>
    <div class="flex">
      <h1 class="text-forest-green-600 m-0 text-5xl font-bold">
        {{ props.title }}
      </h1>
      <a
        class="hover:animate-pendulum ml-auto"
        :href="props.githubLink"
        v-if="props.githubLink"
        target="_blank"
      >
        <FontAwesomeIcon :icon="['fab', 'github']" size="2x" />
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
    <h2 class="text-2xl">{{ props.description }}</h2>
    <h3 class="text-xl m-0">
      Technologies: {{ props.technologies.join(", ") }}
    </h3>
    <hr class="w-full" />

    <div class="mt-6">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
