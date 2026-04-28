<script lang="ts" setup vapor>
type PersonalPageLayoutProps = {
  title: string
}

withDefaults(defineProps<PersonalPageLayoutProps>(), {})
</script>

<template>
  <div class="relative p-5">
    <h1 class="text-forest-green-500 text-4xl">
      {{ title }}
    </h1>
    <hr />
    <div class="py-3">
      <slot />
    </div>
  </div>
</template>
