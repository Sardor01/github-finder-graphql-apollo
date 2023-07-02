<script setup lang="ts">
import type { SearchUsersQuery } from '~/graphql/__generated__/graphql'
import type { NonNullable } from '~/utils/types'

defineProps<{
  item: NonNullable<NonNullable<NonNullable<SearchUsersQuery['search']['edges']>[number]>['node']>
}>()
</script>

<template>
  <div
    v-if="item.__typename === 'User'"
    class="flex flex-col items-center justify-center border border-gray-300 p-4 text-center"
  >
    <img :src="item.avatarUrl || '/placeholder.png'" class="h-16 w-16 rounded-full" />
    <h4 class="my-2.5">{{ item.login }}</h4>
    <RouterLink v-slot="{ href, navigate }" :to="`/users/${item.login}`" custom>
      <BaseButton is="a" :href="href" variant="gray" class="px-3 py-1 text-sm" @click="navigate"> More </BaseButton>
    </RouterLink>
  </div>
</template>
