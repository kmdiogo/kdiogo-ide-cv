<script setup lang="ts">
import ProjectPageLayout from "@/components/shared/ProjectPageLayout.vue";
import ViewProjectLink from "@/components/shared/ViewProjectLink.vue";
</script>

<template>
  <ProjectPageLayout
    title="Trivialize!"
    :technologies="['Vue.js', 'Spotify API']"
    description="The Spotify Trivia Game"
    github-link="https://github.com/kmdiogo/Trivialize"
  >
    <h4>
      A fun, purely client-side Single Page Application that turns any Spotify
      playlist into a Trivia game.
    </h4>

    <div class="flex justify-center">
      <ViewProjectLink href="https://kmdiogo.github.io/Trivialize" />
    </div>
  </ProjectPageLayout>
</template>

<style scoped></style>
