<script lang="ts" setup>
import TimelineEntry from "./TimelineEntry.vue"
</script>

<template>
<div class="relative">
<!--    <div class="w-1 bg-darcula-200 rounded absolute left-0 right-0 ml-auto mr-auto -top-1" style="height: 101%"></div>-->
    <div class="flex flex-col space-y-10">
        <TimelineEntry
            date="1/8/2018"
            job-title="Software Engineer"
            company="Expedition Technology"
            description="Full-stack Development building RESTful web services and React based front-ends. Also containerized and deployed the services to Kubernetes environments."
        >
            <template v-slot:icon>
                <img class="bg-white" src="../../assets/logos/exp-logo.png" />
            </template>
        </TimelineEntry>
        <TimelineEntry
            date="1/8/2018"
            job-title="Software Engineer"
            company="Expedition Technology"
            description="Kubernetes and stuff"
            direction="right"
        />
    </div>

</div>
</template>

<style scoped lang="postcss">

</style>

