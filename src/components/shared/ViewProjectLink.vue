<script lang="ts" setup>
import {defineProps} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
    href: {
        type: String,
        required: true
    }
})
</script>

<template>
    <a
        class="view-project-link flex flex-col items-center"
        :href="props.href"
        target="_blank"
    >
        <FontAwesomeIcon class="view-project-link-arrow" :icon="['fas', 'long-arrow-alt-down']" />
        <span>Click Here to Try It Out!</span>
    </a>
</template>

<style scoped lang="postcss">
    .view-project-link {
        @apply bg-darcula-500 p-3 rounded-lg decoration-0 transition-colors
    }
    .view-project-link:hover > .view-project-link-arrow {
        @apply animate-bounce
    }
    .view-project-link:hover {
        @apply bg-neutral-600;
    }
</style>
