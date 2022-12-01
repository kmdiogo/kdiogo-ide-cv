<script setup lang="ts">
import Dropdown from "@/components/utils/Dropdown.vue";
import TheNavigator from "@/components/TheNavigator.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="flex py-1 px-2">
    <div class="md:hidden mr-5 text-xl flex items-center">
      <Dropdown>
        <FontAwesomeIcon :icon="['fa', 'bars']" />
        <template v-slot:dropdown-content>
          <TheNavigator />
        </template>
      </Dropdown>
    </div>

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

    <div class="flex items-center ml-auto gap-2 text-xl text-white font-fancy">
      <span class="font-bold">Kenny Diogo</span>
      <img class="w-16" src="../assets/logos/dilogo-light-white.png" />
    </div>
  </div>
</template>
