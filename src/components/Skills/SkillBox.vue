<script lang="ts" setup>
import SkillHighlight from "@/components/Skills/SkillHighlight.vue";
import { SkillHighlightProps } from "@/components/Skills/SkillHighlight.vue";

interface SkillBoxProps {
  title: string;
  skills: SkillHighlightProps[];
}

withDefaults(defineProps<SkillBoxProps>(), {
  skills: () => [],
});
</script>

<template>
  <div class="bg-darcula-600 rounded-lg py-3 px-2">
    <h2 class="font-bold text-4xl text-center mb-3">{{ title }}</h2>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6"
    >
      <SkillHighlight
        v-for="skill in skills"
        v-bind="skill"
        :key="skill.name + skill.details"
      />
    </div>
  </div>
</template>
