<script setup lang="ts" vapor>
import Dropdown from '@/components/shared/Dropdown.vue'
import TheNavigator from '@/components/navigation/TheNavigator.vue'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>

<template>
  <nav class="flex">
    <div class="mr-1 flex items-center text-xl md:hidden">
      <Dropdown>
        <template #dropdown-closed>
          <FontAwesomeIcon :icon="faBars" class="w-4 px-2" />
        </template>
        <template #dropdown-open>
          <FontAwesomeIcon :icon="faTimes" class="w-4 px-2" />
        </template>
        <template #dropdown-content>
          <TheNavigator class="z-50" />
        </template>
      </Dropdown>
    </div>

    <div class="flex grow justify-end gap-4 px-2 py-1 md:justify-start">
      <div class="flex gap-1 text-2xl">
        <a
          class="hover:animate-pendulum text-linkedin flex items-center"
          href="https://www.linkedin.com/in/kennethdiogo/"
        >
          <FontAwesomeIcon :icon="faLinkedin" />
        </a>
        <a class="hover:animate-pendulum flex items-center" href="https://github.com/kmdiogo">
          <FontAwesomeIcon :icon="faGithubSquare" />
        </a>
      </div>

      <div class="font-fancy ml-0 flex items-center gap-2 text-xl text-white md:ml-auto">
        <span class="font-bold">Kenny Diogo</span>
        <img class="w-16" src="../assets/logos/dilogo-light-white.png" />
      </div>
    </div>
  </nav>
</template>
