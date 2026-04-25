<script lang="ts">
export type SkillType = 'Frontend' | 'Backend' | 'Infrastructure' | 'Other'

export type Skill = {
  name: string
  type: SkillType
}
</script>

<script lang="ts" setup vapor>
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

type TimelineEntryProps = {
  company: string
  jobTitle: string
  description?: string
  date: string
  direction?: 'left' | 'right'
  skills?: Skill[]
}
withDefaults(defineProps<TimelineEntryProps>(), {
  skills: () => [],
  direction: 'left',
  description: '',
})
</script>

<template>
  <div class="relative box-border flex">
    <div class="relative order-2 mr-5 shrink-0 grow-0 md:mx-10">
      <div
        class="border-darcula-300 bg-darcula-700 relative z-10 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2"
      >
        <slot name="icon">
          <FontAwesomeIcon :icon="faQuestion" />
        </slot>
      </div>

      <!-- White bar -->
      <div
        class="bg-darcula-200 absolute -top-6 right-0 left-0 mr-auto ml-auto w-1 rounded"
        style="height: 135%"
      />
    </div>

    <div
      class="relative top-2 order-3 flex-1"
      :class="{
        'md:order-1': direction === 'left',
        'md:order-3': direction === 'right',
      }"
    >
      <div class="bg-darcula-600 flex w-full flex-col rounded p-4">
        <span class="text-2xl font-semibold">{{ jobTitle }}</span>
        <span class="mb-0 text-xl md:mb-4">{{ company }}</span>
        <span class="mb-4 block text-sm md:hidden">{{ date }}</span>
        <span>
          {{ description }}
        </span>
        <div v-if="skills.length > 0" class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="skill in skills"
            :key="skill.name"
            class="rounded-lg border p-1 px-2 text-sm font-semibold"
            :class="{
              'border-green-500 bg-green-500/25': skill.type === 'Frontend',
              'border-purple-500 bg-purple-500/25': skill.type === 'Infrastructure',
              'border-blue-500 bg-blue-500/25': skill.type === 'Backend',
              'bg-darcula-400/25 border-darcula-400': skill.type === 'Other',
            }"
          >
            {{ skill.name }}
          </span>
        </div>
      </div>
      <span class="arrow-left block md:hidden" />
      <span v-if="direction === 'left'" class="arrow-right hidden md:block" />
      <span v-else class="arrow-left hidden md:block" />
    </div>

    <div
      class="relative hidden flex-1 md:block"
      :class="{
        'order-3': direction === 'left',
        'order-1 text-right': direction === 'right',
      }"
    >
      <div class="absolute top-4 w-full text-lg font-semibold">
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
