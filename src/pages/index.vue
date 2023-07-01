<script setup lang="ts">
import { SEARCH_USERS } from '~/graphql/queries/SearchUsers'
import { SearchType } from '~/graphql/__generated__/graphql'
import type { SearchUsersQuery, SearchUsersQueryVariables } from '~/graphql/__generated__/graphql'

const { result } = useQuery<SearchUsersQuery, SearchUsersQueryVariables>(SEARCH_USERS, {
  query: 'sardor01',
  type: SearchType.User,
  first: 2,
})
</script>

<template>
  <main class="mx-auto px-4 py-10 font-sans text-gray-700 container">
    <div>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
  </main>
</template>
