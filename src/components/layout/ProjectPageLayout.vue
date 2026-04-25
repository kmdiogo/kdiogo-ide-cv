<script lang="ts" setup vapor>
import ProjectTechnologyItem from '@/components/layout/ProjectTechnologyItem.vue'
import type { TechnologyItemProps } from '@/components/layout/ProjectTechnologyItem.vue'
import IconLink, { type IconLinkProps } from '@/components/shared/IconLink.vue'

export type ProjectPageLayoutProps = {
  title: string
  description: string
  technologies?: TechnologyItemProps[]
  links?: IconLinkProps[]
}

const props = withDefaults(defineProps<ProjectPageLayoutProps>(), {
  links: () => [],
  technologies: () => [],
})
</script>

<template>
  <div class="flex flex-col">
    <div class="grid grow grid-cols-12 gap-4">
      <div class="col-span-12 lg:col-span-8">
        <h1 class="text-forest-green-500 m-0 text-4xl">
          {{ props.title }}
        </h1>
        <h2 class="text-xl">
          {{ props.description }}
        </h2>
        <hr class="w-full" />
        <div class="mt-6">
          <slot />
        </div>
      </div>

      <div
        class="border-darcula-500 col-span-12 flex flex-col gap-6 rounded border-2 p-3 lg:col-span-4"
      >
        <div>
          <span class="font-bold">Links</span>
          <div class="flex flex-col gap-1">
            <span v-if="links.length === 0" class="text-darcula-300 text-sm">No links to show</span>
            <IconLink
              v-for="link in links"
              v-else
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
      <slot name="extra-content" />
    </div>
  </div>
</template>

<style scoped></style>
