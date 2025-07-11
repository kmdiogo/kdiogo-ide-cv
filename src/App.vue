<script lang="ts" setup>
import TheToolbar from "@/components/TheToolbar.vue";
import ResizableContainer from "@/components/shared/ResizableContainer.vue";
import PageTabs from "@/components/PageTabs.vue";
import TheNavigator from "@/components/navigation/TheNavigator.vue";
import TheTerminal from "@/components/TheTerminal.vue";
import TheFooter from "@/components/TheFooter.vue";
import emitter from "@/services/pubsub";
import { throttle } from "lodash";
import { useLayoutStore } from "@/stores/layout";
import { useRoute } from "vue-router";

const layoutStore = useLayoutStore();

function handleMouseUp() {
  emitter.emit("MOUSE_UP");
}

const handleMouseMove = throttle((e: MouseEvent) => {
  emitter.emit("MOUSE_MOVE", e);
}, 15);

const route = useRoute();
</script>

<template>
  <div
    class="flex flex-col shrink-0 h-screen font-body bg-darcula-700 text-darcula-200"
    @mouseup="handleMouseUp"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseUp"
  >
    <div class="bg-darcula-500 border-b border-gray-800 shrink-0">
      <TheToolbar />
    </div>

    <div class="flex grow">
      <ResizableContainer
        class="bg-darcula-500 shrink-0 hidden md:flex"
        initial-size="260px"
      >
        <TheNavigator class="p-2" />
      </ResizableContainer>

      <main class="flex flex-col grow overflow-auto">
        <PageTabs
          class="flex items-center border-b border-gray-800 bg-darcula-500 shrink-0"
        />
        <router-view
          class="grow overflow-auto h-0"
          :class="{ 'p-5': !route.meta.noPadding }"
        />
      </main>
    </div>

    <TheTerminal v-if="layoutStore.terminalOpen" class="shrink-0 h-1/5" />

    <TheFooter class="shrink-0 bg-darcula-500 border-gray-800 border h-16" />
  </div>
</template>
