import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "app/generated/": {
      preset: "client",
      plugins: ["typescript-rtk-query"],
    },
  },
};

export default config;
