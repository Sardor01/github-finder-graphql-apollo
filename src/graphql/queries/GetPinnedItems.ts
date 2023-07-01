import gql from 'graphql-tag'

export const GET_PINNED_ITEMS = gql`
  query GetPinnedItems($first: Int!) {
    viewer {
      pinnedItems(first: $first) {
        edges {
          node {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }
  }
`
