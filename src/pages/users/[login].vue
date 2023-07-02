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
    <div v-if="result && result.user">
      <div class="mb-4 flex flex-wrap items-center gap-1 text-lg">
        Looking for a job:
        <span
          class="inline-block flex-shrink-0 text-2xl"
          :class="result.user.isHireable ? 'i-mdi-check-decagram text-green-600' : 'i-mdi-close-octagon text-red-600'"
        />
      </div>
      <div class="grid grid-cols-12 gap-10 border border-gray-300 p-6">
        <div class="col-span-12 md:col-span-4">
          <img
            :src="result.user.avatarUrl"
            :alt="result.user.name!"
            class="mx-auto max-w-[300px] w-full rounded-full"
          />
          <div class="mt-4 text-lg space-y-1">
            <p>{{ result.user.name }}</p>
            <p>
              <a :href="result.user.url" target="_blank" class="text-blue-700">{{ route.params.login }}</a>
            </p>
            <p v-if="result.user.bio">{{ result.user.bio }}</p>
            <p>Company: {{ result.user.company }}</p>
            <p>Location: {{ result.user.location }}</p>
            <a
              v-if="result.user.email"
              :href="`mailto:${result.user.email}`"
              target="_blank"
              class="block text-blue-700"
            >
              Email: {{ result.user.email }}
            </a>
            <a v-if="result.user.websiteUrl" :href="result.user.websiteUrl" target="_blank" class="block text-blue-700">
              Website: {{ result.user.websiteUrl }}
            </a>
            <p>Followers: {{ result.user.followers.totalCount }}</p>
            <p>Following: {{ result.user.following.totalCount }}</p>
            <p>Gists: {{ result.user.gists.totalCount }}</p>
            <p>Repositories: {{ result.user.repositories.totalCount }}</p>
            <template v-if="result.user.socialAccounts && result.user.socialAccounts.nodes">
              <template v-for="socialAccount in result.user.socialAccounts.nodes">
                <a
                  v-if="socialAccount"
                  :key="socialAccount.displayName"
                  :href="socialAccount.url"
                  target="_blank"
                  class="block text-blue-700"
                >
                  {{ socialAccount.displayName }}
                </a>
              </template>
            </template>
          </div>
        </div>
        <div v-if="result.user.repositories.nodes" class="col-span-12 md:col-span-8">
          <h1 class="mb-2 text-xl font-semibold">Recent Repositories</h1>
          <div class="grid grid-cols-12 gap-4">
            <template v-for="repository in result.user.repositories.nodes">
              <div
                v-if="repository"
                :key="repository.name"
                class="col-span-12 border border-gray-300 p-3 lg:col-span-6 md:col-span-12 sm:col-span-6"
              >
                <a :href="repository.url" target="_blank" class="text-blue-700">{{ repository.name }}</a>
                <p>{{ repository.description }}</p>
                <p v-if="repository.languages && repository.languages.nodes && repository.languages.nodes.length">
                  Top language:
                  <span
                    class="text-[var(--language-color)]"
                    :style="`--language-color: ${repository.languages.nodes[0]?.color}`"
                  >
                    {{ repository.languages.nodes[0]?.name }}
                  </span>
                </p>
                <p>Stars: {{ repository.stargazers.totalCount }}</p>
                <p>isPublic: {{ !repository.isPrivate }}</p>
                <p>isTemplate: {{ repository.isTemplate }}</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
