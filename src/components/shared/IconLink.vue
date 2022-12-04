<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
export type IconLinkProps = {
  icon: string | string[];
  href: string;
};

const props = defineProps<IconLinkProps>();

const formattedHref = computed(() => {
  const url = new URL(props.href);
  return url.hostname + url.pathname;
});
</script>

<template>
  <a class="hover:text-white truncate" :href="href">
    <FontAwesomeIcon class="w-6" :icon="icon" />
    {{ formattedHref }}
  </a>
</template>
