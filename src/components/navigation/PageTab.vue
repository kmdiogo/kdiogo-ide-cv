<script lang="ts" setup>
import { RouteLocationNormalized, useRoute } from "vue-router";
import { useTabHistoryStore } from "@/stores/tab-history";
import { computed, ref, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimesCircle as farTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimesCircle as fasTimesCircle } from "@fortawesome/free-solid-svg-icons";

const props = defineProps({
  route: {
    type: Object as PropType<RouteLocationNormalized>,
    required: true,
  },
});

const tabHistoryStore = useTabHistoryStore();
const currentRoute = useRoute();
const closeIcon = ref(farTimesCircle);

const routeActive = computed(() => {
  return currentRoute.matched.some(({ path }) => path === props.route.path);
});
</script>

<template>
  <div
    class="p-3 py-1 flex transition-colors shrink-0"
    :class="{
      'bg-green-900 hover:bg-forest-green-800': routeActive,
      'bg-darcula-500 hover:bg-darcula-600': !routeActive,
    }"
  >
    <router-link :to="route.path" class="flex">
      <div class="w-4">
        <FontAwesomeIcon
          :icon="props.route.meta?.icon"
          :style="{ color: route.meta?.iconColor }"
        />
      </div>
      {{ route.meta?.label }}
    </router-link>
    <button
      class="hover:text-darcula-300 flex items-center ml-2"
      @mouseleave="closeIcon = farTimesCircle"
      @mouseover="closeIcon = fasTimesCircle"
      @click="tabHistoryStore.removeTabFromHistory(route)"
    >
      <FontAwesomeIcon :icon="closeIcon" size="sm" />
    </button>
  </div>
</template>
