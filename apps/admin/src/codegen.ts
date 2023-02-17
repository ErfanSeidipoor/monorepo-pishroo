import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env["NX_BACK_URL"] + "/graphql",
  documents: ["apps/admin/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "apps/admin/src/app/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
