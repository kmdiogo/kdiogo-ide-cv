<script lang="ts" setup vapor>
import PageTab from './navigation/PageTab.vue'
import { useTabHistoryStore } from '@/stores/tab-history'

const tabHistoryStore = useTabHistoryStore()
</script>

<template>
  <div class="flex items-center overflow-auto">
    <PageTab v-for="(route, key) in tabHistoryStore.pageTabHistory" :key="key" :route="route" />
  </div>
</template>

<style scoped></style>
