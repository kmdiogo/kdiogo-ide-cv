<script lang="ts" setup vapor>
import PersonalPageLayout from '@/components/layout/PersonalPageLayout.vue'
import FontAwesomeIcon from '@/components/ui/FontAwesomeIcon.vue'
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'

const hotTakes = [
  {
    date: '2024',
    items: [
      {
        title: `React has an outdated reactivity model. Let' leave it in the past`,
        description: `I get it, React changed the world of front-end when it introduced a simple, one-way data flow and reactivity system in a component framework. 
          But at the end of the day, all I care about as a user of a framework is that the parts of my UI that depend on a reactive variable automatically get updated when I change it,
          and in 2025 there's some pretty ergonomic and performant APIs to accomplish this (see alien-signals and Proxy APIs). I don't care that React's rendering system is easier to understand, and I certainly don't care about manually managing
          when my application gets re-rendered (I'm looking at you useMemo/useCallback). Just update the damn parts of the DOM that need to be updated. The creation of the React Compiler as a band-aid to this issue suggests that maybe we've been using the wrong abstraction all these years.`,
        spiceLevel: 2,
      },
    ],
  },
  {
    date: '2020',
    items: [
      {
        title: 'TailwindCSS is the #1 styling solution for application development',
        description: `
        I've already got enough cognitive overhead architecting my frontend, the last thing I need is another layer in my codebase (CSS) that also needs to be architected and have its own set of naming conventions. 
        I'm not concnerned with re-using styles, I'm concerned with re-using application behaviors, and in the world of component frameworks, that re-use is accomplished through components, not CSS classes. Really, all I want is
        some configurable design system built into my CSS, and that's exactly what Tailwind is.`,
        spiceLevel: 3,
      },
    ],
  },
]
</script>

<template>
  <PersonalPageLayout title="Hot Takes">
    <div class="flex flex-col">
      <div>
        Here's some opinions I have about various technologies and software practices. I fully
        expect some of these to change over the course of my life, so I've conveniently visualized
        them in a timeline format for you to see the progression:
      </div>

      <div>
        <div class="border-darcula-500 flex gap-20 py-6" v-for="take in hotTakes" :key="take.date">
          <div class="text-5xl font-bold">
            {{ take.date }}
          </div>
          <div class="flex grow flex-col gap-5">
            <div
              v-for="item in take.items"
              :key="item.description"
              class="bg-darcula-500 flex flex-col rounded-lg p-4"
            >
              <span class="text-lg font-semibold italic">"{{ item.title }}"</span>
              <span>{{ item.description }}</span>
              <div class="mt-5 text-sm">
                <span>Spice Level: </span>
                <span v-for="i in item.spiceLevel" :key="i">
                  <FontAwesomeIcon :icon="faPepperHot" class="text-red-600" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PersonalPageLayout>
</template>
