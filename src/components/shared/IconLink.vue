<script setup lang="ts" vapor>
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { computed } from 'vue'
import type { IconDefinition } from '@fortawesome/free-regular-svg-icons'
export type IconLinkProps = {
  icon: IconDefinition
  href: string
}

const props = defineProps<IconLinkProps>()

const formattedHref = computed(() => {
  const url = new URL(props.href)
  return url.hostname + url.pathname
})
</script>

<template>
  <a class="truncate hover:text-white" :href="href">
    <FontAwesomeIcon class="w-6" :icon="icon" />
    {{ formattedHref }}
  </a>
</template>
