<script lang="ts" setup>
import { computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRoute } from "vue-router";

interface ToRoute {
  name: string;
}

const props = defineProps({
  fileName: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
  },
  icon: {
    type: [String, Array],
  },
  to: {
    type: [String, Object],
  },
});

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
          :icon="normalizeIcon()"
          :style="{ color: iconColor }"
        />
      </span>
      <span>{{ fileName }}</span>
    </router-link>
  </div>
</template>
