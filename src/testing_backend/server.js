import express from "express";
import { postgraphile } from "postgraphile";
import dotenv from "dotenv/config";
import cors from "cors";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import PostGraphileNestedMutations from "postgraphile-plugin-nested-mutations";
import PgAggregatesPlugin from "@graphile/pg-aggregates";
const app = express();
const { SUPABASE_URL, SCHEMA, S_PORT } = process.env;
app.use(express.json());
app.use("*", cors());
app.use(
  postgraphile(SUPABASE_URL, "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    simpleCollections: "both",
    appendPlugins: [
      ConnectionFilterPlugin,
      PgSimplifyInflectorPlugin,
      PostGraphileNestedMutations,
      PgAggregatesPlugin.default,
    ],
    graphileBuildOptions: {
      pgOmitListSuffix: true,
      pgShortPk: true,
      connectionFilterUseListInflectors: true,
      connectionFilterRelations: true,
      connectionFilterLogicalOperators: true,
      connectionFilterAllowEmptyObjectInput: true,
      nestedMutationsSimpleFieldNames: true,
    },
  })
);

app.listen(S_PORT || 3001, () => {
  console.log("connected");
});
