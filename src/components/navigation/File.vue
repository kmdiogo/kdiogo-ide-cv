<script lang="ts" setup vapor>
import { computed } from 'vue'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { type RouteLocationRaw, useRoute } from 'vue-router'
import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { VaporRouterLink } from 'vue-router'

type ToRoute = {
  name: string
}

type FileProps = {
  fileName: string
  iconColor?: string
  icon?: IconDefinition
  to: RouteLocationRaw
}

const props = defineProps<FileProps>()

const route = useRoute()

const routeActive = computed(() => {
  if (typeof props.to == 'string') {
    return route.matched.some(({ path }) => path === props.to)
  }
  return route.matched.some(({ name }) => name === (props.to as ToRoute).name)
})
</script>

<template>
  <div class="flex">
    <div class="mr-4 w-1 shrink-0" />
    <VaporRouterLink
      class="hover:text-darcula-300 whitespace-nowrap"
      :to="to"
      :class="{ 'bg-green-900': routeActive }"
    >
      <span class="mr-2">
        <FontAwesomeIcon v-if="props.icon" :icon="props.icon" :style="{ color: iconColor }" />
      </span>
      <span>{{ fileName }}</span>
    </VaporRouterLink>
  </div>
</template>
