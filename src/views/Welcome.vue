<script lang="ts" setup vapor>
import Typer from '@/components/shared/Typer.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 font-fancy">
    <img
      class="w-72 md:w-96"
      src="../assets/logos/dilogo-light-color.png"
      alt="Kenny Diogo glasses logo"
    />
    <Typer
      class="text-center text-5xl leading-none md:text-9xl"
      text="Kenny Diogo"
      :pre-type-delay="500"
    />
    <Typer
      class="text-center text-2xl leading-none md:text-6xl"
      text="Software Developer"
      :pre-type-delay="1750"
    />
  </div>
</template>
