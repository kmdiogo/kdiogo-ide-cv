<script lang="ts" setup>
import Typer from "@/components/shared/Typer.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4">
    <img
      class="w-72 md:w-96"
      src="../assets/logos/dilogo-light-color.png"
      alt="Kenny Diogo glasses logo"
    />
    <Typer
      class="leading-none text-5xl md:text-9xl text-center"
      text="Kenny Diogo"
      :pre-type-delay="500"
    />
    <Typer
      class="leading-none text-2xl md:text-6xl text-center"
      text="Software Developer"
      :pre-type-delay="1750"
    />
  </div>
</template>
