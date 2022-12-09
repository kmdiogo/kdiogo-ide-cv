<script lang="ts" setup>
import { RouteLocationNormalized, useRoute } from "vue-router";
import { useTabHistoryStore } from "@/stores/tab-history";
import { computed, ref, PropType } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  route: {
    type: Object as PropType<RouteLocationNormalized>,
    required: true,
  },
});

const tabHistoryStore = useTabHistoryStore();
const currentRoute = useRoute();
const closeIcon = ref(["far", "times-circle"]);

const routeActive = computed(() => {
  return currentRoute.matched.some(({ path }) => path === props.route.path);
});

function normalizeIcon() {
  if (!props.route.meta) {
    return "";
  }
  if (typeof props.route.meta.icon === "string")
    return props.route.meta.icon.split(" ");
  return props.route.meta.icon;
}
</script>

<template>
  <div
    class="p-3 py-1 flex transition-colors flex-shrink-0"
    :class="{
      'bg-green-900 hover:bg-forest-green-800': routeActive,
      'bg-darcula-500 hover:bg-darcula-600': !routeActive,
    }"
  >
    <router-link :to="route.path" class="flex">
      <div class="w-4">
        <FontAwesomeIcon
          :icon="normalizeIcon()"
          :style="{ color: route.meta?.iconColor }"
        />
      </div>
      {{ route.meta?.label }}
    </router-link>
    <button
      class="hover:text-darcula-300 flex items-center ml-2"
      @mouseleave="closeIcon = ['far', 'times-circle']"
      @mouseover="closeIcon = ['fas', 'times-circle']"
      @click="tabHistoryStore.removeTabFromHistory(route)"
    >
      <FontAwesomeIcon :icon="closeIcon" size="sm" />
    </button>
  </div>
</template>
