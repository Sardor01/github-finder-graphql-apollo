import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APP_GITHUB_URL,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_TOKEN}`,
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
