<template>
    <div class="flex flex-col justify-center items-center">
        <!--<video autoplay muted loop class="media-bg coding-bg" style="width: 100%; height: 100%;">
            <source src="" type="video/mp4">
        </video>-->

        <img class="w-1/3" src="../assets/logos/kenny-dilogo-transparent.png" alt="Kenny Diogo glasses logo" />
        <Typer class="text-10xl text-center" text="Kenny Diogo" :pre-type-delay="1000" />
        <Typer class="text-8xl text-center" text="Software Developer" :pre-type-delay="2500" keep-caret />
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Typer from "@/components/utils/Typer.vue";

export default defineComponent({
    name: "Welcome",
    components: {Typer}
})
</script>

<style scoped>
</style>
