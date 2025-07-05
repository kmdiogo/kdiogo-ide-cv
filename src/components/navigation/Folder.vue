<script lang="ts" setup>
import { ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import File from "@/components/navigation/File.vue";
import type { RouteRecordRaw } from "vue-router";
import type { FileTreeNode } from "@/constants/FileTree";
import { faChevronDown, faFolder } from "@fortawesome/free-solid-svg-icons";

export type FolderProps = {
  folderName: string;
  isInitiallyOpen?: boolean;
  fileRoutes?: RouteRecordRaw[];
  directories?: FileTreeNode[];
};

const props = withDefaults(defineProps<FolderProps>(), {
  isInitiallyOpen: false,
  fileRoutes: () => [],
  directories: () => [],
});

const isExpanded = ref(props.isInitiallyOpen);
const isEmpty = computed(
  () => props.directories.length === 0 && props.fileRoutes.length === 0,
);

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <div class="flex flex-col leading-snug">
    <button class="flex hover:text-darcula-300" @click="toggleExpanded">
      <div class="mr-4 w-1" @click="() => undefined">
        <FontAwesomeIcon
          v-if="!isEmpty"
          class="w-3"
          :icon="faChevronDown"
          :transform="isExpanded ? '' : 'rotate-270'"
        />
      </div>
      <span class="mr-2"
        ><FontAwesomeIcon :icon="faFolder" style="color: slategray"
      /></span>
      <span>{{ folderName }}</span>
    </button>

    <div v-if="isExpanded" class="ml-6 flex flex-col">
      <Folder
        v-for="dir in directories"
        :key="dir.label"
        :directories="dir.directories"
        :folder-name="dir.label"
        :file-routes="dir.files"
      />
      <File
        v-for="route in fileRoutes"
        :key="route.name"
        :file-name="route.meta?.label || ''"
        :to="{ name: route.name }"
        :icon="route.meta?.icon"
        :icon-color="route.meta?.iconColor"
      />
      <slot />
    </div>
  </div>
</template>
