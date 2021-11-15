<template>
    <div class="overflow-auto flex items-center space-x-4">
        <File v-for="(tab, key) in $store.state.tabHistory.pageTabHistory"
              :file-name="tab.meta.label" :icon="tab.meta.icon"
              :icon-color="tab.meta.iconColor" :to="{ name: tab.name }"
              is-tab :key="key" />
    </div>
</template>

<script lang="ts" setup>
import File from "@/components/shared/File.vue";
</script>

<style scoped>

</style>
