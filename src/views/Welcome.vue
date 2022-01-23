<template>
    <div class="flex flex-col justify-center items-center gap-4">
        <!--<video autoplay muted loop class="media-bg coding-bg" style="width: 100%; height: 100%;">
            <source src="" type="video/mp4">
        </video>-->

        <img class="w-1/3" src="../assets/logos/dilogo-light-color.png" alt="Kenny Diogo glasses logo" />
        <Typer class="leading-none text-5xl md:text-9xl text-center" text="Kenny Diogo" :pre-type-delay="1000" />
        <Typer class="leading-none text-2xl md:text-6xl text-center" text="Software Developer" :pre-type-delay="2500" />
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
