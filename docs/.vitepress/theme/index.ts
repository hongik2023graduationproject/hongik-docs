import DefaultTheme from 'vitepress/theme'
import RunCode from './RunCode.vue'
import InlinePlayground from './InlinePlayground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.config.globalProperties.$playgroundUrl =
      import.meta.env.VITE_PLAYGROUND_URL || 'https://hongik.tolelom.xyz'
    app.component('RunCode', RunCode)
    app.component('InlinePlayground', InlinePlayground)
  },
}
