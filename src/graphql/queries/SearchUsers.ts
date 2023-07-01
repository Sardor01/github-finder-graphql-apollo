import gql from 'graphql-tag'

export const SEARCH_USERS = gql`
  query SearchUsers($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      edges {
        node {
          ... on User {
            avatarUrl
            login
          }
        }
      }
    }
  }
`
