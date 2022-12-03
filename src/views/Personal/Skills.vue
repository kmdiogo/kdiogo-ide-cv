<script lang="ts" setup>
import PersonalPageLayout from "@/components/shared/PersonalPageLayout.vue";
import VueLogo from "@/assets/logo.png";
import PythonLogo from "@/assets/ext-logos/python-logo.png";
import ReactLogo from "@/assets/ext-logos/react-logo.png";
import DockerLogo from "@/assets/ext-logos/docker-logo.png";
import PostgresLogo from "@/assets/ext-logos/postgres-logo.png";
import JenkinsLogo from "@/assets/ext-logos/jenkins-logo.png";
import KubernetesLogo from "@/assets/ext-logos/kubernetes-logo.png";
import JestLogo from "@/assets/ext-logos/jest-logo.png";
import BootstrapLogo from "@/assets/ext-logos/bootstrap-logo.png";
import CypressLogo from "@/assets/ext-logos/cypress-logo.png";
import TailwindLogo from "@/assets/ext-logos/tailwind-logo.png";
import ReactQueryLogo from "@/assets/ext-logos/react-query-logo.svg";
import AWSLogo from "@/assets/ext-logos/aws-logo.png";
import SkillBox from "@/components/Skills/SkillBox.vue";
import PytestLogo from "@/assets/ext-logos/pytest-logo.png";

const backendSkills = [
  { name: "Python", details: "v3.6+, Web Services", imgSrc: PythonLogo },
  { name: "Pytest", details: "Python Unit Testing", imgSrc: PytestLogo },
  { name: "PostgreSQL", details: "+PostGIS", imgSrc: PostgresLogo },
  { name: "AWS", details: "S3, SQS, SNS, RDS", imgSrc: AWSLogo },
];

const frontendSkills = [
  { name: "React.js", details: "JS/TS, Hooks API", imgSrc: ReactLogo },
  {
    name: "Vue.js",
    details: "JS/TS, Composition API",
    imgSrc: VueLogo,
  },
  {
    name: "Jest",
    details: "UI Unit Testing",
    imgSrc: JestLogo,
  },
  {
    name: "Cypress",
    details: "E2E Testing",
    imgSrc: CypressLogo,
  },
  {
    name: "TailwindCSS",
    details: "Utility-first CSS",
    imgSrc: TailwindLogo,
  },
  {
    name: "Bootstrap",
    details: "v4",
    imgSrc: BootstrapLogo,
  },
  {
    name: "React Query",
    details: "Data Synchronization, +Axios",
    imgSrc: ReactQueryLogo,
  },
];

const infrastructureSkills = [
  {
    name: "Docker",
    details: "+Docker Compose",
    imgSrc: DockerLogo,
  },
  {
    name: "Kubernetes",
    details: "Helm Charts, Micro-services",
    imgSrc: KubernetesLogo,
  },
  { name: "Jenkins", details: "CI/CD", imgSrc: JenkinsLogo },
];
</script>

<template>
  <PersonalPageLayout title="Skills">
    <div class="flex flex-col gap-10 mt-6">
      <SkillBox title="Back-end" :skills="backendSkills" />
      <SkillBox title="Front-end" :skills="frontendSkills" />
      <SkillBox title="Infrastructure" :skills="infrastructureSkills" />
    </div>
  </PersonalPageLayout>
</template>
