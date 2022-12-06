<script setup lang="ts">
// http://kmdiogo.people.ysu.edu/Waru/
import ProjectPageLayout from "@/components/shared/ProjectPageLayout.vue";
import CSharpLogo from "@/assets/ext-logos/csharp-logo.png";
import UnityLogo from "@/assets/ext-logos/unity-logo.png";
import BlenderLogo from "@/assets/ext-logos/blender-logo.png"
import SpongebeatsPreview from "@/assets/projects/spongebeats.png"
import { TechnologyItemProps } from "@/components/shared/ProjectTechnologyItem.vue";
import { IconLinkProps } from "@/components/shared/IconLink.vue";

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
  {
    name: "Blender",
    description: "3D model for Spongebob",
    imgSrc: BlenderLogo
  }
];

const links: IconLinkProps[] = [
  {
    href: "http://kmdiogo.people.ysu.edu/SpongeBeats/",
    icon: ["fa", "gamepad"],
  },
  {
    href: "https://github.com/kmdiogo/SpongeBeats",
    icon: ["fab", "git-alt"],
  },
];
</script>

<template>
  <ProjectPageLayout
      title="SpongeBeats"
      :technologies="technologies"
      :links="links"
      description="Dank Spongebob rhythm game"
  >
    <p>
      Fortnite dancing, iconic Spongebob lines, naruto running, and more. It's hard to explain
      in words, so I'd recommend just trying it out yourself.
    </p>
    <p>
      This was done as a term project for a '3D Modeling in Blender' class I took. I spent the semester creating,
      rigging, and animating the initial Spongebob model you see when you start the game (yes, the crappy looking one 😂).
      As part of the final project, I had to integrate the 3D model into a game that I create in Unity. The final product
      is SpongeBeats.
    </p>
    <img class="rounded border border-darcula-600" :src="SpongebeatsPreview" alt="SpongeBeats preview" />
  </ProjectPageLayout>
</template>

<style scoped></style>
