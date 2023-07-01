<script setup lang="ts">
import { GET_PINNED_ITEMS } from '~/graphql/queries/GetPinnedItems'
import type { GetPinnedItemsQuery, GetPinnedItemsQueryVariables } from '~/graphql/__generated__/graphql'

const { result } = useQuery<GetPinnedItemsQuery, GetPinnedItemsQueryVariables>(GET_PINNED_ITEMS, {
  first: 2,
})
</script>

<template>
  <main class="mx-auto px-4 py-10 font-sans text-gray-700 container">
    <div>
      <pre>{{ JSON.stringify(result?.viewer.pinnedItems.edges, null, 2) }}</pre>
    </div>
  </main>
</template>
