<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import emitter from "@/services/pubsub";

const containerResizing = ref(false);

function handleContainerResizeStart() {
  containerResizing.value = true;
}

function handleContainerResizeStop() {
  containerResizing.value = false;
}

onMounted(() => {
  emitter.on("CONTAINER_RESIZE_START", handleContainerResizeStart);
  emitter.on("CONTAINER_RESIZE_STOP", handleContainerResizeStop);
});

onUnmounted(() => {
  emitter.off("CONTAINER_RESIZE_START", handleContainerResizeStart);
  emitter.off("CONTAINER_RESIZE_STOP", handleContainerResizeStop);
});
</script>

<template>
  <iframe
    class="p-0"
    :class="{ 'pointer-events-none': containerResizing }"
    src="/Kenneth_Diogo_Resume.pdf"
  />
</template>
