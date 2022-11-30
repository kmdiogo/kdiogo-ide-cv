<script setup lang="ts">
import ProjectPageLayout from "@/components/shared/ProjectPageLayout.vue";
import ViewProjectLink from "@/components/shared/ViewProjectLink.vue";
</script>

<template>
  <ProjectPageLayout
    title="Genetic Flappy Bird"
    :technologies="['Unity', 'C#']"
    description="Training a model to play Flappy Bird through the power of genetic learning"
    github-link="https://github.com/kmdiogo/Genetic-Learning-Flappy-Bird"
  >
    <h4>
      This was done as a final project for my AI in Game Design class. I got the
      original idea for this project from
      <a
        class="font-bold underline"
        href="https://www.youtube.com/watch?v=aeWmdojEJf0"
        >Srdjan Susnic</a
      >. The project was implemented in Unity using C#. Below is the
      presentation video for it made primarily for entertainment purposes.
    </h4>

    <div class="w-100 flex flex-col items-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qEXliTFBhHs"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
      <ViewProjectLink
        class="mt-6"
        href="https://kmdiogo.github.io/Genetic-Learning-Flappy-Bird/"
      />
    </div>
  </ProjectPageLayout>
</template>

<style scoped></style>
