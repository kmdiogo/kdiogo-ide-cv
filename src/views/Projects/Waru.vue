<script setup lang="ts">
// http://kmdiogo.people.ysu.edu/Waru/
import ProjectPageLayout from "@/components/shared/ProjectPageLayout.vue";
import ViewProjectLink from "@/components/shared/ViewProjectLink.vue";
</script>

<template>
  <ProjectPageLayout
    title="Waru"
    :technologies="['C#', 'Unity']"
    description="An Epic Ninja Sidescroller"
    github-link="https://github.com/kmdiogo/Waru"
  >
    <h4>
      A fun parkour-based sidescroller that includes abilities, enemies, and
      some puzzle solving.
    </h4>

    <div class="flex justify-center">
      <ViewProjectLink href="http://kmdiogo.people.ysu.edu/Waru/" />
    </div>
  </ProjectPageLayout>
</template>

<style scoped></style>
