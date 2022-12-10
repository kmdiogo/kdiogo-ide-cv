<script lang="ts" setup>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { RouteLocationRaw, useRoute } from "vue-router";

interface ToRoute {
  name: string;
}

type FileProps = {
  fileName: string;
  iconColor?: string;
  icon?: string | string[];
  to: RouteLocationRaw;
};

const props = defineProps<FileProps>();

const route = useRoute();

function normalizeIcon() {
  if (typeof props.icon == "string") return props.icon.split(" ");
  return props.icon;
}

const routeActive = computed(() => {
  if (typeof props.to == "string") {
    return route.matched.some(({ path }) => path === props.to);
  }
  return route.matched.some(({ name }) => name === (props.to as ToRoute).name);
});
</script>

<template>
  <div class="flex">
    <div class="mr-4 w-1 flex-shrink-0" />
    <router-link
      class="hover:text-darcula-300 whitespace-nowrap"
      :to="to"
      :class="{ 'bg-green-900': routeActive }"
    >
      <span class="mr-2">
        <FontAwesomeIcon
          :icon="normalizeIcon() || []"
          :style="{ color: iconColor }"
        />
      </span>
      <span>{{ fileName }}</span>
    </router-link>
  </div>
</template>
