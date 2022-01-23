<script lang="ts" setup>
import PersonalPageLayout from "@/components/shared/PersonalPageLayout.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueLogo from "@/assets/logo.png"
import PythonLogo from "@/assets/python-logo.png"
import ReactLogo from "@/assets/react-logo.png"
import DockerLogo from "@/assets/docker-logo.png"
import PostgresLogo from "@/assets/postgres-logo.png"
import JenkinsLogo from "@/assets/jenkins-logo.png"
import SkillHighlight from "@/components/Skills/SkillHighlight.vue"

const languages =  ['Python', 'Javascript/Typescript', 'C#', 'Java', 'HTML/CSS', 'C/C++', 'VBA/VB.NET', 'SQL']
const frameworks =  [
    'React.js', 'Vue.js', 'FastAPI', 'SQLAlchemy',
    'ASP.NET', 'Django',
    'Bootstrap 4', 'Jquery',
]
const other = [
    'Full-stack Development', 'Docker + Kubernetes', 'Micro-service Orchestration',
    'REST Services',  'Teaching', 'Android Mobile Development'
]

const skills = [
    { name: 'Python', details: 'v3.6+, Web Services', imgSrc: PythonLogo },
    { name: 'React.js', details: 'JS/TS, Hooks API', imgSrc: ReactLogo },
    { name: 'PostgreSQL', details: '+PostGIS', imgSrc: PostgresLogo },
    { name: 'Docker', details: '+Kubernetes, Micro-services', imgSrc: DockerLogo },
    { name: 'Vue.js', details: 'Composition API, Personal Projects', imgSrc: VueLogo },
    { name: 'Jenkins', details: 'CI/CD', imgSrc: JenkinsLogo },
]
</script>


<template>
    <PersonalPageLayout title="Skills">
        <div class="flex flex-col gap-2 mt-6">
            <div class="border border-darcula-600 rounded-lg py-2">
                <h2 class="font-bold text-4xl text-center mb-2">Featured</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6">
                    <SkillHighlight
                        v-for="skill in skills"
                        v-bind="skill"
                    />
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h1 class="text-blue-700 text-3xl font-bold">Languages</h1>
                    <p class="mb-2" v-for="skill in languages" :key="skill">
                        <FontAwesomeIcon :icon="['fas', 'chevron-right']" /> {{skill}}
                    </p>
                </div>
                <div>
                    <h1 class="text-blue-700 text-3xl font-bold">Libraries</h1>
                    <p v-for="skill in frameworks" :key="skill">
                        <FontAwesomeIcon :icon="['fas', 'chevron-right']" /> {{skill}}
                    </p>
                </div>
                <div>
                    <h1 class="text-blue-700 text-3xl font-bold">Other</h1>
                    <p v-for="skill in other" :key="skill">
                        <FontAwesomeIcon :icon="['fas', 'chevron-right']" /> {{skill}}
                    </p>
                </div>
            </div>
        </div>
    </PersonalPageLayout>
</template>
