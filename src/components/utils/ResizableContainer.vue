<script lang="ts" setup>
import { ref, reactive, onMounted, onUnmounted } from "vue";
import emitter from "@/services/pubsub";

const props = defineProps({
  initialSize: {
    type: String,
    required: true,
  },
  maxWidthPercent: {
    type: Number,
    default: 50,
  },
  minWidthPercent: {
    type: Number,
    default: 10,
  },
});

const isResizing = ref(false);
const containerStyle = reactive({
  width: props.initialSize,
});

function handleGlobalMouseup() {
  isResizing.value = false;
  // NOTE: this could potentially be buggy with multiple instances of this component
  //       unless we can guarantee no two containers can be resized at the same time.
  emitter.emit("CONTAINER_RESIZE_STOP");
}

function handleGlobalMouseMove(e?: MouseEvent) {
  // Resize window relative to where mouse is
  if (!e) return;
  if (!e.clientX || !e.clientY) return;

  if (
    isResizing.value &&
    e.clientX > window.innerWidth * (props.minWidthPercent / 100) &&
    e.clientX < window.innerWidth * (props.maxWidthPercent / 100)
  ) {
    containerStyle.width = e?.clientX + "px";
  }
}

function handleMouseDown(e?: MouseEvent) {
  e?.preventDefault();
  isResizing.value = true;
  emitter.emit("CONTAINER_RESIZE_START");
}

onMounted(() => {
  emitter.on("MOUSE_UP", handleGlobalMouseup);
  emitter.on("MOUSE_MOVE", handleGlobalMouseMove);
});

onUnmounted(() => {
  emitter.off("MOUSE_UP", handleGlobalMouseup);
  emitter.off("MOUSE_MOVE", handleGlobalMouseMove);
});
</script>

<template>
  <div class="flex" :style="containerStyle">
    <div class="flex-grow overflow-auto">
      <slot></slot>
    </div>
    <span
      class="bg-darcula-300 h-full cursor-e-resize"
      :style="{ width: '7px' }"
      @mousedown="handleMouseDown"
      draggable="false"
    />
  </div>
</template>
