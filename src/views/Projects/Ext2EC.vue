<script setup lang="ts">
import ProjectPageLayout from "@/components/shared/ProjectPageLayout.vue";
</script>

<template>
  <ProjectPageLayout
    title="EXT2 Integrity Checker"
    :technologies="['C']"
    description="Validate the Integrity of any EXT2 Filesystem"
    github-link="https://github.com/Noah-Whitcomb/Ext2-Integrity-Checker"
  >
    <h4>
      This was done as a term project for my operating systems class. The
      program will take any valid EXT2 filesystem, check for any lost or
      unreachable files, and repair the filesystem binary. The project was done
      in pairs.
    </h4>
  </ProjectPageLayout>
</template>

<style scoped></style>
