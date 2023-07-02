import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import router from '~/router'
import apolloClient from '~/plugins/apolloClient'

import 'font-proxima-nova-css/fonts.min.css'
import '~/assets/reset.css'
import '~/assets/form.css'
import 'virtual:uno.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
app.use(router)
app.mount('#app')
