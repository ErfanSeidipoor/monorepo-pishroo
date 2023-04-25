import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env["NX_BACK_URL"] + "/graphql",
  documents: ["apps/app/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "apps/app/src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
