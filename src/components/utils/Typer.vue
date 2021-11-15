<template>
    <div>
        <span v-for="(letter, i) in letters" :key="i">{{letter}}</span>
        <span
            class="bg-white animate-idle-blink inline-block typer-caret"
            :class="{'invisible': !caretVisible}"
        />
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue'

interface TyperProps {
    text: string;
    typeSpeed: number;
    preTypeDelay: number;
    keepCaret: boolean;
}

enum TypingState {
    IDLE,
    TYPING,
    DONE
}

export default defineComponent({
    name: "Typer",
    props: {
        text: {
            type: String,
            required: true
        },
        typeSpeed: {
            type: Number,
            default: 75
        },
        preTypeDelay: {
            type: Number,
            default: 0
        },
        keepCaret: {
            type: Boolean,
            default: false
        }
    },
    setup(props: TyperProps) {
        const letters = ref<string[]>([])
        const state = ref(TypingState.IDLE)
        const i = ref(0)

        const caretVisible = computed(() => {
            if (props.keepCaret) {
                return state.value !== TypingState.IDLE
            } else {
                return state.value === TypingState.TYPING as TypingState
            }
        })

        if (props.text.length > 0) {
            setTimeout(() => {
                state.value = TypingState.TYPING
                const interval = setInterval(() => {
                    letters.value.push(props.text[i.value])
                    i.value += 1
                    if (i.value >= props.text.length) {
                        state.value = TypingState.DONE
                        clearInterval(interval)
                    }
                }, props.typeSpeed)
            }, props.preTypeDelay)

        }

        return {
            caretVisible,
            state,
            TypingState,
            letters
        }
    }
})
</script>

<style scoped>
    .typer-caret {
        width: 1px;
    }
    .typer-caret::before {
        box-sizing: inherit;
        content: "\200B";
    }
</style>
