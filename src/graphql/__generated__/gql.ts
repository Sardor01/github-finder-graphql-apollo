/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetUserInfo($login: String!) {\n    user(login: $login) {\n      name\n      avatarUrl\n      bio\n      company\n      email\n      isHireable\n      location\n      url\n      websiteUrl\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      gists(privacy: PUBLIC) {\n        totalCount\n      }\n      repositories(first: 5, orderBy: { field: CREATED_AT, direction: DESC }, privacy: PUBLIC) {\n        totalCount\n        nodes {\n          name\n          description\n          url\n          isPrivate\n          isTemplate\n          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {\n            nodes {\n              name\n              color\n            }\n          }\n          stargazers {\n            totalCount\n          }\n        }\n      }\n      socialAccounts(first: 5) {\n        totalCount\n        nodes {\n          displayName\n          url\n        }\n      }\n    }\n  }\n':
    types.GetUserInfoDocument,
  '\n  query SearchRepositories($query: String!, $first: Int) {\n    search(query: $query, type: REPOSITORY, first: $first) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            description\n            url\n            isPrivate\n            isTemplate\n            languages(first: 1) {\n              nodes {\n                id\n                name\n                color\n              }\n            }\n            stargazers {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.SearchRepositoriesDocument,
  '\n  query SearchUsers($query: String!, $first: Int) {\n    search(query: $query, type: USER, first: $first) {\n      edges {\n        node {\n          ... on User {\n            id\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n':
    types.SearchUsersDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetUserInfo($login: String!) {\n    user(login: $login) {\n      name\n      avatarUrl\n      bio\n      company\n      email\n      isHireable\n      location\n      url\n      websiteUrl\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      gists(privacy: PUBLIC) {\n        totalCount\n      }\n      repositories(first: 5, orderBy: { field: CREATED_AT, direction: DESC }, privacy: PUBLIC) {\n        totalCount\n        nodes {\n          name\n          description\n          url\n          isPrivate\n          isTemplate\n          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {\n            nodes {\n              name\n              color\n            }\n          }\n          stargazers {\n            totalCount\n          }\n        }\n      }\n      socialAccounts(first: 5) {\n        totalCount\n        nodes {\n          displayName\n          url\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetUserInfo($login: String!) {\n    user(login: $login) {\n      name\n      avatarUrl\n      bio\n      company\n      email\n      isHireable\n      location\n      url\n      websiteUrl\n      followers {\n        totalCount\n      }\n      following {\n        totalCount\n      }\n      gists(privacy: PUBLIC) {\n        totalCount\n      }\n      repositories(first: 5, orderBy: { field: CREATED_AT, direction: DESC }, privacy: PUBLIC) {\n        totalCount\n        nodes {\n          name\n          description\n          url\n          isPrivate\n          isTemplate\n          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {\n            nodes {\n              name\n              color\n            }\n          }\n          stargazers {\n            totalCount\n          }\n        }\n      }\n      socialAccounts(first: 5) {\n        totalCount\n        nodes {\n          displayName\n          url\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchRepositories($query: String!, $first: Int) {\n    search(query: $query, type: REPOSITORY, first: $first) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            description\n            url\n            isPrivate\n            isTemplate\n            languages(first: 1) {\n              nodes {\n                id\n                name\n                color\n              }\n            }\n            stargazers {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query SearchRepositories($query: String!, $first: Int) {\n    search(query: $query, type: REPOSITORY, first: $first) {\n      edges {\n        node {\n          ... on Repository {\n            id\n            name\n            description\n            url\n            isPrivate\n            isTemplate\n            languages(first: 1) {\n              nodes {\n                id\n                name\n                color\n              }\n            }\n            stargazers {\n              totalCount\n            }\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchUsers($query: String!, $first: Int) {\n    search(query: $query, type: USER, first: $first) {\n      edges {\n        node {\n          ... on User {\n            id\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query SearchUsers($query: String!, $first: Int) {\n    search(query: $query, type: USER, first: $first) {\n      edges {\n        node {\n          ... on User {\n            id\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
