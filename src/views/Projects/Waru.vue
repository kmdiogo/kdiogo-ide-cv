<script setup lang="ts">
// http://kmdiogo.people.ysu.edu/Waru/
import ProjectPageLayout from "@/components/layout/ProjectPageLayout.vue";
import WaruPreview from "@/assets/projects/waru.png";
import CSharpLogo from "@/assets/ext-logos/csharp-logo.png";
import UnityLogo from "@/assets/ext-logos/unity-logo.png";
import { TechnologyItemProps } from "@/components/layout/ProjectTechnologyItem.vue";
import { IconLinkProps } from "@/components/shared/IconLink.vue";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const technologies: TechnologyItemProps[] = [
  {
    name: "Unity",
    description: "Video Game Engine",
    imgSrc: UnityLogo,
  },
  {
    name: "C#",
    description: "Coding for Unity",
    imgSrc: CSharpLogo,
  },
];

const links: IconLinkProps[] = [
  {
    href: "http://kmdiogo.people.ysu.edu/Waru/",
    icon: faGamepad,
  },
  {
    href: "https://github.com/kmdiogo/Waru",
    icon: faGitAlt,
  },
];
</script>

<template>
  <ProjectPageLayout
    title="Waru"
    :technologies="technologies"
    :links="links"
    description="An Epic Ninja Sidescroller"
  >
    <p class="m-0">
      A fun parkour-based sidescroller that includes abilities, enemies, and
      some puzzle solving. I collaborated on this project with a fellow
      university student where I was primarily responsible for implementing the
      core game mechanics and AI.
    </p>

    <p class="mt-4">
      Other core features such as animations, level-design, and story were
      worked on in collaboration with my teammate.
    </p>

    <img
      alt="preview of Waru the video game"
      :src="WaruPreview"
      class="rounded border border-darcula-500"
    />
  </ProjectPageLayout>
</template>

<style scoped></style>
