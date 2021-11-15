<template>
    <div class="p-5 relative">
        <img class="pointer-events-none absolute left-0 top-0 max-w-full h-full opacity-15 invisible lg:visible"
             :src="bgImg"
        />
        <h1 class="text-forest-green-500 text-5xl">{{title}}</h1>
        <hr />
        <div class="py-3">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "PersonalPageLayout",
    props: {
        bgImg: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

</style>
