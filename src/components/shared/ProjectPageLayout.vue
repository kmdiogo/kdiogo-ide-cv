<script lang="ts" setup>
import ProjectTechnologyItem from "@/components/shared/ProjectTechnologyItem.vue";
import { TechnologyItemProps } from "@/components/shared/ProjectTechnologyItem.vue";
import IconLink, { IconLinkProps } from "@/components/shared/IconLink.vue";

export type ProjectPageLayoutProps = {
  title: string;
  description: string;
  technologies: TechnologyItemProps[];
  links: IconLinkProps[];
};

const props = withDefaults(defineProps<ProjectPageLayoutProps>(), {
  links: () => [],
  technologies: () => [],
});
</script>

<template>
  <div class="flex flex-col">
    <div class="grid gap-4 grid-cols-12 grow">
      <div class="col-span-12 lg:col-span-8">
        <h1 class="text-forest-green-500 m-0 text-4xl">
          {{ props.title }}
        </h1>
        <h2 class="text-xl">{{ props.description }}</h2>
        <hr class="w-full" />
        <div class="mt-6">
          <slot></slot>
        </div>
      </div>

      <div
        class="col-span-12 lg:col-span-4 border-2 border-darcula-500 rounded p-3 flex flex-col gap-6"
      >
        <div>
          <span class="font-bold">Links</span>
          <div class="flex flex-col gap-1">
            <span class="text-sm text-darcula-300" v-if="links.length === 0"
              >No links to show</span
            >
            <IconLink
              v-else
              v-for="link in links"
              :key="link.href"
              :icon="link.icon"
              :href="link.href"
            />
          </div>
        </div>

        <div>
          <span class="font-bold">Technologies</span>
          <div class="flex flex-col gap-2">
            <ProjectTechnologyItem
              v-for="technology in technologies"
              :key="technology.name"
              :name="technology.name"
              :img-src="technology.imgSrc"
              :description="technology.description"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12">
      <slot name="extra-content"></slot>
    </div>
  </div>
</template>

<style scoped></style>
