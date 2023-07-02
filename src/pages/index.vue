<script setup lang="ts">
import { SEARCH_USERS } from '~/graphql/queries/SearchUsers'
import type { SearchUsersQuery, SearchUsersQueryVariables } from '~/graphql/__generated__/graphql'

const enabled = ref(false)

const variables: SearchUsersQueryVariables = reactive({
  query: '',
  first: 10,
})

const { result, loading, onResult } = useQuery<SearchUsersQuery, SearchUsersQueryVariables>(
  SEARCH_USERS,
  variables,
  () => ({
    enabled: enabled.value,
  }),
)

const onSubmit = () => {
  enabled.value = true
  onResult((res) => {
    if (!res.partial) {
      enabled.value = false
      variables.query = ''
    }
  })
}
</script>

<template>
  <main class="mx-auto px-4 py-10 font-sans container">
    <form class="grid grid-cols-1 mb-8 gap-4" @submit.prevent="onSubmit">
      <base-text-field id="search" v-model="variables.query" placeholder="Search..." required />
      <base-button size="md" variant="gray" class="uppercase" :disabled="loading" :loading="loading">
        Search
      </base-button>
    </form>
    <div v-if="loading"><img src="/spinner.gif" alt="" draggable="false" class="mx-auto" /></div>
    <div v-if="result && result.search.edges">
      <div class="xs:grid-cols-2 grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 xl:gap-6">
        <template v-for="edge in result.search.edges">
          <user-card
            v-if="edge && edge.node && edge.node.__typename === 'User'"
            :key="`user-${edge.node.id}`"
            :item="edge.node"
          />
        </template>
      </div>
    </div>
  </main>
</template>
