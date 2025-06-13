<script setup lang="ts">
import ProjectPageLayout from "@/components/layout/ProjectPageLayout.vue";
import VueLogo from "@/assets/logo.png";
import SpotifyLogo from "@/assets/ext-logos/spotify-logo.png";
import BootstrapLogo from "@/assets/ext-logos/bootstrap-logo.png";
import { TechnologyItemProps } from "@/components/layout/ProjectTechnologyItem.vue";
import { IconLinkProps } from "@/components/shared/IconLink.vue";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const technologies: TechnologyItemProps[] = [
  {
    name: "Vue.js",
    imgSrc: VueLogo,
    description: "Front-end SPA",
  },
  {
    name: "Bootstrap",
    imgSrc: BootstrapLogo,
    description: "CSS with BootstrapVue for Vue components",
  },
  {
    name: "Spotify API",
    imgSrc: SpotifyLogo,
    description: "Getting user playlists and playing music (via Playback SDK)",
  },
];

const links: IconLinkProps[] = [
  {
    href: "https://kmdiogo.github.io/Trivialize",
    icon: faGamepad,
  },
  {
    href: "https://github.com/kmdiogo/Trivialize",
    icon: faGitAlt,
  },
];
</script>

<template>
  <ProjectPageLayout
    title="Trivialize!"
    :technologies="technologies"
    :links="links"
    description="The Spotify Trivia Game"
  >
    <h4>
      A fun, purely client-side Single Page Application that turns any Spotify
      playlist into a Trivia game.
    </h4>
  </ProjectPageLayout>
</template>

<style scoped></style>
