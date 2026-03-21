<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps<{
  apiUrl?: string
}>()

const wrapper = ref<HTMLElement>()
const originalCode = ref('')
const editableCode = ref('')
const output = ref('')
const isRunning = ref(false)
const isEditing = ref(false)
const hasError = ref(false)
const textareaEl = ref<HTMLTextAreaElement>()

const apiBase = props.apiUrl || 'https://api.hong-ik.dev'

onMounted(() => {
  if (!wrapper.value) return
  const codeEl = wrapper.value.querySelector('pre code')
  if (!codeEl) return
  originalCode.value = codeEl.textContent?.trim() || ''
  editableCode.value = originalCode.value
})

function startEdit() {
  isEditing.value = true
  nextTick(() => {
    if (textareaEl.value) {
      autoResize(textareaEl.value)
      textareaEl.value.focus()
    }
  })
}

function resetCode() {
  editableCode.value = originalCode.value
  isEditing.value = false
  output.value = ''
  hasError.value = false
}

function autoResize(el: HTMLTextAreaElement) {
  el.style.height = 'auto'
  el.style.height = el.scrollHeight + 'px'
}

function onInput(e: Event) {
  const target = e.target as HTMLTextAreaElement
  editableCode.value = target.value
  autoResize(target)
}

async function runCode() {
  isRunning.value = true
  output.value = ''
  hasError.value = false

  try {
    const res = await fetch(`${apiBase}/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: editableCode.value }),
    })
    const data = await res.json()
    if (res.ok) {
      output.value = data.output || data.result || '(실행 완료 - 출력 없음)'
      hasError.value = !!data.error
    } else {
      output.value = data.error || data.message || `오류 (${res.status})`
      hasError.value = true
    }
  } catch (err: any) {
    output.value = `연결 실패: ${err.message}`
    hasError.value = true
  } finally {
    isRunning.value = false
  }
}
</script>

<template>
  <div class="inline-playground" ref="wrapper">
    <div v-show="!isEditing" class="code-display">
      <slot />
    </div>

    <div v-if="isEditing" class="code-editor">
      <textarea
        ref="textareaEl"
        :value="editableCode"
        @input="onInput($event)"
        spellcheck="false"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
      />
    </div>

    <div class="playground-actions">
      <div class="actions-left">
        <button
          v-if="!isEditing"
          class="action-btn edit-btn"
          @click="startEdit"
          title="코드 편집"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          편집
        </button>
        <button
          v-if="isEditing"
          class="action-btn reset-btn"
          @click="resetCode"
          title="원래 코드로 복원"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"/>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
          </svg>
          복원
        </button>
      </div>
      <div class="actions-right">
        <button
          class="action-btn run-btn"
          :class="{ running: isRunning }"
          :disabled="isRunning"
          @click="runCode"
        >
          <svg v-if="!isRunning" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span v-if="isRunning" class="spinner" />
          {{ isRunning ? '실행 중...' : '실행' }}
        </button>
      </div>
    </div>

    <div v-if="output" class="playground-output" :class="{ error: hasError }">
      <div class="output-header">
        <span class="output-label">{{ hasError ? '오류' : '출력' }}</span>
        <button class="output-close" @click="output = ''" title="닫기">&times;</button>
      </div>
      <pre class="output-content">{{ output }}</pre>
    </div>
  </div>
</template>

<style scoped>
.inline-playground {
  position: relative;
  margin: 16px 0;
}

.inline-playground :deep(div[class*='language-']) {
  margin: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.code-editor {
  background-color: var(--vp-code-block-bg);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.code-editor textarea {
  display: block;
  width: 100%;
  min-height: 80px;
  padding: 20px 24px;
  margin: 0;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  color: var(--vp-code-block-color, var(--vp-c-text-1));
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.6;
  tab-size: 2;
  white-space: pre;
  overflow-x: auto;
  box-sizing: border-box;
}

.playground-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--vp-code-block-bg);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.inline-playground:has(.playground-output) .playground-actions {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.actions-left,
.actions-right {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  font-family: inherit;
}

.edit-btn {
  color: var(--vp-c-text-2);
  background-color: transparent;
}
.edit-btn:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.reset-btn {
  color: var(--vp-c-text-2);
  background-color: transparent;
}
.reset-btn:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.run-btn {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}
.run-btn:hover:not(:disabled) {
  background-color: var(--vp-c-brand-1);
  color: white;
}
.run-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.playground-output {
  background-color: var(--vp-code-block-bg);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  border-top: 1px dashed var(--vp-c-divider);
}

.output-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--vp-c-brand-1);
}

.playground-output.error .output-label {
  color: var(--vp-c-danger-1, #e53e3e);
}

.output-close {
  background: none;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  padding: 0 4px;
}
.output-close:hover {
  color: var(--vp-c-text-1);
}

.output-content {
  margin: 0;
  padding: 12px 24px 16px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  word-break: break-all;
  background: transparent;
}

.playground-output.error .output-content {
  color: var(--vp-c-danger-1, #e53e3e);
}

@media (max-width: 640px) {
  .code-editor textarea {
    padding: 16px;
    font-size: 13px;
  }

  .playground-actions {
    padding: 6px 8px;
  }

  .action-btn {
    padding: 4px 8px;
    font-size: 12px;
  }

  .output-content {
    padding: 10px 16px 14px;
    font-size: 12px;
  }
}
</style>
