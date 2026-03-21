import DefaultTheme from 'vitepress/theme'
import RunCode from './RunCode.vue'
import InlinePlayground from './InlinePlayground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RunCode', RunCode)
    app.component('InlinePlayground', InlinePlayground)
  },
}
