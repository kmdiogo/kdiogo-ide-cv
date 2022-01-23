<script lang="ts" setup>
import { useLayoutStore } from "@/stores/layout";
import  {FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const layoutStore = useLayoutStore()
</script>

<template>
    <div class="flex items-center p-2">
        <button class="hover:bg-darcula-600 focus:outline-none p-2" @click="layoutStore.toggleTerminalOpen()">
            <FontAwesomeIcon :icon="['fas', 'terminal']" />
            Terminal
        </button>
    </div>
</template>

<style scoped>

</style>
