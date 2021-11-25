<script lang="ts" setup>
import {defineProps, PropType} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
    company: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    direction: {
        type: String as PropType<"left" | "right">,
        default: "left"
    }
})

</script>

<template>
    <div class="w-100 flex box-border relative">
        <div class="relative flex-grow-0 flex-shrink-0 mr-5 md:mx-10 order-2">
            <div class="h-16 w-16 rounded-full flex justify-center items-center border-2 border-darcula-300 z-10 overflow-hidden relative bg-darcula-700">
                <slot name="icon">
                    <FontAwesomeIcon :icon="['fas', 'question']" />
                </slot>
            </div>

            <!-- White bar -->
            <div class="w-1 bg-darcula-200 rounded absolute left-0 right-0 ml-auto mr-auto -top-2" style="height: 135%"></div>
        </div>

        <div
            class="relative top-2 flex-1 order-3"
            :class="{'md:order-1': direction === 'left', 'md:order-3': direction === 'right'}"
        >
            <div class="bg-darcula-600 rounded p-4 w-full flex flex-col">
                <span class="text-xl">{{company}}</span>
                <span class="text-lg font-semibold mb-0 md:mb-4">{{jobTitle}}</span>
                <span class="mb-4 text-sm block md:hidden">{{date}}</span>
                <span>
                    {{description}}
                </span>
            </div>
            <span class="arrow-left block md:hidden" />
            <span class="arrow-right hidden md:block" v-if="direction === 'left'" />
            <span class="arrow-left hidden md:block" v-else />
        </div>

        <div class="flex-1 hidden md:block font-bold relative" :class="{'order-3': direction === 'left', 'order-1 text-right': direction === 'right'}">
            <div class="top-4 absolute w-full">
                {{date}}
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.arrow-right {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid theme('colors.darcula.600');
    @apply -right-2 absolute top-2
}

.arrow-left {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid theme('colors.darcula.600');
    @apply -left-2 absolute top-2
}
</style>
