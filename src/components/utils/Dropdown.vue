<template>
  <div class="relative inline-block dropdown">
    <slot></slot>
    <div
      class="whitespace-no-wrap border-darcula-400 border bg-darcula-500 hidden absolute z-10 shadow dropdown-content"
    >
      <slot name="dropdown-content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Dropdown",
};
</script>

<style scoped>
.dropdown:hover .dropdown-content {
  display: flex;
  flex-direction: column;
}
</style>
