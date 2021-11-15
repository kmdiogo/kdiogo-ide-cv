<template>
    <PersonalPageLayout title="Skills" :bg-img="require('../../assets/backgrounds/Skills.png')">
        <p>
            I primarily specialize in Full-Stack Development for Web Services and Applications,
            but have worked with a variety of technologies across a number of fields
        </p>

        <p>Below is a list of technologies/skills I am proficient in:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <h1 class="text-blue-700 text-3xl font-bold">Languages</h1>
                <p class="mb-2" v-for="skill in languages" :key="skill">
                    <fa :icon="['fas', 'chevron-right']" /> {{skill}}
                </p>
            </div>
            <div>
                <h1 class="text-blue-700 text-3xl font-bold">Libraries</h1>
                <p v-for="skill in frameworks" :key="skill">
                    <fa :icon="['fas', 'chevron-right']" /> {{skill}}
                </p>
            </div>
            <div>
                <h1 class="text-blue-700 text-3xl font-bold">Other</h1>
                <p v-for="skill in other" :key="skill">
                    <fa :icon="['fas', 'chevron-right']" /> {{skill}}
                </p>
            </div>
        </div>
    </PersonalPageLayout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PersonalPageLayout from "@/components/shared/PersonalPageLayout.vue";

const languages =  ['Javascript', 'Python', 'C#', 'Java', 'HTML/CSS', 'C/C++', 'VBA/VB.NET', 'SQL']
const frameworks =  [
    'Jquery', 'Vue.js', 'React.js',
    'ASP.NET', 'Django',
    'Bootstrap 4'
]
const icons = {
    'Bootstrap 4': 'fab fa-bootstrap',
    'Javascript': "fab fa-js-square",
    'Python': "fab fa-python",
    'C#': 'fas fa-chevron-right',
    'Java': "fab fa-java",
    'HTML/CSS': "fab fa-html5",
    'C/C++': 'fas fa-chevron-right',
    'VBA/VB.NET': 'fas fa-chevron-right',
    'SQL': "fas fa-database",
    'Vue.js': "fab fa-vuejs",
    'ASP.NET': 'fas fa-chevron-right',
    'Django': 'fas fa-chevron-right',
    'Jquery': 'fas fa-chevron-right'
}
const other = ['RESTful Web Services', 'MVC', 'Full-stack Development', 'Teaching']
export default defineComponent({
    name: "Skills",
    components: {PersonalPageLayout},
    setup() {
        return {
            languages,
            icons,
            frameworks,
            other
        }
    }
})
</script>

<style scoped>

</style>
