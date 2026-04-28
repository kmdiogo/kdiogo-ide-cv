<script lang="ts" setup vapor>
import type { TimelineEntryProps } from '@/components/HotTakes/TimelineEntry.vue'
import VerticalTimeline from '@/components/HotTakes/VerticalTimeline.vue'
import PersonalPageLayout from '@/components/layout/PersonalPageLayout.vue'

const hotTakes: TimelineEntryProps = [
  {
    date: '2020',
    title: 'TailwindCSS is the #1 styling solution for application development',
    description: 'I said it',
    spiceLevel: 2,
  },
  {
    date: '2022',
    title: `React is Outdated. Let's Please Leave Implicit Reactivity Behind`,
    description: 'I said it',
    spiceLevel: 2,
  },
  {
    date: '2020',
    title: 'TailwindCSS is the #1 styling solution for application development',
    description: 'I said it',
    spiceLevel: 2,
  },
]
</script>

<template>
  <PersonalPageLayout title="Hot Takes">
    <div class="flex flex-col gap-10">
      <div>
        Here's some opinions I have about various technologies and software practices. I fully
        expect some of these to change over the course of my life, so I've conveniently visualized
        them in a timeline format for you to see the progression. Tailwind | good code (low
        coupling, relatively high cohesion) | React is outdated | Stop making everything an
        interface
      </div>

      <VerticalTimeline :timeline-data="hotTakes" />
    </div>
  </PersonalPageLayout>
</template>
