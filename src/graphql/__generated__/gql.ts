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
  '\n  query GetPinnedItems($first: Int!) {\n    viewer {\n      pinnedItems(first: $first) {\n        edges {\n          node {\n            ... on Repository {\n              name\n              description\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetPinnedItemsDocument,
  '\n  query SearchUsers($query: String!, $type: SearchType!, $first: Int) {\n    search(query: $query, type: $type, first: $first) {\n      edges {\n        node {\n          ... on User {\n            avatarUrl\n            login\n          }\n        }\n      }\n    }\n  }\n':
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
  source: '\n  query GetPinnedItems($first: Int!) {\n    viewer {\n      pinnedItems(first: $first) {\n        edges {\n          node {\n            ... on Repository {\n              name\n              description\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetPinnedItems($first: Int!) {\n    viewer {\n      pinnedItems(first: $first) {\n        edges {\n          node {\n            ... on Repository {\n              name\n              description\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query SearchUsers($query: String!, $type: SearchType!, $first: Int) {\n    search(query: $query, type: $type, first: $first) {\n      edges {\n        node {\n          ... on User {\n            avatarUrl\n            login\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query SearchUsers($query: String!, $type: SearchType!, $first: Int) {\n    search(query: $query, type: $type, first: $first) {\n      edges {\n        node {\n          ... on User {\n            avatarUrl\n            login\n          }\n        }\n      }\n    }\n  }\n']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
