<template>
    <PersonalPageLayout title="Experience">
        <div class="space-y-4">
            <ExperienceItem year="2020" month="September" job-title="Software Engineer" company="Expedition Technology">
                <template v-slot:logos>
                    <img class="w-20" src="../../assets/logos/exp-logo.png" />
                </template>
            </ExperienceItem>

            <hr />

            <ExperienceItem year="2019" month="September" job-title="Research Assistant" company="Youngstown State University">
                <template v-slot:logos>
                    <img class="w-20" src="../../assets/logos/ysu-logo.png" />
                </template>

                <p>
                    Collaborating with Electrical Engineering department to develop to an Android/IOS mobile application and web server
                    to interface with a Bluetooth Low Energy device to collect pressure sensor readings.
                </p>
                <p>Technologies: Android, Django, Vue.js, Electron</p>
            </ExperienceItem>

            <hr />

            <ExperienceItem year="2019" month="August" job-title="Software Engineer Intern" company="J.P. Morgan Chase & Co.">
                <template v-slot:logos>
                    <img class="w-16 rounded" src="../../assets/logos/jpm-logo.png" />
                </template>

                <p>Worked in an agile team with 3 other interns to create a web application to help Financial Controllers asses foreign exchange risk</p>
                <p>Implemented RESTful microservices using Spring Framework</p>
                <p>Collaborated with end-users to create an intuitive front-end experience using React.js</p>
                <p>Technologies: React, Bootstrap 4, Cloud Technologies, Java w/ Spring Framework</p>
            </ExperienceItem>

            <hr />

            <ExperienceItem year="2018" month="February" job-title="Software Developer" company="Intellitech Corporation">
                <template v-slot:logos>
                    <img class="w-24" src="../../assets/logos/itc-logo.png" />
                </template>

                <p>Developed Jail Management Systems and Public Safety Software for a variety of counties across the U.S.</p>
                <p>Technologies: ASP.NET MVC, Vue.js, VBA, MicrosoftSQL, WPF</p>
            </ExperienceItem>

            <hr />

            <ExperienceItem year="2016" month="January" job-title="Computer Science Tutor" company="YSU Center for Student Progress">
                <template v-slot:logos>
                    <img class="w-20" src="../../assets/logos/ysu-logo.png" />
                </template>

                <p>
                    Teach core programming concepts in C++, Java, and Python.
                    Topics include Problem Solving, Data Structures and Algorithms, Artificial Intelligence, and Object-Oriented Programming
                </p>
            </ExperienceItem>

            <hr />

            <ExperienceItem year="2016" month="January" job-title="Teacher" company="Oak Hill Collaborative">
                <template v-slot:logos>
                    <img class="w-20" src="../../assets/logos/ohc-logo.png" />
                </template>

                <p>
                    Use Raspberry Pis and Python programming with Minecraft to teach 4th - 6th grade
                    children the basics of computer hardware, software, and programming.
                </p>
                <p>
                    Partnered through Success after Six 6, the Oak Hill Collaborative Raspberry Program is designed
                    to give underprivileged children in the Youngstown area access to technology and technology education.
                    Each child is taught how to operate and maintain the Raspberry Pis they are given at the end of the program
                </p>
            </ExperienceItem>
        </div>

    </PersonalPageLayout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PersonalPageLayout from "@/components/shared/PersonalPageLayout.vue";
import ExperienceItem from "@/components/Experience/ExperienceItem.vue";

export default defineComponent({
    name: "Experience",
    components: {PersonalPageLayout, ExperienceItem}
})
</script>

<style scoped>

</style>
