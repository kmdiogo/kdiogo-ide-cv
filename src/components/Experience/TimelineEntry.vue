<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

type TimelineEntryProps = {
  company: string;
  jobTitle: string;
  description?: string;
  date: string;
  direction?: "left" | "right";
  skills?: string[];
};
withDefaults(defineProps<TimelineEntryProps>(), {
  skills: () => [],
  direction: "left",
  description: "",
});
</script>

<template>
  <div class="flex box-border relative">
    <div class="relative grow-0 shrink-0 mr-5 md:mx-10 order-2">
      <div
        class="h-16 w-16 rounded-full flex justify-center items-center border-2 border-darcula-300 z-10 overflow-hidden relative bg-darcula-700"
      >
        <slot name="icon">
          <FontAwesomeIcon :icon="faQuestion" />
        </slot>
      </div>

      <!-- White bar -->
      <div
        class="w-1 bg-darcula-200 rounded absolute left-0 right-0 ml-auto mr-auto -top-6"
        style="height: 135%"
      />
    </div>

    <div
      class="relative top-2 flex-1 order-3"
      :class="{
        'md:order-1': direction === 'left',
        'md:order-3': direction === 'right',
      }"
    >
      <div class="bg-darcula-600 rounded p-4 w-full flex flex-col">
        <span class="text-2xl font-semibold">{{ jobTitle }}</span>
        <span class="text-xl mb-0 md:mb-4">{{ company }}</span>
        <span class="mb-4 text-sm block md:hidden">{{ date }}</span>
        <span>
          {{ description }}
        </span>
        <div v-if="skills.length > 0" class="mt-4 flex gap-2 flex-wrap">
          <span
            v-for="skill in skills"
            :key="skill"
            class="rounded-lg p-1 px-2 text-sm bg-darcula-300 text-darcula-900 font-semibold"
          >
            {{ skill }}
          </span>
        </div>
      </div>
      <span class="arrow-left block md:hidden" />
      <span v-if="direction === 'left'" class="arrow-right hidden md:block" />
      <span v-else class="arrow-left hidden md:block" />
    </div>

    <div
      class="flex-1 hidden md:block relative"
      :class="{
        'order-3': direction === 'left',
        'order-1 text-right': direction === 'right',
      }"
    >
      <div class="top-4 absolute w-full font-semibold text-lg">
        {{ date }}
      </div>
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
  @apply -right-2 absolute top-2;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--color-darcula-600);
  @apply -left-2 absolute top-2;
}
</style>
