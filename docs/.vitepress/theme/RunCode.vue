<script setup lang="ts">
import { ref, onMounted } from 'vue'

const wrapper = ref<HTMLElement>()
const playgroundUrl = ref('')

onMounted(() => {
  if (!wrapper.value) return
  const codeEl = wrapper.value.querySelector('pre code')
  if (!codeEl) return
  const code = codeEl.textContent || ''
  const encoded = encodeURIComponent(code.trim())
  playgroundUrl.value = `/playground/?code=${encoded}`
})
</script>

<template>
  <div class="run-code-wrapper" ref="wrapper">
    <slot />
    <div class="run-code-actions" v-if="playgroundUrl">
      <a :href="playgroundUrl" target="_blank" rel="noopener" class="run-code-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
        실행해보기
      </a>
    </div>
  </div>
</template>

<style scoped>
.run-code-wrapper {
  position: relative;
  margin: 16px 0;
}

.run-code-wrapper :deep(div[class*='language-']) {
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.run-code-actions {
  display: flex;
  justify-content: flex-end;
  padding: 8px 12px;
  background-color: var(--vp-code-block-bg);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: 1px solid var(--vp-c-divider);
}

.run-code-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}

.run-code-button:hover {
  background-color: var(--vp-c-brand-1);
  color: white;
}
</style>
