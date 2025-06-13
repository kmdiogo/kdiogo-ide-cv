<script lang="ts" setup>
import Folder from "@/components/navigation/Folder.vue";
import { tree } from "@/constants/FileTree";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="h-full flex flex-col">
    <div>
      <span
        ><FontAwesomeIcon
          :icon="faBoxOpen"
          style="color: #ad8762"
        ></FontAwesomeIcon>
        Kenny's Portfolio</span
      >
      <hr class="my-1" />
    </div>

    <Folder
      :folder-name="tree.label"
      :directories="tree.directories"
      :file-routes="tree.files"
      :is-initially-open="true"
    ></Folder>
  </div>
</template>

<style scoped></style>
