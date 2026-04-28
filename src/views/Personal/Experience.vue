<script lang="ts" setup vapor>
import PersonalPageLayout from '@/components/layout/PersonalPageLayout.vue'
import VerticalTimeline from '@/components/Experience/VerticalTimeline.vue'
import type { TimelineEntryProps } from '@/components/Experience/VerticalTimeline.vue'
import MicrosoftLogo from '@/assets/ext-logos/microsoft-logo.svg'
import YsuLogo from '@/assets/ext-logos/ysu-logo.svg'
import GovHostLogo from '@/assets/ext-logos/govhost-logo.svg'
import OhcLogo from '@/assets/ext-logos/ohc-logo.png'
import ChaseLogo from '@/assets/ext-logos/chase-logo.svg'
import ExpLogo from '@/assets/ext-logos/exp-logo.png'
import ReliableLogo from '@/components/ui/ReliableLogo.vue'

const timelineData: TimelineEntryProps[] = [
  {
    id: 'reliable',
    date: '01/2026 - Present',
    company: 'Reliable Robotics',
    jobTitle: 'Software Engineer - Internal Tools',
    description:
      'Develop zero-touch deployment automation mechanisms to deploy entire application stacks across multiple cloud environments. Lead codebase refactoring efforts to make various services more cloud-agnostic and configuration driven.',
    skills: [
      { name: 'C#', type: 'Backend' },
      { name: 'Azure', type: 'Infrastructure' },
      { name: 'Powershell', type: 'Infrastructure' },
      { name: 'DevOps', type: 'Infrastructure' },
    ],
  },
  {
    id: 'microsoft',
    date: '06/2024 - 01/2026',
    company: 'Microsoft',
    jobTitle: 'Software Engineer II',
    description:
      'Develop zero-touch deployment automation mechanisms to deploy entire application stacks across multiple cloud environments. Lead codebase refactoring efforts to make various services more cloud-agnostic and configuration driven.',
    skills: [
      { name: 'C#', type: 'Backend' },
      { name: 'Azure', type: 'Infrastructure' },
      { name: 'Powershell', type: 'Infrastructure' },
      { name: 'DevOps', type: 'Infrastructure' },
    ],
  },
  {
    id: 'exp',
    date: '06/2020 - 06/2024',
    company: 'Expedition Technology',
    jobTitle: 'Software Engineer',
    description:
      'Full-stack Development building RESTful web services and React based front-ends. Containerize and deploy services to Kubernetes environments.',
    skills: [
      { name: 'React.js', type: 'Frontend' },
      { name: 'Python', type: 'Backend' },
      { name: 'PostgreSQL', type: 'Backend' },
      { name: 'Docker', type: 'Infrastructure' },
      { name: 'Kubernetes', type: 'Infrastructure' },
      { name: 'Jenkins + GitLab', type: 'Infrastructure' },
    ],
  },
  {
    id: 'ysu-ra',
    date: '08/2019 - 05/2020',
    company: 'Youngstown State University',
    jobTitle: 'Research Assistant',
    description:
      'Collaborated with Electrical Engineering department to develop to an Android/IOS mobile application and web server to interface with a Bluetooth Low Energy device to collect pressure sensor readings.',
    skills: [
      { name: 'Vue.js', type: 'Frontend' },
      { name: 'Python', type: 'Backend' },
      { name: 'Desktop Apps', type: 'Other' },
      { name: 'Android', type: 'Other' },
      { name: 'Electronics', type: 'Other' },
    ],
  },
  {
    id: 'jpm',
    date: '06/2019 - 08/2019',
    company: 'J.P. Morgan Chase & Co.',
    jobTitle: 'Software Engineer Intern',
    description:
      'Worked in an agile team with 3 other interns to create a web application to help Financial Controllers asses foreign exchange risk. Implemented RESTful microservices using Spring Framework and collaborated with end-users to create an intuitive front-end experience using React.js',
    skills: [
      { name: 'Front-end', type: 'Frontend' },
      { name: 'React.js', type: 'Frontend' },
      { name: 'Java Spring', type: 'Backend' },
      { name: 'OracleDB', type: 'Backend' },
    ],
  },
  {
    id: 'itc',
    date: '03/2018 - 04/2019',
    company: 'Intellitech Corporation (Now GovHost)',
    jobTitle: 'Software Engineer Intern',
    description:
      'Developed/maintained a variety modern and legacy public safety software. Projects included web apps, data migration tools, user groups/permissions managers, and VB Access applications.',
    skills: [
      { name: 'Vue.js', type: 'Frontend' },
      { name: '.NET', type: 'Backend' },
      { name: 'MicrosoftSQL', type: 'Backend' },
      { name: 'VB6 Access', type: 'Other' },
    ],
  },
  {
    id: 'ysu-tutor',
    date: '01/2016 - 05/2020',
    company: 'Youngstown State University',
    jobTitle: 'Computer Science Tutor',
    description:
      'Teach core programming concepts in C++, Java, and Python. Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming',
    skills: [{ name: 'Teaching', type: 'Other' }],
  },
  {
    id: 'ohc',
    date: '01/2016 - 03/2019',
    company: 'The Oak Hill Collaborative',
    jobTitle: 'Instructor',
    description:
      'Use Raspberry Pis and Python programming with Minecraft to teach 4th - 6th grade children the basics of computer hardware, software, and programming.',
    skills: [
      { name: 'Teaching', type: 'Other' },
      { name: 'Working with Children', type: 'Other' },
    ],
  },
]
</script>

<template>
  <PersonalPageLayout title="Experience">
    <VerticalTimeline :timeline-data="timelineData" class="mt-6">
      <template #reliable-icon>
        <ReliableLogo
          class="fill-darcula-700 size-11"
          alt="Reliable Robotics Logo"
          :src="ReliableLogo"
        />
      </template>
      <template #microsoft-icon>
        <img class="size-12" alt="Microsoft Logo" :src="MicrosoftLogo" />
      </template>
      <template #exp-icon>
        <img class="size-10" alt="Expedition Technology Logo" :src="ExpLogo" />
      </template>
      <template #ysu-ra-icon>
        <img class="size-12" alt="Youngstown State University Logo" :src="YsuLogo" />
      </template>
      <template #jpm-icon>
        <img class="size-12" alt="J.P. Morgan Chase & Co. Logo" :src="ChaseLogo" />
      </template>
      <template #itc-icon>
        <img class="size-12" :src="GovHostLogo" alt="GovHost Corporation Logo" />
      </template>
      <template #ysu-tutor-icon>
        <img class="size-12" :src="YsuLogo" alt="Youngstown State University Logo" />
      </template>
      <template #ohc-icon>
        <img class="size-12" :src="OhcLogo" alt="Oak Hill Collaborative Logo" />
      </template>
    </VerticalTimeline>
  </PersonalPageLayout>
</template>
