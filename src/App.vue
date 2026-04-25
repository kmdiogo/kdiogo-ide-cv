<script lang="ts" setup vapor>
import TheToolbar from '@/components/TheToolbar.vue'
import ResizableContainer from '@/components/shared/ResizableContainer.vue'
import PageTabs from '@/components/PageTabs.vue'
import TheNavigator from '@/components/navigation/TheNavigator.vue'
import TheTerminal from '@/components/TheTerminal.vue'
import TheFooter from '@/components/TheFooter.vue'
import emitter from '@/services/pubsub'
import { throttle } from 'lodash-es'
import { useLayoutStore } from '@/stores/layout'
import { useRoute, VaporRouterView } from 'vue-router'

const layoutStore = useLayoutStore()

function handleMouseUp() {
  emitter.emit('MOUSE_UP')
}

const handleMouseMove = throttle((e: MouseEvent) => {
  emitter.emit('MOUSE_MOVE', e)
}, 15)

const route = useRoute()
</script>

<template>
  <div
    class="font-body bg-darcula-700 text-darcula-200 flex h-screen shrink-0 flex-col"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseUp"
  >
    <div class="bg-darcula-500 shrink-0 border-b border-gray-800">
      <TheToolbar />
    </div>

    <div class="flex grow">
      <ResizableContainer class="bg-darcula-500 hidden shrink-0 md:flex" initial-size="260px">
        <TheNavigator class="p-2" />
      </ResizableContainer>

      <main class="flex grow flex-col overflow-auto">
        <PageTabs class="bg-darcula-500 flex shrink-0 items-center border-b border-gray-800" />
        <VaporRouterView class="h-0 grow overflow-auto" :class="{ 'p-5': !route.meta.noPadding }" />
      </main>
    </div>

    <TheTerminal v-if="layoutStore.terminalOpen" class="h-1/5 shrink-0" />

    <TheFooter class="bg-darcula-500 h-16 shrink-0 border border-gray-800" />
  </div>
</template>
