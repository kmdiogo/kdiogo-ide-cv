<script setup lang="ts">
import Dropdown from "@/components/shared/Dropdown.vue";
import TheNavigator from "@/components/navigation/TheNavigator.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <nav class="flex">
    <div class="md:hidden mr-1 text-xl flex items-center">
      <Dropdown>
        <template v-slot:dropdown-closed>
          <FontAwesomeIcon :icon="['fa', 'bars']" class="w-4 px-2" />
        </template>
        <template v-slot:dropdown-open>
          <FontAwesomeIcon :icon="['fa', 'times']" class="w-4 px-2" />
        </template>
        <template v-slot:dropdown-content>
          <TheNavigator class="z-50" />
        </template>
      </Dropdown>
    </div>

    <div class="flex grow py-1 px-2 md:justify-start justify-end gap-4">
      <div class="flex text-2xl gap-1">
        <a
          class="hover:animate-pendulum text-linkedin flex items-center"
          href="https://www.linkedin.com/in/kennethdiogo/"
        >
          <FontAwesomeIcon :icon="['fab', 'linkedin']" />
        </a>
        <a
          class="hover:animate-pendulum flex items-center"
          href="https://github.com/kmdiogo"
        >
          <FontAwesomeIcon :icon="['fab', 'github-square']" />
        </a>
      </div>

      <div
        class="flex items-center ml-0 md:ml-auto gap-2 text-xl text-white font-fancy"
      >
        <span class="font-bold">Kenny Diogo</span>
        <img class="w-16" src="../assets/logos/dilogo-light-white.png" />
      </div>
    </div>
  </nav>
</template>
