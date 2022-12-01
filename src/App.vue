<script lang="ts" setup>
import TheToolbar from "@/components/TheToolbar.vue";
import ResizableContainer from "@/components/utils/ResizableContainer.vue";
import PageTabs from "@/components/PageTabs.vue";
import TheNavigator from "@/components/TheNavigator.vue";
import TheTerminal from "@/components/TheTerminal.vue";
import TheFooter from "@/components/TheFooter.vue";
import emitter, { PubsubEvent } from "@/services/pubsub";
import { throttle } from "lodash";
import { useLayoutStore } from "@/stores/layout";

const layoutStore = useLayoutStore();

function handleMouseUp() {
  emitter.emit(PubsubEvent.MOUSE_UP);
}

const handleMouseMove = throttle((e: MouseEvent) => {
  emitter.emit(PubsubEvent.MOUSE_MOVE, e);
}, 15);
</script>

<template>
  <div
    class="flex flex-col flex-shrink-0 h-screen font-body bg-darcula-700 text-darcula-200"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseUp"
  >
    <div class="bg-darcula-500 border-b border-gray-800 flex-shrink-0">
      <TheToolbar />
    </div>

    <div class="flex flex-grow">
      <ResizableContainer
        class="bg-darcula-500 flex-shrink-0 hidden md:flex"
        initial-size="260px"
      >
        <TheNavigator class="p-2" />
      </ResizableContainer>

      <main class="flex flex-col flex-grow overflow-auto">
        <PageTabs
          class="flex items-center border-b border-gray-800 bg-darcula-500 flex-shrink-0"
        />
        <router-view class="flex-grow overflow-auto h-0 p-5" />
      </main>
    </div>

    <TheTerminal class="flex-shrink-0 h-1/5" v-if="layoutStore.terminalOpen" />

    <TheFooter
      class="flex-shrink-0 bg-darcula-500 border-gray-800 border h-16"
    />
  </div>
</template>
