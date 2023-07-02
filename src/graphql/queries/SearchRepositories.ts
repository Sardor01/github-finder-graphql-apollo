import gql from 'graphql-tag'

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($query: String!, $first: Int) {
    search(query: $query, type: REPOSITORY, first: $first) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            isPrivate
            isTemplate
            languages(first: 1) {
              nodes {
                id
                name
                color
              }
            }
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`
