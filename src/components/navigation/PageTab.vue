<script lang="ts" setup vapor>
import { type RouteLocationNormalized, useRoute } from 'vue-router'
import { useTabHistoryStore } from '@/stores/tab-history'
import { computed, ref, type PropType } from 'vue'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faTimesCircle as farTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle as fasTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { VaporRouterLink } from 'vue-router'

const props = defineProps({
  route: {
    type: Object as PropType<RouteLocationNormalized>,
    required: true,
  },
})

const tabHistoryStore = useTabHistoryStore()
const currentRoute = useRoute()
const closeIcon = ref(farTimesCircle)

const routeActive = computed(() => {
  return currentRoute.matched.some(({ path }) => path === props.route.path)
})
</script>

<template>
  <div
    class="flex shrink-0 p-3 py-1 transition-colors"
    :class="{
      'hover:bg-forest-green-800 bg-green-900': routeActive,
      'bg-darcula-500 hover:bg-darcula-600': !routeActive,
    }"
  >
    <VaporRouterLink :to="route.path" class="flex">
      <div class="w-4">
        <FontAwesomeIcon :icon="props.route.meta?.icon" :style="{ color: route.meta?.iconColor }" />
      </div>
      {{ route.meta?.label }}
    </VaporRouterLink>
    <button
      class="hover:text-darcula-300 ml-2 flex items-center"
      @mouseleave="closeIcon = farTimesCircle"
      @mouseover="closeIcon = fasTimesCircle"
      @click="tabHistoryStore.removeTabFromHistory(route)"
    >
      <FontAwesomeIcon :icon="closeIcon" class="size-3.5" />
    </button>
  </div>
</template>
