<script lang="ts" setup>
import PersonalPageLayout from "@/components/layout/PersonalPageLayout.vue";
import VerticalTimeline from "@/components/Experience/VerticalTimeline.vue";
import { TimelineEntryProps } from "@/components/Experience/VerticalTimeline.vue";

const timelineData: TimelineEntryProps[] = [
  {
    id: "microsoft",
    date: "06/2024 - Present",
    company: "Microsoft",
    jobTitle: "Software Engineer II",
    description:
      "Develop zero-touch deployment automation mechanisms to deploy entire application stacks across multiple cloud environments. Lead codebase refactoring efforts to make various services more cloud-agnostic and configuration driven.",
    skills: ["Azure", "Powershell", "C#", "DevOps"],
  },
  {
    id: "exp",
    date: "06/2020 - 06/2024",
    company: "Expedition Technology",
    jobTitle: "Software Engineer",
    description:
      "Full-stack Development building RESTful web services and React based front-ends. Containerize and deploy services to Kubernetes environments.",
    skills: [
      "Full-stack",
      "React.js",
      "Python",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
    ],
  },
  {
    id: "ysu-ra",
    date: "08/2019 - 05/2020",
    company: "Youngstown State University",
    jobTitle: "Research Assistant",
    description: `
            Collaborated with Electrical Engineering department to develop to an Android/IOS mobile application and
            web server to interface with a Bluetooth Low Energy device to collect pressure sensor readings.
        `,
    skills: [
      "Desktop Apps",
      "Web Apps",
      "Vue.js",
      "Python",
      "Android",
      "Electronics",
    ],
  },
  {
    id: "jpm",
    date: "06/2019 - 08/2019",
    company: "J.P. Morgan Chase & Co.",
    jobTitle: "Software Engineer Intern",
    description: `
            Worked in an agile team with 3 other interns to create a web application to help Financial Controllers asses foreign exchange risk.
            Implemented RESTful microservices using Spring Framework and
            collaborated with end-users to create an intuitive front-end experience using React.js
        `,
    skills: ["Front-end", "React.js", "Java Spring", "OracleDB"],
  },
  {
    id: "itc",
    date: "03/2018 - 04/2019",
    company: "Intellitech Corporation",
    jobTitle: "Software Engineer Intern",
    description: `
            Developed/maintained a variety modern and legacy public safety software.
            Projects included web apps, data migration tools, user groups/permissions managers, and VB Access applications.
        `,
    skills: ["VB6 Apps", "Web Development", ".NET", "Vue.js", "MicrosoftSQL"],
  },
  {
    id: "ysu-tutor",
    date: "01/2016 - 05/2020",
    company: "Youngstown State University",
    jobTitle: "Computer Science Tutor",
    description: `
            Teach core programming concepts in C++, Java, and Python.
            Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming
        `,
    skills: ["Teaching"],
  },
  {
    id: "ohc",
    date: "01/2016 - 03/2019",
    company: "The Oak Hill Collaborative",
    jobTitle: "Instructor",
    description: `
            Use Raspberry Pis and Python programming with Minecraft to teach 4th - 6th grade
            children the basics of computer hardware, software, and programming.
        `,
    skills: ["Teaching", "Working with Children"],
  },
];
</script>

<template>
  <PersonalPageLayout title="Experience">
    <VerticalTimeline :timeline-data="timelineData" class="mt-6">
      <template #microsoft-icon>
        <img
          class="w-14"
          alt="Expedition Technology Logo"
          src="../../assets/logos/microsoft.png"
        />
      </template>
      <template #exp-icon>
        <img
          class="bg-white"
          alt="Expedition Technology Logo"
          src="../../assets/logos/exp-logo.png"
        />
      </template>
      <template #ysu-ra-icon>
        <img
          class="w-14"
          alt="Youngstown State University Logo"
          src="../../assets/logos/ysu-logo.png"
        />
      </template>
      <template #jpm-icon>
        <img
          class="w-10"
          alt="J.P. Morgan Chase & Co. Logo"
          src="../../assets/logos/jpm-logo.png"
        />
      </template>
      <template #itc-icon>
        <div class="bg-white h-full flex justify-center items-center">
          <img
            src="../../assets/logos/itc-logo.png"
            alt="Intellitech Corporation Logo"
          />
        </div>
      </template>
      <template #ysu-tutor-icon>
        <img
          class="w-14"
          src="../../assets/logos/ysu-logo.png"
          alt="Youngstown State University Logo"
        />
      </template>
      <template #ohc-icon>
        <img
          class="w-14"
          src="../../assets/logos/ohc-logo.png"
          alt="Oak Hill Collaborative Logo"
        />
      </template>
    </VerticalTimeline>
  </PersonalPageLayout>
</template>
