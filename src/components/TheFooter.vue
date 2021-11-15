<template>
    <div class="flex items-center p-2">
        <button class="hover:bg-darcula-600 focus:outline-none p-2" @click="store.commit('toggleIsTerminalOpen')" data-intro="You can also browse this site using a CLI!">
            <FontAwesomeIcon :icon="['fas', 'terminal']" />
            Terminal
        </button>
    </div>
</template>

<script lang="ts" setup>
import {useStore} from "vuex";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const store = useStore()
</script>

<style scoped>

</style>
