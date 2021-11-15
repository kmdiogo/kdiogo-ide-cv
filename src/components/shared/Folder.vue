<template>
    <div class="flex flex-col">
        <div class="flex">
            <button class="text-black hover:text-white mr-5 w-1 focus:outline-none" @click="toggleExpanded">
                <FontAwesomeIcon :icon="['fas', 'chevron-down']" style="width: 1rem" v-if="isExpanded && !isEmpty" />
                <FontAwesomeIcon :icon="['fas', 'chevron-right']" style="width: 1rem" v-else-if="!isEmpty" />
            </button>
            <span><FontAwesomeIcon :icon="['fas', 'folder']" style="color: slategray"></FontAwesomeIcon></span>
            <span class="ml-1">{{folderName}}</span>
        </div>

        <div class="ml-3 flex flex-col" v-if="isExpanded">
            <Folder v-for="dir in directories" :directories="dir.directories" :folder-name="dir.label"
                    :file-routes="dir.files" :key="dir.label" />
            <File class="ml-6" v-for="route in fileRoutes" :file-name="route.meta.label" :to="{ name: route.name }"
                  :icon="route.meta.icon" :icon-color="route.meta.iconColor" :key="route.name" />
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import File from "@/components/shared/File.vue"

export default defineComponent({
    name: "Folder",
    components: {File, FontAwesomeIcon},
    props: {
        folderName: {
            type: String,
            required: true
        },
        isInitiallyOpen: {
            type: Boolean,
            default: false
        },
        fileRoutes: {
            type: Array,
            default: () => {return []}
        },
        directories: {
            type: Array,
            default: () => {return []}
        }
    },
    setup(props) {
        const isExpanded = ref(props.isInitiallyOpen)
        const isEmpty = computed(() => props.directories.length === 0 && props.fileRoutes.length === 0)

        function toggleExpanded() {
            isExpanded.value = !isExpanded.value
        }

        return {
            isExpanded,
            isEmpty,
            toggleExpanded
        }
    }
})
</script>

<style scoped>

</style>
