<template>
    <div class="overflow-auto flex items-center">
        <PageTab
            v-for="(route, key) in store.state.tabHistory.pageTabHistory"
            :route="route"
            :key="key"
        />
    </div>
</template>

<script lang="ts" setup>
import PageTab from "./shared/PageTab.vue";
import {useStore} from "../store";

const store = useStore()

</script>

<style scoped>

</style>
