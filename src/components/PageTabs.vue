<script lang="ts" setup>
import PageTab from "./navigation/PageTab.vue";
import { useTabHistoryStore } from "@/stores/tab-history";

const tabHistoryStore = useTabHistoryStore();
</script>

<template>
  <div class="overflow-auto flex items-center">
    <PageTab
      v-for="(route, key) in tabHistoryStore.pageTabHistory"
      :key="key"
      :route="route"
    />
  </div>
</template>

<style scoped></style>
