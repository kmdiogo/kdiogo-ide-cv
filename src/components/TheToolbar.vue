<script setup>
import Dropdown from "@/components/utils/Dropdown.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="flex items-center">
        <Dropdown>
            <span class="noselect" data-intro="Download my resume here">Other</span>
            <template v-slot:dropdown-content>
                <span class="p-1"><a class="custom-link" href="Kenneth_Diogo_Resume.pdf" download>Download Resume</a></span>
            </template>
        </Dropdown>

        <div class="flex items-center ml-auto space-x-1 text-xl text-white font-fancy">
            <a class="hover:animate-pendulum text-linkedin" href="https://www.linkedin.com/in/kennethdiogo/">
                <FontAwesomeIcon :icon="['fab', 'linkedin']" />
            </a>
            <a class="hover:animate-pendulum" href="https://github.com/kmdiogo">
                <FontAwesomeIcon :icon="['fab', 'github-square']"/>
            </a>
            <span class="font-bold">Kenneth Diogo</span>
            <img class="ml-1" src="../assets/logos/dilogo-light-white.png" style="width: 4rem" />
        </div>
    </div>
</template>

<style scoped>

</style>
