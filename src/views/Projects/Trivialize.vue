<template>
    <div class="text-page">
        <div class="d-flex">
            <h1 style="color: forestgreen; margin: 0;">
                Trivialize!
            </h1>
            <a class="hover-jump" href="https://github.com/kmdiogo/Trivialize" style="margin-left: auto;">
                <i class="fab fa-github fa-2x"></i>
            </a>
        </div>

        <h2>The Spotify Trivia Game</h2>
        <h3 class="m-0">Technologies: Vue.js, Spotify API</h3>
        <hr style="width: 100%;" />

        <h4>
            A fun, purely client-side Single Page Application that turns any Spotify playlist into a Trivia game.
        </h4>

        <div class="d-flex justify-content-center">
            <a class="view-project-link" href="https://kmdiogo.github.io/Trivialize">
                <i class="fas fa-long-arrow-alt-right"></i>
                <span>Click Here to Try It Out!</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "Trivialize"
})
</script>

<style scoped>

</style>
