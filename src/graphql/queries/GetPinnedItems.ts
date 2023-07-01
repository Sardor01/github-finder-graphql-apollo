import gql from 'graphql-tag'

export const GET_PINNED_ITEMS = gql`
  query GetPinnedItems {
    viewer {
      pinnedItems(first: 6) {
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
