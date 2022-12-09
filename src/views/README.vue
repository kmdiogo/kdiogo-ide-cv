<script lang="ts" setup>
import { commandDescriptions } from "@/components/TheTerminal.vue";

const commandText = Object.entries(commandDescriptions).map(([cmd, desc]) => {
  return `${cmd} - ${desc}`;
});
</script>

<style scoped></style>

<template>
  <div class="p-2">
    <h1 class="text-4xl font-bold">Kenny's Portfolio</h1>
    <hr />
    <p>
      Hi, thanks for taking the time to look at my online portfolio! The page is
      based on a typical dark-themed IDE (mainly JetBrains products) and is
      meant to showcase my skills and experience as a Software Developer in a
      fun way!
    </p>

    <h2 class="text-3xl font-bold">Navigation</h2>
    <p>
      To navigate the website, use the file navigator on the left hand side (or
      under the dropdown tab if on mobile) to access the different pages.
    </p>

    <h2 class="text-3xl font-bold">Command Line Interface</h2>

    <p>
      You may have already noticed, but there is a button at the bottom of the
      screen for a terminal. This is a functioning (but rather minimal) command
      line interface that allows you to navigate through my portfolio!
    </p>
    <p>
      Currently, the terminal only supports {{ commandText.length }} commands:
    </p>
    <ul>
      <li v-for="item in commandText" :key="item">
        {{ item }}
      </li>
    </ul>

    <h2 class="text-3xl font-bold">Credits</h2>
    <p>This site was made using Vue 3 with TailwindCSS.</p>
    <p>
      Thanks to
      <a class="underline" href="https://www.instagram.com/mattmadesomestuff/"
        >Matt Luonuansuu</a
      >
      for making the awesome logos for this portfolio!
    </p>
  </div>
</template>
