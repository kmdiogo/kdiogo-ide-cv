<script lang="ts" setup>
import { ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import File from "@/components/shared/File.vue";
import { RouteRecordRaw } from "vue-router";
import { FileTreeNode } from "@/constants/FileTree";

export type FolderProps = {
  folderName: string;
  isInitiallyOpen?: boolean;
  fileRoutes: RouteRecordRaw[];
  directories: FileTreeNode[];
};

const props = withDefaults(defineProps<FolderProps>(), {
  isInitiallyOpen: false,
  fileRoutes: () => [],
  directories: () => [],
});

const isExpanded = ref(props.isInitiallyOpen);
const isEmpty = computed(
  () => props.directories.length === 0 && props.fileRoutes.length === 0
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
          class="w-3"
          :icon="['fas', 'chevron-down']"
          :transform="isExpanded ? '' : 'rotate-270'"
          v-if="!isEmpty"
        />
      </div>
      <span class="mr-2"
        ><FontAwesomeIcon
          :icon="['fas', 'folder']"
          style="color: slategray"
        ></FontAwesomeIcon
      ></span>
      <span>{{ folderName }}</span>
    </button>

    <div class="ml-6 flex flex-col" v-if="isExpanded">
      <Folder
        v-for="dir in directories"
        :directories="dir.directories"
        :folder-name="dir.label"
        :file-routes="dir.files"
        :key="dir.label"
      />
      <File
        v-for="route in fileRoutes"
        :file-name="route.meta?.label || ''"
        :to="{ name: route.name }"
        :icon="route.meta?.icon"
        :icon-color="route.meta?.iconColor"
        :key="route.name"
      />
      <slot></slot>
    </div>
  </div>
</template>
