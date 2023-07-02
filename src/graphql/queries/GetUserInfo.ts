import gql from 'graphql-tag'

export const GET_USER_INFO = gql`
  query GetUserInfo($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      company
      email
      isHireable
      location
      url
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists(privacy: PUBLIC) {
        totalCount
      }
      repositories(first: 5, orderBy: { field: CREATED_AT, direction: DESC }, privacy: PUBLIC) {
        totalCount
        nodes {
          name
          description
          url
          isPrivate
          isTemplate
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
              color
            }
          }
          stargazers {
            totalCount
          }
        }
      }
      socialAccounts(first: 5) {
        totalCount
        nodes {
          displayName
          url
        }
      }
    }
  }
`
