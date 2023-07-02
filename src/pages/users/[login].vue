<script setup lang="ts">
import type { RouteLocationResolved } from 'vue-router/auto'
import { GET_USER_INFO } from '~/graphql/queries/GetUserInfo'
import type { GetUserInfoQuery, GetUserInfoQueryVariables } from '~/graphql/__generated__/graphql'

const route = useRoute() as RouteLocationResolved<'/users/[login]'>

const { result, loading } = useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GET_USER_INFO, {
  login: route.params.login,
})
</script>

<template>
  <main class="mx-auto px-4 py-10 font-sans container">
    <div v-if="loading"><img src="/spinner.gif" alt="" draggable="false" class="mx-auto" /></div>
    <div v-if="result">
      <pre>{{ JSON.stringify(result.user?.socialAccounts.nodes, null, 2) }}</pre>
    </div>
  </main>
</template>
