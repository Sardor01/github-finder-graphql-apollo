import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from '~/router'
import apolloClient from '~/plugins/apolloClient'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
app.use(router)
app.mount('#app')
