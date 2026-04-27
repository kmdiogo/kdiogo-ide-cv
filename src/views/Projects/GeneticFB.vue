<script setup lang="ts" vapor>
import ProjectPageLayout from '@/components/layout/ProjectPageLayout.vue'
import type { TechnologyItemProps } from '@/components/layout/ProjectTechnologyItem.vue'
import type { IconLinkProps } from '@/components/shared/IconLink.vue'
import UnityLogo from '@/assets/ext-logos/unity-logo.svg'
import CSharpLogo from '@/assets/ext-logos/csharp-logo.svg'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'

const technologies: TechnologyItemProps[] = [
  {
    name: 'Unity',
    description: 'Video Game Engine',
    imgSrc: UnityLogo,
  },
  {
    name: 'C#',
    description: 'Coding for Unity + Neural Network implementation',
    imgSrc: CSharpLogo,
  },
]

const links: IconLinkProps[] = [
  {
    href: 'https://github.com/kmdiogo/Genetic-Learning-Flappy-Bird',
    icon: faGitAlt,
  },
]
</script>

<template>
  <ProjectPageLayout
    title="Genetic Flappy Bird"
    :technologies="technologies"
    :links="links"
    description="Training a model to play Flappy Bird through the power of genetic learning"
    github-link="https://github.com/kmdiogo/Genetic-Learning-Flappy-Bird"
  >
    <h4>
      This was done as a final project for my AI in Game Design class. I got the original idea for
      this project from
      <a class="font-bold underline" href="https://www.youtube.com/watch?v=aeWmdojEJf0"
        >Srdjan Susnic</a
      >. The project was implemented in Unity using C#. Below is the presentation video for it made
      primarily for entertainment purposes.
    </h4>

    <div class="flex h-80 flex-col items-center lg:h-96">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/qEXliTFBhHs"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </ProjectPageLayout>
</template>

<style scoped></style>
