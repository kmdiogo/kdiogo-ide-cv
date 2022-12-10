<script lang="ts" setup>
type PersonalPageLayoutProps = {
  title: string;
};

withDefaults(defineProps<PersonalPageLayoutProps>(), {});
</script>

<template>
  <div class="p-5 relative">
    <h1 class="text-forest-green-500 text-5xl">{{ title }}</h1>
    <hr />
    <div class="py-3">
      <slot></slot>
    </div>
  </div>
</template>
