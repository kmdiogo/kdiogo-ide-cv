<template>
    <!-- TODO: Fix sizing issues with images -->
    <PersonalPageLayout :bg-img="require('../../assets/backgrounds/AboutMe.png')" title="About Me">
        <h2 class="text-4xl font-bold">Kenny Diogo</h2>
        <h3 class="text-2xl font-bold">An avid coder with a passion for solving problems computationally</h3>
        <p>I am currently studying Computer Science with a minor in Mathematics at Youngstown State University.</p>
        <p>
            Ever since beginning my studies, I have developed an extreme passion for Computer Science and programming.
            I am always eager to learn new skills/technologies and have worked on
            topics (either in professional, academic, or personal environments) that include:
        </p>
        <ul>
            <li>Web Applications/Services</li>
            <li>Mathematical Modeling and Computational Proofs</li>
            <li>Neural Networks</li>
            <li>Compilers (Lexical Analyzer Generator)</li>
            <li>Game Development</li>
            <li>Databases</li>
            <li>File System Drivers (EXT2)</li>
        </ul>
    </PersonalPageLayout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PersonalPageLayout from "@/components/shared/PersonalPageLayout.vue";

export default defineComponent({
    name: "AboutMe",
    components: {PersonalPageLayout}
})
</script>

<style scoped>

</style>
