import DefaultTheme from 'vitepress/theme'
import RunCode from './RunCode.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RunCode', RunCode)
  },
}
