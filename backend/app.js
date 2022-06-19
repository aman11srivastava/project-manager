const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: "backend/config/config.env" });
}
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

module.exports = app;
