import { onMounted, onUnmounted, type Ref } from 'vue'

export function useClickOutside(elRef: Ref<HTMLElement | null>, callback: () => void) {
  const handler = (event: MouseEvent) => {
    if (elRef.value && !elRef.value.contains(event.target as Node)) {
      callback()
    }
  }

  onMounted(() => document.addEventListener('click', handler, true))
  onUnmounted(() => document.removeEventListener('click', handler, true))
}
