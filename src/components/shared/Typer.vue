<script lang="ts" setup>
import { ref, computed } from "vue";

interface TyperProps {
  text: string;
  typeSpeed?: number;
  preTypeDelay?: number;
  keepCaret?: boolean;
}

type TypingState = "idle" | "typing" | "done";

const props = withDefaults(defineProps<TyperProps>(), {
  typeSpeed: 75,
  preTypeDelay: 0,
  keepCaret: false,
});

const letters = ref<string[]>([]);
const state = ref<TypingState>("idle");
const i = ref(0);

const caretVisible = computed(() => {
  if (props.keepCaret) {
    return state.value !== "idle";
  } else {
    return state.value === "typing";
  }
});

if (props.text.length > 0) {
  setTimeout(() => {
    state.value = "typing";
    const interval = setInterval(() => {
      letters.value.push(props.text[i.value]);
      i.value += 1;
      if (i.value >= props.text.length) {
        state.value = "done";
        clearInterval(interval);
      }
    }, props.typeSpeed);
  }, props.preTypeDelay);
}
</script>

<template>
  <div>
    <span v-for="(letter, i) in letters" :key="i">{{ letter }}</span>
    <span
      class="bg-white animate-idle-blink inline-block typer-caret"
      :class="{ invisible: !caretVisible }"
    />
  </div>
</template>

<style scoped>
.typer-caret {
  width: 1px;
}
.typer-caret::before {
  box-sizing: inherit;
  content: "\200B";
}
</style>
