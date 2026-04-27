<script lang="ts" setup vapor>
import PersonalPageLayout from '@/components/layout/PersonalPageLayout.vue'
import VueLogo from '@/assets/ext-logos/vue-logo.svg'
import PythonLogo from '@/assets/ext-logos/python-logo.svg'
import ReactLogo from '@/assets/ext-logos/react-logo.svg'
import DockerLogo from '@/assets/ext-logos/docker-logo.svg'
import PostgresLogo from '@/assets/ext-logos/postgres-logo.svg'
import JenkinsLogo from '@/assets/ext-logos/jenkins-logo.svg'
import KubernetesLogo from '@/assets/ext-logos/kubernetes-logo.svg'
import TailwindLogo from '@/assets/ext-logos/tailwind-logo.svg'
import AWSLogo from '@/assets/ext-logos/aws-logo.svg'
import AzureLogo from '@/assets/ext-logos/azure-logo.svg'
import CSharpLogo from '@/assets/ext-logos/csharp-logo.svg'
import ADOLogo from '@/assets/ext-logos/ado-logo.svg'
import NodeLogo from '@/assets/ext-logos/node-logo.svg'
import VialLogo from '@/assets/ext-logos/vial-logo.svg'

type SkillDefinition = { name: string; details: string; imgSrc: string }

const backendSkills: SkillDefinition[] = [
  { name: 'Python', details: 'v3.6+, FastAPI', imgSrc: PythonLogo },
  { name: 'PostgreSQL', details: '+PostGIS', imgSrc: PostgresLogo },
  { name: 'C#', details: '.NET 8.0+', imgSrc: CSharpLogo },
  { name: 'Node.js', details: 'Typescript, Express.js', imgSrc: NodeLogo },
  { name: 'Testing', details: 'Unit, Integration, Pytest, Vitest', imgSrc: VialLogo },
]

const frontendSkills: SkillDefinition[] = [
  { name: 'React.js', details: 'JS/TS, Hooks API, React Query', imgSrc: ReactLogo },
  {
    name: 'Vue.js',
    details: 'JS/TS, Composition API',
    imgSrc: VueLogo,
  },
  {
    name: 'TailwindCSS',
    details: 'Utility-first CSS',
    imgSrc: TailwindLogo,
  },
  {
    name: 'Testing',
    details: 'Unit, Integration, Vitest, Jest',
    imgSrc: VialLogo,
  },
]

const infrastructureSkills: SkillDefinition[] = [
  { name: 'AWS', details: 'Terraform IaC', imgSrc: AWSLogo },
  {
    name: 'Azure',
    details: 'Bicep IaC',
    imgSrc: AzureLogo,
  },
  {
    name: 'Docker',
    details: 'Application Packaging, Docker Compose',
    imgSrc: DockerLogo,
  },
  {
    name: 'Kubernetes',
    details: 'Helm Charts, Micro-services',
    imgSrc: KubernetesLogo,
  },
  { name: 'Jenkins', details: 'CI/CD', imgSrc: JenkinsLogo },
  { name: 'Azure DevOps', details: 'CI/CD', imgSrc: ADOLogo },
]

type SkillCollection = {
  type: 'Backend' | 'Frontend' | 'Infrastructure'
  skills: SkillDefinition[]
  classes: string
}

const skills: SkillCollection[] = [
  { type: 'Frontend', skills: frontendSkills, classes: 'border-green-500 bg-green-500/25' },
  { type: 'Backend', skills: backendSkills, classes: 'border-blue-500 bg-blue-500/25' },
  {
    type: 'Infrastructure',
    skills: infrastructureSkills,
    classes: 'border-purple-500 bg-purple-500/25',
  },
]
</script>

<template>
  <PersonalPageLayout title="Skills">
    <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
      <div
        class="inline-flex flex-col gap-4 rounded-lg border p-2"
        :class="skillCollection.classes"
        v-for="skillCollection in skills"
        :key="skillCollection.type"
      >
        <h1 class="m-0 border-b text-xl">{{ skillCollection.type }}</h1>
        <div class="flex items-center" v-for="skill in skillCollection.skills" :key="skill.name">
          <div class="flex flex-col">
            <span class="text-lg leading-tight font-semibold">{{ skill.name }}</span>
            <span class="text-darcula-300 text-sm leading-tight">{{ skill.details }}</span>
          </div>

          <img :src="skill.imgSrc" class="ml-auto size-10" />
        </div>
      </div>
    </div>
  </PersonalPageLayout>
</template>
