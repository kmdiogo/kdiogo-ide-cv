<template>
    <div class="flex items-center text-gray-300" :class="{'border border-darcula-400': isTab}">
        <div class="w-4">
            <FontAwesomeIcon :icon="normalizeIcon()" :style="{color: iconColor}" />
        </div>
        <router-link class="ml-1 hover:text-darcula-300" :to="to" :class="{'bg-green-900': routeActive}">{{fileName}}</router-link>
        <div class="ml-1" v-if="isTab">
            <span class="hover:text-darcula-300">
                <FontAwesomeIcon :icon="['far', 'window-close']" @click="$store.commit('removeTabFromHistory', fileName)" />
            </span>
        </div>

    </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRoute} from 'vue-router'

interface ToRoute {
    name: string;
}
export default defineComponent({
    name: "File",
    components: {FontAwesomeIcon},
    props: {
        fileName: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
        },
        icon: {
            type: [String, Array]
        },
        to: {
            type: [String, Object],
        },
        isTab: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const route = useRoute()
        function normalizeIcon() {
            if (typeof props.icon == 'string') return props.icon.split(' ')
            return props.icon
        }

        const routeActive = computed(() => {
            if (typeof props.to == 'string') {
                return route.matched.some(({ path }) => path === props.to)
            }
            return route.matched.some(({ name }) => name === (props.to as ToRoute).name)
        })

        return {
            normalizeIcon,
            routeActive
        }
    }
})
</script>

<style scoped>

</style>
