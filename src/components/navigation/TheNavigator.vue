<script lang="ts" setup vapor>
import Folder from '@/components/navigation/Folder.vue'
import { tree } from '@/constants/FileTree'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="flex h-full flex-col">
    <div>
      <span><FontAwesomeIcon :icon="faBoxOpen" style="color: #ad8762" /> Kenny's Portfolio</span>
      <hr class="my-1" />
    </div>

    <Folder
      :folder-name="tree.label"
      :directories="tree.directories"
      :file-routes="tree.files"
      :is-initially-open="true"
    />
  </div>
</template>

<style scoped></style>
