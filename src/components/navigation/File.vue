<script lang="ts" setup>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouteLocationRaw, useRoute } from "vue-router";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

type ToRoute = {
  name: string
}

type FileProps = {
  fileName: string;
  iconColor?: string;
  icon?: IconDefinition;
  to: RouteLocationRaw;
};

const props = defineProps<FileProps>();

const route = useRoute();

const routeActive = computed(() => {
  if (typeof props.to == "string") {
    return route.matched.some(({ path }) => path === props.to);
  }
  return route.matched.some(({ name }) => name === (props.to as ToRoute).name);
});
</script>

<template>
  <div class="flex">
    <div class="mr-4 w-1 shrink-0" />
    <router-link
      class="hover:text-darcula-300 whitespace-nowrap"
      :to="to"
      :class="{ 'bg-green-900': routeActive }"
    >
      <span class="mr-2">
        <FontAwesomeIcon
          :icon="props.icon || []"
          :style="{ color: iconColor }"
        />
      </span>
      <span>{{ fileName }}</span>
    </router-link>
  </div>
</template>
