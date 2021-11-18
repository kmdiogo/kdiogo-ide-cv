<script lang="ts" setup>
import {useRoute} from "vue-router";
import {useStore} from "@/store";
import {computed, defineProps, ref, PropType} from "vue";
import {RouteRecordRaw} from "vue-router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const props = defineProps({
    route: {
        type: Object as PropType<RouteRecordRaw>,
        required: true
    }
})

const store = useStore()
const currentRoute = useRoute()
const closeIcon = ref(['far', 'times-circle'])

const routeActive = computed(() => {
    return currentRoute.matched.some(({ path }) => path === props.route.path)
})

function normalizeIcon() {
    if (!props.route.meta) {
        return
    }
    if (typeof props.route.meta.icon === 'string') return props.route.meta.icon.split(' ')
    return props.route.meta.icon
}
</script>


<template>
    <div
        class="p-3 py-1 flex transition-colors"
        :class="{
            'bg-green-900 hover:bg-forest-green-800': routeActive,
            'bg-darcula-500 hover:bg-darcula-600': !routeActive
        }"
    >
        <router-link :to="route.path" class="flex">
            <div class="w-4">
                <FontAwesomeIcon :icon="normalizeIcon()" :style="{color: route.meta?.iconColor}" />
            </div>
            {{route.meta.label}}
        </router-link>
        <button
            class="hover:text-darcula-300 flex items-center ml-2"
            @mouseleave="closeIcon = ['far', 'times-circle']"
            @mouseover="closeIcon = ['fas', 'times-circle']"
            @click="store.commit('removeTabFromHistory', route)"
        >
            <FontAwesomeIcon :icon="closeIcon" size="sm" />
        </button>
    </div>
</template>
