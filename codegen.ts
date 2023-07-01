import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'github-schema.json',
  documents: ['src/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    },
  },
}

export default config
