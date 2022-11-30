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

<script lang="ts">
import { ref, reactive, onMounted, onUnmounted, defineComponent } from "vue";
import emitter, { PubsubEvent } from "@/services/pubsub";

export default defineComponent({
  name: "ResizableContainer",
  props: {
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
  },
  setup(props) {
    const isResizing = ref(false);
    const containerStyle = reactive({
      width: props.initialSize,
    });

    function handleGlobalMouseup() {
      isResizing.value = false;
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
    }

    onMounted(() => {
      emitter.on(PubsubEvent.MOUSE_UP, handleGlobalMouseup);
      emitter.on(PubsubEvent.MOUSE_MOVE, handleGlobalMouseMove);
    });

    onUnmounted(() => {
      emitter.off(PubsubEvent.MOUSE_UP, handleGlobalMouseup);
      emitter.off(PubsubEvent.MOUSE_MOVE, handleGlobalMouseMove);
    });

    return {
      isResizing,
      containerStyle,
      handleMouseDown,
    };
  },
});
</script>

<style scoped></style>
